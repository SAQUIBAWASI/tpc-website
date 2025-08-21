import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AiDevelopment() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <Header />

      <main className="pt-24">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          {/* orange side bars */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-[12vw] bg-[#22c55e]" />
          <div className="hidden md:block absolute inset-y-0 right-0 w-[12vw] bg-[#22c55e]" />

          {/* center content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
            <motion.h1
              className="text-center leading-tight font-extrabold text-white text-4xl md:text-6xl lg:text-4xl mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              AI Development
              <br />
              Solutions for Businesses
            </motion.h1>

            {/* hero image */}
            <div className="flex justify-center">
              <img
                src="/images/AI.jpg"
                alt="AI Development"
                className="w-full md:w-4/5 rounded-xl shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="bg-black py-14 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "200+", label: "AI Projects Delivered" },
              { value: "15+", label: "Industries Served" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "AI Support" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-500">{s.value}</div>
                <div className="text-gray-300 mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= ABOUT AI ================= */}
        <section className="bg-[#5f8686] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg leading-8">
                At <span className="font-semibold text-green-300">Patterns</span>, we
                design intelligent AI solutions with{" "}
                <span className="text-green-300">Machine Learning, NLP</span>, and{" "}
                <span className="text-green-300">Automation</span> that enhance business
                efficiency and decision-making.
              </p>
              <p className="text-lg leading-8 mt-6">
                From smart chatbots to predictive analytics, our team of AI engineers
                integrates advanced algorithms into your workflows—unlocking
                productivity, accuracy, and growth opportunities.
              </p>
            </div>

            <motion.img
              src="/images/ai2.jpg"
              alt="AI Illustration"
              className="rounded-xl shadow-2xl w-full object-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        {/* ================= SERVICES: Machine Learning ================= */}
        <section className="bg-[#e6773d] text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="border-b-4 border-black/60 pb-1">
                  Machine Learning
                </span>
              </h2>
              <p className="leading-8 text-white/95">
                We build ML-powered systems that learn from your business data and
                provide insights to optimize operations. From recommendation engines to
                fraud detection, our ML models adapt and evolve with your business
                needs.
              </p>
            </div>

            <img
              src="/images/ai3.jpg"
              alt="Machine Learning"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
        </section>

        {/* ================= SERVICES: Chatbots ================= */}
        <section className="bg-[#3f5bf6] text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/ai2.jpg"
              alt="AI Chatbots"
              className="rounded-xl shadow-xl w-full object-cover"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                <span className="border-b-4 border-green-300 pb-1">AI Chatbots</span>
              </h2>
              <p className="leading-8 text-white/95">
                Automate customer interactions with natural language processing-based
                chatbots. Provide instant responses, reduce workload, and increase
                customer satisfaction with our intelligent virtual assistants.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ================ Floating Buttons ================= */}
      {/* WhatsApp */}
      <a
        href="https://wa.me/91837416160?text=Hello%2C%20I%27m%20interested%20in%20AI%20Development"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 text-white">
          <path d="M19.11 17.52c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.45h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.14.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z" />
          <path d="M26.7 5.3C23.9 2.5 20.2 1 16.3 1 8.6 1 2.3 7.3 2.3 15c0 2.4.6 4.8 1.8 6.9L2 31l9.3-2.1c2 .9 4.3 1.4 6.6 1.4 7.7 0 14-6.3 14-14 0-3.9-1.5-7.6-4.2-10.3zM16 28.6c-2.1 0-4.2-.5-6.1-1.4l-.4-.2-5.5 1.2 1.2-5.4-.3-.4C3.9 20.6 3.3 17.9 3.3 15 3.3 8.9 8.9 3.3 16 3.3c3.1 0 6 1.2 8.2 3.4 2.2 2.2 3.4 5.1 3.4 8.3 0 6.4-5.2 11.6-11.6 11.6z" />
        </svg>
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-24 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 shadow-xl"
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
