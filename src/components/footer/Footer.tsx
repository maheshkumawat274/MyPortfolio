import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#bfa5ff] pt-16 pb-8 px-4 md:px-24">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* --- Left: About --- */}
        <div>
          <img src="/imgs/logo2.png" alt="Mahesh Logo" className="w-40 mb-5 -mx-6" />
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            I design and develop modern, responsive, and performance-driven
            websites that help brands grow online. Let’s connect and bring your
            ideas to life through clean code and creative design.
          </p>
        </div>

        {/* --- Middle: Navigation Links --- */}
        <div className="flex flex-col items-start">
          <h3 className="text-green-500 font-bold uppercase mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a
                href="#home"
                className="hover:text-green-500 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-green-500 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-green-500 transition-all duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-500 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-500 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* --- Right: Contact & Social --- */}
        <div className="text-start md:text-right">
          <h3 className="text-green-500 font-bold uppercase mb-4 tracking-wide">
            Let’s Build Together
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Have a project in mind? Reach out via WhatsApp or explore my work
            below.
          </p>

          <a
            href="https://wa.me/916376228917"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-2 rounded-md mb-6 transition-all duration-300"
          >
            💬 Chat on WhatsApp
          </a>

          {/* Social Icons */}
          <div className="flex justify-start md:justify-end gap-4 text-lg">
            <a
              href="https://github.com/maheshkumawat274"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-kumawat-49a3b3265/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-all"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com/maheshkumawat274"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/maheshkumawat274"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-all"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* --- Freelancing & Services Section --- */}
      <div className="text-center mt-12 mb-8">
        <h3 className="text-green-500 font-bold uppercase mb-2 tracking-wide">
          Freelancing
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          I’m also available for freelance projects — providing full IT services
          from website creation to digital marketing.
        </p>

        <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          <li className="bg-[#101214] px-4 py-2 rounded-md border border-green-500/30 hover:bg-green-500/20 transition-all duration-300">
            Website Development
          </li>
          <li className="bg-[#101214] px-4 py-2 rounded-md border border-green-500/30 hover:bg-green-500/20 transition-all duration-300">
            App Development
          </li>
          <li className="bg-[#101214] px-4 py-2 rounded-md border border-green-500/30 hover:bg-green-500/20 transition-all duration-300">
            Software Development
          </li>
          <li className="bg-[#101214] px-4 py-2 rounded-md border border-green-500/30 hover:bg-green-500/20 transition-all duration-300">
            Digital Marketing
          </li>
        </ul>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-500 font-semibold">Mahesh</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
