import { motion } from "framer-motion";
import Header from "@/components/Header";
import LocationSection from "@/components/Footer";
import { useState } from "react";
import {Helmet} from "react-helmet";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

        <Helmet>
         <title>Contact Us | Get in Touch with Our Team</title>
           <meta name="description" content="Contact our team for digital marketing, web development, AI solutions, graphic design, and e-commerce services. We are here to help your business grow." />
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
            {/* Form */}
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
                  rows="5"
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

            {/* Contact Info */}
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
                  📍 Address: <span className="text-white">T- HuB 2.o, Inorbit Mall Rd, Vittal Rao Nagar, Knowledge City, Madhapur, Hyderabad, Telangana 500081</span>
                </p>
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:contact@patterns.ai"
                    className="text-green-400 hover:underline"
                  >
                  info@thepatternscompany.com
                  </a>
                </p>
                <p>
                  📞 Phone:{" "}
                  <a
                    href="tel:+91837416160"
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

      <LocationSection />
    </div>
  );
}
