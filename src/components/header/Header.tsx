import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Header: React.FC = () => {
  const [showTopHeader, setShowTopHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide top header on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowTopHeader(false);
      } else {
        setShowTopHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed w-full top-0 z-50 font-sans transition-all duration-500">
      {/* --- TOP HEADER --- */}
      <div
        className={`hidden md:flex justify-between items-center bg-gray-800 text-[#bfa5ff] px-4 sm:px-24 py-1 transition-all duration-500 ${
          showTopHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex items-center gap-2 text-sm">
          
            <div className="bg-green-500 text-[#bfa5ff] px-2 py-1 rounded-md flex items-center gap-1">
              <a
               href="https://wa.me/916376228917"
               target="_blank"
               rel="noopener noreferrer"
              > 💬</a>
           
          </div>
          <p>Let’s Talk on WhatsApp...</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/maheshkumawat274" className="hover:text-green-400">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/mahesh-kumawat-49a3b3265/" className="hover:text-green-400">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/maheshkumawat274/" className="hover:text-green-400">
            <FaInstagram />
          </a>
          <a  href="tel:+916376228917" className="bg-green-500 hover:bg-green-600 text-black px-4 py-1 rounded-md">
            Contact Me
          </a>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      <div
        className={`bg-black text-[#bfa5ff] flex justify-between items-center px-4 sm:px-24 py-3 shadow-lg fixed w-full transition-all duration-500 ${
          showTopHeader ? "top-0 md:top-10" : "top-0"
        }`}
      >
        {/* Logo */}
<div className="flex items-center justify-center overflow-hidden h-14 md:h-16">
  <img
    src="/imgs/logo2.png"
    alt="Mahesh Logo"
    className="object-cover w-48 md:w-56 scale-125"
  />
</div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <a href="#home" className="hover:text-green-400">
            Home
          </a>
          <a href="#aboutus" className="hover:text-green-400">
            About Us
          </a>
          <a href="#experience" className="hover:text-green-400">
            Experience
          </a>
          <a href="#projects" className="hover:text-green-400">
            Projects
          </a>
          <a href="#contactus" className="hover:text-green-400">
            Contact Us
          </a>

        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-green-400 text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* --- Mobile Side Menu --- */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-[#bfa5ff] transform transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center bg-black px-4 py-3 border-b border-gray-700">
          {/* Logo */}
          <div className="flex items-center justify-center overflow-hidden h-14 md:h-16">
            <img
              src="/imgs/logo2.png"
              alt="Mahesh Logo"
              className="object-cover w-48 md:w-56 scale-125"
            />
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-green-400"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-6 py-6 text-lg">
          <a href="#home" className="hover:text-green-400 transition-all">
            Home
          </a>
          <a href="#aboutus" className="hover:text-green-400 transition-all">
            About Us
          </a>
          <a href="#experience" className="hover:text-green-400 transition-all">
            Experience
          </a>
          <a href="#projects" className="hover:text-green-400 transition-all">
            Projects
          </a>
          <a href="#contactus" className="hover:text-green-400 transition-all">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500"
        />
      )}
    </header>
  );
};

export default Header;
