'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-6 py-20 text-center"
      style={{ backgroundImage: "url('/assets/heroBg.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        
        {/* Logo
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/assets/mrHotelierHeroImage.png"
          alt="Mr. Hotelier Logo"
          className="mx-auto w-80 mb-6"
        /> */}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl md:text-6xl font-serif text-[#C8A76D] tracking-wide"
        >
          Empowering Hoteliers.<br />Elevating Hospitality.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-gray-300 text-lg md:text-xl"
        >
          Elevating hotel operations with intelligent,<br className="hidden md:block" />
          eco-conscious solutions for the future.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10"
        >
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = 'https://www.instagram.com/mrhotelier007/'}
  className="bg-[#C8A76D] hover:bg-[#b48b51] text-black cursor-pointer font-medium py-3 px-6 rounded-xl text-lg shadow-lg transition duration-300"
>
  Discover More
</motion.button>

        </motion.div>
      </div>
    </section>
  );
}
