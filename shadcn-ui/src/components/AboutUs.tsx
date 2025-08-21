import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />

      <main className="pt-24">
        {/* ===== HERO SECTION ===== */}
        <section className="relative">
          <img
            src="/images/handshake.jpg"
            alt="About Us Banner"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.h1>
            <p className="mt-4 text-gray-200">Home / About</p>
          </div>
        </section>

        {/* ===== STATS STRIP ===== */}
        <section className="bg-black py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "1000+", label: "Digital Transformations" },
              { value: "5+", label: "Glorious Experience" },
              { value: "50+", label: "Our Team" },
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

        {/* ===== ABOUT CONTENT ===== */}
        <section className="bg-[#0e1a1a] py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We are a team of passionate innovators committed to transforming
                businesses through technology. Over the years, we’ve worked with
                hundreds of clients, driving digital transformation and enabling
                them to achieve remarkable success in today’s competitive
                landscape.
              </p>
              <p className="text-gray-300 mt-6 leading-relaxed">
                With expertise in modern technologies, a customer-first approach,
                and a vision for the future, we continue to deliver solutions
                that leave a lasting impact.
              </p>
            </div>
            <motion.img
              src="/images/about-team.jpg"
              alt="Our Team"
              className="rounded-xl shadow-2xl w-full object-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </section>
      </main>

      {/* ===== Floating WhatsApp Button ===== */}
      <a
        href="https://wa.me/91837416160?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 text-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.52c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.45h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.14.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z" />
          <path d="M26.7 5.3C23.9 2.5 20.2 1 16.3 1 8.6 1 2.3 7.3 2.3 15c0 2.4.6 4.8 1.8 6.9L2 31l9.3-2.1c2 .9 4.3 1.4 6.6 1.4 7.7 0 14-6.3 14-14 0-3.9-1.5-7.6-4.2-10.3zM16 28.6c-2.1 0-4.2-.5-6.1-1.4l-.4-.2-5.5 1.2 1.2-5.4-.3-.4C3.9 20.6 3.3 17.9 3.3 15 3.3 8.9 8.9 3.3 16 3.3c3.1 0 6 1.2 8.2 3.4 2.2 2.2 3.4 5.1 3.4 8.3 0 6.4-5.2 11.6-11.6 11.6z" />
        </svg>
      </a>

      <LocationSection />
    </div>
  );
}
