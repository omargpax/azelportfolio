"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

function useIsDecember() {
  const [isDecember, setIsDecember] = useState(false);

  useEffect(() => {
    setIsDecember(new Date().getMonth() === 11);
  }, []);

  return isDecember;
}

const Home = () => {
  const isDecember = useIsDecember();

  const downloadBtnClasses = useMemo(() => {
    const base = "uppercase flex items-center gap-2 cursor-pointer";
    const dec = "border-green-700 text-green-700 hover:bg-green-800 hover:text-white";
    return `${base} ${isDecember ? dec : ""}`;
  }, [isDecember]);

  const socialIconClasses = useMemo(() => {
    const base = "w-9 h-9 border rounded-full flex justify-center items-center text-base hover:transition-all duration-500";
    const dec = "border-red-500 text-red-500 hover:bg-red-500 hover:text-white";
    const normal = "border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-gray-900";
    return `${base} ${isDecember ? dec : normal}`;
  }, [isDecember]);

  return (
    <section className="h-full px-6 md:px-4 z-0 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-15">

          {/* SUMMARY */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl animate-pulse">
              <span className="text-sm font-mono text-white/60 tracking-wide uppercase mb-2 block">
                Backend Developer · Data Engineer
              </span>
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-cyan-500">Omar Azel</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80 font-mono text-sm leading-relaxed">
              I build REST APIs and data pipelines using{" "}
              <span className="text-white/90">Java</span>,{" "}
              <span className="text-white/90">Spring Boot</span>,{" "}
              <span className="text-white/90">Python</span> and{" "}
              <span className="text-white/90">SQL</span>.
              I work at the layer where backend reliability
              and data insight meet.
            </p>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center xl:justify-start">
              {["Java", "Spring Boot", "MySQL", "Python", "Pandas", "REST APIs"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-white/5 border border-white/10 
                             rounded-full text-white/60 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/projects">
                <Button
                  variant="default"
                  size="lg"
                  className="uppercase flex items-center gap-2 
                             bg-cyan-600 text-gray-900 hover:bg-cyan-400 
                             cursor-pointer"
                >
                  View Projects
                </Button>
              </Link>

              <a
                href="/omargpax_cv_EN_.pdf"
                download
                className="cursor-pointer"
                aria-label="Download CV"
              >
                <Button variant="outline" size="lg" className={downloadBtnClasses}>
                  <span>Download CV</span>
                  <FiDownload className="text-xl" aria-hidden />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles={socialIconClasses} />
              </div>
            </div>
          </div>

          {/* PICTURE */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 relative">
            {/* 🎄 GORRO DE SANTA (Solo en Diciembre) */}
            {isDecember && (
              <img
                src="/assets/christmas-hat-png-15.png"
                alt="Sombrero de Navidad"
                className="absolute -top-5 -right-2 z-20 w-22 md:w-30 rotate-18 drop-shadow-lg"
              />
            )}

            <Photo />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="relative">
        <Stats />
      </div>
    </section>
  );
};

export default Home;