import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {Helmet} from "react-helmet";

export default function Careers() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jobs = [
    {
      title: "Software Engineer Intern",
      desc: "Work with our development team to build scalable web applications, learn modern frameworks, and contribute to live projects.",
      perks: ["Hands-on mentorship", "Stipend + Certificate", "Chance of full-time offer"],
    },
    {
      title: "Graphic Designer",
      desc: "Design stunning visuals, social media creatives, and brand assets while collaborating with our creative team.",
      perks: ["Creative freedom", "Dynamic projects", "Growth-focused culture"],
    },
    {
      title: "Digital Marketing Manager",
      desc: "Lead digital campaigns, SEO/SEM strategies, and drive growth through innovative marketing solutions.",
      perks: ["Leadership opportunity", "Performance bonuses", "Impactful campaigns"],
    },
  ];

  return (
    <div className="bg-black text-white font-sans">
      <Header />
        <Helmet>
         <title>Careers | Join Our Digital Marketing & Development Team</title>
           <meta name="description" content="Explore exciting career opportunities in digital marketing, web development, AI, design, and more. Join our expert team and grow your career with us." />
      </Helmet>

      <main className="pt-10">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-500/10 to-purple-700/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
            <motion.h1   style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Be part of a future-driven company where innovation, creativity, and growth never stop.
            </motion.p>
          </div>
        </section>

        {/* ================= JOB LISTINGS ================= */}
        <section className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
              Current Openings
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-purple-500/10 shadow-xl hover:scale-105 transition-transform border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-green-400">{job.title}</h3>
                  <p className="text-gray-300 leading-7 mb-6">{job.desc}</p>
                  <ul className="text-gray-400 mb-6 list-disc pl-5 space-y-2">
                    {job.perks.map((perk, idx) => (
                      <li key={idx}>{perk}</li>
                    ))}
                  </ul>
                  <a
                    href="mailto:AjayManthri@thepatternscompany.com?subject=Application%20for%20Job"
                    className="inline-block px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition"
                  >
                    Apply Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CULTURE / ABOUT ================= */}
        <section className="bg-gradient-to-r from-green-600/20 to-purple-800/20 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
                Why Work With Us?
              </h2>
              <p className="text-lg leading-8 text-gray-200">
                At <span className="text-green-400 font-semibold">Patterns</span>, we believe in
                empowering talent. Whether you're just starting out or looking to lead, our
                collaborative and inclusive culture ensures you thrive.
              </p>
              <p className="text-lg leading-8 text-gray-200 mt-6">
                With flexible work options, cutting-edge projects, and a growth mindset, we help you
                shape not just your career, but the future of technology and creativity.
              </p>
            </div>
            <motion.img
              src="/images/careers.jpg"
              alt="Careers"
              className="rounded-xl shadow-2xl w-full object-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919392557785?text=Hello%2C%20I%27m%20interested%20in%20job%20opportunities"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 text-white">
          <path d="M19.11 17.52c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.45h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.14.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z" />
          <path d="M26.7 5.3C23.9 2.5 20.2 1 16.3 1 8.6 1 2.3 7.3 2.3 15c0 2.4.6 4.8 1.8 6.9L2 31l9.3-2.1c2 .9 4.3 1.4 6.6 1.4 7.7 0 14-6.3 14-14 0-3.9-1.5-7.6-4.2-10.3zM16 28.6c-2.1 0-4.2-.5-6.1-1.4l-.4-.2-5.5 1.2 1.2-5.4-.3-.4C3.9 20.6 3.3 17.9 3.3 15 3.3 8.9 8.9 3.3 16 3.3c3.1 0 6 1.2 8.2 3.4 2.2 2.2 3.4 5.1 3.4 8.3 0 6.4-5.2 11.6-11.6 11.6z" />
        </svg>
      </a>

      {/* Scroll to Top */}
{showTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-24 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 shadow-xl"
    aria-label="Scroll to top"
  >
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M6 15l6-6 6 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)}

      <LocationSection />
    </div>
  );
}
