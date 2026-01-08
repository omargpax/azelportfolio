"use client";

import { useEffect, useRef } from "react";

// Canvas-based neural-network-like background animation
export default function LinesBackground() {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const morphTimerRef = useRef(null);
    const scheduleRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let width = canvas.clientWidth;
        let height = canvas.clientHeight;
        const dpr = Math.max(1, window.devicePixelRatio || 1);
        function resizeCanvas() {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resizeCanvas();

        // particle count adaptive by viewport
        let PARTICLE_COUNT = 300;
        if (width < 700) PARTICLE_COUNT = 120;
        else if (width < 1100) PARTICLE_COUNT = 200;

        const CONNECT_THRESHOLD = 120;
        const LETTER_MORPH_INTERVAL = 30000; // 30s
        const MORPH_DURATION = 3000; // particles move to form text
        const HOLD_DURATION = 3000; // hold formation

        const particles = [];
        const tempCanvas = document.createElement("canvas");

        function rand(a, b) {
            return a + Math.random() * (b - a);
        }

        function initParticles() {
            particles.length = 0;
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const p = {
                    x: rand(0, width),
                    y: rand(0, height),
                    vx: rand(-0.2, 0.2),
                    vy: rand(-0.2, 0.2),
                    tx: rand(0, width),
                    ty: rand(0, height),
                    speed: rand(0.002, 0.01),
                    size: 1,
                };
                particles.push(p);
            }
        }

        function sampleTextPixels(text) {
            const off = tempCanvas.getContext("2d");
            const w = Math.floor(width * 0.8);
            const h = Math.floor(Math.min(height * 0.5, w * 0.3));
            tempCanvas.width = w;
            tempCanvas.height = h;
            off.clearRect(0, 0, w, h);
            const fontSize = Math.floor(h * 0.9);
            off.fillStyle = "white";
            off.font = `700 ${fontSize}px sans-serif`;
            off.textAlign = "center";
            off.textBaseline = "middle";
            off.fillText(text, w / 2, h / 2 + fontSize * 0.05);

            const img = off.getImageData(0, 0, w, h).data;
            const points = [];
            const step = 6; // sampling step — adjust density
            for (let y = 0; y < h; y += step) {
                for (let x = 0; x < w; x += step) {
                    const idx = (y * w + x) * 4;
                    if (img[idx + 3] > 128) {
                        const cx = (width - w) / 2 + x;
                        const cy = (height - h) / 2 + y;
                        points.push({ x: cx, y: cy });
                    }
                }
            }
            return points;
        }

        function assignMorphTargets(points) {
            const N = Math.min(points.length, particles.length);
            for (let i = points.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [points[i], points[j]] = [points[j], points[i]];
            }
            for (let i = 0; i < N; i++) {
                const p = particles[i];
                p.tx = points[i].x;
                p.ty = points[i].y;
                p.morph = true;
                p.morphStart = performance.now();
            }
            for (let i = N; i < particles.length; i++) {
                const p = particles[i];
                p.tx = rand(0, width);
                p.ty = rand(0, height);
                p.morph = false;
            }
        }

        let morphing = false;
        function startMorph() {
            const points = sampleTextPixels("OMAR");
            if (!points.length) return;
            assignMorphTargets(points);
            morphing = true;
            if (morphTimerRef.current) clearTimeout(morphTimerRef.current);
            morphTimerRef.current = setTimeout(() => {
                particles.forEach((p) => {
                    p.tx = rand(0, width);
                    p.ty = rand(0, height);
                    p.morph = false;
                });
                morphing = false;
            }, MORPH_DURATION + HOLD_DURATION);
        }

        function scheduleMorphLoop() {
            scheduleRef.current = setInterval(() => {
                startMorph();
            }, LETTER_MORPH_INTERVAL);
            setTimeout(startMorph, 2000);
        }

        initParticles();
        scheduleMorphLoop();

        let last = performance.now();
        function draw(now) {
            const dt = (now - last) / 1000;
            last = now;
            ctx.clearRect(0, 0, width, height);

            // Use the parent element background (tailwind `bg-gray-950`) when available
            const parentBg = canvas.parentElement
                ? getComputedStyle(canvas.parentElement).backgroundColor
                : null;
            ctx.fillStyle = parentBg && parentBg !== "rgba(0, 0, 0, 0)" ? parentBg : "rgba(6,8,12,1)";
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const dx = p.tx - p.x;
                const dy = p.ty - p.y;
                const k = p.morph ? 0.06 : 0.01;
                p.vx += dx * k * dt;
                p.vy += dy * k * dt;
                p.vx *= 0.92;
                p.vy *= 0.92;
                p.vx += (Math.random() - 0.5) * 0.02;
                p.vy += (Math.random() - 0.5) * 0.02;
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -20) p.x = width + 20;
                if (p.x > width + 20) p.x = -20;
                if (p.y < -20) p.y = height + 20;
                if (p.y > height + 20) p.y = -20;
            }

            ctx.lineWidth = 1;
            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = b.x - a.x;
                    const dy = b.y - a.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < CONNECT_THRESHOLD) {
                        const alpha = (1 - dist / CONNECT_THRESHOLD) * 0.18;
                        ctx.strokeStyle = `rgba(34,211,238,${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const rad = p.morph ? 2.2 : 1.2;
                const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad * 6);
                glow.addColorStop(0, "rgba(34,211,238,0.14)");
                glow.addColorStop(1, "rgba(34,211,238,0)");
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(p.x, p.y, rad * 4, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = "rgba(6,182,212,0.95)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(draw);
        }

        rafRef.current = requestAnimationFrame(draw);

        function onResize() {
            resizeCanvas();
            initParticles();
        }
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (morphTimerRef.current) clearTimeout(morphTimerRef.current);
            if (scheduleRef.current) clearInterval(scheduleRef.current);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed h-full w-full inset-0 -z-10 bg-gray-950">
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
}