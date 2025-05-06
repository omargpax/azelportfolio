"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';
import { projects } from "@/data/projects"

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <Head>
        <link rel="preload" href={projects[0].image} as="image" />
      </Head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: .4, duration: .4, ease: "easeIn" },
        }}
        className="min-h-[67vh] flex flex-col justify-center xl:px-0 font-jetbrains px-4 md:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* project number */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-500 transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                {/* description */}
                <p className="text-white/60">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-cyan-500">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}{" "}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                  {/* live preview */}
                  {project.live && (<Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-cyan-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>)}
                  {/* github repo */}
                  {project.github && (<Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-cyan-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>)}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12 rounded-xl overflow-hidden"
                onSlideChange={handSlideChange}
                lazy={{
                  loadPrevNext: true, // load prev>next slides images
                  loadPrevNextAmount: 1, // how many slides to load
                  loadOnTransitionStart: true // load images during transition
                }}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[360px] md:h-[460px] relative group flex justify-center items-center">
                        {/* overlay */}
                        <div></div>
                        {/* img */}
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Work;
