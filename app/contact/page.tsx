'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const fade = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // 🕵️ Honeypot
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, message, website }),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setWebsite('');
      } else {
        setStatus('Something went wrong.');
      }
    } catch {
      setStatus('Failed to send.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f9f8ff] text-[#1a1a1a] min-h-screen font-sans px-6 py-28">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fade}
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <h2 className="text-2xl font-semibold mb-4">Ambassadors Aligned</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Want to join, collaborate, or just say hi? Fill out the form — we’ll get back to you soon.
          </p>
          <p className="text-gray-500">Email: contact@ambassadorsaligned.org</p>
        </motion.div>

        {/* Right Side */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="space-y-6"
        >
          {/* 🕵️‍♀️ Honeypot Field */}
          <div className="hidden">
            <label htmlFor="website">Leave this field blank</label>
            <input
              type="text"
              id="website"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">First name *</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-[#4B0082]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Last name *</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={loading}
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-[#4B0082]"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-[#4B0082]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message *</label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
              className="w-full border-b border-gray-400 bg-transparent py-2 resize-none focus:outline-none focus:border-[#4B0082]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#4B0082] text-white px-6 py-3 rounded-md hover:bg-[#5c1aa9] transition font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading && (
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
            )}
            {loading ? 'Sending...' : 'Submit'}
          </button>

          {status && <p className="text-sm text-gray-600">{status}</p>}
        </motion.form>
      </div>
    </main>
  );
}
