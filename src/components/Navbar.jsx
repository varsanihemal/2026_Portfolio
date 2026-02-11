import React, { useState } from "react";
import { images, socialIcons, techIcons } from "../data.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="pl-[25px] pr-[34px] mt-[24px] mb-[24px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={images.logo1} alt="Logo" />
          <h3 className="text-xl font-bold">Hemal Varsani</h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex justify-between items-center gap-3">
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer"
            >
              About Me
            </li>
            <li
              onClick={() => scrollToSection("skills")}
              className="cursor-pointer"
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer"
            >
              Contact Me
            </li>
          </ul>
        </div>

        {/* Desktop Resume Button */}
        <button className="hidden md:flex justify-between items-center bg-black text-white p-3 rounded-md">
          <a href="/hemal_resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </button>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col bg-white shadow-lg rounded-lg">
          <li
            onClick={() => scrollToSection("about")}
            className="py-3 px-4 border-b hover:bg-gray-50 cursor-pointer"
          >
            About Me
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="py-3 px-4 border-b hover:bg-gray-50 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="py-3 px-4 border-b hover:bg-gray-50 cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="py-3 px-4 border-b hover:bg-gray-50 cursor-pointer"
          >
            Contact Me
          </li>
          <li className="py-3 px-4">
            <a
              href="/hemal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center bg-black text-white p-3 rounded-md w-full"
            >
              Resume
              <img
                src={images.download}
                alt="Download"
                className="ml-2 invert w-5 h-5"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
