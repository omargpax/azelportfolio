import { FaJava, FaFigma, FaJs } from "react-icons/fa";
import { DiMysql, DiIllustrator } from "react-icons/di";
import { SiNextdotjs, SiSpring, SiDotnet, SiSentry, SiAdobephotoshop } from "react-icons/si";

export const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Experience",
    description:
        "Full Stack developer, with knowledge of Java and C#, I excel in agile development and collaborative problem solving.",
    items: [
        {
            company: "ADRA PERÚ",
            position: "Analyst Developer",
            duration: "Full time / 2025 - present",
            isCurrent: true,
        },
        {
            company: "A&P S.A.C.",
            position: "Java Backend Developer",
            duration: "Part-time / 2023",
            isCurrent: false,
        },
        {
            company: "IATec",
            position: "Full Stack Developer intern",
            duration: "Part time / 2022 - 2023",
            isCurrent: false,
        },
    ],
};

export const education = {
    icon: "/assets/resume/cap.svg",
    title: "Education",
    description:
        "Regulated training and certifications that have allowed me to acquire the knowledge and skills necessary to develop software.",
    items: [
        {
            institution: "UPeU",
            degree: "Bach. Systems Engineering",
            duration: "2020 - 2024",
        },
    ],
};

export const skills = {
    title: "Skills",
    description:
        "In this section you will find the technology stack that I master and use to design and develop.",
    skillList: [
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <SiDotnet />,
            name: ".Net",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <DiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiSpring />,
            name: "Spring",
        },
        {
            icon: <SiSentry />,
            name: "Sentry",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <DiIllustrator />,
            name: "Illustrator",
        },
        {
            icon: <SiAdobephotoshop />,
            name: "Photoshop",
        },
    ],
};