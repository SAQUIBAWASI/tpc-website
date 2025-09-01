import { motion } from "framer-motion";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Left Title */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Vertical Team Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/4 text-center md:text-left"
          >
            <h2 className="text-[80px] font-extrabold leading-none text-black">
              Te<br />am
            </h2>
            <p className="mt-4 text-gray-600 font-medium uppercase tracking-widest">
              Meet Our Expert
            </p>
          </motion.div>

          {/* Team Members Grid */}
          <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

