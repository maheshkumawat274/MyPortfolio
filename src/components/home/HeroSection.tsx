
import React from "react";
import LightRays from "../reactbits/LightRays";
import './homesection.css'
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-black text-[#bfa5ff] w-full px-4 md:px-24 py-6 md:py-24 overflow-hidden h-[120vh] md:h-[99vh]">
      {/* --- Background Layer (LightRays + Image) --- */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        {/* Background Image blended with rays */}
        <img
          src="/imgs/mahesh2.png"
          alt="Professional"
          className=" w-[450px] lg:w-[550px] opacity-80 object-contain mix-blend-screen pointer-events-none select-none homeimg"
        />
      </div>

      {/* --- Hero Content (on top of background) --- */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between  h-full">
        {/* LEFT TEXT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6 text-start sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-bold sm:font-extrabold leading-tight uppercase">
            <span className="text-green-500">Imagination</span>{" "}
            <span className="text-[#bfa5ff]">is more</span>
            <br />
            <span className="text-[#bfa5ff]">important than</span>{" "}
            <span className="text-[#bfa5ff]">knowledge</span>
          </h1>

          <p className="text-[#bfa5ff] text-base md:text-lg border-l-2 border-green-500 pl-4 mx-auto md:mx-0">
            Together we the people achieve more than any single person could ever do alone.
          </p>

          <a href="#contactus" className="bg-green-500 hover:bg-green-600 text-black cursor-pointer font-semibold px-6 py-3 rounded-md flex items-center justify-center md:justify-start gap-2 transition-all duration-300 mx-auto md:mx-0 cursor-target w-56">
            GETTING STARTED
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
