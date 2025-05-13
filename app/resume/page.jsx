"use client";

//components
import {
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  Tooltip,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { skills, experience, education } from "@/data/resume";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 sm:py-0 font-jetbrains px-6 md:px-0"
    >
      <div className="container mx-auto">
        {/* experience */}
        <div className="px-4 flex flex-col gap-[20px] text-center sm:text-left mt-0">
          <h3 className="text-2xl font-bold">{experience.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto sm:mx-0">{experience.description}</p>
          <ScrollArea className="h-fit max-h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              {experience.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                  >
                    <span className="text-cyan-500 font-semibold">
                      {item.duration}
                    </span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                      {item.position}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-cyan-500"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>

        {/* education */}
        <div className="px-4 flex flex-col gap-[20px] text-center sm:text-left mt-14">
          <h3 className="text-2xl font-bold">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto sm:mx-0"> {education.description}</p>
          <ScrollArea className="h-fit max-h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              {education.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="relative bg-gray-900 h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                  >
                    <span className="text-cyan-500 font-semibold">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-cyan-500"></span>
                      <p className="text-white/60">{item.institution}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>

        {/* skills */}
        <div className="px-4 flex flex-col gap-[30px] mt-14 mb-16">
          <div className="flex flex-col gap-[30px] text-center sm:text-left">
            <h3 className="text-2xl font-bold">{skills.title}</h3>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-4">
            {skills.skillList.map((skill, index) => {
              return (
                <li key={index}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-gray-900 rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-cyan-500 transition-all duration-300">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
