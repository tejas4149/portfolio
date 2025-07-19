import React, { useEffect, useState } from "react";
import profile1 from "../../assets/profile1.JPG";
import Tejas_Yadav_Resume from "../Resume/Tejas Yadav Resume.pdf";

const About = () => {
  const roles = ["Fullstack Developer", "App Developer", "UI/UX Designer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1500);
    } else if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      },
      deleting ? 40 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="about"
      className="py-40 px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Tejas Yadav
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4">
            <span className="text-white">I am a </span>
            <span className="text-[#a855f7]">
              {roles[index].substring(0, subIndex)}
            </span>
            <span className="blinking-cursor">|</span>
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            I'm a passionate full-stack MERN developer who enjoys crafting
            modern, responsive web apps. With a strong problem-solving mindset
            and attention to detail, I love building apps that are both
            functional and beautiful. Let's create something amazing together!
          </p>
          <a
            href={Tejas_Yadav_Resume}
            download="Tejas Yadav Resume.pdf"
            className="inline-block py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 text-white"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-purple-700 rounded-full overflow-hidden shadow-lg">
            <img
              src={profile1}
              alt="Tejas Yadav"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
