import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


const teamMembers = [
  { name: "Ajay Manthri", role: "Founder & CEO", img: "/images/ajay.jpg" },
  { name: "Jyothsna", role: "Manager", img: "/images/13.jpg" },
  { name: "Shruthi", role: "Human Resource", img: "/images/36.jpg" },
  { name: "Srini", role: "Hyderabad Public School ka Property", img: "/images/Sinu6.png" },
  { name: "Pandu Reddy", role: "Developer", img: "/images/pandu-reddy.png" },
  { name: "Suvarna", role: "UI/UX", img: "/images/7.jpg" },
  { name: "Anil", role: "Marketing", img: "/images/anil 1.jpg" },
  { name: "Pragnya", role: "Embrace the unknown.", img: "/images/47.jpg" },
  { name: "Hema", role: "Digital Marketing", img: "/images/2.jpg" },
  { name: "Rama Krishna", role: "SEO", img: "/images/26.jpg" },
  { name: "Ramya", role: "Content Writer", img: "/images/3.jpg" },
  { name: "Chandra Kanth", role: "Tester", img: "/images/ck.jpg" },
  { name: "Phanindra", role: "Code is poetry in motion.", img: "/images/pk.jpg" },
  { name: "Rani", role: "Visual storytelling", img: "/images/21.jpg" },
  { name: "Jagadeesh", role: "Keep calm and code on.", img: "/images/jagadeesh.jpg" },
  { name: "Sathwika", role: "BDE", img: "/images/5.jpg" },
  { name: "Sasi", role: "Frontend Dev", img: "/images/16.jpg" },
  { name: "Rakesh", role: "QA", img: "/images/26.jpg" },
  { name: "Kumar", role: "Operations BUG", img: "/images/34.jpg" },
  { name: "Aman", role: "Research", img: "/images/26.jpg" },
];

export default function TeamSection() {
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
    </>
  );
}



