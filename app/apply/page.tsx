'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: 'easeOut' },
  },
};

const layeredText = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 1, ease: 'easeOut' },
  }),
};

const departments = [
  'Public Relations and Foreign Affairs',
  'Press and Communication',
  'Strategy and Digital Intelligence',
  'Business Diplomacy and Investment',
  'Immigration and International Discourse',
];

export default function ApplyPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedDepts, setSelectedDepts] = useState<string[]>([]);
  const [formStatus, setFormStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDeptToggle = (value: string) => {
    if (selectedDepts.includes(value)) {
      setSelectedDepts(selectedDepts.filter((v) => v !== value));
    } else if (selectedDepts.length < 2) {
      setSelectedDepts([...selectedDepts, value]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setLoading(true);
    setFormStatus('');
    
    try {
      // Create a temporary form and submit it through the iframe
      const tempForm = document.createElement('form');
      tempForm.method = 'POST';
      tempForm.action = 'https://script.google.com/macros/s/AKfycbyuwh7oo34spaknWo1xabZQDvHLVHwsm4WK9fq7in0oAxVb-0MJQo3mKdwscEbddgM/exec';
      tempForm.target = '_blank'; // This will open in a new window that will auto-close
      tempForm.style.width = '0';
      tempForm.style.height = '0';
      tempForm.style.border = 'none';

      // Prepare the form data
      const formData = new FormData(form);
      formData.append('departments', selectedDepts.join(', '));

      // Add all form data to the temporary form
      for (const [key, value] of formData.entries()) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value.toString();
        tempForm.appendChild(input);
      }

      // Add the form to the document and submit it
      document.body.appendChild(tempForm);
      tempForm.submit();

      // Wait briefly for the submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Clean up
      document.body.removeChild(tempForm);

      // Handle success
      setFormStatus('success');
      form.reset();
      setSelectedDepts([]);
      
    } catch (err) {
      console.error('Submission error:', err);
      setFormStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f9f8ff] text-[#1a1a1a] font-sans overflow-x-hidden">
      <section className="h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionFade}>
          <motion.h1 className="text-5xl sm:text-6xl font-extrabold leading-tight" variants={layeredText} custom={0}>
            Join Ambassadors Aligned
          </motion.h1>
          <motion.p className="text-xl sm:text-2xl text-gray-600 mt-6" variants={layeredText} custom={1}>
            A space to grow, lead, and represent.
          </motion.p>
        </motion.div>
      </section>

      <section className="h-[90vh] flex items-center px-6 bg-black text-white">
        <motion.div className="max-w-3xl mx-auto text-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionFade}>
          <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" variants={layeredText} custom={0}>
            What We Look For
          </motion.h2>
          <motion.p className="text-lg text-gray-300 leading-relaxed" variants={layeredText} custom={1}>
            We value motivation over credentials. We seek students who are committed, curious, and ready to contribute. Whether your strengths lie in creativity, leadership, or analysis — there&#39;s a role for you to grow into.
          </motion.p>
        </motion.div>
      </section>

      <section className="h-[90vh] flex items-center px-6">
        <motion.div className="max-w-3xl mx-auto text-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionFade}>
          <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black" variants={layeredText} custom={0}>
            Open to All LUISS Students
          </motion.h2>
          <motion.p className="text-lg text-gray-700 leading-relaxed" variants={layeredText} custom={1}>
            Our intersectional departments span every pillar of study. Submit your application to begin the process.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-28 px-6 text-left max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionFade}>
          <motion.h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center" variants={layeredText} custom={0}>
            Apply Now
          </motion.h2>

          <motion.form ref={formRef} onSubmit={handleSubmit} className="space-y-6" variants={layeredText} custom={1}>
            {['name', 'surname', 'year', 'program', 'phone', 'email'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block mb-1 font-medium capitalize">{field}</label>
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  className="w-full px-4 py-3 border rounded-md shadow-sm"
                  aria-label={field}
                />
              </div>
            ))}

            <div>
              <label className="block mb-2 font-medium">
                Preferred Departments <span className="text-sm text-gray-500">(Select up to 2)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => handleDeptToggle(dept)}
                    className={`px-4 py-2 rounded-md border transition text-sm ${
                      selectedDepts.includes(dept)
                        ? 'bg-[#4B0082] text-white border-[#4B0082]'
                        : 'bg-white text-[#1a1a1a] border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
              {selectedDepts.length > 0 && (
                <p className="mt-2 text-sm text-gray-600">Selected: {selectedDepts.join(', ')}</p>
              )}
            </div>

            <div>
              <label htmlFor="motivation" className="block mb-1 font-medium">Justify your motivation to join in three sentences.</label>
              <textarea
                id="motivation"
                name="motivation"
                required
                rows={4}
                className="w-full px-4 py-3 border rounded-md shadow-sm"
                aria-label="Motivation"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center bg-[#4B0082] hover:bg-[#5a19a1] text-white font-semibold px-8 py-4 rounded-lg transition duration-300 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>

            {formStatus === 'success' && (
              <p className="text-green-600 font-medium mt-2">Form submitted successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 font-medium mt-2">There was an error. Please try again.</p>
            )}
          </motion.form>
        </motion.div>
      </section>

      <footer className="text-center text-sm text-gray-500 pb-10">
        &copy; {new Date().getFullYear()} Ambassadors Aligned
      </footer>
    </main>
  );
}
