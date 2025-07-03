// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";

const navLinks = [
  { to: "home", icon: <FaHome />, label: "" },
  { to: "about", icon: <FaUserAlt />, label: "" },
  { to: "projects", icon: <FaCode />, label: "" },
  { to: "contact", icon: <FaEnvelope />, label: "" },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black bg-opacity-70 backdrop-blur-md z-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Bigger Logo 128x128 */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-32 w-32 object-contain" />
        </div>

        <ul className="hidden md:flex space-x-6 text-stone-300">
          {navLinks.map(({ to, icon, label }) => (
            <li key={to} className="hover:text-white">
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-64}
                className="flex items-center space-x-2"
              >
                {icon}
                <span className="hidden lg:inline">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
