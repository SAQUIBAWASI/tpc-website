import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function AiDevelopment() {
  return (
    <div className="bg-gray-50">
      <Header />

      <main className="pt-24">
        <section id="ai-development" className="max-w-7xl mx-auto px-6 py-16">
          <motion.h1
            className="text-4xl font-bold text-green-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI Development
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We design intelligent AI solutions with machine learning, NLP, 
            and automation that enhance your business efficiency.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            <img src="/images/ai1.jpg" alt="Machine Learning" className="rounded-lg shadow-md" />
            <img src="/images/ai2.jpg" alt="AI Chatbots" className="rounded-lg shadow-md" />
            <img src="/images/ai3.jpg" alt="Automation Tools" className="rounded-lg shadow-md" />
          </div>
        </section>

        <CommonSections />
      </main>

      <LocationSection />
    </div>
  );
}

function CommonSections() {
  return (
    <>
      <section id="about" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We integrate AI into business workflows to automate processes and 
            unlock growth opportunities.
          </p>
        </div>
      </section>

      <section id="services" className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md">Machine Learning</div>
            <div className="p-6 bg-white rounded-xl shadow-md">AI Chatbots</div>
            <div className="p-6 bg-white rounded-xl shadow-md">Predictive Analytics</div>
            <div className="p-6 bg-white rounded-xl shadow-md">Process Automation</div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">Ready to adopt AI? Let’s discuss.</p>
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
