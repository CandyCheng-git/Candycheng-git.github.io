/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: false
};

const greeting = {
  username: "Candy Cheng",
  title: "Hi, I'm Candy",
  subTitle: emoji(
    "Software Engineer | Backend, Database & Cloud Systems ☁️\nMelbourne-based. I build practical systems across web, APIs, SQL, cloud, and automation."
  ),
  resumeLink: "https://www.linkedin.com/in/lok-tung-c-hk/",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/candycheng-git",
  linkedin: "https://www.linkedin.com/in/lok-tung-c-hk/",
  gmail: "candycheng.it@gmail.com",
  kaggle: "https://www.kaggle.com/candychengkaggle",
  jsfiddle: "https://jsfiddle.net/u/candycheng_js/fiddles/",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Build",
  subTitle:
    "End-to-end systems: frontend, API, database, cloud deployment, data automation, and business reporting.",
  skills: [
    emoji("⚡ Build responsive web apps and dashboards with Angular, React, Vue.js, Laravel, Livewire, Tailwind CSS, and Umbraco CMS"),
    emoji("⚡ Design REST APIs, backend services, and SQL-driven business logic for enterprise workflows"),
    emoji("⚡ Optimise reporting, data validation, and automation using SQL, Python, and backend integrations"),
    emoji("⚡ Support cloud and deployment workflows using AWS, Azure, Docker, GitHub Actions, and CI/CD"),
    emoji("⚡ Verified project stack includes Angular 21, .NET 9 / ASP.NET Core Web API, React 18, Next.js 16, TypeScript 5.x, Node.js 20 CI, Express 4, PostgreSQL 15, Docker, xUnit, Vitest, Supertest, and Playwright"),
    emoji("⚡ Turn unclear business requirements into maintainable systems, documentation, tests, and working releases")
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "Tailwind CSS", fontAwesomeClassname: "fas fa-wind" },

    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },

    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel" },
    { skillName: "Livewire", fontAwesomeClassname: "fas fa-bolt" },

    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: ".NET / ASP.NET Core", fontAwesomeClassname: "fas fa-server" },

    { skillName: "SQL / Databases", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Umbraco CMS", fontAwesomeClassname: "fas fa-sitemap" },

    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "GitHub Actions / CI", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },

    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },

    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Kaplan Business School (Melbourne, AU)",
      logo: require("./assets/images/kaplanLogo.png"),
      subHeader: "Master of Information Technology (Analytics Specialisation)",
      duration: "Jul 2024 – Apr 2026",
      desc: "Focused on analytics, software delivery, cloud systems, and practical engineering.",
      descBullets: ["CGPA: 6.67 / 7.0", "Academic Excellence Award"]
    },
    {
      schoolName: "Staffordshire University (Hong Kong)",
      logo: require("./assets/images/staffordshireLogo.png"),
      subHeader: "Bachelor of Science with Honours in Computer Science",
      duration: "Completed Jun 2019",
      desc: "Completed while building professional software engineering experience.",
      descBullets: []
    },
    {
      schoolName: "CUHK School of Continuing and Professional Studies (Hong Kong)",
      logo: require("./assets/images/cuhkscopeLogo.png"),
      subHeader: "Higher Diploma in Network and Mobile Computing",
      duration: "Completed Mar 2015",
      desc: "Foundation in networking, mobile computing, systems, and programming.",
      descBullets: ["CGPA: 3.0 / 4.0"]
    }
  ]
};

// Top stacks / proficiency bars

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend & API Development", progressPercentage: "88%" },
    { Stack: "SQL / Database Systems", progressPercentage: "88%" },
    { Stack: "Full-Stack Web Development", progressPercentage: "85%" },
    { Stack: "Cloud & DevOps", progressPercentage: "75%" },
    { Stack: "Data Automation & Analytics", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  title: "Experience",
  subtitle:
    "6+ years building backend, database, cloud, and full-stack systems across Australia and Hong Kong.",
  display: true,
  experience: [
    {
      role: "Full-Stack Engineer",
      company: "Camfor",
      companylogo: require("./assets/images/camforLogo.png"),
      date: "Nov 2024 – Present\nMelbourne, Australia",
      desc:
        "Cloud-connected IoT monitoring platform for agriculture.",
      descBullets: [
        "Built Laravel, Livewire, Tailwind, and Docker dashboards for sensors, thresholds, alerts, and watering events",
        "Improved dashboard latency by ~25% through backend flow and Livewire rendering optimisation",
        "Reduced manual checks by ~30% with clearer telemetry and operational visibility"
      ]
    },
    {
      role: "Backend & Data Analytics Intern",
      company: "Star Promotional Products",
      companylogo: require("./assets/images/starpromoLogo.png"),
      date: "Jun 2025 – Sep 2025\nSydney, Remote",
      desc:
        "nopCommerce data operations, SEO automation, supplier validation, and Azure cost review.",
      descBullets: [
        "Automated SEO metadata for 10,000+ products, cutting manual workload by ~40%",
        "Resolved 200+ supplier/backend mismatches across pricing, decoration, and catalogue data",
        "Reviewed AUD 1,047/month Azure spend and proposed 10–15% savings"
      ]
    },
    {
      role: "Software Engineer",
      company: "KLN Logistics Group Limited",
      companylogo: require("./assets/images/kerryLogo.png"),
      date: "Jun 2019 – May 2024\nHong Kong",
      desc:
        "Enterprise HR, finance, CMS, and operational systems for 10,000+ users.",
      descBullets: [
        "Delivered REST APIs, SQL business logic, and web apps using C#/.NET, ASP.NET, React, Vue.js, MS SQL Server, and Oracle",
        "Supported Umbraco CMS workflows, permissions, UAT, attachment handling, and production releases",
        "Improved API and SQL performance by ~15% and database efficiency by ~20%"
      ]
    },
    {
      role: "Programmer",
      company: "Lik On Security Ltd",
      companylogo: require("./assets/images/likonLogo.png"),
      date: "Jun 2017 – Jun 2019\nHong Kong",
      desc:
        "Internal HRMS and administration systems with workflow automation and RBAC.",
      descBullets: [
        "Digitised HR incident workflows, reducing manual processing by ~30%",
        "Implemented RBAC and workflow rules to reduce unauthorised-access risk",
        "Enhanced ASP.NET portals, cutting repetitive HR admin by ~20–25%"
      ]
    },
    {
      role: "Technical Support Assistant",
      company: "Speedy Group",
      companylogo: require("./assets/images/SpeedyGroup.png"),
      date: "Aug 2015 – Jun 2017\nHong Kong",
      desc:
        "School IT support, server troubleshooting, and PHP workflow automation.",
      descBullets: [
        "Automated attendance and admin workflows, saving 100+ hours annually",
        "Supported Linux/Windows servers, troubleshooting, and system reliability"
      ]
    },
    {
      role: "Full-Stack Website Developer",
      company: "Self-Employed",
      companylogo: require("./assets/images/logo.png"),
      date: "Nov 2017 – Present\nMelbourne / Remote",
      desc:
        "Responsive, SEO-ready websites for small businesses.",
      descBullets: [
        "Delivered production-ready business websites with responsive layouts and SEO-aligned structure",
        "Built reusable page sections, reducing future update effort by ~30–40%"
      ]
    }
  ]
};

// Flagship professional work

const bigProjects = {
  title: "Flagship Work",
  subtitle:
    "Selected professional work with measurable delivery impact.",
  projects: [
    {
      image: require("./assets/images/camforLogo.png"),
      projectName: "Camfor — IoT Monitoring & Control Dashboard",
      projectDesc:
        "Built cloud-connected dashboards for an IoT auto-watering platform using Laravel, Livewire, Tailwind CSS, and Docker. Improved dashboard latency by about 25% and reduced manual data checks by an estimated 30% through clearer telemetry and operational visibility."
    },
    {
      image: require("./assets/images/project_edgekitchens.png"),
      projectName: "Edge Kitchens & Bathrooms — SEO & Lead-Generation Website",
      projectDesc:
        "Designed and delivered a responsive business website focused on clean UX, mobile usability, SEO foundations, structured content, galleries, and contact capture.",
      footerLink: [
        {
          name: "Live Website",
          url: "https://edgekitchensandbathrooms.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/kerryLogo.png"),
      projectName: "KLN Logistics — Enterprise Workflow Systems",
      projectDesc:
        "Delivered enterprise workflow systems across HR, finance, operations, and corporate web platforms. Worked across ASP.NET, PHP, Vue.js, React, React Native, MS SQL Server, Oracle, and Umbraco CMS. Improved platform performance by about 15% and reporting efficiency by about 20%."
    }
  ],
  display: true
};

// Selected GitHub / portfolio projects

const projectCurationSection = {
  title: "Selected Projects",
  subtitle:
    "Focused projects that prove backend, database, API, full-stack, CI/CD, and applied data capability.",
  display: true,
  highlights: [
    "Quality over quantity: each project proves a specific engineering skill recruiters can quickly understand.",
    "Version details are shown only where there is project evidence, not as empty keyword stuffing."
  ],
  projects: [
    {
      title: "SearchOps Job Platform",
      subtitle: "SEO-Aware Job Platform | Full-Stack + CI/CD",
      description:
        "Built a job-search platform prototype focused on backend API design, Prisma/PostgreSQL data modelling, frontend integration, Docker-based development, automated tests, and GitHub Actions CI workflow.",
      tags: ["TypeScript 5.x", "Node.js 20 CI", "Express 4", "Next.js 16", "React 18", "PostgreSQL 15", "Docker", "GitHub Actions", "Vitest", "Supertest", "Playwright"],
      badge: "full-stack platform",
      proof: "API design, database modelling, CI workflow, testing strategy, and job-platform domain thinking",
      featuredMetric: "Backend + data model + CI proof",
      github: "https://github.com/CandyCheng-git/Searchops-Job-Platform"
    },
    {
      title: "Global360 TODO List",
      subtitle: "Full-Stack Assessment | Angular 21 + .NET 9 Web API",
      description:
        "Built a clean TODO list app using Angular 21 frontend and .NET 9 Web API backend, with in-memory data storage, Docker-based run instructions, Swagger API testing, and frontend/backend test coverage.",
      tags: ["Angular 21", ".NET 9 Web API", "C#", "Docker", "Swagger", "xUnit", "Vitest", "Testing"],
      badge: "full-stack",
      proof: "frontend/backend integration, API design, testing, and clean assessment delivery",
      featuredMetric: "Built and tested under deadline",
      github: "https://github.com/CandyCheng-git/global360-todo-list"
    },
    {
      title: "C# API Contract Demo",
      subtitle: "Backend API Design | ASP.NET Core",
      description:
        "Designed a REST API demo focused on clean contracts, request validation, Swagger documentation, structured error handling, and integration-ready workflows.",
      tags: ["C#", "ASP.NET Core", "Swagger", "Validation", "Postman"],
      badge: "backend",
      proof: "contract-first API design, validation standards, and integration clarity",
      featuredMetric: "Clean API contracts",
      github: "https://github.com/CandyCheng-git/Csharp-API-Contract-Demo"
    },
    {
      title: "SQL Report Optimizer Demo",
      subtitle: "Database Performance | SQL Server",
      description:
        "Built a reporting optimisation demo using slow-query baselines, indexing, summary tables, and incremental refresh patterns to reduce reporting bottlenecks.",
      tags: ["T-SQL", "Indexing", "Reporting", "Performance", "SQL Server"],
      badge: "sql performance",
      proof: "query tuning, reporting performance, and business-system thinking",
      featuredMetric: "Slow reports → scalable reporting",
      github: "https://github.com/CandyCheng-git/MSSQL-Report-Optimizer-Demo"
    },
    {
      title: "C# Promotion Engine",
      subtitle: "Business Rules Engine | Pricing Logic",
      description:
        "Implemented promotion and discount logic to model real-world pricing rules, conflicting conditions, and maintainable backend decision flows.",
      tags: ["C#", "OOP", "Business Logic", "Pricing", "Rules Engine"],
      badge: "business rules",
      proof: "backend logic, code structure, commerce workflows, and maintainable rule handling",
      featuredMetric: "Complex rules made testable",
      github: "https://github.com/CandyCheng-git/Csharp-Promotion-Engine"
    },
    {
      title: "Car Price Prediction",
      subtitle: "Applied Machine Learning | Regression",
      description:
        "Built a machine learning project to predict used-car prices using data preparation, EDA, feature engineering, model training, and evaluation.",
      tags: ["Python", "Pandas", "Scikit-learn", "Regression", "Jupyter"],
      badge: "applied ml",
      proof: "practical ML workflow, data preparation, model evaluation, and business-friendly problem framing",
      featuredMetric: "Applied ML with business context",
      github: "https://github.com/CandyCheng-git/AI-ML-Car_Price_Prediction-Assessment-2025-01"
    }
  ]
};

// Achievement Section

const achievementSection = {
  title: emoji("Certifications & Awards 🏆"),
  subtitle:
    "Selected proof of technical learning, delivery quality, and recognised performance.",
  achievementsCards: [
    {
      title: "Academic Excellence Award",
      subtitle: "Kaplan Business School — Master of IT, 2026",
      image: require("./assets/images/kaplanLogo.png"),
      imageAlt: "Kaplan Business School",
      footerLink: []
    },
    {
      title: "Outstanding Developer Award — Silver",
      subtitle: "Kerry Logistics — 2021",
      image: require("./assets/images/award_kerry.png"),
      imageAlt: "Kerry Logistics Award",
      footerLink: []
    },
    {
      title: "Introduction to Artificial Intelligence",
      subtitle: "NSW Government — Jul 2025",
      image: require("./assets/images/cert_ai_nsw.png"),
      imageAlt: "NSW Government AI Certificate",
      footerLink: []
    },
    {
      title: "Google Cloud AI Bootcamp Series",
      subtitle: "Certificate — Sep 2024",
      image: require("./assets/images/cert_google_cloud_ai.png"),
      imageAlt: "Google Cloud AI Bootcamp",
      footerLink: []
    }
  ],
  display: true
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle:
    "A concise view of my software engineering, backend, database, cloud, and automation experience.",
  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to Software Engineer, Backend Developer, Full-Stack Developer, and cloud-enabled business systems roles in Melbourne or remote.",
  email_address: "candycheng.it@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  projectCurationSection,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
