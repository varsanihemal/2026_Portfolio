import React, { useState } from "react";
import { images, socialIcons, techIcons } from "../data.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
        </div>

        {/* Desktop Resume Button */}
        <button className="hidden md:flex justify-between items-center bg-black text-white p-3 rounded-md">
          <a
            href="/hemal_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            // className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 inline-block"
          >
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

      {/* Mobile Menu Dropdown - Pushes content down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col bg-white shadow-lg rounded-lg">
          <li className="py-3 px-4 border-b hover:bg-gray-50 cursor-pointer">
            About Me
          </li>
          <li className="py-3 px-4 border-b hover:bg-gray-50 cursor-pointer">
            Skills
          </li>
          <li className="py-3 px-4 border-b hover:bg-gray-50 cursor-pointer">
            Projects
          </li>
          <li className="py-3 px-4 border-b hover:bg-gray-50 cursor-pointer">
            Contact Me
          </li>
          <li className="py-3 px-4">
            <button className="flex justify-between items-center bg-black text-white p-3 rounded-md w-full">
              Resume{" "}
              <img
                src={images.download}
                alt="Download"
                className="ml-2 invert w-5 h-5"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
