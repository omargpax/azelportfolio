"use client";
import { useEffect, useRef } from "react";

// Canvas-based falling snow with accumulation (piled snow at bottom)
const ChristmasBg = () => {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let dpr = window.devicePixelRatio || 1;
        let width = 0;
        let height = 0;

        const segment = 4; // width (px) per pile column
        let pile = new Float32Array(0);

        const FLAKE_COUNT = 220;
        const flakes = [];

        function resize() {
            dpr = window.devicePixelRatio || 1;
            width = Math.max(300, window.innerWidth);
            height = Math.max(200, window.innerHeight);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const cols = Math.ceil(width / segment);
            const newPile = new Float32Array(cols);
            // copy existing pile carefully if sizes changed
            for (let i = 0; i < Math.min(newPile.length, pile.length); i++) {
                newPile[i] = pile[i];
            }
            pile = newPile;
        }

        function initFlakes() {
            flakes.length = 0;
            for (let i = 0; i < FLAKE_COUNT; i++) {
                flakes.push({
                    x: Math.random() * width,
                    y: Math.random() * -height,
                    r: Math.random() * 3 + 0.8,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: Math.random() * 0.9 + 0.4,
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: Math.random() * 0.02 + 0.005,
                });
            }
        }

        function settleFlake(flake) {
            const col = Math.max(0, Math.min(pile.length - 1, Math.floor(flake.x / segment)));
            const spread = 2; // how many neighbor columns receive mass
            const mass = Math.max(0.6, flake.r * 0.8);
            for (let i = col - spread; i <= col + spread; i++) {
                if (i < 0 || i >= pile.length) continue;
                const dist = Math.abs(i - col);
                const w = Math.max(0, 1 - dist / (spread + 0.5));
                pile[i] += mass * w;
            }
            // gently clamp pile height so it doesn't fill whole screen
            const maxPile = height * 0.8;
            for (let i = 0; i < pile.length; i++) if (pile[i] > maxPile) pile[i] = maxPile;

            // respawn flake at top
            flake.x = Math.random() * width;
            flake.y = -10 - Math.random() * 60;
            flake.vx = (Math.random() - 0.5) * 0.6;
            flake.vy = Math.random() * 0.9 + 0.4;
            flake.r = Math.random() * 3 + 0.8;
            flake.wobble = Math.random() * Math.PI * 2;
        }

        function update() {
            ctx.clearRect(0, 0, width, height);

            // optional subtle dark gradient for background
            const g = ctx.createLinearGradient(0, 0, 0, height);
            g.addColorStop(0, 'rgba(15,23,42,0)');
            g.addColorStop(1, 'rgba(15,23,42,0.35)');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, width, height);

            // update and draw flakes
            ctx.fillStyle = 'white';
            for (let i = 0; i < flakes.length; i++) {
                const f = flakes[i];
                f.wobble += f.wobbleSpeed;
                f.x += f.vx + Math.sin(f.wobble) * 0.6;
                f.y += f.vy;

                // wrap horizontally
                if (f.x < -10) f.x = width + 10;
                if (f.x > width + 10) f.x = -10;

                const col = Math.max(0, Math.min(pile.length - 1, Math.floor(f.x / segment)));
                const groundY = height - pile[col];
                if (f.y + f.r >= groundY) {
                    settleFlake(f);
                    continue;
                }

                ctx.beginPath();
                ctx.globalAlpha = Math.min(1, 0.55 + f.r / 8);
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }

            // draw pile as a filled polygon
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.moveTo(0, height);
            for (let i = 0; i < pile.length; i++) {
                const x = i * segment + segment / 2;
                const y = height - pile[i];
                ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.closePath();
            ctx.fill();

            // simple smoothing to make the pile look nicer
            const smoothFactor = 0.15;
            for (let i = 1; i < pile.length - 1; i++) {
                const v = pile[i];
                const avg = (pile[i - 1] + pile[i + 1]) * 0.5;
                pile[i] = v * (1 - smoothFactor) + avg * smoothFactor;
            }

            rafRef.current = requestAnimationFrame(update);
        }

        // init
        resize();
        initFlakes();
        rafRef.current = requestAnimationFrame(update);

        window.addEventListener('resize', resize);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default ChristmasBg;