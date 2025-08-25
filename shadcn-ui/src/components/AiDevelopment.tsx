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
              Next-Gen AI Development
              <br />
              For Future-Ready Businesses
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Harness the power of AI with cutting-edge solutions in Machine Learning, NLP, and Automation to accelerate innovation.
            </motion.p>

            <motion.img
              src="/images/AI.jpg"
              alt="AI Development"
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
              { value: "800+", label: "Successful Campaigns" },
              { value: "1000+", label: "Leads Generated" },
              { value: "10+", label: "Years of Experience" },
              { value: "50+", label: "Digital Experts" },
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
         {/* ================= AI NEW FEATURES ================= */}
<section className="bg-black py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
Cutting-Edge AI Features
</h2>
<div className="grid md:grid-cols-3 gap-10">
{[
{ title: "Generative AI", desc: "Create text, images, and insights automatically with advanced generative AI models." },
{ title: "Predictive Analytics", desc: "Forecast trends and customer behaviors using intelligent prediction systems." },
{ title: "AI Personalization", desc: "Deliver tailored experiences for every user with dynamic AI-driven personalization." },
].map((f, i) => (
<motion.div
key={i}
className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-purple-500/10 hover:scale-105 transition-transform shadow-xl"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: i * 0.2 }}
viewport={{ once: true }}
>
<h3 className="text-xl font-semibold mb-4 text-green-400">{f.title}</h3>
<p className="text-gray-300 leading-7">{f.desc}</p>
</motion.div>
))}
</div>
</div>
</section>

        {/* ================= ABOUT AI ================= */}
        <section className="bg-gradient-to-r from-green-600/20 to-purple-800/20 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
                Transforming Businesses with AI
              </h2>
              <p className="text-lg leading-8 text-gray-200">
                At <span className="text-green-400 font-semibold">Patterns</span>, we craft intelligent AI systems integrating <span className="text-green-300">Machine Learning, NLP, and Automation</span> to streamline workflows and unlock new growth opportunities.
              </p>
              <p className="text-lg leading-8 text-gray-200 mt-6">
                From predictive analytics to smart virtual assistants, our AI solutions bring futuristic capabilities to your business operations.
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

        {/* ================= SERVICES ================= */}
        <section className="bg-black py-20 space-y-24">
          {[{
            title: "Machine Learning",
            desc: "ML-driven systems that analyze your data, generate insights, and evolve with your business for smarter decision-making.",
            img: "/images/ai3.jpg",
            reverse: false,
            color: "from-green-500/20 to-green-700/10"
          }, {
            title: "AI Chatbots",
            desc: "Conversational AI bots powered by NLP to automate customer interactions and enhance user experience 24/7.",
            img: "/images/ai2.jpg",
            reverse: true,
            color: "from-purple-500/20 to-purple-700/10"
          }].map((s, i) => (
            <div key={i} className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${s.reverse ? 'md:flex-row-reverse' : ''}`}>
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
                <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${s.color}`}>
                  {s.title}
                </h2>
                <p className="leading-8 text-gray-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Floating WhatsApp Button */}
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

      {/* Scroll to Top */}
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
