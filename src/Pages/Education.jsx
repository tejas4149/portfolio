import React from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

import sguLogo from "../assets/education_logo/sgu.png";
import gkgLogo from "../assets/education_logo/gkg.png";
import hscLogo from "../assets/education_logo/hsc.png";

AOS.init();

const educationList = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Sanjay Ghodawat University",
    duration: "2023 - 2025",
    location: "Kolhapur, Maharashtra",
    grade: "8.5 CGPA",
    img: sguLogo,
    desc: "Pursuing MCA with a focus on full stack development, software engineering, and cloud computing.",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Gopal Krishna Gokhale College",
    duration: "2020 - 2023",
    location: "Kolhapur, Maharashtra",
    grade: "8.2 CGPA",
    img: gkgLogo,
    desc: "Completed BCA with emphasis on data structures, DBMS, networking, and project development.",
  },
  {
    id: 3,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board - ABC Junior College",
    duration: "2018 - 2020",
    location: "Kolhapur, Maharashtra",
    grade: "83.40%",
    img: hscLogo,
    desc: "Studied Science stream with Computer Science. Developed strong analytical and logical skills.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 px-[10vw] md:px-[7vw] lg:px-[15vw] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* ✨ Header Title */}
         <div className="text-center mb-5" data-aos="fade-down">
        <h2 className="text-4xl font-bold">Education</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3" />
        
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {educationList.slice(0, 2).map((edu, index) => (
          <Tilt
            key={edu.id}
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
                  src={edu.img}
                  alt={edu.institution}
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-gray-400">{edu.duration}</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                </div>
              </div>
              <p className="text-md text-[#a18aff] font-semibold mb-1">
                {edu.degree}
              </p>
              <p className="text-sm text-gray-300 mb-2">{edu.desc}</p>
              <p className="text-sm text-gray-400 font-semibold">
                Grade: {edu.grade}
              </p>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Centered 3rd education block */}
      <div className="flex justify-center mt-10">
        <Tilt
          key={educationList[2].id}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          scale={1.03}
          transitionSpeed={900}
        >
          <div
            className="bg-[#1c1c2c] w-full max-w-md p-6 rounded-xl border border-[#333] shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay={2 * 150}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={educationList[2].img}
                alt={educationList[2].institution}
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {educationList[2].institution}
                </h3>
                <p className="text-sm text-gray-400">
                  {educationList[2].duration}
                </p>
                <p className="text-sm text-gray-500">
                  {educationList[2].location}
                </p>
              </div>
            </div>
            <p className="text-md text-[#a18aff] font-semibold mb-1">
              {educationList[2].degree}
            </p>
            <p className="text-sm text-gray-300 mb-2">
              {educationList[2].desc}
            </p>
            <p className="text-sm text-gray-400 font-semibold">
              Grade: {educationList[2].grade}
            </p>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Education;
