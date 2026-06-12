export const projects = [
  {
    num: "01",
    category: "Backend · API REST",
    title: "BSA — Backend Architecture Generator",
    problem:
      "Development teams wasted hours debating Spring Boot project structure with no standard baseline.",
    solution:
      "Web tool that generates custom Spring Boot architectures from system requirements, producing ready-to-use folder structure and configuration.",
    dataAngle:
      "Analyzed 50+ open-source Spring Boot repos to extract the most adopted structural conventions by project type.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "GPT-4o" },
      { name: "Tailwind" },
    ],
    stackBackend: ["Next.js API Routes", "TypeScript", "OpenAI API"],
    stackData: ["Pattern analysis", "Config templating"],
    metrics: "Used across 3 countries. Reduces setup time from hours to minutes.",
    image: "/assets/work/bsa.png",
    live: "https://bootstrap-sandbox-architecture.pages.dev/",
    github: "https://github.com/citseOfficial/bootstrap-sandbox-architecture",
  },
  {
    num: "02",
    category: "Data · ETL & Dashboard",
    title: "iDash — Interactive Data Dashboard",
    problem:
      "Decision-makers were reading raw CSV exports with no visual layer. Trend analysis required manual Excel work taking hours.",
    solution:
      "Interactive dashboard with Python ETL preprocessing and React visualizations enabling real-time filtering and exploration.",
    dataAngle:
      "Python scripts clean and normalize raw CSVs, compute aggregates, and feed a structured data layer. SQL queries handle the aggregation logic.",
    stack: [
      { name: "React" },
      { name: "Python" },
      { name: "Pandas" },
      { name: "Vite" },
    ],
    stackBackend: ["Python", "Vite", "REST integration"],
    stackData: ["Pandas", "CSV ETL", "SQL aggregations", "Recharts"],
    metrics:
      "Reduced report generation from 2+ hours of manual work to on-demand, sub-second queries.",
    image: "/assets/work/idash-cover.jpg",
    live: "https://dashboard.omargpax.dev",
    github: "https://github.com/omargpax/interactive-dashboard",
  },
  {
    num: "03",
    category: "Hybrid · API + Analytics",
    title: "Creator Badge — Dynamic Asset API",
    problem:
      "Content creators had no programmatic way to generate personalized badges that reflected custom branding or live stats.",
    solution:
      "Stateless REST API that accepts parameters and returns dynamically generated SVG badge assets — cacheable and deployable at the edge.",
    dataAngle:
      "Server-side parameter validation and usage logging. Request patterns analyzed to identify most-used configurations and drive feature priorities.",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Tailwind" },
      { name: "Open Source" },
    ],
    stackBackend: ["Next.js API", "Edge Functions", "SVG generation"],
    stackData: ["Request analytics", "Usage pattern analysis"],
    metrics: "Open source. Active usage across the developer community.",
    image: "/assets/work/creator-badge.png",
    live: "https://creator-badge.vercel.app",
    github: "https://github.com/omargpax/creator-badge",
  },
];