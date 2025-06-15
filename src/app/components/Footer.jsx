'use client';

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Brand Column */}
        <div>
          <img src="/assets/mrHotelierHeroImage.png" alt="Logo" className="h-12 mb-4" />
          <p className="text-[#C8A76D] font-serif text-lg mb-2">Mr. Hotelier</p>
          <p>Smart solutions for modern hospitality, built to grow your business sustainably.</p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-[#C8A76D] transition">Home</a></li>
            <li><a href="#solutions" className="hover:text-[#C8A76D] transition">Solutions</a></li>
            <li><a href="#about" className="hover:text-[#C8A76D] transition">About</a></li>
            <li><a href="#contact" className="hover:text-[#C8A76D] transition">Contact</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white font-medium mb-3">Services</h4>
          <ul className="space-y-2">
            <li>Cloud PMS</li>
            <li>Channel Manager</li>
            <li>Booking Engine</li>
            <li>Revenue Insights</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-medium mb-3">Get in Touch</h4>
          <p>Email: <a href="mailto:info@mrhotelier.com" className="hover:text-[#C8A76D]">mr.hotelier2025@gmail.com</a></p>
          <p>Phone: +91 72520 45269</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><Facebook size={20} className="hover:text-[#C8A76D]" /></a>
            <a href="#"><Instagram size={20} className="hover:text-[#C8A76D]" /></a>
            <a href="#"><Twitter size={20} className="hover:text-[#C8A76D]" /></a>
            <a href="#"><Linkedin size={20} className="hover:text-[#C8A76D]" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Mr. Hotelier. All rights reserved.
      </div>
    </footer>
  );
}
