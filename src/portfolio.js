/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Candy Cheng",
  title: "Hi all, I'm Candy",
  subTitle: emoji(
    "Full-Stack Software Engineer ☁️🚀\nBased in Melbourne.\nI build practical digital solutions across web, backend, and data.\n(performance, reliability, data quality)."
  ),
  resumeLink:
    "https://www.linkedin.com/in/lok-tung-c-hk/", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/candycheng-git",
  linkedin: "https://www.linkedin.com/in/lok-tung-c-hk/",
  gmail: "candycheng.it@gmail.com",
  kaggle: "https://www.kaggle.com/candychengkaggle",
  jsfiddle: "https://jsfiddle.net/u/candycheng_js/fiddles/",
  //gitlab: "https://gitlab.com/candycheng-gita",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I ship end-to-end solutions: UI → API → database → cloud deployment → automation & analytics.",
  skills: [
    emoji("⚡ Build responsive web applications and operational dashboards with Laravel, Livewire, and React"),
    emoji("⚡ Design backend APIs and integrate e-commerce platforms and external data feeds for scalable business workflows"),
    emoji("⚡ Support cloud deployment and DevOps workflows using AWS, Azure, Docker, and CI/CD practices"),
    emoji("⚡ Automate data validation, auditing, and reporting processes with Python and SQL"),
    emoji("⚡ Develop applied machine learning solutions using scikit-learn, TensorFlow, and NLP foundations")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
/* Font Awesome icons: https://fontawesome.com/icons */
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },

    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },

    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel" },

    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },

    { skillName: "SQL / Databases", fontAwesomeClassname: "fas fa-database" },

    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },

    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },

    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kaplan Business School (Melbourne, AU)",
      logo: require("./assets/images/kaplanLogo.png"),
      subHeader: "Master of Information Technology (Analytics Specialisation)",
      duration: "Jul 2024 – Feb 2026",
      desc: "Focused on analytics + practical engineering delivery.",
      descBullets: ["CGPA: 6.67/7 (Highest: 7.00)"]
    },
    {
      schoolName: "Staffordshire University (HK Campus)",
      logo: require("./assets/images/staffordshireLogo.png"),
      subHeader: "Bachelor of Science with Honours",
      duration: "Jun 2017 – Jun 2019",
      desc: "Part-time top-up degree while working full-time.",
      descBullets: []
    },
    {
      schoolName: "CUHK School of Continuing and Professional Studies (HK)",
      logo: require("./assets/images/cuhkscopeLogo.png"),
      subHeader: "Higher Diploma in Network and Mobile Computing",
      duration: "Sep 2011 – Mar 2015",
      desc: "",
      descBullets: ["CGPA: 3.0/4.0 (Highest GPA: 3.59)"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Full-Stack Web (Laravel/React)", progressPercentage: "85%" },
    { Stack: "Backend Development (C#/SQL/Python)", progressPercentage: "85%" },
    { Stack: "Cloud & DevOps (AWS/Azure/Docker)", progressPercentage: "70%" },
    { Stack: "Data Automation (Python/SQL)", progressPercentage: "65%" },
    { Stack: "AI/ML (Projects/Academic)", progressPercentage: "60%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  title: "Experience",
  subtitle:
    "Software engineering across enterprise systems, cloud-connected products, data automation, and client-facing web delivery.",
  display: true,
  experience: [
    {
      role: "Full-Stack Software Engineer\n(Freelance)",
      company: "Self-Employed",
      companylogo: require("./assets/images/logo.png"),
      date: "Aug 2025 – Present\n(Melbourne, Hybrid)",
      desc: "Delivering production websites with strong attention to SEO, performance, usability, and business conversion.",
      descBullets: [
        "Built a responsive business website with custom page templates, galleries, sliders, and contact capture workflows",
        "Implemented on-page SEO foundations including metadata, schema markup, and content structure to improve search visibility",
        "Worked directly with the client on branding, messaging, and iteration, turning business goals into production-ready features"
      ]
    },
    {
      role: "Cloud Engineer\n(Volunteer)",
      company: "Camfor",
      companylogo: require("./assets/images/camforLogo.png"),
      date: "Nov 2024 – Present\n(Melbourne, Hybrid)",
      desc: "Contributing to a cloud-connected IoT auto-watering platform covering dashboards, data flow, and deployment structure.",
      descBullets: [
        "Built responsive Laravel + Livewire dashboards for sensor monitoring, thresholds, alerts, and bed-level operational visibility",
        "Improved dashboard latency by about 25% by refining Livewire event flow, rendering behaviour, and component updates",
        "Supported a modular deployment approach to help the platform scale across multiple agricultural sites and future environments"
      ]
    },
    {
      role: "Web Developer – Backend & Data Analytics\n(Internship)",
      company: "Star Promotional Products",
      companylogo: require("./assets/images/starpromoLogo.png"),
      date: "Jun 2025 – Sep 2025\n(Sydney, Remote)",
      desc: "Worked on nopCommerce and Azure-related product operations, focusing on data quality, SEO automation, and pricing validation.",
      descBullets: [
        "Automated SEO metadata generation for 10,000+ products with Python, cutting manual effort by about 40%",
        "Audited supplier feeds against backend records, resolving 200+ mismatches across pricing, decoration, and catalogue data",
        "Reviewed Azure cloud spending of about AUD 1,047 per month and documented optimisation opportunities for cost-aware operations"
      ]
    },
    {
      role: "Software Engineer",
      company: "Kerry Logistics",
      companylogo: require("./assets/images/kerryLogo.png"),
      date: "Sep 2019 – May 2024\n(Hong Kong, On-site)",
      desc: "Built and enhanced enterprise systems across HR, finance, and operations with a strong focus on delivery, reliability, and stakeholder alignment.",
      descBullets: [
        "Developed APIs and internal business systems using ASP.NET, React, MS SQL Server, and Oracle across multiple operational workflows",
        "Optimised queries and integration flows to improve platform performance by about 15% and reporting efficiency by about 20%",
        "Received the Outstanding Developer Silver Award for strong delivery under tight deadlines and cross-team business pressure"
      ]
    },
    {
      role: "Analysis Programmer\n(Seconded)",
      company: "ME Consulting Ltd",
      companylogo: require("./assets/images/meconsultingLogo.png"),
      date: "Jun 2019 – Aug 2019\n(Hong Kong, On-site)",
      desc: "Seconded to support enterprise delivery work for Kerry Logistics during a transition period.",
      descBullets: [
        "Contributed to backend modules, business workflows, and database integrations for operational systems"
      ]
    },
    {
      role: "Programmer",
      company: "Lik On Security Ltd",
      companylogo: require("./assets/images/likonLogo.png"),
      date: "Jun 2017 – Jun 2019\n(Hong Kong, On-site)",
      desc: "Built internal HRMS and administration tools with role-based access, process digitisation, and day-to-day operational support.",
      descBullets: [
        "Designed and implemented role-based access control patterns for internal systems and admin workflows",
        "Reduced manual HR incident tracking workload by about 30% through process digitalisation and system support"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
/*
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};
*/

// Some big projects you have worked on

const bigProjects = {
  title: "Flagship Work",
  subtitle:
    "Selected professional work across cloud-connected products, client delivery, and enterprise systems.",
  projects: [
    {
      image: require("./assets/images/camforLogo.png"),
      projectName: "Camfor — IoT Monitoring & Control Dashboard\n(Volunteer Cloud Engineer)",
      projectDesc:
        "Built cloud-connected dashboards for an IoT auto-watering platform using Laravel and Livewire, with a focus on real-time monitoring, threshold visibility, and scalable deployment patterns. Improved dashboard latency by about 25% and responsiveness by about 20% by refining data flow and UI rendering strategy. Private project; demo or screenshots available on request."
      /*
      footerLink: [
        {
          name: "Request Demo",
          url: "mailto:candycheng.it@gmail.com?subject=Camfor%20IoT%20Demo%20Request"
        }
      ]
      */
    },
    {
      image: require("./assets/images/project_edgekitchens.png"),
      projectName: "Edge Kitchens & Bathrooms — SEO & Lead Generation Website\n(Freelance)",
      projectDesc:
        "Designed and delivered a responsive business website focused on modern UX, mobile performance, and SEO. Implemented metadata, schema markup, custom page sections, galleries, and contact capture to support visibility and lead generation, with ongoing improvements for content and performance.",
      footerLink: [
        {
          name: "Live Website",
          url: "https://edgekitchensandbathrooms.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/kerryLogo.png"),
      projectName: "Kerry Logistics — Enterprise Workflow Systems\n(Full-Stack Software Engineer)",
      projectDesc:
        "Delivered and enhanced multiple internal systems across HR and operations, including attendance, HRMS, incident handling, and finance purchase workflows. Worked across ASP.NET, PHP, React, React Native, MS SQL Server, and Oracle with a strong focus on data integrity, access control, auditability, performance tuning, and release stability. Improved platform performance by about 15% and reporting efficiency by about 20%. Proprietary work; case study available on request."
      /*
      footerLink: [
        {
          name: "Request Case Study",
          url: "mailto:candycheng.it@gmail.com?subject=Kerry%20Logistics%20Case%20Study%20Request"
        }
      ]
      */
    }
  ],
  display: true
};

const projectCurationSection = {
  title: "Selected Projects",
  subtitle:
    "A focused shortlist of backend, database, and applied data projects that reflect how I build practical systems: clear APIs, scalable reporting, business logic, and business-friendly ML.",
  display: true,
  highlights: [
    "I feature quality over quantity: each project is here because it proves a specific capability relevant to software engineering and backend/data roles."
  ],
  projects: [
    {
      title: "C# API Contract Demo",
      subtitle: "Backend API Design | ASP.NET Core",
      description:
        "Designed a REST API demo focused on clean contracts, request validation, Swagger documentation, structured error handling, and integration-ready workflows for consumers.",
      tags: ["C#", "ASP.NET Core", "Swagger", "Validation", "Postman"],
      badge: "backend",
      proof: "API design, contract-first thinking, validation standards, and integration clarity",
      featuredMetric: "Contract-first API design",
      github: "https://github.com/CandyCheng-git/Csharp-API-Contract-Demo"
    },
    {
      title: "SQL Report Optimizer Demo",
      subtitle: "Database Performance | SQL Server",
      description:
        "Built a reporting optimization demo using slow-query baselines, indexing, summary tables, and incremental refresh patterns to reduce report bottlenecks and improve scalability.",
      tags: ["T-SQL", "Indexing", "Reporting", "Performance", "SQL Server"],
      badge: "sql performance",
      proof: "query tuning, reporting performance, and business-system thinking",
      featuredMetric: "From slow reports to scalable reporting",
      github: "https://github.com/CandyCheng-git/MSSQL-Report-Optimizer-Demo"
    },
    {
      title: "C# Promotion Engine",
      subtitle: "Business Rules Engine | Pricing Logic",
      description:
        "Implemented promotion and discount logic to model real-world pricing rules, conflicting conditions, and maintainable backend decision flows in a structured C# solution.",
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
        "Built a machine learning project to predict used-car prices using data preparation, exploratory analysis, feature engineering, model training, and evaluation in a practical business use case.",
      tags: ["Python", "Pandas", "Scikit-learn", "Regression", "Jupyter"],
      badge: "applied ml",
      proof: "practical ML workflow, data preparation, model evaluation, and business-friendly problem framing",
      featuredMetric: "Applied ML with business context",
      github: "https://github.com/CandyCheng-git/AI-ML-Car_Price_Prediction-Assessment-2025-01"
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Awards 🏆"),
  subtitle: "Credibility > fluff. Only the items I can back up with evidence.",
  achievementsCards: [
    {
      title: "Introduction to Artificial Intelligence\n(NSW Government)",
      subtitle: "Certificate – Jul 2025",
      image: require("./assets/images/cert_ai_nsw.png"),
      imageAlt: "NSW Government AI Certificate",
      footerLink: []
    },
    {
      title: "Google Cloud AI Bootcamp Series",
      subtitle: "Certificate – Sep 2024",
      image: require("./assets/images/cert_google_cloud_ai.png"),
      imageAlt: "Google Cloud AI Bootcamp",
      footerLink: []
    },
    {
      title: "Outstanding Developer Award\n(Silver) – Kerry Logistics",
      subtitle: "Awards – Oct 2021",
      image: require("./assets/images/award_kerry.png"),
      imageAlt: "Kerry Logistics Award",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
/*
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};
*/
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to read my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Available for freelance web builds (SEO + performance) and internal system modernisation. Melbourne or remote.",
  //number: "+92-0000000000",
  email_address: "candycheng.it@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  //openSource,
  projectCurationSection,
  bigProjects,
  achievementSection,
  //blogSection,
  //talkSection,
  //podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
