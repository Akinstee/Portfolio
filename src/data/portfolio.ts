export const personal = {
  name: "Akintunde Temitayo",
  title: "Full-Stack Developer",
  subtitle: "PHP/Laravel · Next.js · WordPress",
  email: "akinstemi123@gmail.com",
  phone: "+234 814 958 1154",
  location: "Lagos, Nigeria",
  github: "https://github.com/Akinstee",
  summary:
    "Passionate and self-driven full-stack developer with 4+ years of hands-on experience building real, production-grade web applications for clients across Nigeria. Proficient across the full development stack — from HTML, CSS, and JavaScript on the frontend through to PHP, Laravel, and MySQL on the backend — with additional experience in Next.js, TypeScript, and WordPress. Currently building two active projects (a logistics platform and an HR management system) that demonstrate the ability to architect, build, and ship complete systems independently.",
};

export const skills: Record<string, string[]> = {
  Frontend: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui", "jQuery"],
  Backend: ["PHP 8.x", "Laravel", "Eloquent ORM", "REST API", "Laravel Sanctum", "MVC Architecture", "Service Layer"],
  Database: ["MySQL", "SQL", "Schema Design", "Query Optimisation", "Eloquent ORM"],
  "CMS & E-commerce": ["WordPress", "WooCommerce", "Custom Theme Dev", "Custom Plugin Dev", "Page Builders"],
  "Dev Tools": ["Git", "GitHub", "VS Code", "Postman", "npm", "Composer", "Jira", "Trello", "Slack"],
  "Server & Deploy": ["Linux Admin", "WHM/cPanel", "Nginx", "Apache", "DNS", "SSL", "Cloud Deploy"],
};

export const experience = [
  {
    role: "Full-Stack Developer / Technical Support",
    company: "Qservers Network Limited",
    period: "Apr 2021 – Present",
    location: "Ikeja, Lagos",
    current: true,
    bullets: [
      "Built, maintained, and optimised client-facing web applications across HTML, CSS, JavaScript, PHP, and MySQL — ensuring responsive design, cross-browser compatibility, and reliable production performance.",
      "Collaborated with clients and internal teams to gather requirements, communicate progress, and deliver solutions on schedule — developing strong remote communication and project management discipline.",
      "Supported and debugged live client websites, diagnosing frontend layout issues, PHP errors, and database connectivity problems under production pressure with minimal downtime.",
      "Automated system monitoring using Python and PowerShell scripts — delivering technical work autonomously without direct supervision.",
      "Maintained version-controlled internal projects using Git, managing branching, merging, and resolving conflicts across collaborative workflows.",
    ],
  },
  {
    role: "PHP & Laravel Developer",
    company: "Techwithdee Ltd.",
    period: "Jul 2020 – Apr 2021",
    location: "Ogba, Ikeja, Lagos",
    current: false,
    bullets: [
      "Built 8+ production websites from scratch using HTML5, CSS3, JavaScript, PHP, and Laravel — delivering pixel-accurate, responsive interfaces matching client design briefs.",
      "Developed and integrated REST API endpoints using Laravel, connecting backend services to frontend interfaces and enabling dynamic data rendering across client platforms.",
      "Implemented WooCommerce e-commerce solutions for 4+ clients — including product catalogues, payment gateway integration, and cart functionality.",
      "Participated in code reviews and technical discussions, contributing to team delivery standards in a fast-paced agency environment.",
      "Completed full website redesigns using modern CSS frameworks and JavaScript, improving performance scores and mobile responsiveness.",
    ],
  },
];

export type ProjectCategory = "all" | "fullstack" | "backend" | "wordpress";

export const projects = [
  {
    title: "Dux-Shipping",
    description:
      "Full-stack logistics & courier platform with shipment tracking, courier booking, and management features. Laravel backend with RESTful API, Eloquent ORM, and Sanctum authentication. Next.js frontend in active development.",
    tags: ["PHP", "Laravel", "Blade", "MySQL", "REST API", "Next.js", "Sanctum"],
    github: "https://github.com/Akinstee/Dux-Shiping",
    live: null,
    status: "Backend Live",
    category: "fullstack" as ProjectCategory,
    featured: true,
  },
  {
    title: "Max-HR",
    description:
      "Solo-built full-stack HR management system with employee records, onboarding workflows, attendance tracking, leave management, and payroll. Next.js + shadcn/ui frontend connecting to a Laravel REST API.",
    tags: ["Next.js", "TypeScript", "Laravel API", "MySQL", "shadcn/ui"],
    github: "https://github.com/Akinstee/Max-HR",
    live: null,
    status: "Freelance Build",
    category: "fullstack" as ProjectCategory,
    featured: true,
  },
  {
    title: "Laravel Wallet API",
    description:
      "Fintech REST API with wallet funding, peer-to-peer transfers using atomic transactions, and paginated transaction history. Demonstrates clean API design, service layer pattern, and secure backend architecture.",
    tags: ["Laravel 10", "MySQL", "Sanctum", "REST API", "Fintech", "Atomic Transactions"],
    github: "https://github.com/Akinstee/laravel-wallet-api",
    live: null,
    status: "Portfolio",
    category: "backend" as ProjectCategory,
    featured: true,
  },
  {
    title: "Grinlit Solutions",
    description:
      "Custom WordPress website for a Nigerian business client — bespoke theme development, plugin configuration, WooCommerce setup, performance tuning, and SEO optimisation.",
    tags: ["WordPress", "PHP", "WooCommerce", "HTML/CSS", "SEO"],
    github: null,
    live: "https://grinlitsolutions.com",
    status: "Live",
    category: "wordpress" as ProjectCategory,
    featured: false,
  },
  {
    title: "Jaytribe Enterprise",
    description:
      "Production WordPress site with WooCommerce setup, custom theme development, payment integration, and responsive design optimised for Nigerian market clientele.",
    tags: ["WordPress", "WooCommerce", "PHP", "SEO"],
    github: null,
    live: "https://jaytribeenterprise.com",
    status: "Live",
    category: "wordpress" as ProjectCategory,
    featured: false,
  },
  {
    title: "Etsojubani Rega Global Ventures",
    description:
      "Corporate WordPress site with custom plugin configuration, page builder integration, and performance-tuned frontend for a global ventures company.",
    tags: ["WordPress", "PHP", "HTML/CSS/JS", "Page Builder"],
    github: null,
    live: "https://etsojubaniregalglobalventures.com",
    status: "Live",
    category: "wordpress" as ProjectCategory,
    featured: false,
  },
];

export const education = [
  {
    degree: "MSc Zoology (Ecology)",
    institution: "Lagos State University (LASU)",
    period: "In Progress · Expected 2026",
    note: "Open to PhD Scholarship",
    highlight: true,
  },
  {
    degree: "B.Sc. (Ed.) Biology Education",
    institution: "University of Ilorin, Kwara State",
    period: "2014 – 2019",
    note: "Second Class Lower",
    highlight: false,
  },
  {
    degree: "National Diploma — Pharmaceutical Technology",
    institution: "Moshood Abiola Polytechnic, Ogun State",
    period: "2012 – 2014",
    note: "Second Class Lower",
    highlight: false,
  },
];

export const certifications = [
  { name: "The Complete Web Developer Course 2.0", issuer: "Udemy", year: "2021", icon: "🎓" },
  { name: "Fundamentals of Digital Marketing", issuer: "Google", year: "2022", icon: "🎯" },
  { name: "cPanel and WHM Proficiency", issuer: "cPanel Inc.", year: "2022", icon: "🖥️" },
  { name: "Health, Safety and Environment (HSE)", issuer: "HSE Council", year: "2021", icon: "🛡️" },
];

export const affiliations = [
  { name: "Nigeria Internet Registration Association (NiRA)", icon: "🇳🇬" },
  { name: "Lagos R Studio Users Society", icon: "📊" },
  { name: "Teacher Registration Council of Nigeria (TRCN)", icon: "📚" },
];

export const kpis = [
  { label: "Projects Shipped", value: "15+", delta: "+3 this year", trend: "up" as const },
  { label: "Years Experience", value: "4+", delta: "Since 2020", trend: "up" as const },
  { label: "WordPress Sites", value: "8+", delta: "Production live", trend: "up" as const },
  { label: "Client Satisfaction", value: "98%", delta: "Avg. feedback score", trend: "up" as const },
];

export const skillProficiency = [
  { name: "PHP / Laravel", pct: 92, color: "from-cyan-400 to-violet-500" },
  { name: "WordPress / WooCommerce", pct: 90, color: "from-green-400 to-cyan-400" },
  { name: "MySQL / SQL", pct: 85, color: "from-violet-400 to-orange-400" },
  { name: "React / Next.js", pct: 80, color: "from-orange-400 to-cyan-400" },
  { name: "Linux / Server Admin", pct: 78, color: "from-cyan-400 to-green-400" },
  { name: "TypeScript", pct: 72, color: "from-violet-400 to-cyan-400" },
];

export const sqlMockData = [
  { title: "Max-HR", category: "fullstack", status: "Freelance Build", year: 2024 },
  { title: "Dux-Shipping", category: "fullstack", status: "Backend Live", year: 2024 },
  { title: "Laravel Wallet API", category: "backend", status: "Portfolio", year: 2023 },
  { title: "Grinlit Solutions", category: "wordpress", status: "Live", year: 2023 },
  { title: "Jaytribe Enterprise", category: "wordpress", status: "Live", year: 2022 },
  { title: "Etsojubani Rega Global", category: "wordpress", status: "Live", year: 2022 },
];
