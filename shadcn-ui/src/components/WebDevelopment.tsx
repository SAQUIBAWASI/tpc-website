import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function WebDevelopment() {
  return (
    <div className="bg-gray-500 text-white">
      <Header />

      <main className="pt-24">
        {/* ===== HERO (gallery-like grid + big title) ===== */}
        <section className="relative max-w-7xl mx-auto px-6 py-16">
          {/* gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90">
            {[
              
              
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-48 md:h-60 w-full object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
            ))}
          </div>

          {/* giant title over gallery */}
          <motion.h1
            className="pointer-events-none select-none text-center leading-tight font-extrabold text-white absolute inset-x-0 top-8 md:top-12 text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Web Development
            <br />
            <span className="text-white">in Hyderabad</span>
          </motion.h1>
        </section>

        {/* ===== STATS STRIP ===== */}
        <section className="bg-black py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "1000+", label: "Digital Transformations" },
              { value: "27+", label: "Glorious Experience" },
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

        {/* ===== INTRO SECTION (text left, image right) ===== */}
        <section className="bg-[#0e1a1a] py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-300 leading-relaxed">
                With time, people are becoming sophisticated and so are the
                businesses. Setting up a business online is the only way of
                outshining the competitive market. Technology has made business
                life easier, and the power of the web is visible in online
                transactions. <span className="text-green-500 font-semibold">Patterns</span> is the{" "}
                <span className="text-green-500 font-semibold">
                  Top Web Designing Agency in Hyderabad
                </span>{" "}
                providing the{" "}
                <span className="text-green-500 font-semibold">
                  Best Web Development Services in Hyderabad
                </span>.
              </p>

              <p className="text-gray-300 mt-6 leading-relaxed">
                If you’re planning to start a business venture in Hyderabad or
                want to reach people worldwide, then web design and development
                must be in your mind. We deliver best-in-class services tailored
                to your industry with a technology-first approach.
              </p>
            </div>

            <motion.img
              src="/images/Web-Dev.jpeg"
              alt="Web Development Illustration"
              className="rounded-xl shadow-2xl w-full object-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        {/* ===== TYPES OF WEB DEVELOPMENT ===== */}
        <section id="types" className="w-full">
          {/* Static Website */}
          <div className="bg-[#73a9cf] text-black">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
              <img
                src="/images/Website_Designing.png"
                alt="Static Website Example"
                className="rounded-xl shadow-xl w-full object-cover"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  <span className="border-b-4 border-green-600 pb-1">
                    Static Website
                  </span>
                </h2>
                <p className="leading-7">
                  A static website is a digital presence consisting of fixed
                  content that remains unchanged unless manually updated. Unlike
                  dynamic sites, static sites offer simplicity, speed, and
                  security—ideal for essential information, portfolios, product
                  catalogs, and landing pages. They load fast, are affordable to
                  host (GitHub Pages, Netlify, Vercel), and reduce server-side
                  complexity and risk.
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Website */}
          <div className="bg-[#ded043] text-black">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  <span className="border-b-4 border-green-600 pb-1">
                    Dynamic Website
                  </span>
                </h2>
                <p className="leading-7">
                  Dynamic websites generate content on-the-fly, respond to user
                  interactions, and integrate databases or APIs. Perfect for
                  blogs, news portals, dashboards, membership systems, and any
                  experience needing frequent updates, personalization, and
                  interactivity. We build dynamic sites using modern stacks and
                  best practices for performance and security.
                </p>
              </div>
              <img
                src="/images/Dynamic.jpg"
                alt="Dynamic Website Example"
                className="rounded-xl shadow-xl w-full object-cover"
              />
            </div>
          </div>

          {/* E-Commerce Website */}
          <div className="bg-[#7398e6] text-black">
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
              <img
                src="/images/ecommerce-website.png"
                alt="E-Commerce Website Example"
                className="rounded-xl shadow-xl w-full object-cover"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  <span className="border-b-4 border-green-600 pb-1">
                    E-Commerce Website
                  </span>
                </h2>
                <p className="leading-7">
                  An e-commerce website is your modern storefront—showcase
                  products, accept secure payments, and manage orders with ease.
                  We design conversion-focused product pages, smooth checkout
                  flows, and robust back-office tools. From small catalogs to
                  enterprise scale, we implement the latest tech for speed,
                  reliability, and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US (short) ===== */}
        <section className="bg-black py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-green-500 mb-6">
              Why Choose Us?
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300 max-w-4xl mx-auto">
              {[
                "Experienced team with 27+ years combined expertise",
                "Modern stacks: Next.js, React, Node, Headless CMS, Tailwind",
                "SEO-ready, fast, secure, and fully responsive builds",
                "Post-launch maintenance & growth support",
              ].map((p, i) => (
                <li
                  key={i}
                  className="p-4 bg-gray-900 rounded-xl border border-gray-800 text-left"
                >
                  ✅ {p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* ===== Floating WhatsApp Button ===== */}
      <a
        href="https://wa.me/91837416160?text=Hello%2C%20I%27m%20interested%20in%20Web%20Development%20services"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        {/* simple WA icon */}
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
