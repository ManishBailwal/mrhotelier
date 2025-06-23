'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X } from 'lucide-react';
import { useState } from 'react';

const trainingModules = [
  {
    title: 'Emotional Intelligence & Guest Empathy',
    content: {
      intro: 'Emotional intelligence helps staff understand and respond to guest emotions effectively.',
      why: 'Crucial in today’s hospitality to create personalized experiences and manage high-stress scenarios.',
      strategies: 'Role-playing, empathy drills, daily debriefs, and reflective practices.',
      takeaways: 'Improved guest satisfaction, team bonding, and better service recovery.',
    },
  },
  {
    title: 'Upskilling Line Staff for Sales & Personalization',
    content: {
      intro: 'Empower front-line teams to become brand advocates and increase revenue.',
      why: 'Personalization builds loyalty and boosts upselling opportunities.',
      strategies: 'Guest profiling, tailored scripts, and live objection handling practice.',
      takeaways: 'Increased guest spend, higher engagement, and personalized service delivery.',
    },
  },
  {
    title: 'F&B Experience Enhancement',
    content: {
      intro: 'Enhance the sensory and emotional aspects of dining.',
      why: 'F&B is a major touchpoint for guest satisfaction and brand recall.',
      strategies: 'Menu engineering, ambiance control, guest journey mapping.',
      takeaways: 'Stronger reviews, repeat dining, and enhanced service image.',
    },
  },
  {
    title: 'Effective Communication',
    content: {
      intro: 'Build confidence in communication with guests and internal teams.',
      why: 'Communication gaps directly impact service delivery and brand image.',
      strategies: 'Voice tone training, language enhancement, guest engagement activities.',
      takeaways: 'Consistent messaging, confident team, and reduced miscommunication.',
    },
  },
  {
    title: 'Guest Review Management',
    content: {
      intro: 'Handle and leverage guest reviews for performance improvement.',
      why: 'Reviews shape public perception and affect bookings directly.',
      strategies: 'Proactive feedback collection, response scripting, and review analytics.',
      takeaways: 'Higher ratings, better reputation, and actionable feedback loops.',
    },
  },
  {
    title: 'Leadership & Management',
    content: {
      intro: 'Nurture next-gen leaders for the hospitality industry.',
      why: 'Good leadership ensures consistent guest experience and high team morale.',
      strategies: 'Delegation workshops, situational leadership, and emotional maturity training.',
      takeaways: 'Accountable managers, motivated teams, and smooth operations.',
    },
  },
  {
    title: 'Sales & Revenue Optimization',
    content: {
      intro: 'Train teams to drive revenue without compromising guest experience.',
      why: 'A balance of profitability and guest satisfaction is critical.',
      strategies: 'Upsell scripts, channel optimization, conversion tracking.',
      takeaways: 'Higher average check size, improved margins, and team accountability.',
    },
  },
  {
    title: 'Dynamic Pricing',
    content: {
      intro: 'Adopt real-time pricing models based on demand, events, and analytics.',
      why: 'Static pricing leads to revenue leaks in fluctuating markets.',
      strategies: 'Rate ladders, event-based pricing, historical trend analysis.',
      takeaways: 'Maximized revenue, competitive edge, and smarter forecasting.',
    },
  },
  {
    title: 'Soft Skills & Human Touch',
    content: {
      intro: 'Instill warmth, politeness, and emotional tact in every interaction.',
      why: 'Guests remember how they felt more than what was said.',
      strategies: 'Role plays, feedback circles, and non-verbal communication training.',
      takeaways: 'Better guest relations, team harmony, and emotional connection.',
    },
  },
];

export default function Training() {
  const [selected, setSelected] = useState(null);

  return (
    <motion.section
      className="bg-black text-white py-20 px-6 md:px-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-[#C8A76D] mb-12"
        >
          Hospitality Training Modules 2025
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left"
        >
          {trainingModules.map((module, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-black/70 border border-[#C8A76D]/30 p-6 rounded-2xl shadow-md hover:shadow-[#C8A76D]/20 transition"
            >
              <div className="flex items-center mb-4 space-x-3">
                <BookOpen className="text-[#C8A76D]" size={24} />
                <h3 className="text-xl font-semibold text-[#C8A76D]">{module.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Tap below to explore key insights & strategies.
              </p>
              <button
                onClick={() => setSelected(module)}
                className="bg-[#C8A76D] cursor-pointer text-black font-medium px-4 py-2 rounded-lg text-sm hover:bg-[#b48b51] transition"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-[#111] text-white rounded-2xl shadow-xl p-8 max-w-xl w-full relative border border-[#C8A76D]/40"
              initial={{ scale: 0.8, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-[#C8A76D] hover:text-white transition"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-[#C8A76D] mb-4">{selected.title}</h3>

              <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
                <div>
                  <strong className="text-[#C8A76D]">Introduction:</strong> {selected.content.intro}
                </div>
                <div>
                  <strong className="text-[#C8A76D]">Why it matters:</strong> {selected.content.why}
                </div>
                <div>
                  <strong className="text-[#C8A76D]">Key Strategies:</strong> {selected.content.strategies}
                </div>
                <div>
                  <strong className="text-[#C8A76D]">Actionable Takeaways:</strong> {selected.content.takeaways}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
