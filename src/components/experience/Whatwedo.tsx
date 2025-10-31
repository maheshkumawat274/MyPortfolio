import React from "react";
import { FaShapes, FaGlobe, FaLayerGroup } from "react-icons/fa";

const WhatWeDo: React.FC = () => {
  const services = [
    {
      title: "DESIGN PRINCIPALES",
      icon: <FaShapes className="text-green-400 text-5xl mb-6" />,
      desc: "We create visually appealing, user-centered designs that enhance user experience and reflect your brand’s unique identity across all platforms.",
      bg: "bg-[#101214]",
    },
    {
      title: "UNIQUE VALUES",
      icon: <FaGlobe className="text-green-400 text-5xl mb-6" />,
      desc: "Our team focuses on delivering tailored digital solutions that align with your business goals, ensuring efficiency, creativity, and measurable success.",
      bg: "bg-[#101214]",
    },
    {
      title: "STYLE COMPONENTS",
      icon: <FaLayerGroup className="text-green-400 text-5xl mb-6" />,
      desc: "We implement modern UI components and scalable design systems that guarantee consistency, performance, and maintainability for your projects.",
      bg: "bg-[#101214]",
    },
  ];

  return (
    <section className="relative bg-[#0d0f10] text-[#bfa5ff] py-10 md:py-20 px-4 md:px-24 overflow-hidden">
      {/* Background Text */}
      <h1 className="absolute top-10 left-8 md:left-16 text-[55px] sm:text-[150px] font-extrabold text-white/5 uppercase tracking-widest select-none">
        MY SERVICES
      </h1>

      {/* Section Heading */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
        <div>
          <p className="text-green-500 font-semibold uppercase text-sm md:text-base">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">
            SERVICES AND <span className="text-green-500">SOLUTIONS</span>
          </h2>
        </div>

        <div className="md:w-[50%] text-[#bfa5ff] leading-relaxed border-l-4 border-green-500 pl-4">
          We craft creative digital solutions that combine design innovation,
          development expertise, and strategy to transform ideas into impactful
          experiences.
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} transition-all duration-500 p-10 text-center rounded-md shadow-md hover:scale-105 hover:shadow-green-500/10`}
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3
              className={`text-lg md:text-xl font-bold uppercase mb-3 ${
                index === 1 ? "text-green-400" : "text-green-400"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-sm md:text-base leading-relaxed ${
                index === 1 ? "text-white" : "text-gray-400"
              }`}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
