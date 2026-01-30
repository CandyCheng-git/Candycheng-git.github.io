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
    "Full-Stack Software Engineer ☁️🚀\nbased in Melbourne. I build cloud-connected web apps, data automation pipelines, and practical ML prototypes — with a strong business focus (performance, cost, data quality)."
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
    emoji("⚡ Build responsive web apps & dashboards\n(Laravel, Livewire, React)"),
    emoji("⚡ Design APIs + integrate e-commerce/data feeds\n(nopCommerce, REST, SEO metadata)"),
    emoji("⚡ Cloud & DevOps\n(AWS/Azure basics, Docker, CI/CD, cost & reliability thinking)"),
    emoji("⚡ Data automation (Python + SQL) for audits, validation, and reporting"),
    emoji("⚡ ML projects (scikit-learn/TensorFlow, NLP foundations) for real-world use cases")
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
      descBullets: ["CGPA: 6.64/7 (Highest: 7.00)"]
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
    { Stack: "Cloud & DevOps (AWS/Azure/Docker)", progressPercentage: "75%" },
    { Stack: "Data Automation (Python/SQL)", progressPercentage: "70%" },
    { Stack: "AI/ML (Projects/Academic)", progressPercentage: "60%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Software Engineer\n(Freelance)",
      company: "Self-Employed",
      companylogo: require("./assets/images/logo.png"), // add this image or swap to an existing one
      date: "Aug 2025 – Present\n(Melbourne, Hybrid)",
      desc: "Client delivery: production websites with SEO, performance, and lead-generation focus.",
      descBullets: [
        "Delivered a responsive company website with custom templates, image galleries/sliders, and contact forms",
        "Implemented SEO best practices (metadata + schema markup) to improve search visibility",
        "Collaborated with client on branding, content structure, and social integration; provided ongoing optimisation support"
      ]
    },
    {
      role: "Cloud Engineer\n(Volunteer)",
      company: "Camfor",
      companylogo: require("./assets/images/camforLogo.png"),
      date: "Nov 2024 – Present\n(Melbourne, Hybrid)",
      desc: "IoT auto-watering system: cloud-connected data flow, dashboards, and deployment improvements.",
      descBullets: [
        "Built responsive real-time dashboards using Laravel + Livewire for sensor monitoring and thresholds",
        "Improved dashboard latency by ~25% by refining data flow and UI rendering patterns",
        "Delivered modular deployment approach to support scaling across multiple agricultural sites"
      ]
    },
    {
      role: "Web Developer – Backend & Data Analytics\n(Internship)",
      company: "Star Promotional Products",
      companylogo: require("./assets/images/starpromoLogo.png"),
      date: "Jun 2025 – Sep 2025\n(Remote, Sydney)",
      desc: "nopCommerce + Azure support: product feed validation, SEO automation, and catalogue data integrity.",
      descBullets: [
        "Automated SEO metadata generation for 10,000+ products using Python scripts (reduced manual effort by ~40%)",
        "Validated supplier feeds (PromoData/Legend Life) against backend, fixing 200+ mismatches and reducing pricing errors",
        "Supported Azure cloud cost analysis (~$1,047/month) and documented optimisation opportunities"
      ]
    },
    {
      role: "Software Engineer",
      company: "Kerry Logistics",
      companylogo: require("./assets/images/kerryLogo.png"),
      date: "Sep 2019 – May 2024\n(Hong Kong, On-site)",
      desc: "Enterprise systems across HR, finance, operations. Full-stack delivery with strong stakeholder alignment.",
      descBullets: [
        "Built and maintained APIs and business systems using ASP.NET, React, and database platforms (MS-SQL/Oracle)",
        "Optimised queries and integration flows to improve platform performance (~15%) and reporting efficiency (~20%)",
        "Recognised with Outstanding Developer (Silver Award) for delivery under tight deadlines"
      ]
    },
    {
      role: "Analysis Programmer\n(Seconded)",
      company: "ME Consulting Ltd",
      companylogo: require("./assets/images/meconsultingLogo.png"),
      date: "Jun 2019 – Aug 2019\n(Hong Kong, On-site)",
      desc: "Supported enterprise delivery for Kerry Logistics as a seconded engineer.",
      descBullets: ["Contributed to enterprise modules and database integrations for operational systems"]
    },
    {
      role: "Programmer",
      company: "Lik On Security Ltd",
      companylogo: require("./assets/images/likonLogo.png"),
      date: "Jun 2017 – Jun 2019\n(Hong Kong, On-site)",
      desc: "Internal HRMS systems and admin portals with role-based access control.",
      descBullets: [
        "Designed and implemented RBAC patterns for internal systems",
        "Reduced manual HR incident tracking workload (~30%) through system digitalisation"
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
    subtitle: "Production systems delivered end-to-end: architecture, delivery, and measurable impact.",
    projects: [
      {
        image: require("./assets/images/camforLogo.png"),
        projectName: "Camfor — IoT Monitoring & Control Dashboard\n(Volunteer Cloud Engineer)",
        projectDesc:
          "Built cloud-connected dashboards for IoT auto-watering operations using Laravel + Livewire, focusing on fast UI rendering, clear thresholds/alerts, and scalable deployment patterns. Reduced dashboard latency (~25%) and improved responsiveness (~20%) by refining data flow and rendering strategy. (Private; demo/screenshots available on request.)",
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
        projectName: "Edge Kitchens & Bathrooms — SEO + Lead-Gen Website\n(Freelance)",
        projectDesc:
          "Designed and delivered a responsive company website focused on modern UI/UX, mobile performance, and SEO. Implemented metadata + schema markup, custom templates, galleries/sliders, and contact capture. Ongoing support for content updates and performance improvements.",
        footerLink: [
          {
            name: "Live Website",
            url: "https://edgekitchensandbathrooms.com.au/"
          }
        ]
      },
      {
        image: require("./assets/images/kerryLogo.png"),
        projectName: "Kerry Logistics — Enterprise Workflow Systems\n(Full-Stack)",
        projectDesc:
          "Led delivery and enhancement of multiple internal business systems across HR and operations: (1) HR Attendance (ASP.NET), (2) HRMS (ASP.NET), (3) Incident/Q&A system (PHP + Oracle), and (4) Finance Purchase workflow (React Native + React). Focus areas: data integrity, RBAC, audit trails, performance tuning, and release stability. Improved platform performance (~15%) and reporting efficiency (~20%). (Proprietary; case study/screenshots available on request.)",
        /*
        footerLink: [
          {
            name: "Request Case Study",
            url: "mailto:candycheng.it@gmail.com?subject=Kerry%20Logistics%20Case%20Study%20Request"
          }
        ]
          */
      },
    ],
  display: true // Set false to hide this section, defaults to true
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
