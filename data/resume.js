import { FaJava, FaJs, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiSpring, SiDotnet, SiApachekafka, 
         SiPostgresql, SiPandas, SiNextdotjs } from "react-icons/si";

export const experience = {
  title: "Work Experience",
  description:
    "Backend and data roles where I built systems and worked with real operational data.",
  items: [
    {
      company: "ADRA Perú",
      position: "Systems Analyst",
      duration: "2025 – Present",
      isCurrent: true,
      bullets: [
        "Maintain and extend operational systems supporting organizational workflows",
        "Analyze system data to identify process bottlenecks",
        "Translate operational requirements into backend technical solutions",
      ],
    },
    {
      company: "A&P S.A.C.",
      position: "Java Backend Developer",
      duration: "2023 · Part-time",
      isCurrent: false,
      bullets: [
        "Built REST API endpoints with Spring Boot for internal processes",
        "Designed MySQL schemas and optimized queries for operational data",
        "Implemented service-layer logic for data validation and transformation",
      ],
    },
    {
      company: "IATec",
      position: "Full Stack Developer Intern",
      duration: "2022 – 2023",
      isCurrent: false,
      bullets: [
        "Developed features across frontend and backend within the same sprint",
        "Worked with SQL databases in a production-adjacent environment",
        "Contributed to REST API integration between internal services",
      ],
    },
  ],
};

export const education = {
  title: "Education",
  description:
    "Formal training in systems engineering with focus on software and data.",
  items: [
    {
      institution: "Universidad Peruana Unión (UPeU)",
      degree: "Systems Engineer",
      duration: "2020 – 2024",
    },
  ],
};

export const skillGroups = [
  {
    group: "Backend Engineering",
    color: "cyan",
    skills: [
      { icon: <FaJava />, name: "Java", purpose: "Core language for backend services" },
      { icon: <SiSpring />, name: "Spring Boot", purpose: "REST APIs, security, microservices" },
      { icon: <SiDotnet />, name: ".NET / C#", purpose: "Secondary enterprise stack" },
      { icon: <FaJs />, name: "JavaScript", purpose: "API scripting and automation" },
    ],
  },
  {
    group: "Data Layer",
    color: "purple",
    skills: [
      { icon: <DiMysql />, name: "MySQL", purpose: "Schema design and query optimization" },
      { icon: <SiPostgresql />, name: "PostgreSQL", purpose: "Relational data at scale" },
      { icon: <FaPython />, name: "Python", purpose: "Data processing and ETL scripts" },
      { icon: <SiPandas />, name: "Pandas", purpose: "Data transformation pipelines" },
    ],
  },
  {
    group: "Infrastructure & Tools",
    color: "gray",
    skills: [
      { icon: <FaGitAlt />, name: "Git", purpose: "Version control and code review" },
      { icon: <FaDocker />, name: "Docker", purpose: "Containerization and local parity" },
      { icon: <SiNextdotjs />, name: "Next.js", purpose: "When the API needs a frontend" },
    ],
  },
];

// Mantén esto para backward compat con resume/page.jsx
// mientras migras el componente
export const skills = {
  title: "Technical Skills",
  skillList: [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpring />, name: "Spring Boot" },
    { icon: <DiMysql />, name: "MySQL / SQL" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
  ],
};