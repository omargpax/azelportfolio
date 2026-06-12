"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[70vh] flex flex-col justify-center font-jetbrains px-4 md:px-2 py-8"
      >
        <div className="container mx-auto mb-12">
          <div className="flex flex-col xl:flex-row xl:gap-[50px] items-start">
            
            {/* INFO COLUMN - ALTURA FIJA EN DESKTOP */}
            <div className="w-full xl:w-[50%] xl:h-[520px] xl:overflow-y-auto flex flex-col gap-5 order-2 xl:order-none bg-white/[0.01] border border-white/20 p-6 md:p-8 rounded-2xl backdrop-blur-sm scrollbar-thin scrollbar-thumb-white/10">
              
              {/* Row 1: Category Tag & Number */}
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
                  {project.category}
                </span>
                <div className="font-mono font-extrabold leading-none text-transparent text-4xl text-outline">
                  {project.num}
                </div>
              </div>

              {/* Row 2: Title */}
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white tracking-tight">
                {project.title}
              </h2>

              <div className="border-b border-white/10 w-full"></div>

              {/* Row 3: Problem → Solution */}
              <div className="flex flex-col gap-3 text-sm leading-relaxed">
                <p className="text-white/50">
                  <span className="text-red-400/80 font-mono font-semibold uppercase text-xs block mb-0.5">✕ Problem</span> 
                  {project.problem}
                </p>
                <p className="text-white/85">
                  <span className="text-emerald-400 font-mono font-semibold uppercase text-xs block mb-0.5">✓ Solution</span> 
                  {project.solution}
                </p>
              </div>

              <div className="border-b border-white/10 w-full"></div>

              {/* Row 4: Data Layer */}
              {/** 
               * <div className="text-sm leading-relaxed">
                <span className="text-purple-400 font-mono font-semibold uppercase text-xs block mb-1">
                  📊 Data Layer Architecture
                </span>
                <p className="text-white/70 italic">
                  "{project.dataAngle}"
                </p>
              </div>
               * <div className="border-b border-white/10 w-full"></div>
              */}

              

              {/* Row 5: Backend Stacks vs Data Stacks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex flex-col gap-2">
                  <span className="text-cyan-400 font-bold tracking-wide">// BACKEND</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stackBackend.map((tag, i) => (
                      <span key={i} className="bg-white/5 border border-white/5 text-white/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-purple-400 font-bold tracking-wide">// DATA LAYER</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stackData.map((tag, i) => (
                      <span key={i} className="bg-white/5 border border-white/5 text-white/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-b border-white/10 w-full"></div>

              {/* Row 6: Metric / Impact */}
              <div className="flex items-start gap-3 text-sm text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-xl">
                <span className="text-base mt-0.5">📊</span>
                <p className="leading-relaxed">
                  <span className="font-bold font-mono text-xs uppercase tracking-wider block mb-0.5">Metrics & Impact:</span>
                  <span className="text-white/80">{project.metrics}</span>
                </p>
              </div>

              {/* Row 7: Action Buttons */}
              <div className="flex items-center gap-4 mt-2">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[45px] h-[45px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group transition-colors hover:border-cyan-500">
                          <BsArrowUpRight className="text-xl text-white group-hover:text-cyan-500 transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[45px] h-[45px] rounded-full bg-white/5 border border-white/10 flex justify-center items-center group transition-colors hover:border-cyan-500">
                          <BsGithub className="text-xl text-white group-hover:text-cyan-500 transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>

            </div>

            {/* IMAGE CAROUSEL COLUMN CON BOTONES DE NAVEGACIÓN OVERLAY */}
            <div className="w-full xl:w-[50%] relative group/carousel">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12 rounded-xl overflow-hidden"
                onSwiper={setSwiperInstance}
                onSlideChange={handSlideChange}
                lazy={{
                  loadPrevNext: true,
                  loadPrevNextAmount: 1,
                  loadOnTransitionStart: true
                }}
              >
                {projects.map((proj, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[300px] md:h-[460px] xl:h-[520px] relative flex justify-center items-center">
                        <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5">
                          <Image
                            src={proj.image}
                            fill
                            className="object-cover"
                            alt={proj.title}
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Botón Izquierdo (Condicional si hay un proyecto previo) */}
              {activeIndex > 0 && (
                <button
                  onClick={() => swiperInstance?.slidePrev()}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex justify-center items-center backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Previous project"
                >
                  <BsChevronLeft className="text-xl" />
                </button>
              )}

              {/* Botón Derecho (Condicional si hay un proyecto siguiente) */}
              {activeIndex < projects.length - 1 && (
                <button
                  onClick={() => swiperInstance?.slideNext()}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex justify-center items-center backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Next project"
                >
                  <BsChevronRight className="text-xl" />
                </button>
              )}
            </div>

          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Work;