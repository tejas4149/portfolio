// export const SkillsInfo = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "React", logo: "../assets/tech_logo/reactjs.png" },
//       { name: "Tailwind", logo: "../assets/tech_logo/tailwindcss.png" },
//       { name: "HTML5", logo: "../assets/tech_logo/html.png" },
//       { name: "CSS3", logo: "../assets/tech_logo/css.png" },
//       { name: "JavaScript", logo: "../assets/tech_logo/javascript.png" },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Node.js", logo: "../assets/tech_logo/nodejs.png" },
//       { name: "Express", logo: "../assets/tech_logo/express.png" },
//       { name: "MongoDB", logo: "../assets/tech_logo/mongodb.png" },
//       { name: "Mongoose", logo: "../assets/tech_logo/mongodb.png" },
//     ],
//   },
//   {
//     title: "Tools & Others",
//     skills: [
//       { name: "Git", logo: "../assets/tech_logo/git.png" },
//       { name: "GitHub", logo: "../assets/tech_logo/github.png" },
//       { name: "Postman", logo: "../assets/tech_logo/postman.png" },
//       { name: "Vite", logo: "../assets/tech_logo/vite.svg" },
//     ],
//   },
// ];
// export const projects = [
//   {
//     id: 1,
//     title: "Loan Management System",
//     description:
//       "A MERN stack application to manage loans, calculate interest, handle repayments, and support user/admin roles.",
//     image: "../assets/work_logo/loan.jpg",
//     tags: ["MERN", "Node.js", "MongoDB", "React", "Tailwind"],
//     github: "https://github.com/tejas4149/Loan_Management_System",
//     webapp: "https://loan-management-live.vercel.app",
//   },
//   {
//     id: 2,
//     title: "Job Portal App",
//     description:
//       "Multi-role platform for employers and job seekers with job posting, application tracking, and admin moderation.",
//     image: "../assets/work_logo/jobportal.jpg",
//     tags: ["React", "Express", "MongoDB", "JWT", "Tailwind"],
//     github: "https://github.com/tejas4149/job-portal",
//     webapp: "https://job-portal-live.vercel.app",
//   },
//   {
//     id: 3,
//     title: "Task Management System",
//     description:
//       "A full-featured hotel booking system with calendar-based availability, admin dashboard, and secure login.",
//     image: "../assets/work_logo/task.jpg",
//     tags: ["MongoDB", "Express", "React", "Tailwind", "Stripe"],
//     github: "https://github.com/tejas4149/Task-Management",
//     webapp: "https://task-management-live.vercel.app",
//   },
// ];

// export const experiences = [
//   {
//     id: 0,
//     logo: "../assets/company_logo/suyotech.png",
//     company: "Suyotech Solutions",
//     role: "Full Stack Developer",
//     duration: "Jan 2025 - Present",
//     location: "Kolhapur, Maharashtra",
//     description: [
//       "Built fullstack solutions using React, Node.js, Express, and MongoDB.",
//       "Designed responsive UIs with Tailwind CSS and optimized frontend performance.",
//       "Developed and integrated RESTful APIs, improving data flow and scalability.",
//       "Collaborated in agile sprints, delivering high-quality code in tight deadlines.",
//     ],
//     skills: [
//       "React",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Tailwind CSS",
//       "REST API",
//     ],
//   },

//   {
//     id: 1,
//     logo: "../assets/company_logo/suyotech.png",
//     company: "Beyound Solution Kolhapur",
//     role: "Frontend Intern",
//     duration: "Oct 2024 - Dec 2024",
//     location: "Remote",
//     description: [
//       "Translated Figma designs into responsive UI using HTML, CSS, and JavaScript.",
//       "Built reusable components with Material UI and Bootstrap.",
//       "Collaborated in teams to deliver clean and accessible interfaces.",
//     ],
//     skills: ["HTML", "CSS", "JavaScript", "Material UI", "Bootstrap", "Figma"],
//   },
// ];

// export const education = [
//   {
//     id: 1,
//     degree: "Master of Computer Applications (MCA)",
//     institution: "Shivaji University",
//     duration: "2023 - 2025",
//     location: "Kolhapur, Maharashtra",
//     grade: "8.5 CGPA",
//     img: "../assets/education_logo/sgu.png",
//     desc: "Pursuing MCA with a focus on full stack development, software engineering, and cloud computing.",
//   },
//   {
//     id: 2,
//     degree: "Bachelor of Computer Applications (BCA)",
//     institution: "XYZ College of Computer Science",
//     duration: "2020 - 2023",
//     location: "Kolhapur, Maharashtra",
//     grade: "8.9 CGPA",
//     img: "../assets/education_logo/gkg.png",
//     desc: "Completed BCA with emphasis on data structures, DBMS, networking, and project development.",
//   },
//   {
//     id: 3,
//     degree: "Higher Secondary Certificate (HSC)",
//     institution: "Maharashtra State Board - ABC Junior College",
//     duration: "2018 - 2020",
//     location: "Kolhapur, Maharashtra",
//     grade: "75%",
//     img: "../assets/education_logo/hsc.png",
//     desc: "Studied Science stream with Computer Science. Developed strong analytical and logical skills.",
//   },
// ];



// constants/index.js

// ------------------- IMPORT TECH LOGOS -------------------
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import jsLogo from "../assets/tech_logo/javascript.png";
import reactLogo from "../assets/tech_logo/reactjs.png";
import tailwindLogo from "../assets/tech_logo/tailwindcss.png";
import nodeLogo from "../assets/tech_logo/nodejs.png";
import expressLogo from "../assets/tech_logo/expressjs.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import githubLogo from "../assets/tech_logo/github.png";
import gitLogo from "../assets/tech_logo/git.png";

// ------------------- IMPORT WORK IMAGES -------------------
import recipeAppImg from "../assets/work_logo/recipe.png";
import loanImg from "../assets/work_logo/loan.jpg";
import jobImg from "../assets/work_logo/job.jpg";

// ------------------- IMPORT COMPANY LOGOS -------------------
import suyotechLogo from "../assets/company_logo/suyotech.png";

// ------------------- IMPORT EDUCATION LOGOS -------------------
import sguLogo from "../assets/education_logo/sgu.png";
import kbpLogo from "../assets/education_logo/kbp.png";

// ------------------- SKILLS DATA -------------------
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NodeJS", logo: nodeLogo },
      { name: "ExpressJS", logo: expressLogo },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "MongoDB", logo: mongodbLogo }],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "Git", logo: gitLogo },
    ],
  },
];

// ------------------- WORK PROJECTS -------------------
export const projects = [
  {
    title: "Recipe App",
    description: "A React app with search and filters using Edamam API.",
    image: recipeAppImg,
    github: "https://github.com/tejas4149/recipeApp",
    live: "https://recipe-app-two-chi.vercel.app/",
  },
  {
    title: "Loan Management System",
    description:
      "MERN app with user authentication, admin dashboard, interest & penalty calculations.",
    image: loanImg,
    github: "https://github.com/tejas4149/loan-frontend",
    live: "https://loan-frontend-kohl.vercel.app/",
  },
  {
    title: "Job Application System",
    description:
      "Admin, employer, and user portals with application management and dashboard.",
    image: jobImg,
    github: "https://github.com/tejas4149/JobApplicationFrontend",
    live: "https://job-application-frontend-teal.vercel.app/",
  },
];

// ------------------- EXPERIENCE -------------------
export const experiences = [
  {
    company: "Suyotech Solutions",
    logo: suyotechLogo,
    title: "Full Stack Developer Intern",
    date: "Jan 2025 - Jun 2025",
    location: "Kolhapur, Maharashtra",
    description: [
      "Developed REST APIs with Node.js, Express, and MongoDB.",
      "Created responsive UI with React and Tailwind CSS.",
      "Integrated backend and frontend workflows.",
      "Implemented authentication and role-based access.",
    ],
    skills: [
      "ReactJS",
      "Tailwind",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Postman",
      "Mongoose",
      "JWT",
    ],
  },
];

// ------------------- EDUCATION -------------------
export const education = [
  {
    img: sguLogo,
    college: "Sanjay Ghodawat University, Kolhapur",
    year: "2023 - 2025",
    degree: "MCA - Master of Computer Applications",
    grade: "Pursuing",
  },
  {
    img: kbpLogo,
    college: "KBP College, Islampur",
    year: "2020 - 2023",
    degree: "BCA - Bachelor of Computer Applications",
    grade: "9.53 CGPA",
  },
];
