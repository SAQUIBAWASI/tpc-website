import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import LocationSection from "@/components/Footer";
import { useEffect, useState } from "react";

const teamMembers = [
  { name: "Ajay Manthri", role: "Founder & CEO", img: "/team/t2 (1).png" },
  { name: "Manasa Reddy", role: "Senior Human Resource", img: "/team/t2 (2).png" },
  { name: "Ramya", role: "Pitch, negotiate, close, celebrate victory.", img: "/team/img2222 - Copy.png" },
  { name: "Anil", role: "Transforming ideas into digital reality.", img: "/team/img11111 - Copy.png" },
  { name: "Pragnya", role: "Embrace the unknown.", img: "/team/t6.jpg" },
  { name: "Shruthi", role: "Human Resource", img: "/team/tt7.jpg" },
  { name: "Roshini", role: "BDE", img: "/team/t3.jpg" },
  { name: "Sathwika", role: "Stay a head, embrace digital trends.", img: "/team/t4.jpg" },  
  // /team/t4.jpg
  { name: "Srini", role: "Hyderabad Public School ka Property", img: "/team/t22.jpg" },
  { name: "Pandu Reddy", role: "Aaj mei Khuch Naya Karunga", img: "/team/t9.jpg" },
  { name: "Jyothsna", role: "Manager", img: "/team/t8.jpg" },
  { name: "Hema", role: "Customer-centric campaigns drive results.", img: "/team/t10.jpg" },
  { name: "Chandra Kanth", role: "Design. Develop. Debug. Deploy. Repeat.", img: "/team/t11.jpg" },
  { name: "Phanindra", role: "Code is poetry in motion.", img: "/team/t12.jpg" },
  { name: "Rani", role: "Visual storytelling in vibrant colors. ", img: "/team/t13.jpg" },
  { name: "Jagadeesh", role: "Keep calm and code on.", img: "/team/t14.jpg" },
  { name: "Sasi", role: "Debugging: half my life.", img: "/team/t25.png" },
  { name: "Rakesh", role: "slicing through code challenges with precision", img: "/team/t16.jpg" },
  { name: "Kumar", role: "Silencing the bugs, one fix at a time.", img: "/team/t17.jpg" },
  { name: "Maddiboina Lokesh", role: "Software Engineer | R&D", img: "/team/t18.jpg" },
  { name: "Rajesh", role: "Graphic design", img: "/team/t24.jpg" },
  { name: "Suvarna", role: "Quickly put the developer on speed dial.", img: "/team/t20.jpg" },
  { name: "Gayathri", role: "Research", img: "/team/t21.jpg" },
  { name: "Sangeetha", role: "BDE", img: "/team/t23.jpg" },
  // { name: "Shania", role: "BDE", img: "/team/shania mam - Copy.jpg" },
];

export default function TeamSection() {
  const [showTop, setShowTop] = useState(false);

  // ✅ added for full image popup
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Team | Experts in Digital Marketing, Development & Design</title>
        <meta
          name="description"
          content="Meet our dedicated team of professionals specializing in digital marketing, web development, AI solutions, and creative design. Together, we drive business success."
        />
      </Helmet>

      <section className="bg-black text-white py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.1),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5">
          {/* Title */}
          <motion.h2
            style={{ padding: "40px" }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>

          {/* Layout: Left text + Gallery */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* ✅ Photo Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 flex-1">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={member.img}
                    alt="team"
                    onClick={() => setSelectedImage(member.img)}
                    className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ FULL SCREEN POPUP IMAGE */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919392557785?text=Hello%2C%20I%27m%20interested%20in%20Ecommerce%20services"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl"
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

      <div>
        <LocationSection />
      </div>
    </>
  );
}
