import React, { useState } from "react";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      year: "Dec 2024 – May 2025 (Full Time)",
      company: "CareerBanao, Noida (UP)",
      title: "Full Stack Developer",
      desc: "Designed and developed responsive, high-performance web applications handling both frontend (ReactJS) and backend (NodeJS) to ensure seamless user experiences.",
    },
    {
      year: "Dec 2023 – Jun 2024 (Internship)",
      company: "Cloud Detox Pvt. Ltd., Noida (UP)",
      title: "Jr Frontend Developer",
      desc: "Developed responsive user interfaces using HTML, CSS, and React, ensuring compatibility and performance across all devices and browsers.",
    },
    {
      year: "Jul 2023 – Nov 2023 (Training)",
      company: "UnCodemy, Noida (UP)",
      title: "ReactJS Trainee",
      desc: "Completed professional ReactJS training with a focus on HTML, CSS, JavaScript, and Bootstrap, gaining strong frontend development skills.",
    },
    {
      year: "Jun 2023 – Present",
      company: "Freelance (Remote)",
      title: "Full Stack Developer",
      desc: "Lead and collaborate with a team of 3–4 developers to build web and mobile applications, focusing on scalable, responsive, and client-driven solutions.",
    },
  ];

  const skills = {
    Technical: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NodeJS",
      "MySQL",
      "API Creation",
    ],
    Tools: ["Git", "GitHub", "VS Code", "Canva", "Overleaf"],
    Marketing: [
      "Social Media Marketing",
      "Content Creation",
      "Banner Design",
      "Uploading",
    ],
    Management: ["Client Communication", "Project Handling"],
  };

  const [activeTab, setActiveTab] = useState<keyof typeof skills>("Technical");

  return (
    <section id="experience" className="relative bg-[#0d0f10] text-white py-10 px-4 md:px-24 overflow-hidden">
      {/* Background Text */}
      <h1 className="absolute top-1 left-8 md:left-16 text-[65px] md:text-[150px] font-extrabold text-white/5 uppercase tracking-widest select-none">
        MY CAREER
      </h1>

      {/* Section Heading */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12 md:mb-18">
        <div>
          <p className="text-green-500 font-semibold uppercase text-sm md:text-base">
            My Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#bfa5ff] leading-tight">
            EXPERIENCE AND <span className="text-green-500">SKILL</span>
          </h2>
        </div>

        <div className="md:w-[50%] text-[#bfa5ff] leading-relaxed border-l-4 border-green-500 pl-4">
          Front-End Developer with strong ReactJS skills and backend experience
          using NodeJS, passionate about building full web solutions.
        </div>
      </div>

      {/* Experience Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#101214] hover:bg-[#131619] transition-all duration-300 p-6 rounded-md shadow-lg hover:shadow-green-500/10"
          >
            <p className="text-sm text-gray-400 mb-1">{exp.year}</p>
            <h3 className="text-green-500 font-extrabold text-lg mb-1 uppercase">
              {exp.title}
            </h3>
            <h4 className="text-white font-semibold text-sm mb-2">
              {exp.company}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="relative z-10 text-center">
        
        <h3 className="text-green-500 font-semibold uppercase text-sm md:text-base mb-6">
          My Skills
        </h3>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {(Object.keys(skills) as (keyof typeof skills)[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? "bg-green-500 text-black border-green-500"
                  : "border-green-500 text-green-400 hover:bg-green-500/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active Skills Buttons */}
        <div
          key={activeTab}
          className="flex flex-wrap justify-center gap-3 transition-all duration-500"
        >
          {skills[activeTab].map((skill, i) => (
            <button
              key={i}
              className="border border-dotted border-[#bfa5ff] text-[#bfa5ff] font-extrabold text-lg px-8 py-4 rounded-2xl hover:bg-[#bfa5ff]/10 transition-all duration-300"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
