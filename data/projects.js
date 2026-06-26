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
    image: "/assets/work/iDash-cover.jpg",
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
  {
    num: "04",
    category: "Data · Client-Side ETL",
    title: "D-MO — Data Micro-Optimizer",
    problem:
      "Handling sensitive financial layouts required manual Excel cleanup or uploading banking files to third-party servers, posing critical privacy risks.",
    solution:
      "A client-side ETL tool designed to normalize, validate, and transform multi-format data files (.csv, .xlsx, .xlsb) instantly and securely right inside the browser.",
    dataAngle:
      "Built a modular processing engine using custom string-normalization and alias-mapping algorithms to automatically detect dynamic columns and handle layout discrepancies.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "SheetJS" },
    ],
    stackBackend: ["Client-Side Architecture", "TypeScript", "Next.js 14"],
    stackData: ["PapaParse", "SheetJS (xlsx)", "ETL Pipeline Engine", "Alias Mapping"],
    metrics: "Guarantees 100% data privacy via zero-server processing. Transforms complex layouts into clean, analytics-ready datasets in a single click.",
    image: "/assets/work/cover_dmo.png",
    live: "https://github.com/omargpax/D-MO",
    github: "https://github.com/omargpax/D-MO",
  },
  {
        num: "05",
        category: "Frontend · API Integration",
        title: "Kundu — Minimalist Search Engine",
        problem:
          "Users needed a lightweight, clutter-free media search interface without the heavy tracking, advertisements, or bloated UI of standard search platforms.",
        solution:
          "A fast, responsive web application that integrates directly with external media APIs to retrieve and display high-resolution visual content instantly.",
        dataAngle:
          "Implemented asynchronous workflows utilizing the Fetch API and modern JavaScript to securely parse, map, and render raw external JSON payloads on the fly.",
        stack: [
          { name: "JavaScript" },
          { name: "HTML5" },
          { name: "CSS3" },
        ],
        stackBackend: ["Vanilla JS", "External API Consumption", "Async/Await"],
        stackData: ["JSON Payload Parsing", "Dynamic DOM Manipulation"],
        metrics: "Achieved sub-second response times and seamless performance by eliminating external framework or library overhead.",
        image: "/assets/work/kundu-images.png",
        live: "https://kundu-images.pages.dev/",
        github: "https://github.com/omargpax/kundu-api",
    },
];