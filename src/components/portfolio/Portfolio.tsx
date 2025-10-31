import React from "react";

interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
  github?: string;
}

const projects: Project[] = [
  
  {
    name: "Dubai Properties Hub",
    category: "Property Management",
    description:
      "An elegant and modern property platform offering listings, management tools, and virtual tour integrations.",
    image: "/imgs/properties.webp",
    link: "https://owndubaiproperties.netlify.app/",
    github: "https://github.com/maheshkumawat274/IMproperties/tree/main/RealestateUi",
  },
  {
    name: "Reservation of flights",
    category: "Travel & Tourism",
    description:
      "A travel-focused web app offering destination highlights, trip booking options, and user travel guides.",
    image: "/imgs/travelling.jpg",
    link: "https://reservationflight.netlify.app/",
    github: "https://github.com/maheshkumawat274/TravelingWebsite",
  },
  {
    name: "Nexify Digital",
    category: "IT / Web Services",
    description:
      "Official company website for Nexify Digital — an innovative IT agency offering web development, marketing, and software solutions.",
    image: "/imgs/nexify.jpg",
    link: "https://nexifydigital.in/",
    github: "https://github.com/maheshkumawat274/NexifyDigital",
  },
  {
    name: "Nexify Digital Portfolio",
    category: "Company Portfolio",
    description:
      "Dedicated portfolio website for Nexify Digital showcasing company achievements, client projects, and creative case studies.",
    image: "/imgs/nexifyportfolio.jpg",
    link: "https://portfolio.nexifydigital.in/",
    github: "https://github.com/maheshkumawat274/NexifyDigitalPortfolio",
  },
  {
    name: "Rohit Prashar Portfolio",
    category: "Creator Portfolio",
    description:
      "Creator portfolio website featuring projects, biography, and insights.",
    image: "/imgs/rohit.jpeg",
    link: "https://rohitprashar.com/",
    github: "https://github.com/maheshkumawat274/rohitportfolio",
  },
  {
    name: "Global Heart Clinic",
    category: "Medical / Healthcare",
    description:
      "Specialist online platform for heart care, providing medical consultations and tailored healthcare services.",
    image: "/imgs/clinic.jpg",
    link: "https://globalheartclinic.com/",
    github: "https://github.com/maheshkumawat274/GlobalClinic",
  },
  {
    name: "Well Global Inc.",
    category: "Corporate / Business",
    description:
      "Global solutions and services showcased with a polished business-oriented layout.",
    image: "/imgs/inc.jpg",
    link: "https://wellglobalinc.com/",
    github: "https://github.com/maheshkumawat274/NewLogisticsWebsite",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="relative bg-[#0d0f10] text-[#bfa5ff] py-10 px-4 md:px-24 overflow-hidden">
      {/* Background Text */}
      <h1 className="absolute top-10 left-8 md:left-16 text-[50px] SM:text-[150px] font-extrabold text-white/5 uppercase tracking-widest select-none">
        MY PROJECTS
      </h1>

      {/* Section Heading */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
        <div>
          <p className="text-green-500 font-semibold uppercase text-sm md:text-base">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">
            LATEST WORKING <span className="text-green-500">PROJECTS</span>
          </h2>
        </div>

        <div className="md:w-[50%] text-[#bfa5ff] leading-relaxed border-l-4 border-green-500 pl-4">
          I focus on crafting responsive, high-performing websites that blend clean UI design with strong
          functionality. From sleek business sites to modern portfolios and creative digital experiences — I bring ideas to life through code, precision, and creativity.
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#101214] text-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 border border-[#1e2024]"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-1 text-green-400">
                {p.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{p.category}</p>
              <p className="text-gray-300 mb-6 text-sm">{p.description}</p>

              {/* Buttons Row */}
              <div className="flex justify-between items-center gap-3">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-md text-sm transition-all duration-300"
                >
                  View Site
                </a>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold px-4 py-2 rounded-md text-sm transition-all duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
