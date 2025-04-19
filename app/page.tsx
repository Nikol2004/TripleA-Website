'use client';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: 'easeOut',
    },
  }),
};

const aboutItems = [
  {
    title: 'Diplomacy Meets Innovation',
    desc: 'AAA fuses diplomacy, intelligence, business, and technology into one unified platform through departments like Strategy & AI, Foreign Affairs, and more.',
  },
  {
    title: 'Empowering Every Student',
    desc: 'From fuori-sede to Roman students, we deliver real-world experience through student integration, internships, and career-boosting programs.',
  },
  {
    title: 'Your Launchpad at LUISS',
    desc: "Whether it's getting your permesso di soggiorno or joining an embassy simulation, we are a catalytic sanctuary for future leaders.",
  },
];

const apostleItems = [
  {
    title: 'Upcoming Event',
    desc: 'Join us for our leadership summit next month!',
  },
  {
    title: 'New Partnership',
    desc: 'Triple A collaborates with top schools for new programs.',
  },
  {
    title: 'Volunteer Opportunities',
    desc: 'Sign up to be part of our next community project.',
  },
];

export default function Home() {
  return (
    <main className="bg-[#f9f8ff] text-[#1a1a1a] font-sans pb-32">
      {/* Hero Section */}
      <header className="relative text-center pt-28 sm:pt-36 pb-24 px-4 bg-gradient-to-b from-white to-[#f9f8ff]">
        <motion.img
          src="/AAAlogo.png"
          alt="Triple A Logo"
          className="h-40 sm:h-56 mx-auto mb-6 relative z-10"
          initial={{ opacity: 0, scale: 0.85, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#1a1a1a]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          Ambassadors Aligned
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl font-medium text-gray-700 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          custom={1}
        >
          Association
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mt-6 max-w-xl mx-auto leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          custom={2}
        >
          Your Home Away From Home
        </motion.p>
      </header>

      <div className="container mx-auto px-6 md:px-12">
        {/* About Us */}
        <section id="about" className="scroll-mt-24 text-center py-28 max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-12 leading-tight text-[#1a1a1a]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeIn}
          >
            About Us
          </motion.h2>

          <motion.div
            className="space-y-10 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {aboutItems.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <h3 className="text-2xl font-bold text-[#4B0082] mb-2">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Executive Branch */}
        <section id="executive" className="scroll-mt-24 py-28 max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#1a1a1a]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeIn}
          >
            Executive Branch
          </motion.h2>

          <div className="flex flex-col lg:flex-row justify-center gap-10">
            {/* Secretariat */}
            <div className="w-full lg:w-[28rem] bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <h3 className="text-3xl font-extrabold text-[#4B0082] mb-6 tracking-tight">
                Secretariat
              </h3>
              <div className="space-y-3">
                {[
                  { role: 'President', name: 'Chloe Quevedo' },
                  { role: 'Vice President', name: 'Lina Kolevska' },
                  { role: 'Secretary of State', name: 'Melis Göksel' },
                  { role: 'Secretary of Treasury', name: 'Nikol Tushaj' },
                ].map(({ role, name }, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center px-5 py-3 rounded-md bg-[#f9f9fb] border border-gray-200"
                  >
                    <span className="font-medium text-base text-[#4B0082]">{role}</span>
                    <span className="text-gray-700 text-base">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cabinet */}
            <div className="w-full lg:w-[28rem] bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <h3 className="text-3xl font-extrabold text-[#4B0082] mb-6 tracking-tight">
                Cabinet
              </h3>
              <div className="space-y-3">
                {[
                  'Public Relations and Foreign Affairs',
                  'Business Diplomacy and Investment',
                  'Strategy and Digital Intelligence',
                  'Immigration and International Discourse',
                  'Press and Communication',
                ].map((dept, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 rounded-md bg-[#f9f9fb] hover:border-[#4B0082] border border-gray-200 transition-all"
                  >
                    <p className="text-base font-medium text-gray-800">{dept}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Membership */}
        <section id="membership" className="scroll-mt-24 text-center py-28 max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#1a1a1a]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeIn}
          >
            Become a Member of Triple A
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeIn}
            custom={1}
          >
            Connect with like-minded individuals, gain leadership opportunities, and shape change at LUISS and beyond.
          </motion.p>

          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            custom={2}
          >
            <a
              href="/apply#application-form"
              className="inline-block bg-[#4B0082] hover:bg-[#5f0db3] transition text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.03]"
            >
              Apply Now
            </a>
          </motion.div>
        </section>

        {/* News Section (The Apostle) */}
        <section id="news" className="text-center py-28 max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-10 text-[#1a1a1a]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeIn}
          >
            The Apostle
          </motion.h2>

          <div className="space-y-10">
            {apostleItems.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <h3 className="text-2xl font-bold text-[#4B0082]">{item.title}</h3>
                <p className="text-gray-600 mt-4 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20"
        >
          <footer className="text-center py-20 text-base text-gray-600 tracking-tight">
            <p className="mb-2">
              Have any questions?{' '}
              <a
                href="mailto:admin@ambassadorsaligned.org"
                className="underline hover:text-[#4B0082] transition-colors duration-200"
              >
                Contact us
              </a>
            </p>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Ambassadors Aligned. All rights reserved.
            </p>
          </footer>
        </motion.section>
      </div>
    </main>
  );
}
