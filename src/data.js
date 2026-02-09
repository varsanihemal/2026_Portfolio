// Image Assets
import applePng from './assets/apple.png';
import downPng from './assets/down.png';
import downloadPng from './assets/download.png';
import forwardButtonPng from './assets/Forward Button.png';
import main from './assets/main.png';
import leftPng from './assets/left.png';
import logo1Png from './assets/logo 1.png';
import logoWebsitePng from './assets/logo=website.png';
import materialSymbolsMenuPng from './assets/material-symbols_menu.png';
import rightPng from './assets/right.png';
import socialIcon1Png from './assets/Social icon (1).png';
import socialIcon2Png from './assets/Social icon (2).png';
import socialIcon3Png from './assets/Social icon (3).png';
import socialIcon4Png from './assets/Social icon (4).png';
import socialIconPng from './assets/Social icon.png';
import starPng from './assets/star.png';
import upPng from './assets/up.png';
import companyLogoPng from './assets/company.jpg';
import aboutImg from './assets/about.png';

// Project Images
import pixelImg from './assets/pixel.jpg';
import sneakersImg from './assets/sneakers.jpg';
import profileImg from './assets/3dprofile.png';

// SVG Icons - Technology Stack
import iconExpressSvg from './assets/icon-express.svg';
import iconFigmaSvg from './assets/icon-figma.svg';
import iconGitSvg from './assets/icon-git.svg';
import iconJavascriptSvg from './assets/icon-javscript.svg';
import iconMongodbSvg from './assets/icon-mongodb.svg';
import iconNodejsSvg from './assets/icon-nodejs.svg';
import iconPostgresqlSvg from './assets/icon-postgresql.svg';
import iconReactSvg from './assets/icon-react.svg';
import iconSassSvg from './assets/icon-sass.svg';
import iconTailwindcssSvg from './assets/icon-tailwindcss.svg';
import iconTypescriptSvg from './assets/icon-typescript.svg';

// Organized exports
export const images = {
  apple: applePng,
  down: downPng,
  download: downloadPng,
  forwardButton: forwardButtonPng,
  mainImg: main,
  left: leftPng,
  logo1: logo1Png,
  logoWebsite: logoWebsitePng,
  materialSymbolsMenu: materialSymbolsMenuPng,
  right: rightPng,
  star: starPng,
  up: upPng,
  companyLogo: companyLogoPng,
  aboutImg: aboutImg,
  // Project images
  pixelImg: pixelImg,
  sneakersImg: sneakersImg,
  profileImg: profileImg
};

export const socialIcons = {
  icon1: socialIcon1Png,
  icon2: socialIcon2Png,
  icon3: socialIcon3Png,
  icon4: socialIcon4Png,
  icon: socialIconPng
};

export const techIcons = {
  express: iconExpressSvg,
  figma: iconFigmaSvg,
  git: iconGitSvg,
  javascript: iconJavascriptSvg,
  mongodb: iconMongodbSvg,
  nodejs: iconNodejsSvg,
  postgresql: iconPostgresqlSvg,
  react: iconReactSvg,
  sass: iconSassSvg,
  tailwindcss: iconTailwindcssSvg,
  typescript: iconTypescriptSvg
};

// Combined export for convenience
export const assets = {
  images,
  socialIcons,
  techIcons
};

// Skills data
export const skills = {
  languages: [
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ],
  frameworks: [
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: ".NET Core", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
  ],
  databases: [
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "SQLite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
  ],
  tools: [
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS Lambda", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Expo", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Android Studio", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Webpack", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Netlify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    { name: "Vercel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" }
  ],
  testing: [
    { name: "Jest", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "CI/CD", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ]
};

// Experience data
export const experience = [
  {
    id: 1,
    company: "Eleven59",
    logo: companyLogoPng,
    position: "Full Stack Developer Intern",
    location: "Winnipeg, MB",
    duration: "Aug 2024 – Dec 2024",
    responsibilities: [
      "Built a cross-platform mobile application (iOS & Android) with React Native and TypeScript using containerized development environments with Docker, implementing comprehensive unit and feature testing that achieved 85% code coverage and improved UI consistency by 30%.",
      "Designed and shipped reusable component libraries, reducing code duplication by 25% and accelerating team development workflows.",
      "Architected and integrated RESTful web services using FastAPI backend with SQL database optimization, debugging complex backend issues and implementing solutions that enabled real-time data synchronization while boosting performance by 20% through systematic problem analysis and query optimization.",
      "Conducted peer code reviews and participated in Agile development cycles (sprint planning, design reviews, stand-ups), ensuring code quality standards and contributing to a 10% increase in sprint productivity across cross-functional teams.",
      "Managed Git workflows and coordinated with a 4-developer team to hit major milestones, reducing delivery delays by 10%."
    ]
  }
];

// Projects data
export const projects = [
  {
    id: 1,
    title: "Interactive 3D Portfolio",
    image: profileImg,
    technologies: ["React", "Three.js", "Tailwind CSS", "TypeScript"],
    description: [
      "Developed responsive 3D developer portfolio using React, Three.js, and Tailwind CSS with TypeScript-based components for type safety and maintainability",
      "Optimized application performance through code splitting, lazy loading, and asset optimization, achieving 30% reduction in page load times",
      "Integrated analytics tracking to monitor user engagement metrics, page interactions, and visitor behavior patterns for data-driven portfolio improvements"
    ],
    demoLink: "https://hemal-varsani-phi.vercel.app/",
    codeLink: "https://github.com/varsanihemal/Portfolio"
  },
  {
    id: 2,
    title: "PixelPulse Store",
    image: pixelImg,
    technologies: ["PHP", "MySQL", "PostgreSQL"],
    description: [
      "Built full-stack game e-commerce platform using PHP and MySQL/PostgreSQL with secure user authentication, session management, and password hashing",
      "Engineered custom CAPTCHA validation system for review submissions to prevent spam and ensure authentic user feedback",
      "Optimized SQL queries with proper indexing and query restructuring, improving database performance by 15% and reducing server response times"
    ],
    codeLink: "https://github.com/varsanihemal/PixelPulse"
  },
  {
    id: 3,
    title: "Sneakers E-Commerce Store",
    image: sneakersImg,
    technologies: ["Ruby on Rails", "Stripe", "PostgreSQL"],
    description: [
      "Developed full-stack e-commerce application using Ruby on Rails and PostgreSQL with comprehensive admin dashboard for inventory and order management",
      "Integrated Stripe payment processing with webhook handling and error recovery mechanisms, increasing checkout completion rate by 15%",
      "Implemented real-time product analytics dashboard to track sales trends, inventory levels, and customer purchasing patterns"
    ],
    codeLink: "https://github.com/varsanihemal/Sneakers"
  }
];

// Education data
export const education = {
  institution: "Red River College",
  location: "Winnipeg, MB",
  degree: "Diploma in Full Stack Web Development",
  status: "Honours Graduate",
  gpa: "3.80",
  duration: "Aug. 2023 – Dec 2024"
};

// Contact data
export const contact = {
  phone: "(431) 668-0244",
  email: "hemalvarsani123@gmail.com",
  linkedin: "linkedin.com/in/hemal-varsani/",
  portfolio: "https://hemal-varsani-phi.vercel.app/",
  location: "Willing To Relocate"
};

// Default export
export default assets;