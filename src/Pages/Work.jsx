import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="work"
      className="py-10 px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold tracking-wide text-white">Projects</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-lg text-gray-400 mt-4">
          A few projects I’ve built with passion and precision.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-12 bg-[#1f1f38]/80 backdrop-blur-lg border border-purple-700 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={`${index * 150}`}
          >
            {/* Project Image */}
            <div className="w-full md:w-64 h-40 md:h-48 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 italic mb-3">
                {project.role || "Fullstack Project"}
              </p>
              <p className="text-base text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-700/80 text-sm text-white px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black hover:bg-purple-600 hover:text-white px-4 py-2 rounded-full font-medium text-sm transition-all"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-medium text-sm"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
