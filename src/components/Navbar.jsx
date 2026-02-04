import React, { useState } from "react";
import Logo from "../assets/S_logo.png";
import { FiMenu } from "react-icons/fi";
import OverlayMenu from "./OverlayMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-1000 justify-between px-6 py-4 transition-transform duration-300">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <div className="text-white text-2xl font-bold font-sans">
            Sandip's Portfolio
          </div>

          <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="text-white text-3xl focus:outline-none"
              aria-label="open menu"
            >
              <FiMenu />
            </button>
          </div>
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-70 transition-opacity duration-300"
            >
              Reach Out
            </a>
          </div>
        </div>
      </nav>
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
