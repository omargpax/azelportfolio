import { FaJava, FaFigma, FaJs } from "react-icons/fa";
import { DiMysql, DiIllustrator } from "react-icons/di";
import { SiNextdotjs, SiSpring, SiDotnet } from "react-icons/si";

export const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
        "Full Stack developer, specialized in backend development. With knowledge of Java and C#, I excel in agile development and collaborative problem solving.",
    items: [
        {
            company: "A&P S.A.C.",
            position: "Java Backend Developer",
            duration: "6 months - 2023",
        },
        {
            company: "IATec",
            position: "Full Stack Developer intern",
            duration: "2022 - 2023",
        },
    ],
};

export const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description:
        "Systems Engineer recently graduated from Universidad Peruana Unión, with specialization in web development, backend and UI/UX design.",
    items: [
        {
            institution: "Universidad Peruana Unión (UPeU)",
            degree: "Bach. Systems Engineering",
            duration: "2020 - 2024",
        },
    ],
};

export const skills = {
    title: "My skills",
    description:
        "In this section, you will find a compilation of the technologies that demonstrate my ability to design and develop efficient, scalable and visually appealing web applications. ",
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
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <DiIllustrator />,
            name: "Illustrator",
        },
    ],
};