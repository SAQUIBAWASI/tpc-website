import { motion } from "framer-motion";
import Header from "@/components/Header";
import LocationSection from "@/components/Footer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <Helmet>
        <title>Contact Us | Get in Touch with Our Team</title>
        <link
          rel="canonical"
          href="https://thepatternscompany.com/contact"
        ></link>
        <meta
          name="description"
          content="Contact our team for digital marketing, web development, AI solutions, graphic design, and e-commerce services. We are here to help your business grow."
        />

        {/* Facebook Open Graph Tags */}
        <meta
          property="og:title"
          content="The Patterns Company - Innovative Pattern Design Solutions"
        />
        <meta
          property="og:description"
          content="The Patterns Company offers unique and innovative pattern design solutions for various applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://thepatternscompany.com/contact"
        />
        <meta
          property="og:image"
          content="https://thepatternscompany.com//team/fev.png"
        />
        <meta property="og:site_name" content="The Patterns Company" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags (optional but recommended) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Patterns Company - Innovative Pattern Design Solutions"
        />
        <meta
          name="twitter:description"
          content="The Patterns Company offers unique and innovative pattern design solutions for various applications."
        />
        <meta
          name="twitter:image"
          content="https://thepatternscompany.com/team/fev.png"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16661558035"
        ></script>
      </Helmet>

      <main className="flex-grow pt-20">
        {/* ============= HERO ============= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-500/10 to-purple-700/10 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
          <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400 drop-shadow-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Have questions or ideas? Let’s build something amazing together.
            </motion.p>
          </div>
        </section>

        {/* ============= CONTACT FORM ============= */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-purple-500/10 shadow-xl space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-green-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-purple-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-600 hover:to-purple-600 transition-all shadow-lg"
              >
                Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
                Contact Information
              </h2>
              <p className="text-gray-300 leading-7">
                Whether you’re looking to develop an AI solution, need expert
                consultation, or just want to say hello, we’d love to hear from
                you.
              </p>
              <div className="space-y-3 text-gray-300">
                <p>
                  📍 Address:{" "}
                  <span className="text-white">
                    T- HuB 2.o, Inorbit Mall Rd, Vittal Rao Nagar, Knowledge
                    City, Madhapur, Hyderabad, Telangana 500081
                  </span>
                </p>
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:info@thepatternscompany.com"
                    className="text-green-400 hover:underline"
                  >
                    info@thepatternscompany.com
                  </a>
                </p>
                <p>
                  📞 Phone:{" "}
                  <a
                    href="tel:+919392557785"
                    className="text-green-400 hover:underline"
                  >
                    +91-9392557785
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919392557785?text=Hello%2C%20I%27m%20interested%20in%20App%20Development"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 text-white"
        >
          <path d="M19.11 17.52c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.45h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.14.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z" />
          <path d="M26.7 5.3C23.9 2.5 20.2 1 16.3 1 8.6 1 2.3 7.3 2.3 15c0 2.4.6 4.8 1.8 6.9L2 31l9.3-2.1c2 .9 4.3 1.4 6.6 1.4 7.7 0 14-6.3 14-14 0-3.9-1.5-7.6-4.2-10.3zM16 28.6c-2.1 0-4.2-.5-6.1-1.4l-.4-.2-5.5 1.2 1.2-5.4-.3-.4C3.9 20.6 3.3 17.9 3.3 15 3.3 8.9 8.9 3.3 16 3.3c3.1 0 6 1.2 8.2 3.4 2.2 2.2 3.4 5.1 3.4 8.3 0 6.4-5.2 11.6-11.6 11.6z" />
        </svg>
      </a>

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 shadow-xl"
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
