import React from "react";
import Tilt from "react-parallax-tilt";
import { education } from "../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="max-h-max py-40 px-[10vw] md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">🎓 My Education</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          A timeline of academic achievements and learning milestones.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {education.map((edu) => (
          <Tilt
            key={edu.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={1000}
            className="bg-[#1b1b2f] border border-[#2a2a40] rounded-2xl p-6 shadow-lg backdrop-blur-lg hover:shadow-purple-600/40 transition duration-300 ease-in-out"
          >
            {/* School Logo + Title */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 bg-white rounded-full p-1 shadow-inner">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400">{edu.degree}</h3>
                <p className="text-sm text-gray-400">{edu.school}</p>
              </div>
            </div>

            {/* Date + Grade */}
            <div className="mb-3">
              <span className="text-xs font-medium bg-purple-700/30 text-purple-300 px-2 py-1 rounded mr-2">
                📅 {edu.date}
              </span>
              <span className="text-xs font-medium bg-green-700/30 text-green-300 px-2 py-1 rounded">
                📈 Grade: {edu.grade}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed">
              {edu.desc}
            </p>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Education;
