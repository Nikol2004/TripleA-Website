'use client';
import { motion } from 'framer-motion';

const fadeInGroup = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
};

const principles = [
  {
    title: 'Our Mission',
    text: 'To encourage diplomatic, academic, and cultural engagement among students and institutions by simulating a governmental structure inspired by the U.S. system.',
  },
  {
    title: 'Student-Led Leadership',
    text: 'Founded by students, led by students — AAA provides an active space for leadership, debate, and growth in international relations and governance.',
  },
  {
    title: 'Professional Development',
    text: 'Workshops, mentorship, and events with embassies and organizations allow students to grow skills in diplomacy, negotiation, and leadership.',
  },
];

const structure = [
  'Secretariat (President, VP, SOS, SOT)',
  'Executive Branch (Secretariat + 5 Departments)',
  'Active Members (Sorted into departments)',
];

export default function AboutPage() {
  return (
    <main className="bg-[#f9f8ff] min-h-screen text-[#1a1a1a] px-6 py-28 font-sans">
      {/* Hero */}
      <section className="text-center mb-20">
        <motion.img
          src="/AAAlogo.png"
          alt="AAA Logo"
          className="h-40 sm:h-52 mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          About Ambassadors Aligned
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
        >
          A student-led association that blends diplomacy, education, and innovation for global-minded leaders at LUISS.
        </motion.p>
      </section>

      {/* Core Principles - Animating Together */}
      <section className="max-w-5xl mx-auto mb-24">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={0}
        >
          Our Principles
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInGroup}
        >
          {principles.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#4B0082]">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Structure */}
      <section className="max-w-4xl mx-auto mb-24 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={0}
        >
          Association Structure
        </motion.h2>
        <ul className="text-lg text-gray-700 space-y-4">
          {structure.map((item, i) => (
            <motion.li
              key={i}
              className="bg-white p-4 rounded-md border border-gray-100 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm pt-10 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Ambassadors Aligned — All rights reserved.
      </footer>
    </main>
  );
}
