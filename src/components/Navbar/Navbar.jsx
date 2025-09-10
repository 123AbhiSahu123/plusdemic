import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // for hamburger icons
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Treatments", path: "/treatments" },
    { name: "Top Hospitals", path: "/hospitals" },
    { name: "Top Doctors", path: "/doctors" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={Logo} alt="PlusDemic Logo" className="w-40 md:w-48" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-blue-600 ${isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <NavLink to="/contacts">
            <button className="px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 hover:shadow-lg transform transition">
              Contact
            </button>
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg border-t"
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contacts" onClick={() => setIsOpen(false)}>
                <button className="px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 hover:shadow-lg transform transition">
                  Contact
                </button>
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
