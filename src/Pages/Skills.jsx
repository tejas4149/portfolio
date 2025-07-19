import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../assets/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-h-full py-35 px-[10vw] md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold text-white">My Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          A snapshot of technologies and tools I’ve mastered through hands-on experience.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {SkillsInfo.map((category, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            className="w-full sm:w-[48%] lg:w-[30%] bg-[#1c1c2c] border border-[#333] rounded-2xl p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-4 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-[#262638] p-3 rounded-xl hover:bg-[#33344a] transition"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 mb-2 object-contain"
                  />
                  <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
