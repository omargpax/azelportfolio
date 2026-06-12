"use client";

import {
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  Tooltip,
} from "@/components/ui/tooltip";

const groupColors = {
  cyan: {
    header: "text-cyan-400",
    border: "border-cyan-500/20",
    dot: "bg-cyan-500",
    bg: "bg-cyan-500/5",
  },
  purple: {
    header: "text-purple-400",
    border: "border-purple-500/20",
    dot: "bg-purple-500",
    bg: "bg-purple-500/5",
  },
  gray: {
    header: "text-gray-400",
    border: "border-gray-500/20",
    dot: "bg-gray-500",
    bg: "bg-gray-500/5",
  },
};

const SkillGroup = ({ group, color = "cyan", skills }) => {
  const c = groupColors[color] || groupColors.cyan;

  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} p-5 flex flex-col gap-4`}>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${c.dot}`} />
        <h3 className={`font-bold font-jetbrains uppercase tracking-wider 
                        text-sm ${c.header}`}>
          {group}
        </h3>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {skills.map((skill, i) => (
          <TooltipProvider key={i}>
            <Tooltip>
              <TooltipTrigger asChild>
                <li className="flex items-center gap-3 p-3 bg-gray-900 
                               rounded-lg hover:bg-gray-800 transition-colors 
                               cursor-default group">
                  <span className={`text-2xl ${c.header} 
                                   group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </span>
                  <span className="text-white/80 text-sm font-medium font-jetbrains">
                    {skill.name}
                  </span>
                </li>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p className="text-xs max-w-[180px] text-center">
                  {skill.purpose}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;