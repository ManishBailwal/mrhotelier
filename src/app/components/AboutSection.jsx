'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    year: '2005',
    title: 'Joined STEP, The Oberoi Group',
    description: 'Started his hospitality journey with hands-on training at Trident Udaipur.',
  },
  {
    year: '2010',
    title: 'Completed ITC WMI Program',
    description: 'Graduated from Welcome Group Management Institute and joined ITC Sonar.',
  },
  {
    year: '2017',
    title: 'GM at Basque, PAS Hospitality',
    description: 'Led a team of 60 at a 350-cover fine-dining restaurant in Bangalore.',
  },
  {
    year: '2023',
    title: 'Founded Mr. Hotelier',
    description: 'Began his entrepreneurial journey to transform hospitality training.',
  },
];

const faqs = [
  {
    question: "What makes Mr. Hotelier different from other training providers?",
    answer:
      "Our approach is rooted in emotional intelligence, operational efficiency, and hands-on experience. Udit Kumar’s 18+ years in luxury hospitality sets us apart in understanding both service and strategy.",
  },
  {
    question: "Do you provide training for small or boutique properties?",
    answer:
      "Yes, we offer tailored programs for boutique hotels, cafes, and fine-dining restaurants, focusing on elevating service standards and team synergy.",
  },
  {
    question: "Can we consult Mr. Hotelier for pre-opening properties?",
    answer:
      "Absolutely. We specialize in pre-opening training, SOP design, team setup, and guest experience design for new ventures.",
  },
  {
    question: "Are the training modules customizable?",
    answer:
      "Yes, every module is designed according to the specific needs, team size, and service level of the client’s property.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-[#C8A76D]/30 rounded-xl bg-black/50 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex justify-between items-center text-[#C8A76D] text-lg font-medium"
      >
        {faq.question}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="px-4 pb-4 text-gray-300 text-base overflow-hidden"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();

  const toggleIndex = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <section
      className="bg-black text-white px-6 md:px-20 py-24 relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0" />
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 id="about-title" className="text-3xl md:text-5xl font-bold text-[#C8A76D] tracking-wide">
            About Mr. Hotelier
          </h2>
          <div className="w-24 h-[2px] bg-[#C8A76D] mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Founder Info */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/assets/founder.jpg"
            alt="Portrait of Udit Kumar - Founder of Mr. Hotelier"
            loading="lazy"
            className="rounded-2xl w-full shadow-lg object-cover border border-[#C8A76D]/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#C8A76D] mb-4">
              Udit Kumar
            </h3>
            <div className="text-gray-300 text-lg leading-relaxed space-y-5">
              <p>Udit Kumar is a dynamic hospitality leader with over 18 years of operational and training expertise across India’s top-tier hotel brands — The Oberoi Group, ITC Hotels, The Lalit, and Marriott International.</p>
              <p>He began his career through the prestigious STEP program at The Oberoi Group, gaining hands-on exposure at Trident Udaipur. His academic and professional excellence continued at ITC's Welcome Group Management Institute (WMI) and ITC Sonar through the FOETP program.</p>
              <p>Udit has led hospitality teams at The Lalit Ashok, The Westin Pune, and was part of the pre-opening team at Vana. As GM (Consultant) at Basque by PAS Hospitality, he led a team of 60 at a 350-cover fine-dining restaurant.</p>
              <p>As the founder of Mr. Hotelier, he now channels his passion into building high-performance hospitality teams through people-first training, SOPs, and transformational leadership.</p>
              <blockquote className="border-l-4 border-[#C8A76D] pl-4 italic text-[#C8A76D] text-lg mt-4">
                “Every day is a new day to learn something unknown.”
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#C8A76D]">
            Career Milestones
          </h3>
          <div className="border-l border-[#C8A76D]/40 pl-6 relative">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-4 top-1.5 w-3 h-3 bg-[#C8A76D] rounded-full shadow" />
                <h4 className="text-lg font-semibold text-[#C8A76D]">{item.year} – {item.title}</h4>
                <p className="text-gray-400 mt-1 text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            ['18+', 'Years of Experience'],
            ['4', 'Top Hotel Brands'],
            ['60+', 'Team Members Led'],
            ['1', 'Luxury Vision'],
          ].map(([value, label], i) => (
            <div key={i}>
              <h5 className="text-3xl font-bold text-[#C8A76D]">{value}</h5>
              <p className="text-gray-400">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-16">
          {[
            ['Our Vision', 'To redefine the standards of hospitality training and consultancy by nurturing emotionally intelligent, operationally efficient, and people-driven teams across the industry.'],
            ['Our Mission', 'To empower hospitality professionals through immersive training, operational consultancy, and bespoke solutions that boost service excellence, team synergy, and guest satisfaction.'],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/70 border border-[#C8A76D]/30 rounded-2xl p-8 shadow-lg"
            >
              <h4 className="text-2xl font-semibold text-[#C8A76D] mb-4">{title}</h4>
              <p className="text-gray-300 text-lg leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto "
        >
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#C8A76D] mb-10">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggleIndex(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h4 className="text-xl text-[#C8A76D] mb-4">
            Ready to elevate your hospitality team?
          </h4>
          <button
            onClick={handleContactClick}
            className="bg-[#C8A76D] cursor-pointer text-black px-8 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
          >
            Contact Mr. Hotelier
          </button>
        </motion.div>
      </div>
    </section>
  );
}
