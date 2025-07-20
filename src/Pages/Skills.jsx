import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import jsLogo from "../assets/tech_logo/javascript.png";
import reactLogo from "../assets/tech_logo/reactjs.png";
import tailwindLogo from "../assets/tech_logo/tailwindcss.png";
import nodeLogo from "../assets/tech_logo/nodejs.png";
import expressLogo from "../assets/tech_logo/express.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import viteLogo from "../assets/tech_logo/vite.svg";

// Skill data
const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: "../assets/tech_logo/reactjs.png" },
      { name: "Tailwind", logo: "../assets/tech_logo/tailwindcss.png" },
      { name: "HTML5", logo: "../assets/tech_logo/html.png" },
      { name: "CSS3", logo: "../assets/tech_logo/css.png" },
      { name: "JavaScript", logo: "../assets/tech_logo/javascript.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "../assets/tech_logo/nodejs.png" },
      { name: "Express", logo: "../assets/tech_logo/express.png" },
      { name: "MongoDB", logo: "../assets/tech_logo/mongodb.png" },
      { name: "Mongoose", logo: "../assets/tech_logo/mongodb.png" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", logo: "../assets/tech_logo/git.png" },
      { name: "GitHub", logo: "../assets/tech_logo/github.png" },
      { name: "Postman", logo: "../assets/tech_logo/postman.png" },
      { name: "Vite", logo: "../assets/tech_logo/vite.svg" },
    ],
  },
];

const logoMap = {
  "../assets/tech_logo/html.png": htmlLogo,
  "../assets/tech_logo/css.png": cssLogo,
  "../assets/tech_logo/javascript.png": jsLogo,
  "../assets/tech_logo/reactjs.png": reactLogo,
  "../assets/tech_logo/tailwindcss.png": tailwindLogo,
  "../assets/tech_logo/nodejs.png": nodeLogo,
  "../assets/tech_logo/express.png": expressLogo,
  "../assets/tech_logo/mongodb.png": mongodbLogo,
  "../assets/tech_logo/git.png": gitLogo,
  "../assets/tech_logo/github.png": githubLogo,
  "../assets/tech_logo/postman.png": postmanLogo,
  "../assets/tech_logo/vite.svg": viteLogo,
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="py-25 px-[10vw] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl font-bold">My Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3" />
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Technologies I’ve worked with and tools I regularly use.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {SkillsInfo.map((category, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={800}
            className="w-full sm:w-[46%] md:w-[45%] lg:w-[22%]"
          >
            <div
              className="bg-[#1f1f2f] p-6 rounded-2xl shadow-lg border border-[#2f2f48]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-center mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-[#29293d] p-3 rounded-lg hover:scale-105 hover:bg-[#33344a] transition-all duration-300"
                  >
                    <img
                      src={logoMap[skill.logo]}
                      alt={skill.name}
                      className="w-10 h-10 object-contain mb-2"
                    />
                    <p className="text-sm text-gray-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
