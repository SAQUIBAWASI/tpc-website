import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import LocationSection from "@/components/Footer";
import { useEffect, useState } from "react";


const teamMembers = [
  { name: "Ajay Manthri", role: "Founder & CEO", img: "/team/as2.jpg" },
  { name: "Manasa Reddy", role: "Senior Human Resource", img: "/team/manasa mam - Copy.png" },
  { name: "Ramya", role: "Pitch, negotiate, close, celebrate victory.", img: "/images/3.jpg" },
  { name: "Anil", role: "Transforming ideas into digital reality.", img: "/images/anil 1.jpg" },
  { name: "Pragnya", role: "Embrace the unknown.", img: "/images/47.jpg" },
  
  { name: "Shruthi", role: "Human Resource", img: "/images/36.jpg" },
  { name: "Roshini", role: "BDE", img: "/team/roshini (1) - Copy.png" },
  { name: "Sathwika", role: "Stay a head, embrace digital trends.", img: "/images/5.jpg" },
  { name: "Srini", role: "Hyderabad Public School ka Property", img: "/images/Sinu6.png" },
  { name: "Pandu Reddy", role: "Aaj mei Khuch Naya Karunga", img: "/images/pandu-reddy.png" },
  { name: "Jyothsna", role: "Manager", img: "/images/13.jpg" },
  
  { name: "Hema", role: "Customer-centric campaigns drive results.", img: "/images/2.jpg" },
  
  
  
  
  
  { name: "Chandra Kanth", role: "Design. Develop. Debug. Deploy. Repeat.", img: "/images/ck.jpg" },
  { name: "Phanindra", role: "Code is poetry in motion.", img: "/images/pk.jpg" },
  { name: "Rani", role: "Visual storytelling in vibrant colors. ", img: "/images/21.jpg" },
  { name: "Jagadeesh", role: "Keep calm and code on.", img: "/images/jagadeesh.jpg" },
  
  { name: "Sasi", role: "Debugging: half my life.", img: "/images/16.jpg" },
  { name: "Rakesh", role: "slicing through code challenges with precision", img: "/images/26.jpg" },
  { name: "Kumar", role: "Silencing the bugs, one fix at a time.", img: "/images/34.jpg" },
  { name: "Maddiboina Lokesh", role: "Software Engineer | R&D", img: "/team/roshini (6) - Copy.png" },
  { name: "Rajesh", role: "Graphic design", img: "/team/roshini (6) - Copy.png" },
  { name: "Suvarna", role: "Quickly put the developer on speed dial.", img: "/images/suvarna - Copy.jpg" },
  
  { name: "Gayathri", role: "Research", img: "/team/Gayathri - Copy.webp" },
  { name: "Sangeetha", role: "BDE", img: "/team/roshini (3) - Copy.png" },
  { name: "Shania", role: "BDE", img: "/team/shania mam - Copy.jpg" },
  { name: "Sushmita", role: "Graphic design", img: "/team/Sushmita - Copy.png" },
  { name: "Shweta", role: "Graphic design", img: "/team/Shweta - Copy.png" },
];


export default function TeamSection() {
  const [showTop, setShowTop] = useState(false);

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

          {/* Flex Layout: Left text + Right grid */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left side big Team text */}
            <div className="flex justify-center items-center lg:w-1/4">
              <h1 className="leading-none font-extrabold text-white">
                <span className="text-[250px] block text-green-500">T</span>
                <span className="text-[120px]">eam</span>
              </h1>
            </div>

            {/* Right side Team Members Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 flex-1">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-purple-500/10 shadow-xl hover:scale-105 transition-transform border border-gray-800 text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="group w-32 h-32 mx-auto rounded-xl overflow-hidden shadow-md">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform-gpu will-change-transform origin-center transform group-hover:rotate-[360deg]"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-green-400">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



{/* Floating WhatsApp */}
      <a
        href="https://wa.me/91837416160?text=Hello%2C%20I%27m%20interested%20in%20Ecommerce%20services"
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



