import React from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

// Import company logos
import suyotechLogo from "../assets/company_logo/suyotech.png";

// Initialize AOS
AOS.init();

const experiences = [
  {
    id: 0,
    logo: suyotechLogo,
    company: "Suyotech Solutions",
    role: "Full Stack Developer",
    duration: "Jan 2025 - Present",
    location: "Kolhapur, Maharashtra",
    description: [
      "Built fullstack solutions using React, Node.js, Express, and MongoDB.",
      "Designed responsive UIs with Tailwind CSS and optimized frontend performance.",
      "Developed and integrated RESTful APIs, improving data flow and scalability.",
      "Collaborated in agile sprints, delivering high-quality code in tight deadlines.",
    ],
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],
  },
  {
    id: 1,
    logo: suyotechLogo,
    company: "Beyound Solution Kolhapur",
    role: "Frontend Intern",
    duration: "Oct 2024 - Dec 2024",
    location: "Remote",
    description: [
      "Translated Figma designs into responsive UI using HTML, CSS, and JavaScript.",
      "Built reusable components with Material UI and Bootstrap.",
      "Collaborated in teams to deliver clean and accessible interfaces.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Material UI", "Bootstrap", "Figma"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[15vw] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          A journey of growth, problem solving, and impact through real-world projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
            transitionSpeed={900}
          >
            <div
              className="bg-[#1c1c2c] p-6 rounded-xl border border-[#333] shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-sm text-gray-400">
                    {exp.duration} • {exp.location}
                  </p>
                </div>
              </div>
              <h4 className="text-md font-medium text-[#a18aff] mb-2">{exp.role}</h4>
              <ul className="text-gray-300 list-disc list-inside space-y-1 mb-4">
                {exp.description.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#2a2a40] text-white py-1 px-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Experience;
