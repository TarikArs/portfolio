import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  espc,
  threejs,
  company,
  eliac,
  mobiletic,
  colorElephant,
  laravel,
  archives,
  sparc,
  ekarto
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "PHP & wordpress Developer",
    company_name: "Anzar Media",
    icon: company,
    iconBg: "#383E56",
    date: "2012 - 2015",
    points: [
      "Building web applications using JavaScript, PHP, and the Yii Framework.",
      "Creating websites using wordpress for many clients",
    ],
  },
  {
    title: "PHP developer",
    company_name: "Eliac Group",
    icon: eliac,
    iconBg: "#fff",
    date: "2015 - 2019",
    points: [
      "Developing and maintaining server-side web application logic using PHP ; web application to manage schools data.",
    ],
  },
  {
    title: "Laravel & Angular & Reactjs Developer",
    company_name: "Mobiletic Switzerland",
    icon: mobiletic,
    iconBg: "#fff",
    date: "2019 - Present",
    points: [
      "Led a team of developers using Agile methodologies such as Scrum and Kanban to manage tasks and ensure on-time delivery of projects.",
      "Developed scalable and efficient backend solutions using Laravel and PHP, integrating with SQL and NoSQL databases to create robust applications.",
      "eveloping the front-end of e-learning platforms using Angular with RxJS",
      "using NodeJS / ReactJS and Mongo DB in developing a data analytics system for e-Learning platforms. This project required a deep understanding of data processing and analysis to extract insights and trends from large volumes of data.",
    ],
  },
  {
    title: "Freelancer Javascript ECMA6 Developer",
    company_name: "Assitec Belgium",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jun 2023",
    points: [
      "Building and maintaining user interfaces for Catalog parts application using Javascript ES6",
      "Collaborating with the back-end development team to integrate front-end components with the server-side infrastructure.",
    ],
  },
  {
    title: "Freelancer ReactJs Developer",
    company_name: "Color Elephant Portugal",
    icon: colorElephant,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Apr 2022",
    points: [
      "Creating GYM app using ReactJs and Redux Toolkit",
      "Collaborating with designers, developers, and project managers to analyze and define project requirements and scope",
    ],
  },
  {
    title: "Freelancer Laravel Developer",
    company_name: "eKarto Switzerland",
    icon: company,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Creating a laravel application for sharing laws notes",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Catalog parts",
    description:
      "Web-based platform that allows users to search, buy, and manage parts of a catalog (weaving machines).",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: espc,
    source_code_link: "",
  },
  {
    name: "e-learning platforms (+20 platforms)",
    description:
      "Developed with Mobiletic team, this platforms allows users to create and manage courses, and provides a variety of tools for students to learn and interact with each other.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: archives,
    source_code_link: "",
  },
  {
    name: "Sparc pro a Wordpress website",
    description:
      "Sparc Pro: The Ultimate Spare Parts Catalog Software for Industrial Machinery",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      }
    ],
    image: sparc,
    source_code_link: "https://sparcpro.com/",
  },
  {
    name: "eKarto a Laravel platform",
    description:
      "eKarto is a platform that allows users to share laws notes",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      }
    ],
    image: ekarto,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
