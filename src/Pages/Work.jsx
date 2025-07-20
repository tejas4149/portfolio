import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

import taskImg from "../assets/work_logo/task.jpg";
import loanImg from "../assets/work_logo/loan.jpg";
import jobImg from "../assets/work_logo/jobportal.jpg";

AOS.init();

const projects = [
  {
    name: "Admin Task Management",
    description: "Built using MERN stack with admin & user roles, task filtering, comments, and real-time updates.",
    image: taskImg,
    link: "#",
  },
  {
    name: "Loan Management System",
    description: "MERN app supporting loans, payments, penalties, interest, and OTP authentication.",
    image: loanImg,
    link: "#",
  },
  {
    name: "Job Portal App",
    description: "Admin approves jobs; employers post and users apply. Features dashboards and role-based routing.",
    image: jobImg,
    link: "#",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[15vw] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Real-world applications I’ve built to solve meaningful problems using the MERN stack.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.02} transitionSpeed={1000}>
            <div
              className="bg-[#1c1c2c] rounded-xl border border-[#333] shadow-md hover:shadow-xl overflow-hidden transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-white text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Work;
