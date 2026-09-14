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
    "Software Engineer | Backend & APIs\nI build APIs, SQL, cloud, automation."
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
    "Backend, APIs, SQL, cloud, reporting.",
  skills: [
    emoji("⚡ Build web apps and dashboards for real workflows"),
    emoji("⚡ Design REST APIs and backend logic with clear contracts"),
    emoji("⚡ Optimise SQL reports, data checks, and automation"),
    emoji("⚡ Support AWS, Azure, Docker, CI/CD, and deployments"),
    emoji("⚡ Use Angular, .NET, React, Node, Laravel, and SQL"),
    emoji("⚡ Turn unclear needs into tested releases and docs")
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
      schoolName: "Kaplan Business School",
      logo: require("./assets/images/kaplanLogo.png"),
      subHeader: "Master of IT - Analytics",
      duration: "Jul 2024 – Apr 2026",
      desc: "Analytics, cloud, and delivery.",
      descBullets: ["CGPA: 6.67 / 7.0", "Academic Excellence Award"]
    },
    {
      schoolName: "Staffordshire University",
      logo: require("./assets/images/staffordshireLogo.png"),
      subHeader: "BSc (Hons) Computer Science",
      duration: "Completed Jun 2019",
      desc: "Completed alongside industry work.",
      descBullets: []
    },
    {
      schoolName: "CUHK SCOPE",
      logo: require("./assets/images/cuhkscopeLogo.png"),
      subHeader: "Higher Diploma - Network & Mobile",
      duration: "Completed Mar 2015",
      desc: "Networking, mobile, systems, and code.",
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
    "8+ yrs in backend, APIs, SQL, cloud.",
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "NostraData Pty Ltd",
      companylogo: require("./assets/images/nostradataLogo.png"),
      date: "Jul-Aug 2026",
      desc:
        "Healthcare API checks and fixes.",
      descBullets: [
        "3 healthcare APIs", 
        "1 Laravel migration + 2 new APIs", 
        "multi-endpoint integration"
      ]
    },
    {
      role: "Database Reporting & AI",
      company: "ONCALL Interpreters & Translators",
      companylogo: require("./assets/images/oncallLogo.png"),
      date: "Jun-Jul 2026",
      desc:
        "SQL reporting and AI call testing.",
      descBullets: [
        "3 technology vendors", 
        "5 UAT scenario ", 
        "SQL, JSON/CSV and conversational-AI validation"
      ]
    },
    {
      role: "Full-Stack Engineer",
      company: "Camfor",
      companylogo: require("./assets/images/camforLogo.png"),
      bannerColor: "rgb(18 168 157)",
      date: "Nov 2024-Present",
      desc:
        "IoT dashboards and telemetry.",
      descBullets: [
        "4 IoT monitoring domains", 
        "CEO + 4+ cross-functional stakeholders", 
        "backend, telemetry and dashboard delivery"
      ]
    },
    {
      role: "Backend & Data",
      company: "Star Promotional Products",
      companylogo: require("./assets/images/starpromoLogo.png"),
      date: "Jun-Sep 2025",
      desc:
        "Product data automation.",
      descBullets: [
        "10,000+ products",
        "multiple supplier feeds, pricing tiers, decoration rules and SEO metadataCamfor"
      ]
    },
    {
      role: "Software Engineer",
      company: "KLN Logistics Group Limited",
      companylogo: require("./assets/images/kerryLogo.png"),
      date: "2019-2024",
      desc:
        "Enterprise systems for 10,000+ users.",
      descBullets: [
        "5+ enterprise systems", 
        "5+ departments", 
        "3+ development teams ",
        "10,000+ users"
      ]
    },
    {
      role: "Programmer",
      company: "Lik On Security Ltd",
      companylogo: require("./assets/images/likonLogo.png"),
      date: "2017-2019",
      desc:
        "HRMS workflow systems.",
      descBullets: [
        "3 HR workflow domains",
        "incident tracking, approval workflows and role-based access"
      ]
    },
    {
      role: "IT Support Assistant",
      company: "Speedy Group",
      companylogo: require("./assets/images/SpeedyGroup.png"),
      date: "2015-2017",
      desc:
        "School IT support.",
      descBullets: [
        "2 public-school campuses",
        "Linux/Windows support and PHP workflow automation"
      ]
    },
    {
      role: "Website Developer",
      company: "Self-Employed",
      companylogo: require("./assets/images/logo.png"),
      date: "2017-Present",
      desc:
        "Small-business websites.",
      descBullets: [
        "Web/e-commerce projects across product, category, multilingual content, media and administration workflows"
      ]
    }
  ]
};

// Flagship professional work

const bigProjects = {
  title: "Flagship Work",
  subtitle:
    "Selected work with measurable impact.",
  projects: [
    {
      image: require("./assets/images/nostradataLogo.png"),
      projectName: "Health-Tech API Verification",
      projectDesc:
        "Fixed API, auth, and parity gaps."
    },
    {
      image: require("./assets/images/camforLogo.png"),
      projectName: "Camfor IoT Dashboard",
      projectDesc:
        "Built Laravel IoT dashboards."
    },
    {
      image: require("./assets/images/project_edgekitchens.png"),
      projectName: "Edge Kitchens Website",
      projectDesc:
        "Built a responsive SEO lead website.",
      footerLink: [
        {
          name: "Live Website",
          url: "https://edgekitchensandbathrooms.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/kerryLogo.png"),
      projectName: "KLN Enterprise Systems",
      projectDesc:
        "Built HR, finance, and CMS systems."
    }
  ],
  display: true
};

// Selected GitHub / portfolio projects

const projectCurationSection = {
  title: "Selected Projects",
  subtitle:
    "Backend, API, SQL, CI, and data proof.",
  display: true,
  highlights: [
    "Each project shows a clear skill.",
    "Versions shown only when proven."
  ],
  projects: [
    {
      title: "SearchOps Job Platform",
      subtitle: "Job Platform | Full-Stack + CI",
      description:
        "Job API, PostgreSQL, CI, and tests.",
      tags: ["TypeScript 5.x", "Node.js 20 CI", "Express 4", "Next.js 16", "React 18", "PostgreSQL 15", "Docker", "GitHub Actions", "Vitest", "Supertest", "Playwright"],
      badge: "full-stack platform",
      proof: "API, data model, CI, tests",
      featuredMetric: "Backend + data + CI",
      github: "https://github.com/CandyCheng-git/Searchops-Job-Platform"
    },
    {
      title: "Global360 TODO List",
      subtitle: "Angular + .NET Assessment",
      description:
        "Angular + .NET TODO app with tests.",
      tags: ["Angular 21", ".NET 9 Web API", "C#", "Docker", "Swagger", "xUnit", "Vitest", "Testing"],
      badge: "full-stack",
      proof: "frontend, backend, API, tests",
      featuredMetric: "Built and tested",
      github: "https://github.com/CandyCheng-git/global360-todo-list"
    },
    {
      title: "C# API Contract Demo",
      subtitle: "Backend API Design | ASP.NET Core",
      description:
        "Clean ASP.NET API contracts.",
      tags: ["C#", "ASP.NET Core", "Swagger", "Validation", "Postman"],
      badge: "backend",
      proof: "API contracts and validation",
      featuredMetric: "Clean API contracts",
      github: "https://github.com/CandyCheng-git/Csharp-API-Contract-Demo"
    },
    {
      title: "SQL Report Optimizer Demo",
      subtitle: "Database Performance | SQL Server",
      description:
        "SQL tuning and reporting demo.",
      tags: ["T-SQL", "Indexing", "Reporting", "Performance", "SQL Server"],
      badge: "sql performance",
      proof: "query tuning and reporting",
      featuredMetric: "Slow reports to fast reports",
      github: "https://github.com/CandyCheng-git/MSSQL-Report-Optimizer-Demo"
    },
    {
      title: "C# Promotion Engine",
      subtitle: "Business Rules Engine | Pricing Logic",
      description:
        "Tested pricing rules engine.",
      tags: ["C#", "OOP", "Business Logic", "Pricing", "Rules Engine"],
      badge: "business rules",
      proof: "pricing rules and clean code",
      featuredMetric: "Rules made testable",
      github: "https://github.com/CandyCheng-git/Csharp-Promotion-Engine"
    },
    {
      title: "Car Price Prediction",
      subtitle: "Applied Machine Learning | Regression",
      description:
        "Regression ML price model.",
      tags: ["Python", "Pandas", "Scikit-learn", "Regression", "Jupyter"],
      badge: "applied ml",
      proof: "EDA, modelling, evaluation",
      featuredMetric: "Applied ML with business context",
      github: "https://github.com/CandyCheng-git/AI-ML-Car_Price_Prediction-Assessment-2025-01"
    }
  ]
};

const selectedWorkSection = {
  display: true,
  title: "Selected Work",
  subtitle:
    "A focused selection of commercial and technical software engineering work.",
  categories: [
    "Featured",
    "Backend & API",
    "Full-Stack",
    "System Design",
    "SQL & Data",
    "AI / ML",
    "Web",
    "All"
  ],
  projects: [
    {
      title: "Health-Tech API Verification",
      description:
        "Verified healthcare API behaviour against specifications and legacy flows, resolving authentication, contract, and response-parity gaps.",
      companyName: "NostraData Pty Ltd",
      categories: ["Backend & API"],
      featured: true,
      tags: ["Laravel", "REST API", "Authentication", "API Verification"],
      badge: "commercial api",
      proof: "contract verification, auth debugging, regression evidence",
      featuredMetric: "3 API contract divergences resolved",
      github: null,
      demo: null,
      image: require("./assets/images/nostradataLogo.png")
    },
    {
      title: "Camfor IoT Dashboard",
      description:
        "Built Laravel and Livewire dashboards for API-driven IoT telemetry and operational monitoring workflows.",
      companyName: "Camfor",
      categories: ["Full-Stack", "Backend & API", "Web"],
      featured: false,
      tags: ["Laravel", "Livewire", "Tailwind", "REST API", "IoT"],
      badge: "commercial iot",
      proof: "telemetry mapping, dashboard workflows, responsive UI",
      featuredMetric: "4 IoT monitoring domains",
      github: null,
      demo: null,
      image: require("./assets/images/camforLogo.png")
    },
    {
      title: "Edge Kitchens Website",
      description:
        "Built and shipped a responsive lead-generation website focused on mobile usability, service discovery, and SEO.",
      companyName: "Edge Kitchens and Bathrooms",
      categories: ["Web"],
      featured: false,
      tags: ["Responsive Web", "SEO", "Client Delivery"],
      badge: "client website",
      proof: "production website, responsive UX, lead-generation flow",
      featuredMetric: "Live production website",
      github: null,
      demo: "https://edgekitchensandbathrooms.com.au/",
      image: require("./assets/images/project_edgekitchens.png")
    },
    {
      title: "KLN Enterprise Systems",
      description:
        "Built and maintained enterprise HR, finance, and CMS workflows supporting operational teams across multiple departments.",
      companyName: "KLN Logistics Group Limited",
      categories: ["Full-Stack", "SQL & Data", "Web"],
      featured: false,
      tags: ["ASP.NET", "SQL", "Enterprise Systems", "CMS"],
      badge: "enterprise systems",
      proof: "business workflows, enterprise data, cross-team delivery",
      featuredMetric: "10,000+ users across 5+ departments",
      github: null,
      demo: null,
      image: require("./assets/images/kerryLogo.png")
    },
    {
      title: "Mini Hub Backend Challenge",
      description:
        "Extended a multi-tenant backend with registration APIs, capacity checks, Melbourne time handling, and isolation-focused regression tests.",
      companyName: null,
      categories: ["Backend & API", "SQL & Data"],
      featured: true,
      tags: [".NET 10", "Azure Functions", "EF Core", "PostgreSQL", "xUnit", "Multi-tenancy"],
      badge: "technical assessment",
      proof: "API endpoint, tenant isolation, capacity handling, regression tests",
      featuredMetric: "Backend fixes + regression tests",
      github: "https://github.com/CandyCheng-git/hub-challenge/tree/challenge/MCH-2609-01",
      demo: null,
      image: null
    },
    {
      title: "Centralised Patient Monitoring",
      description:
        "Designed a healthcare monitoring workflow from requirements through ERD, validation rules, reporting, and proposed .NET architecture.",
      companyName: null,
      categories: ["System Design", "SQL & Data"],
      featured: true,
      tags: ["SQL Server", "ERD", "Data Modelling", "Validation", "Healthcare", "ASP.NET Core (Proposed)"],
      badge: "system design case study",
      proof: "requirements, ERD, workflow, validation, reporting",
      featuredMetric: "Hospital → Patient → Encounter → DailyLog",
      github: "https://github.com/CandyCheng-git/centralised-patient-monitoring-system",
      demo: "https://vic-care-flow.lovable.app/",
      image: null
    },
    {
      title: "SearchOps Job Platform",
      description:
        "Job API, PostgreSQL, CI, and tests.",
      companyName: null,
      categories: ["Full-Stack", "Backend & API", "SQL & Data", "Web"],
      featured: true,
      tags: ["TypeScript 5.x", "Node.js 20 CI", "Express 4", "Next.js 16", "React 18", "PostgreSQL 15", "Docker", "GitHub Actions", "Vitest", "Supertest", "Playwright"],
      badge: "full-stack platform",
      proof: "API, data model, CI, tests",
      featuredMetric: "Backend + data + CI",
      github: "https://github.com/CandyCheng-git/Searchops-Job-Platform",
      demo: null,
      image: null
    },
    {
      title: "Global360 TODO List",
      description:
        "Angular + .NET TODO app with tests.",
      companyName: null,
      categories: ["Full-Stack", "Backend & API", "Web"],
      featured: false,
      tags: ["Angular 21", ".NET 9 Web API", "C#", "Docker", "Swagger", "xUnit", "Vitest", "Testing"],
      badge: "full-stack",
      proof: "frontend, backend, API, tests",
      featuredMetric: "Built and tested",
      github: "https://github.com/CandyCheng-git/global360-todo-list",
      demo: null,
      image: null
    },
    {
      title: "C# API Contract Demo",
      description:
        "Clean ASP.NET API contracts.",
      companyName: null,
      categories: ["Backend & API"],
      featured: false,
      tags: ["C#", "ASP.NET Core", "Swagger", "Validation", "Postman"],
      badge: "backend",
      proof: "API contracts and validation",
      featuredMetric: "Clean API contracts",
      github: "https://github.com/CandyCheng-git/Csharp-API-Contract-Demo",
      demo: null,
      image: null
    },
    {
      title: "SQL Report Optimizer Demo",
      description:
        "SQL tuning and reporting demo.",
      companyName: null,
      categories: ["SQL & Data"],
      featured: false,
      tags: ["T-SQL", "Indexing", "Reporting", "Performance", "SQL Server"],
      badge: "sql performance",
      proof: "query tuning and reporting",
      featuredMetric: "Slow reports to fast reports",
      github: "https://github.com/CandyCheng-git/MSSQL-Report-Optimizer-Demo",
      demo: null,
      image: null
    },
    {
      title: "C# Promotion Engine",
      description:
        "Tested pricing rules engine.",
      companyName: null,
      categories: ["Backend & API"],
      featured: false,
      tags: ["C#", "OOP", "Business Logic", "Pricing", "Rules Engine"],
      badge: "business rules",
      proof: "pricing rules and clean code",
      featuredMetric: "Rules made testable",
      github: "https://github.com/CandyCheng-git/Csharp-Promotion-Engine",
      demo: null,
      image: null
    },
    {
      title: "Car Price Prediction",
      description:
        "Regression ML price model.",
      companyName: null,
      categories: ["AI / ML"],
      featured: false,
      tags: ["Python", "Pandas", "Scikit-learn", "Regression", "Jupyter"],
      badge: "applied ml",
      proof: "EDA, modelling, evaluation",
      featuredMetric: "Applied ML with business context",
      github: "https://github.com/CandyCheng-git/AI-ML-Car_Price_Prediction-Assessment-2025-01",
      demo: null,
      image: null
    }
  ]
};

// Achievement Section

const achievementSection = {
  title: emoji("Certifications & Awards 🏆"),
  subtitle:
    "Proof of learning and delivery.",
  achievementsCards: [
    {
      title: "Academic Excellence Award",
      subtitle: "Kaplan - Master of IT, 2026",
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
    "Backend, SQL, cloud, and automation.",
  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to software roles.",
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
  selectedWorkSection,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};