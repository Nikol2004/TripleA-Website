"use client";
import { motion } from "framer-motion";

// Animation Variants
const sectionTitle = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ExecutiveBranch() {
  return (
    <div className="bg-[#f9f8ff] text-[#1a1a1a] min-h-screen font-sans">
      {/* Hero */}
      <section className="w-full pt-32 pb-16 px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionTitle}
        >
          The Executive Branch
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionTitle}
        >
          Meet the leaders and departments advancing the mission of Ambassadors Aligned.
        </motion.p>
      </section>

      {/* Secretariat */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-extrabold mb-10 border-b border-gray-200 pb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionTitle}
        >
          Secretariat
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardFade}
        >
          {[
            { name: "Chloe Quevedo", title: "President" },
            { name: "Lina Kolevska", title: "Vice President" },
            { name: "Melis Göksel", title: "Secretary of State" },
            { name: "Nikol Tushaj", title: "Secretary of Treasury" },
          ].map(({ name, title }, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2 text-[#4B0082]">{name}</h3>
              <p className="text-base text-gray-700 font-medium">{title}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Departments */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-extrabold mb-10 border-b border-gray-200 pb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionTitle}
        >
          Departments
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardFade}
        >
          {[
            {
              name: "Public Relations and Foreign Affairs",
              head: "Isabella Costantini",
              desc: "Organizes events and manages diplomatic relations with embassies and institutions.",
            },
            {
              name: "Immigration and International Discourse",
              head: "Anja Panova",
              desc: "Supports international students and promotes inclusion through guides and support programs.",
            },
            {
              name: "Business Diplomacy and Investment",
              head: "Poyraz Ercins",
              desc: "Merges business with diplomacy, focusing on trade, finance, and economic partnerships.",
            },
            {
              name: "Press and Communication",
              head: "Vincent Calta",
              desc: "Oversees media, graphics, outreach, and university-wide communication efforts.",
            },
            {
              name: "Strategy and Digital Intelligence",
              head: "Elina Yilmaz",
              desc: "Leads innovation through tech, AI, security research, and forward-looking strategy.",
            },
          ].map((dept, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{dept.name}</h3>
              <p className="text-sm text-[#4B0082] font-semibold mb-2">
                Head: {dept.head}
              </p>
              <p className="text-gray-700">{dept.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
