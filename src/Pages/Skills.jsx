import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Skill data with proficiency (out of 100)
const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 88 },
      { name: "Mongoose", level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Vite", level: 80 },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-[8vw] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl font-bold">My Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3" />
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          A breakdown of my skills with visual progress.
        </p>
      </div>

      <div className="space-y-12 max-w-3xl mx-auto">
        {SkillsInfo.map((category, index) => {
          // Choose color based on category title
          const barColor =
            category.title === "Frontend"
              ? "bg-purple-500"
              : category.title === "Backend"
              ? "bg-green-500"
              : "bg-blue-500";

          return (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-2xl font-semibold mb-4 text-[#bb86fc]">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${barColor}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
