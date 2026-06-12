"use client";

//components
import SkillGroup from "@/components/SkillGroup";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { skillGroups, experience, education } from "@/data/resume";

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
                    className={`relative border h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden transition-all duration-300 ${item.isCurrent ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-gray-500/50 bg-gray-500/5'}`}
                  >
                    {item.isCurrent && (
                      <span className="absolute top-4 right-4 bg-cyan-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                        Current
                      </span>
                    )}
                    <span className={`font-semibold ${item.isCurrent ? 'text-cyan-500' : 'text-gray-400'}`}>
                      {item.duration}
                    </span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                      {item.position}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className={`w-[6px] h-[6px] rounded-full ${item.isCurrent ? 'bg-cyan-500' : 'bg-gray-500'}`}></span>
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
                    className="relative bg-gray-500/5 border border-gray-500/50 h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
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
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold">Technical Skills</h3>
            <p className="text-white/60 max-w-[600px]">
              Grouped by domain — each tool used in a specific context,
              not just listed.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, i) => (
              <SkillGroup
                key={i}
                group={group.group}
                color={group.color}
                skills={group.skills}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Resume;
