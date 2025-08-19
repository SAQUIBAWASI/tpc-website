import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function DigitalMarketing() {
  return (
    <div className="bg-gray-50">
      <Header />

      <main className="pt-24">
        <section id="digital-marketing" className="max-w-7xl mx-auto px-6 py-16">
          <motion.h1
            className="text-4xl font-bold text-green-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Digital Marketing
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We boost your online presence with SEO, social media, and performance marketing. 
            Our strategies bring measurable results and brand visibility.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            <img src="/images/dm1.jpg" alt="SEO" className="rounded-lg shadow-md" />
            <img src="/images/dm2.jpg" alt="Social Media Marketing" className="rounded-lg shadow-md" />
            <img src="/images/dm3.jpg" alt="Google Ads" className="rounded-lg shadow-md" />
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
            Our marketing team helps you grow digitally with data-driven strategies.
          </p>
        </div>
      </section>

      <section id="services" className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md">SEO</div>
            <div className="p-6 bg-white rounded-xl shadow-md">Social Media</div>
            <div className="p-6 bg-white rounded-xl shadow-md">Google Ads</div>
            <div className="p-6 bg-white rounded-xl shadow-md">Content Marketing</div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">Need marketing that works? Let’s connect.</p>
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
