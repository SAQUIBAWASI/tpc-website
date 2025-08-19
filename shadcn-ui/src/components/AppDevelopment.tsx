import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function AppDevelopment() {
  return (
    <div className="bg-gray-50">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section id="app-development" className="max-w-7xl mx-auto px-6 py-16">
          <motion.h1
            className="text-4xl font-bold text-green-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mobile App Development
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We build feature-rich, scalable, and user-friendly mobile apps tailored 
            to your business needs. From startups to enterprises, our mobile solutions 
            deliver high performance and excellent user experience.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            <img src="/images/app1.jpg" alt="iOS Apps" className="rounded-lg shadow-md" />
            <img src="/images/app2.jpg" alt="Android Apps" className="rounded-lg shadow-md" />
            <img src="/images/app3.jpg" alt="Hybrid Apps" className="rounded-lg shadow-md" />
          </div>
        </section>

        {/* About + Services + Contact */}
        <CommonSections />
      </main>

      <LocationSection />
    </div>
  );
}

// ✅ Reusable Section Component
function CommonSections() {
  return (
    <>
      <section id="about" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We create seamless mobile experiences with cutting-edge app development services.
          </p>
        </div>
      </section>

      <section id="services" className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md">iOS Development</div>
            <div className="p-6 bg-white rounded-xl shadow-md">Android Development</div>
            <div className="p-6 bg-white rounded-xl shadow-md">Cross Platform Apps</div>
            <div className="p-6 bg-white rounded-xl shadow-md">App UI/UX</div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">Let’s bring your app idea to life!</p>
          <a
            href="mailto:info@patternscompany.com"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
