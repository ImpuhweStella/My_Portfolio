import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full  text-white py-4 px-8 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold  text-[#D14C32]">
          S<span className="text-white">TELLA</span>
        </Link>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-[#D14C32] transition">Home</Link>
          </li>
          <li>
            <Link to="/about-me" className="hover:text-[#D14C32] transition">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-[#D14C32] transition">Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-[#D14C32] transition">Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#D14C32] transition">Contact</Link>
          </li>
        </ul>


        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-center text-lg">
          <li>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D14C32] transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D14C32] transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D14C32] transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D14C32] transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-[#D14C32] transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
