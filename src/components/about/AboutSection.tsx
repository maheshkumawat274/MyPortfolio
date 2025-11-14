import React from "react";
// import { FaPlay } from "react-icons/fa";

const AboutSection: React.FC = () => {
  return (
    <section
      id="aboutus"
      className="bg-black text-[#bfa5ff] py-10 md:py-20 px-4 md:px-24 flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-hidden"
    >
      {/* LEFT SIDE IMAGE */}
      <div className="relative group w-full md:w-[40%] flex justify-center">
        <img
          src="/imgs/about.png"
          alt="Professional"
          className="rounded-md w-[320px] md:w-[380px] object-cover relative z-10 shadow-lg shadow-[#bfa5ff33]"
        />

        {/* Decorative Dots */}
        <div className="absolute -bottom-6 -left-6 grid grid-cols-6 gap-5 opacity-50 z-20">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-green-500 rounded-full"
            ></span>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE TEXT CONTENT */}
      <div className="relative w-full md:w-[50%] space-y-6 z-10">
        {/* Background Text */}
        <h1 className="absolute top-1/4 sm:top-1/3 -translate-y-1/2 left-0 text-[80px] md:text-[160px] font-extrabold text-[#2b2b2b] uppercase tracking-widest opacity-20 select-none -z-10">
          ABOUT US
        </h1>

        <h3 className="text-[#bfa5ff] font-bold text-lg tracking-wide relative z-10">
          ABOUT US
        </h3>

        <h1 className="text-3xl lg:text-5xl font-extrabold leading-snug uppercase relative z-10">
          I'M A FRONTEND WEB DEVELOPER
        </h1>

        <p className="text-[#bfa5ff] leading-relaxed relative z-10">
          Front-End Developer with strong ReactJS skills and backend experience using NodeJS.
          Capable of handling projects, clients, and full web solutions. Experienced in building
          responsive, user-friendly interfaces and integrating APIs efficiently. Passionate about
          delivering clean code, optimized performance, and complete end-to-end solutions.
        </p>

        <a
          href="/imgs/MYCV.pdf"
          download="Mahesh-Kumar-Resume.pdf"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md flex justify-center items-center gap-2 transition-all duration-300 w-48 relative z-10"
        >
          DOWNLOAD CV
          <span className="text-xl">→</span>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
