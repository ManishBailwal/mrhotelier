'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Optional: If using Lucide for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Solutions', 'About', "Careers", 'Contact'];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/mrHotelierHeroImage.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-[#C8A76D] text-xl font-serif hidden sm:inline">Mr. Hotelier</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`${link.toLowerCase()}`}
              className="hover:text-[#C8A76D] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <button className="ml-6 bg-[#C8A76D] hover:bg-[#b48b51] text-black font-medium py-2 px-4 rounded-lg text-sm transition">
            Book a Demo
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-black/90 text-white px-6 py-4"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col space-y-4"
            >
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-lg hover:text-[#C8A76D] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <button className="mt-4 w-full bg-[#C8A76D] hover:bg-[#b48b51] text-black py-2 px-4 rounded-lg text-sm font-medium transition">
                  Book a Demo
                </button>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
