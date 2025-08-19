import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function WebDevelopment() {
  return (
    <div className="bg-gray-50">
      {/* ✅ Navbar */}
      <Header />

      {/* ✅ Main */}
      <main className="pt-24">

        {/* ================= HERO / WEB DEVELOPMENT MAIN ================= */}
        <section id="web-development" className="max-w-7xl mx-auto px-6 py-16">
          <motion.h1
            className="text-4xl font-bold text-green-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Web Development Services
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            At The Patterns Company, we build scalable, responsive, and modern websites 
            tailored to your business needs. Our team ensures seamless UI/UX, 
            performance optimization, and secure integrations to help your business grow.
          </motion.p>

          {/* ✅ Services Images */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl shadow-lg overflow-hidden">
              <img src="/images/web1.jpg" alt="Corporate Website" className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-600">Corporate Websites</h3>
              </div>
            </div>

            <div className="rounded-xl shadow-lg overflow-hidden">
              <img src="/images/web2.jpg" alt="E-Commerce Development" className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-600">E-Commerce Development</h3>
              </div>
            </div>

            <div className="rounded-xl shadow-lg overflow-hidden">
              <img src="/images/web3.jpg" alt="Portfolio Websites" className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-600">Portfolio Websites</h3>
              </div>
            </div>
          </div>

          {/* ✅ Interior Clients */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Our Interior Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="/images/client1.jpg" alt="Client 1" className="rounded-lg shadow-md" />
              <img src="/images/client2.jpg" alt="Client 2" className="rounded-lg shadow-md" />
              <img src="/images/client3.jpg" alt="Client 3" className="rounded-lg shadow-md" />
              <img src="/images/client4.jpg" alt="Client 4" className="rounded-lg shadow-md" />
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="bg-white py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We are a passionate team of developers, designers, and strategists focused on 
              building impactful digital products. Our mission is to deliver solutions that 
              empower businesses and delight users.
            </p>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="bg-gray-100 py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-8">Our Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-md">App Development</div>
              <div className="p-6 bg-white rounded-xl shadow-md">Web Development</div>
              <div className="p-6 bg-white rounded-xl shadow-md">Digital Marketing</div>
              <div className="p-6 bg-white rounded-xl shadow-md">AI Development</div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="bg-white py-20 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              Have a project in mind? Let’s build something amazing together.
            </p>
            <a
              href="mailto:info@patternscompany.com"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Header />
      {/* ✅ Footer */}
      <LocationSection />
    </div>
  );
}
