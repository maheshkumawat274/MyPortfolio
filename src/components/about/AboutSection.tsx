import React from "react";
// import { FaPlay } from "react-icons/fa";

const AboutSection: React.FC = () => {
  return (
    <section id="aboutus" className="bg-black text-[#bfa5ff] py-10 md:py-20 px-4 md:px-24 flex flex-col md:flex-row items-center justify-center gap-12">
      
      {/* LEFT SIDE IMAGE WITH PLAY BUTTON */}
      <div className="relative group w-full md:w-[40%] flex justify-center">
        <img
          src="/imgs/about.png"
          alt="Professional"
          className="rounded-md w-[320px] md:w-[380px] object-cover"
        />

        {/* Play Button Overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-500/80 hover:bg-green-600 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300">
            <FaPlay className="text-[#bfa5ff] text-2xl md:text-3xl ml-1" />
          </div>
        </div> */}

        {/* Decorative Dots */}
        <div className="absolute -bottom-6 -left-6 grid grid-cols-6 gap-5 opacity-50 z-10">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE TEXT CONTENT */}
      <div className="w-full md:w-[50%] space-y-6">
        <h3 className="text-[#bfa5ff] font-bold text-lg tracking-wide">
          ABOUT US
        </h3>
        <h1 className="text-3xl lg:text-5xl font-extrabold leading-snug uppercase">
          I'M A FRONTEND WEB DEVELOPER
        </h1>
        <p className="text-[#bfa5ff] leading-relaxed">
          Front-End Developer with strong ReactJS skills and backend experience using NodeJS. Capable of handling projects, clients, and full web solutions. Experienced in building responsive, user-friendly interfaces and integrating APIs efficiently. Passionate about delivering clean code, optimized performance, and complete end-to-end solutions.
        </p>

        <a
          href="/MaheshResume.pdf"  // apne public folder me PDF ka exact naam yahan likh
          download="Mahesh-Kumar-Resume.pdf"
          className="bg-green-500 hover:bg-green-600 text-black cursor-pointer font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 cursor-target w-48"
        >
          DOWNLOAD CV
          <span className="text-xl">→</span>
        </a>
        
      </div>
    </section>
  );
};

export default AboutSection;
