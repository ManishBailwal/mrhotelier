'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: '🧠',
      title: 'Training & Development',
      items: [
        'Operational Training – Front office, housekeeping, F&B service, bar, kitchen.',
        'Soft Skills – Grooming, communication, body language, complaint handling.',
        'Psychology-Based Training – Emotional intelligence, team bonding, conflict resolution, guest psychology.',
      ],
    },
    {
      icon: '🏨',
      title: 'Start-Up Support',
      items: [
        'Business concept development',
        'Budgeting and setup planning',
        'SOP creation and team hiring',
        'Vendor sourcing and equipment setup',
      ],
    },
    {
      icon: '💼',
      title: 'Placements & Hiring',
      items: [
        'Hiring for all levels (from steward to general manager)',
        'Verified, trained candidates',
        'Strong network across India and Nepal',
        'Background-verified staffing solutions',
      ],
    },
    {
      icon: '🛎️',
      title: 'Business Turnaround & Performance Boost',
      items: [
        'Review analysis (Google, Booking.com, Airbnb)',
        'Mystery audits',
        'Guest experience mapping',
        'Reputation management',
        'Food & Beverage profitability consultation',
      ],
    },
    {
      icon: '🛏️',
      title: 'Supplies & Setup',
      items: [
        'Bed & bath linen',
        'Crockery, cutlery & glassware',
        'Uniforms',
        'Interior & branding assistance',
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-[#C8A76D] mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-black/70 border border-[#C8A76D]/30 p-6 rounded-2xl shadow-lg hover:shadow-[#C8A76D]/30 transition"
            >
              <h3 className="text-xl font-semibold text-[#C8A76D] mb-3">
                {service.icon} {service.title}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {service.items.map((item, subIdx) => (
                  <li key={subIdx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
