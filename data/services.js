export const services = [
  {
    id: "backend-api",
    num: "01",
    title: "Backend API Development",
    description:
      "REST APIs built with Java and Spring Boot. Designed for correctness first, performance second, maintainability always.",
    href: "/services/backend-api",
    icon: "⚙️",
    features: [
      "REST API design and implementation",
      "Spring Boot microservices",
      "MySQL / PostgreSQL schema design",
      "Authentication (JWT, OAuth2)",
      "API documentation (Swagger/OpenAPI)",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Docker", "Git"],
  },
  {
    id: "data-analysis",
    num: "02",
    title: "Data Analysis & Pipelines",
    description:
      "Turn raw operational data into structured insights. ETL scripts, SQL analysis, and dashboards that answer real business questions.",
    href: "/services/data-analysis",
    icon: "📊",
    features: [
      "SQL query design and optimization",
      "Python ETL pipeline development",
      "Data cleaning and normalization",
      "Dashboard and visualization setup",
      "Reporting automation",
    ],
    technologies: ["Python", "Pandas", "SQL", "MySQL", "Recharts"],
  },
  {
    id: "system-design",
    num: "03",
    title: "System Design Consulting",
    description:
      "Architecture review and design for data-intensive backend systems. Database modeling, API contracts, and scalability planning.",
    href: "/services/system-design",
    icon: "🏗️",
    features: [
      "Database schema design",
      "API contract definition",
      "Backend layer architecture",
      "Performance review",
      "Documentation",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "OpenAPI"],
  },
  {
    id: "web-development",
    num: "04",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications where the backend is the product. Frontend included when the API needs a face.",
    href: "/services/web-development",
    icon: "💻",
    features: [
      "Full-stack Next.js applications",
      "API-first development",
      "Database integration",
      "Deployment and CI/CD",
      "Performance optimization",
    ],
    technologies: ["Next.js", "React", "Tailwind", "Supabase", "Vercel"],
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);
export const getAllServiceIds = () => services.map((s) => s.id);