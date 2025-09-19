import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // 👈 for hamburger icons
import logo from "../images/Logo2.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#063d52] sticky top-0 z-50  text-[#cc9f78] shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-[18vw] h-10 md:h-14 md:w-[8vw]"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 text-xl font-light">
          <li className="cursor-pointer hover:text-[#d68b0c] transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-[#d68b0c] transition-colors">
            About
          </li>
          <li className="cursor-pointer hover:text-[#d68b0c] transition-colors">
            Contact
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-[#7d5a0a] via-[#a87c1f] to-[#92720a] cursor-pointer text-[#063d52] font-semibold shadow-xl hover:bg-[#b6730a] hover:scale-105 transition-all duration-300">
          <a
            href="https://wa.me/9052939103?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20a%20table%20at%20Brewtiful%20Cafe."
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Table
          </a>
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#cc9f78]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#063d52] px-6 py-4 flex flex-col gap-4 text-lg font-light">
          <a
            href="#"
            className="hover:text-[#d68b0c] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#d68b0c] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-[#d68b0c] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button className="mt-2 px-6 py-3 rounded-full bg-[#cc9f78] text-[#063d52] font-semibold shadow-lg hover:bg-[#b6730a] transition-all duration-300">
            <a
              href="https://wa.me/9052939103?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20a%20table%20at%20Brewtiful%20Cafe."
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Table
            </a>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
