"use client";

import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const CategoryBadge = ({ category }) => {
  const colors = {
    "Backend": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "Data": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "Hybrid": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };
  const key = Object.keys(colors).find((k) => category.includes(k)) || "Backend";
  return (
    <span className={`text-xs px-3 py-1 rounded-full border font-mono ${colors[key]}`}>
      {category}
    </span>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 flex flex-col gap-4 
                    border border-white/5 hover:border-cyan-500/30 
                    transition-all duration-300 group">
      {/* Header */}
      <div className="flex justify-between items-start">
        <CategoryBadge category={project.category} />
        <span className="text-4xl font-extrabold text-outline 
                         text-transparent group-hover:text-white/10 
                         transition-all duration-500 font-jetbrains">
          {project.num}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 
                     transition-colors duration-300">
        {project.title}
      </h3>

      {/* Problem → Solution */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <span className="text-xs font-mono text-red-400/70 
                           uppercase tracking-wider mt-0.5 shrink-0">
            Problem
          </span>
          <p className="text-white/50 text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-xs font-mono text-cyan-400/70 
                           uppercase tracking-wider mt-0.5 shrink-0">
            Solution
          </span>
          <p className="text-white/70 text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Data angle */}
      {project.dataAngle && (
        <div className="bg-purple-500/5 border border-purple-500/10 
                        rounded-lg p-3">
          <p className="text-xs font-mono text-purple-400/80 
                        uppercase tracking-wider mb-1">
            Data layer
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            {project.dataAngle}
          </p>
        </div>
      )}

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((item, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-white/5 text-white/60 
                       rounded font-mono border border-white/10"
          >
            {item.name}
          </span>
        ))}
      </div>

      {/* Metrics */}
      {project.metrics && (
        <div className="flex items-start gap-2 pt-1 border-t border-white/5">
          <span className="text-cyan-500 text-sm">📊</span>
          <p className="text-white/50 text-sm italic">{project.metrics}</p>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 pt-1">
        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            className="flex items-center gap-1.5 text-sm text-white/60 
                       hover:text-cyan-400 transition-colors font-mono"
          >
            <BsArrowUpRight className="text-xs" />
            Live
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-1.5 text-sm text-white/60 
                       hover:text-cyan-400 transition-colors font-mono"
          >
            <BsGithub className="text-xs" />
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;