'use client';
import { motion } from 'framer-motion';

export default function CareerSection() {
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeq7pIgWp1lNTPmjdghdTyh0PZ70EwYDAqUKAnVTzjQ4EKYCw/viewform?usp=sharing&ouid=117092413152621193852";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative bg-zinc-900 py-20 px-6 sm:px-10 lg:px-20 min-h-screen flex items-center justify-center">
      <motion.div
        className="max-w-5xl w-full h-full flex flex-col items-center justify-center text-center text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-[#C8A76D] mb-6"
          variants={itemVariants}
        >
          Shape the Future of Hospitality
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl"
          variants={itemVariants}
        >
          Join Mr. Hotelier and be part of a team dedicated to redefining the hospitality industry
          through innovation, technology, and sustainable practices.
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full"
          variants={containerVariants}
        >
          {[
            {
              title: "Innovative Culture",
              desc: "Work at the forefront of hospitality tech, pushing boundaries with cutting-edge solutions.",
            },
            {
              title: "Growth Opportunities",
              desc: "Unlock your potential with continuous learning, mentorship, and clear career paths.",
            },
            {
              title: "Sustainable Impact",
              desc: "Contribute to a greener future by developing eco-conscious solutions for the industry.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(200,167,109,0.4)] hover:scale-[1.03] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#c8a76d33] before:to-transparent before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-[#C8A76D] mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Apply Button */}
        <motion.div variants={itemVariants}>
          <motion.a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-[#C8A76D] hover:bg-[#b48b51] text-black font-semibold py-4 px-10 rounded-xl text-xl shadow-xl transition-all duration-300 ease-in-out group"
          >
            Apply Now
            <svg
              className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
