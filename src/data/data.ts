import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import {
  ExperienceAndEducationItem,
  FullContent,
  LinkItem,
  PersonalInfo,
  Recommendation,
  SkillItem,
  ProjectItem,
  LanguageItem,
} from "../types/Types";
import images from "../assets";
import { getWhatsAppLink } from "../utils/getHrefValue";

export const personalInfo: PersonalInfo = {
  img: images.yam,
  name: "Yamil Pedroso",
  nationality: "Nationality:",
  residencePermit: "Residence Permit:",
  phone: "Phone:",
  email: "Email:",
  website: "Website:",
  address: "Address:",
};

const overview =
  "I am a Fullstack Developer with over 4 years of experience building scalable, responsive, and user-focused applications across the web. My technical expertise spans frontend frameworks like React and backend technologies such as Node.js and Express, with a strong foundation in modern architectures, REST APIs, and clean code practices.";

const continueOverview =
  "In parallel, I am also a passionate digital and traditional artist. My background in traditional and digital art brings a unique creative edge to my development work. Whether I'm coding an interactive component or illustrating a concept, I strive to merge functionality with aesthetic value.";

export const skills: SkillItem[] = [
  {
    name: "JavaScript",
    percent: 90,
  },
  {
    name: "React",
    percent: 90,
  },
  {
    name: "Angular",
    percent: 75,
  },
  {
    name: "TypeScript",
    percent: 85,
  },
  {
    name: "CSS",
    percent: 90,
  },
  {
    name: "HTML",
    percent: 95,
  },
  {
    name: "Tailwind CSS",
    percent: 85,
  },
  {
    name: "Three.js",
    percent: 80,
  },
  {
    name: "Digital Art",
    percent: 90,
  },
  {
    name: "Traditional Art",
    percent: 95,
  },
  {
    name: "Python",
    percent: 80,
  },
  {
    name: "Ruby",
    percent: 75,
  },
  {
    name: "C#",
    percent: 75,
  },
  {
    name: "Node.js",
    percent: 90,
  },
  {
    name: "Django",
    percent: 80,
  },
  {
    name: "MySQL",
    percent: 80,
  },
  {
    name: "NoSQL",
    percent: 85,
  },
  {
    name: "Rest API",
    percent: 85,
  },
  {
    name: "Figma",
    percent: 90,
  },
  {
    name: "Photoshop",
    percent: 95,
  },
  {
    name: "Illustrator",
    percent: 90,
  },
  {
    name: "Docker",
    percent: 80,
  },
  {
    name: "Git",
    percent: 90,
  },
  {
    name: "GitHub",
    percent: 90,
  },
  {
    name: "Gitlab",
    percent: 90,
  },
  {
    name: "Netlify",
    percent: 90,
  },
  {
    name: "Vercel",
    percent: 90,
  },
  {
    name: "Design Pattern",
    percent: 80,
  },
];

export const languages: LanguageItem[] = [
  {
    name: "Spanish",
    level: "Native",
  },
  {
    name: "English",
    level: "C1",
  },
  {
    name: "German",
    level: "B1+",
  },
  {
    name: "Italian",
    level: "B1",
  },
  {
    name: "French",
    level: "A2",
  },
];

const status = "Present";
const experience: ExperienceAndEducationItem[] = [
  {
    title: "Frontend Developer",
    institution: "Squib Ltd - Luzern Switzerland",
    date: `2022 - ${status}`,
    img: images.squib,
    description:
      "Currently working as the lead frontend developer in a startup environment, where I’m responsible for building and maintaining the core UI architecture. I lead the implementation of responsive, accessible, and high-performance interfaces, while collaborating closely with backend and design teams. My role also involves setting frontend standards, choosing tech stacks, and ensuring smooth user experiences across the platform.",
  },
  {
    title: "Full Stack Developer",
    institution: "Qiibee AG - Zug Switzerland",
    date: "2021",
    img: images.qiibee,
    description:
      "A Full Stack Developer focusing on authentication systems and custom configuration for Shopify-based platforms. My tasks included setting up secure user flows, integrating third-party services, and customizing storefronts through both backend logic and frontend components.",
  },
  {
    title: "Proyect Support Artist",
    institution: "Mundus Vita - Zurich Switzerland",
    date: "2018",
    img: images.mundus,
    description:
      "I work as a traditional oil painter supporting a company that builds foldable wooden houses for underserved communities in Africa. My role involves creating a series of sequential paintings that visually explain the different stages of the project — from construction to deployment. These works serve as a narrative tool to communicate the process in a clear and accessible way, blending artistic expression with practical storytelling.",
  },
  {
    title: "Traditional and Digital Artist",
    institution: "Almost Famous Gallery - Havanna Cuba",
    date: "2017 - 2018",
    img: images.famous,
    description:
      "Visual artist working across traditional and digital mediums. I explore ink, oil, and mixed techniques on paper and canvas, while also creating digital pieces using drawing tablets and design tools.",
  },
  {
    title: "Network Engineer and Code mantenance",
    institution: "Casa del Alba Cultural - Havanna Cuba",
    date: "2014 - 2016",
    img: images.alba,
    description:
      "I worked as a network engineer and code maintainer, handling both infrastructure and codebase responsibilities. On the networking side, I managed configurations, optimized connectivity, and resolved issues to keep systems running smoothly. On the software side, I maintained legacy code, refactored where needed, and ensured stability and performance across deployments.",
  },
  {
    title: "Network Engineer and Code mantenance",
    institution: "UNESCO - Havanna Cuba",
    date: "2009 - 2010",
    img: images.unesco,
    description:
      "I worked as a network engineer and code maintainer, handling both infrastructure and codebase responsibilities. On the networking side, I managed configurations, optimized connectivity, and resolved issues to keep systems running smoothly. On the software side, I maintained legacy code, refactored where needed, and ensured stability and performance across deployments.",
  },
];

const education: ExperienceAndEducationItem[] = [
  {
    title: "Fronend Developer",
    institution: "Brainnest, Germany",
    date: "2023",
    img: images.brainnest,
    description:
      "Specialized training program aimed at building dynamic and responsive user interfaces using modern front-end technologies. Covered HTML, CSS, JavaScript, and in-depth React concepts including components, state management, hooks, and routing. Strengthened UI/UX development skills through practical projects and real-world application scenarios.",
  },
  {
    title: "Full Stack Developer",
    institution: "Le Wagon, Zurich",
    date: "2022",
    img: images.leWagon,
    description:
      "Comprehensive program centered on full stack development using Ruby and the Ruby on Rails framework. Covered MVC architecture, RESTful APIs, database integration with PostgreSQL, and front-end technologies such as HTML, CSS, and JavaScript. Developed robust web applications while applying agile methodologies and collaborative coding practices.",
  },
  {
    title: "Full Stack Developer",
    institution: "Constructor Academy, Zurich",
    date: "2020",
    img: images.constructorAca,
    description:
      "Intensive training program focused on building full web applications using both front-end and back-end technologies. Covered HTML, CSS, JavaScript, React, Python, Django, Node.js, Express, MongoDB, and SQL. Gained hands-on experience with version control (Git), deployment, and agile workflows, developing real-world projects in collaborative environments.",
  },
  {
    title: "NoSQL Database, MongoDB, Node.js",
    institution: "Free Code Camp",
    date: "2020",
    img: images.freeCodeCamp,
    description:
      "Engaged in a variety of self-paced, project-based courses covering advanced Python programming, web development, algorithms, and data structures. Strengthened both front-end and back-end skills while cultivating a solid foundation in computer science concepts and problem-solving.",
  },
  {
    title: "SQL Database, Python, and Data Science",
    institution: "Udemy",
    date: "2020",
    img: images.udemy,
    description:
      "Completed various online courses to reinforce and expand technical expertise, covering advanced JavaScript, front-end frameworks, and modern web development. Gained practical knowledge in working with both SQL and NoSQL databases, including data modeling, queries, and integration with applications.",
  },
  {
    title: "JavaScript training",
    institution: "Migros Klubschule, Zurich",
    date: "2019",
    img: images.migros,
    description:
      "Completed a practical course focused on the fundamentals of JavaScript, including DOM manipulation, event handling, and basic application logic. Strengthened front-end development skills and deepened understanding of modern web technologies.",
  },
  {
    title: "Computer Science",
    institution: "Havanna University",
    date: "2003 - 2009",
    img: images.havannaUni,
    description:
      "Comprehensive training in software development, algorithms, data structures, and computer systems. Gained strong problem-solving skills and practical experience through academic projects and hands-on programming.",
  },
];

const projects: ProjectItem[] = [
  {
    img: images.port1,
    title: "SQUIB Ltd.",
    description:
      "Die einfachste Art, attraktive Umfragen zu erstellen, die alle deine Zielgruppen lieben werden.",
    link: "https://squib-testv1.netlify.app/",
    icon: HiArrowTopRightOnSquare,
  },
  {
    img: images.port2,
    title: "Creative Design Studio",
    description:
      "We offer innovative and cutting-edge design solutions to help our clients.",
    link: "https://creative-design-studio-nine.vercel.app/",
    icon: HiArrowTopRightOnSquare,
  },
  {
    img: images.port3,
    title: "Startup Agency",
    description:
      "Dynamic and innovative organization that provides comprehensive support.",
    link: "https://startup-agency-chi.vercel.app/",
    icon: HiArrowTopRightOnSquare,
  },
  {
    img: images.port4,
    title: "Snippets Collection",
    description:
      "Create, share, and organize your code snippets with ease. Perfect for developers.",
    link: "https://custom-snippets-app.netlify.app/",
    icon: HiArrowTopRightOnSquare,
  },
];

export const recommendations: Recommendation[] = [
  {
    avatar: images.Avatar4,
    name: "Marco Zuckenberg",
    position: "Co-Founder, Economist",
    date: "Januar 2025",
    text: "Yamil consistently delivers high-quality work and collaborates effectively with the entire team, always open to feedback and suggestions. His positive attitude make him a pleasure to work with. I appreciate the value and impact he brings to our project.",
  },
  {
    avatar: images.Avatar1,
    name: "Claudia Calderone",
    position: "Manuelle Lymphdrainage Therapeutin",
    date: "Januar 2025",
    text: "Yamil war für meine Anliegen immer verfügbar und hat zeitnah den Kontakt gehalten um meine Anliegen zu bearbeiten, seine technische und Gestalterische Unterstützung war sehr gut. Das Endprodukt der Website, der gestalterische Auftritt gefällt mir und entspricht genau dem was ich mir vorgestellt habe. Gerne empfehle ich Yamil zum erstellen einer neuen Website weiter.",
  },
  {
    avatar: images.Avatar2,
    name: "Pascal Sonder",
    position: "Product Designer",
    date: "Januar 2025",
    text: "Yamil quickly turns my designs into code and everything works as expected, he makes sure the design looks just right and functions well, we work well together, and he always understands what I want, if something doesn’t work, he finds a way to fix it without complicating things",
  },
  {
    avatar: images.Avatar3,
    name: "Pascal Pichler",
    position: "Software Engineer",
    date: "Januar 2025",
    text: "Yamil is able to follow coding guidelines and produces clean code. I can always count on him to deliver code on time, and it usually needs minimal adjustments.",
  },
];

export const links: LinkItem[] = [
  {
    name: "Give me a call",
    items: [
      {
        type: "whatsapp",
        label: "WhatsApp",
        value: getWhatsAppLink(
          "41795326519",
          "I saw your CV and I would like to contact you.",
        ),
      },
    ],
    icon: HiArrowTopRightOnSquare,
  },
  {
    name: "Email",
    items: [
      {
        type: "email",
        label: "Email",
        value: "yamilpedroso@gmail.com",
      },
    ],
    icon: HiArrowTopRightOnSquare,
  },
  {
    name: "Github",
    items: [
      {
        type: "github",
        label: "Github",
        value: "https://github.com/Yamil-Pedroso",
      },
    ],
    icon: HiArrowTopRightOnSquare,
  },
  {
    name: "Website",
    items: [
      {
        type: "website",
        label: "Website",
        value: "https://www.yampe.dev/",
      },
    ],
    icon: HiArrowTopRightOnSquare,
  },
  {
    name: "Linkedin",
    items: [
      {
        type: "linkedin",
        label: "Linkedin",
        value: "https://www.linkedin.com/in/yamil-pedroso/",
      },
    ],
    icon: HiArrowTopRightOnSquare,
  },
];

export const fullContent: FullContent = {
  languages,
  overview,
  continueOverview,
  skills,
  experience,
  projects,
  education,
  recommendations,
  links,
};
