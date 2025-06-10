'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh]">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-serif text-[#C8A76D] mb-6">Let's Connect</h2>
          <p className="text-gray-300 mb-6">
            We’d love to hear from you. Fill out the form or reach out through any of the methods below.
          </p>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center space-x-3">
              <Mail className="text-[#C8A76D]" size={20} />
              <span>mr.hotelier2025@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-[#C8A76D]" size={20} />
              <span>+91 7252045269</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin className="text-[#C8A76D]" size={20} />
              <span>Dehradun, India</span>
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#0f0f0f] p-8 rounded-xl shadow-xl border border-gray-800 space-y-6"
        >
          <div>
            <label className="block mb-1 text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              className="w-full p-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:border-[#C8A76D]"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:border-[#C8A76D]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Message</label>
            <textarea
              className="w-full p-3 h-32 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:border-[#C8A76D]"
              placeholder="Write your message here..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#C8A76D] hover:bg-[#b48b51] text-black font-medium py-3 px-6 rounded-md text-sm transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
