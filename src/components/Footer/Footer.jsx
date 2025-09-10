import React from "react";
import Logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
    >
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand Info */}
        <div>
          <img src={Logo} alt="PlusDemic Logo" className="w-40 mb-4" />
          <p className="text-indigo-100 text-sm leading-relaxed">
            PlusDemic is your trusted healthcare companion. Providing world-class
            medical services, trusted doctors, and top hospitals all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-indigo-100 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/blogs" className="hover:text-white transition">Blogs</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-indigo-100 text-sm">
            <li><a href="/treatments" className="hover:text-white transition">Treatments</a></li>
            <li><a href="/hospitals" className="hover:text-white transition">Top Hospitals</a></li>
            <li><a href="/doctors" className="hover:text-white transition">Top Doctors</a></li>
            <li><a href="/contacts" className="hover:text-white transition">Emergency Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-indigo-100 text-sm mb-2">📍 New Delhi, India</p>
          <p className="text-indigo-100 text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-indigo-100 text-sm">✉️ support@plusdemic.com</p>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-4 text-xl">
            <FaFacebook className="hover:text-blue-300 transition transform hover:scale-110" />
            <FaInstagram className="hover:text-pink-300 transition transform hover:scale-110" />
            <FaLinkedin className="hover:text-blue-200 transition transform hover:scale-110" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-indigo-500 text-center py-4 text-indigo-200 text-sm">
        © {new Date().getFullYear()} PlusDemic. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
