'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    '18+ years of industry experience',
    'Combination of hospitality, psychology, and training',
    'Affordable & customized packages',
    'Available PAN India and Nepal',
    'Friendly, honest, and growth-oriented team',
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-[#C8A76D] mb-12"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex items-start space-x-4 bg-black/70 border border-[#C8A76D]/30 rounded-xl p-5 shadow-md hover:shadow-[#C8A76D]/20 transition"
            >
              <CheckCircle size={24} className="text-[#C8A76D] mt-1" />
              <p className="text-gray-300 text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
