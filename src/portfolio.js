/* Change this file to update your personal portfolio content. */

// To change portfolio colors globally, update _globalColor.scss.

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

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
    "Software Engineer | Backend, Database & Cloud Systems\nMelbourne-based. I build APIs, dashboards, automation, and data-driven systems that improve speed, accuracy, and operational reliability."
  ),
  resumeLink: "https://www.linkedin.com/in/lok-tung-c-hk/",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CandyCheng-git",
  linkedin: "https://www.linkedin.com/in/lok-tung-c-hk/",
  gmail: "candycheng.it@gmail.com",
  kaggle: "https://www.kaggle.com/candychengkaggle",
  jsfiddle: "https://jsfiddle.net/u/candycheng_js/fiddles/",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I build",
  subTitle:
    "Practical systems across backend, database, cloud, dashboards, and automation.",
  skills: [
    emoji("⚡ Backend APIs, business logic, and system integrations"),
    emoji("⚡ SQL reporting, query optimisation, and data validation"),
    emoji("⚡ Laravel/Livewire and React dashboards for operational teams"),
    emoji("⚡ Docker, AWS/Azure workflows, and deployment support"),
    emoji("⚡ Python automation for product, SEO, and reporting data")
  ],

  softwareSkills: [
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: ".NET / ASP.NET", fontAwesomeClassname: "fas fa-server" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Kaplan Business School — Melbourne",
      logo: require("./assets/images/kaplanLogo.png"),
      subHeader: "Master of Information Technology — Analytics Specialisation",
      duration: "Completed Apr 2026",
      desc: "CGPA: 6.67 / 7.00 · Academic Excellence Award",
      descBullets: []
    },
    {
      schoolName: "Staffordshire University — Hong Kong",
      logo: require("./assets/images/staffordshireLogo.png"),
      subHeader: "Bachelor of Science with Honours — Computer Science",
      duration: "Completed Jun 2019",
      desc: "Completed while building professional software experience.",
      descBullets: []
    }
  ]
};

// Proficiency Section

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend/API Development", progressPercentage: "88%" },
    { Stack: "SQL & Database Systems", progressPercentage: "86%" },
    { Stack: "Full-Stack Web", progressPercentage: "82%" },
    { Stack: "Cloud & Docker", progressPercentage: "72%" },
    { Stack: "Data Automation", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  title: "Experience",
  subtitle:
    "6+ years delivering backend, database, cloud-enabled, and operational systems.",
  display: true,
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Camfor",
      companylogo: require("./assets/images/camforLogo.png"),
      date: "Nov 2024 – Present | Melbourne",
      desc: "IoT auto-watering platform for agricultural operations.",
      descBullets: [
        "Reduced dashboard latency by ~25% through Livewire rendering and data-flow improvements",
        "Cut telemetry lag by ~20% across API–sensor communication workflows",
        "Built API-driven dashboards for controller, bed, device, and watering-event visibility"
      ]
    },
    {
      role: "Backend & Data Analytics Intern",
      company: "Star Promotional Products",
      companylogo: require("./assets/images/starpromoLogo.png"),
      date: "Jun 2025 – Sep 2025 | Sydney Remote",
      desc: "Product-data automation and catalogue quality for 10,000+ SKUs.",
      descBullets: [
        "Automated SEO metadata for 10,000+ products, reducing manual work by ~40%",
        "Corrected 200+ supplier, pricing, and decoration-data mismatches",
        "Reviewed AUD 1,047/month Azure spend and proposed 10–15% cost-saving actions"
      ]
    },
    {
      role: "Software Engineer",
      company: "Kerry Logistics",
      companylogo: require("./assets/images/kerryLogo.png"),
      date: "Jun 2019 – May 2024 | Hong Kong",
      desc: "Enterprise HR, finance, website, and operations systems for a 10,000+ user environment.",
      descBullets: [
        "Improved REST API and SQL performance by ~15% and database efficiency by ~20%",
        "Delivered HRMS, finance, appraisal, attendance, and incident-management modules",
        "Supported AWS ECS + Docker migration and OAuth2/Okta authentication modernisation",
        "Received Outstanding Developer Silver Award for delivery quality and stakeholder alignment"
      ]
    },
    {
      role: "Programmer",
      company: "Lik On Security",
      companylogo: require("./assets/images/likonLogo.png"),
      date: "Jun 2017 – Jun 2019 | Hong Kong",
      desc: "Internal HRMS and administration workflow automation.",
      descBullets: [
        "Digitised HR incident tracking, reducing manual workload by ~30%",
        "Built ASP.NET and SQL workflow modules with role-based access control"
      ]
    },
    {
      role: "Full-Stack Website Developer",
      company: "Self-Employed",
      companylogo: require("./assets/images/logo.png"),
      date: "Nov 2017 – Present | Melbourne / Remote",
      desc: "SEO-ready websites for business visibility and lead generation.",
      descBullets: [
        "Delivered responsive business websites with reusable components and SEO-aligned structure",
        "Reduced future website update effort by ~30–40% through maintainable page/component design"
      ]
    }
  ]
};

// Professional Case Studies

const bigProjects = {
  title: "Professional Impact",
  subtitle:
    "Selected work with measurable business or technical outcomes.",
  projects: [
    {
      image: require("./assets/images/camforLogo.png"),
      projectName: "Camfor — IoT Monitoring Dashboard",
      projectDesc:
        "Built Laravel + Livewire dashboards for IoT watering operations. Improved dashboard latency by ~25%, telemetry responsiveness by ~20%, and reduced manual checks by ~30%."
    },
    {
      image: require("./assets/images/starpromoLogo.png"),
      projectName: "StarPromo — Product Data Automation",
      projectDesc:
        "Automated SEO metadata and supplier-data validation for 10,000+ SKUs. Reduced manual work by ~40% and corrected 200+ product-data mismatches."
    },
    {
      image: require("./assets/images/kerryLogo.png"),
      projectName: "Kerry Logistics — Enterprise Systems",
      projectDesc:
        "Delivered backend, API, SQL, and workflow systems across HR, finance, and operations. Improved API/SQL performance by ~15% and database efficiency by ~20%."
    },
    {
      image: require("./assets/images/project_edgekitchens.png"),
      projectName: "Edge Kitchens & Bathrooms — Lead-Gen Website",
      projectDesc:
        "Delivered a responsive SEO-ready business website with structured content, galleries, metadata, schema markup, and contact capture workflows.",
      footerLink: [
        {
          name: "Live Website",
          url: "https://edgekitchensandbathrooms.com.au/"
        }
      ]
    }
  ],
  display: true
};

// Selected Coding Projects

const projectCurationSection = {
  title: "Selected Coding Projects",
  subtitle:
    "Small, focused projects that prove real engineering judgement: APIs, tests, Docker, SQL performance, and business logic.",
  display: true,
  highlights: [
    "Quality over quantity: each project shows one clear capability a hiring manager can verify."
  ],
  projects: [
    {
      title: "Global360 TODO List",
      subtitle: "Full-Stack Assessment | Angular + .NET",
      description:
        "Built a simple full-stack TODO app with Angular frontend, .NET Web API backend, in-memory storage, Docker setup, Swagger, and backend/frontend tests.",
      tags: ["Angular", ".NET Web API", "C#", "TypeScript", "Docker", "xUnit"],
      badge: "full-stack",
      proof: "assessment delivery, clean app structure, Docker run instructions, tests, and API documentation",
      featuredMetric: "Full-stack app with tests + Docker",
      github: "https://github.com/CandyCheng-git/global360-todo-list"
    },
    {
      title: "C# API Contract Demo",
      subtitle: "Backend API Design | ASP.NET Core",
      description:
        "Designed a REST API demo focused on clean contracts, validation, Swagger documentation, structured errors, and integration-ready workflows.",
      tags: ["C#", "ASP.NET Core", "Swagger", "Validation", "Postman"],
      badge: "backend",
      proof: "API contracts, validation standards, error handling, and consumer-ready documentation",
      featuredMetric: "Contract-first API design",
      github: "https://github.com/CandyCheng-git/Csharp-API-Contract-Demo"
    },
    {
      title: "SQL Report Optimizer Demo",
      subtitle: "Database Performance | SQL Server",
      description:
        "Modelled slow reporting problems and improved them with indexing, summary tables, and incremental refresh patterns.",
      tags: ["T-SQL", "SQL Server", "Indexing", "Reporting", "Performance"],
      badge: "database",
      proof: "query tuning, performance thinking, and reporting-system design",
      featuredMetric: "Slow reports → scalable reporting",
      github: "https://github.com/CandyCheng-git/MSSQL-Report-Optimizer-Demo"
    },
    {
      title: "TypeScript Grid Simulation Engine",
      subtitle: "Clean Code | Domain Modelling",
      description:
        "Built a testable simulation engine using clear domain models, validation, edge-case handling, and separation of concerns.",
      tags: ["TypeScript", "Node.js", "Vitest", "OOP", "Docker"],
      badge: "clean code",
      proof: "domain modelling, automated tests, edge cases, and maintainable structure",
      featuredMetric: "Simulation logic with test coverage",
      github: "https://github.com/CandyCheng-git/TypeScript-Grid-Simulation-Engine"
    },
    {
      title: "Car Price Prediction",
      subtitle: "Applied Machine Learning | Regression",
      description:
        "Built a practical ML workflow covering data cleaning, feature engineering, model training, and evaluation for used-car price prediction.",
      tags: ["Python", "Pandas", "Scikit-learn", "Regression", "Jupyter"],
      badge: "applied ML",
      proof: "data preparation, modelling, evaluation, and business-friendly ML framing",
      featuredMetric: "ML with business context",
      github: "https://github.com/CandyCheng-git/AI-ML-Car_Price_Prediction-Assessment-2025-01"
    }
  ]
};

// Achievement Section

const achievementSection = {
  title: emoji("Recognition & Certificates 🏆"),
  subtitle: "Evidence-backed achievements, not filler.",
  achievementsCards: [
    {
      title: "Academic Excellence Award",
      subtitle: "Kaplan Business School · MIT Analytics · CGPA 6.67/7.00",
      image: require("./assets/images/kaplanLogo.png"),
      imageAlt: "Kaplan Business School",
      footerLink: []
    },
    {
      title: "Perfect Employer Evaluation",
      subtitle: "Star Promotional Products · 30/30 internship evaluation",
      image: require("./assets/images/starpromoLogo.png"),
      imageAlt: "Star Promotional Products",
      footerLink: []
    },
    {
      title: "Outstanding Developer Award — Silver",
      subtitle: "Kerry Logistics · Enterprise systems delivery",
      image: require("./assets/images/award_kerry.png"),
      imageAlt: "Kerry Logistics Outstanding Developer Award",
      footerLink: []
    },
    {
      title: "Introduction to Artificial Intelligence",
      subtitle: "NSW Government · Certificate",
      image: require("./assets/images/cert_ai_nsw.png"),
      imageAlt: "NSW Government AI Certificate",
      footerLink: []
    },
    {
      title: "Google Cloud AI Bootcamp Series",
      subtitle: "Google Cloud · Certificate",
      image: require("./assets/images/cert_google_cloud_ai.png"),
      imageAlt: "Google Cloud AI Bootcamp Certificate",
      footerLink: []
    }
  ],
  display: true
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Backend, database, cloud systems, and full-stack delivery experience.",
  display: true
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle:
    "Open to Software Engineer, Backend Developer, and Full-Stack Developer roles in Melbourne. Full work rights in Australia. No sponsorship required.",
  email_address: "candycheng.it@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
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
