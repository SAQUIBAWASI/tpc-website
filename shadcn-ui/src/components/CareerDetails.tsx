import Footer from "@/components/Footer"; // ✅ Footer import
import Header from "@/components/Header"; // ✅ Agar header bhi chahiye
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CareerPage() {
  return (
    <div className="bg-white text-black">
      <Header /> {/* ✅ Header Add */}

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold"
        >
          CAREER
        </motion.h1>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 font-bold text-lg">
          Welcome to The Patterns Company - Where Innovation Meets Expertise!
        </div>
        <div className="md:col-span-1 text-gray-700 leading-relaxed">
          At The Patterns Company, we think that skill, technology, and ability
          to create interesting new things can all be perfectly combined
          together so they work as one unit to create a successful fabric. We
          are a full energy group of experts committed to growth.
        </div>
        <div className="md:col-span-1 text-gray-700 leading-relaxed">
          Expanding the realm of possibility, we are seeking driven individuals
          to accompany us on this adventure.
        </div>
      </section>

     {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-black text-white py-20">
        <h2 className="text-center text-3xl font-bold mb-14">
          WHY CHOOSE <span className="text-green-400">THE PATTERNS COMPANY</span>
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {[
            {
              title: "Innovation at the Core",
              desc: "We constantly challenge norms, embrace cutting-edge tech, and push the boundaries of what’s possible.",
            },
            {
              title: "Collaborative Culture",
              desc: "Every voice matters. Diverse perspectives fuel the best solutions and innovations here.",
            },
            {
              title: "Professional Growth",
              desc: "Enjoy mentorship, continuous learning, and an empowering environment to reach your true potential.",
            },
            {
              title: "Work-Life Balance",
              desc: "We value your well-being by ensuring harmony between personal and professional life.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-green-500/30 transition"
            >
              <h3 className="bg-green-400 inline-block px-4 py-1 text-black font-bold mb-4 rounded">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== JOB OPENINGS ===== */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">
          JOB OPENINGS AT PATTERNS
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Job Card 1 */}
          <div>
            <h3 className="text-green-600 font-bold text-xl mb-2">
              Digital Marketing
            </h3>
            <p className="text-gray-600 mb-4">
              Work with us on mentorship programs, learning opportunities, and a
              supportive environment to reach your best capacity.
            </p>
            <Button variant="outline">Know More</Button>
          </div>
          <img
            src="/images/DIGITAL MARKETING.jpeg"
            alt="Digital Marketing"
            className="w-full max-w-sm mx-auto"
          />

          {/* Job Card 2 */}
          <img
            src="/images/DEVELOPERS.jpeg"
            alt="Developer"
            className="w-full max-w-sm mx-auto order-last md:order-none"
          />
          <div>
            <h3 className="text-green-600 font-bold text-xl mb-2">Developers</h3>
            <p className="text-gray-600 mb-4">
              We are looking for passionate developers who want to create
              happiness-inducing solutions with their coding skills.
            </p>
            <Button variant="outline">Know More</Button>
          </div>

          {/* Job Card 3 */}
          <div>
            <h3 className="text-green-600 font-bold text-xl mb-2">Marketing</h3>
            <p className="text-gray-600 mb-4">
              Be in charge of discovering new business opportunities to expand
              our company’s growth and impact.
            </p>
            <Button variant="outline">Know More</Button>
          </div>
          <img
            src="/images/MARKETING.jpeg"
            alt="Marketing"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </section>

      <Footer /> {/* ✅ Footer Add */}
    </div>
  );
}
