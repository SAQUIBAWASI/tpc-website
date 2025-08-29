import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      <Header />

      <main className="pt-10">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-500/10 to-purple-700/10">
          {/* Glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Our Company
              <br />
              Building Innovation Together
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are a team of passionate innovators committed to delivering
              cutting-edge digital solutions that empower businesses to grow,
              adapt, and thrive in the modern world.
            </motion.p>

            <motion.img style={{height:'300px', width:'300px'}}
              src="/images/robo-img.png"
              alt="About Us"
              className="mt-5 w-full md:w-2/4 lg:w-2/3 mx-auto rounded-2xl shadow-2xl border border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="bg-black py-14 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "10+", label: "Years in Business" },
              { value: "500+", label: "Happy Clients" },
              { value: "1000+", label: "Projects Delivered" },
              { value: "50+", label: "Experts on Team" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-500">
                  {s.value}
                </div>
                <div className="text-gray-300 mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= OUR VALUES ================= */}
        <section className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Innovation",
                  desc: "We constantly explore new ideas and technologies to provide modern, future-ready solutions.",
                },
                {
                  title: "Integrity",
                  desc: "We believe in building trust through honesty, transparency, and long-term partnerships.",
                },
                {
                  title: "Excellence",
                  desc: "Our goal is to deliver exceptional quality in every project, no matter the scale.",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-purple-500/10 hover:scale-105 transition-transform shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-400">
                    {f.title}
                  </h3>
                  <p className="text-gray-300 leading-7">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT COMPANY ================= */}
        <section className="bg-gradient-to-r from-green-600/20 to-purple-800/20 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
                Who We Are
              </h2>
              <p className="text-lg leading-8 text-gray-200">
                At{" "}
                <span className="text-green-400 font-semibold">
                  Patterns,
                </span>
                For over 5 years, TPC Supply has been the cornerstone of construction excellence, providing premium materials and unmatched service to builders, contractors, and developers across the region.
              </p>
              <p className="text-lg leading-8 text-gray-200 mt-6">
                Our commitment to quality, reliability, and customer satisfaction has made us the trusted partner for projects ranging from residential homes to large-scale commercial developments.
              </p>
            </div>

            <motion.img
              src="/images/team.jpg"
              alt="Our Team"
              className="rounded-xl shadow-2xl w-full object-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        {/* ================= OUR MISSION ================= */}
        <section className="bg-black py-20 space-y-24">
          {[
            {
              title: "Our Mission",
              desc: "To empower businesses with reliable, scalable, and innovative solutions that create real impact in the digital world.",
              img: "/images/mission.jpg",
              reverse: false,
              color: "from-green-500/20 to-green-700/10",
            },
            {
              title: "Our Vision",
              desc: "To be a global leader in digital transformation, recognized for innovation, quality, and building strong client partnerships.",
              img: "/images/our-vision.jpg",
              reverse: true,
              color: "from-purple-500/20 to-purple-700/10",
            },
          ].map((s, i) => (
            <div
              key={i}
              className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
                s.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.img
                src={s.img}
                alt={s.title}
                className="rounded-xl shadow-2xl w-full object-cover"
                initial={{ opacity: 0, x: s.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <div>
                <h2
                  className={`text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${s.color}`}
                >
                  {s.title}
                </h2>
                <p className="leading-8 text-gray-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 shadow-xl"
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

