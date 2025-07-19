import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { experiences } from "../constants";
import logo from "../assets/company_logo/suyotech.png"

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="experience"
      className="py-10 px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold tracking-wide">Experience</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-lg text-gray-400 mt-4">
          My journey so far in the world of development.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-16">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row items-center gap-12 bg-[#1f1f38]/80 backdrop-blur-lg border border-purple-700 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={`${index * 150}`}
          >
            {/* Logo */}
            <div className="w-32 h-32 min-w-[128px] bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src={exp.logo || "/company-placeholder.svg"}
                alt={exp.company}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">{exp.role}</h3>
              <p className="text-lg text-gray-300 mb-1">
                {exp.company} • {exp.location}
              </p>
              <p className="text-sm text-gray-400 italic mb-4">{exp.duration}</p>

              <ul className="list-disc pl-5 text-base text-gray-300 space-y-3 leading-relaxed">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="hover:translate-x-1 hover:text-purple-400 transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {exp.skills && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-700/80 text-sm text-white px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
