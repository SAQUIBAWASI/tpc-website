import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const teamMembers = [
  { name: "Ajay Manthri", role: "Founder & CEO", img: "/team/as2.jpg" },
  { name: "Manasa Reddy", role: "Senior Human Resource", img: "/team/manasa mam - Copy.png" },
  { name: "Ramya", role: "Pitch, negotiate, close, celebrate victory.", img: "/images/3.jpg" },
  { name: "Anil", role: "Transforming ideas into digital reality.", img: "/images/anil 1.jpg" },
  { name: "Pragnya", role: "Embrace the unknown.", img: "/images/47.jpg" },
  { name: "Shruthi", role: "Human Resource", img: "/images/36.jpg" },
  { name: "Roshini", role: "BDE", img: "/team/roshini (1) - Copy.png" },
  { name: "Sathwika", role: "Stay ahead, embrace digital trends.", img: "/team/sat1.png" },
  // /images/5.jpg
  { name: "Srini", role: "Hyderabad Public School ka Property", img: "/images/Sinu6.png" },
  { name: "Pandu Reddy", role: "Aaj mei Khuch Naya Karunga", img: "/images/pandu-reddy.png" },
  { name: "Jyothsna", role: "Manager", img: "/images/13.jpg" },
  { name: "Hema", role: "Customer-centric campaigns drive results.", img: "/team/hema.png" },
  { name: "Chandra Kanth", role: "Design. Develop. Debug. Deploy. Repeat.", img: "/images/ck.jpg" },
  { name: "Phanindra", role: "Code is poetry in motion.", img: "/images/pk.jpg" },
  { name: "Rani", role: "Visual storytelling in vibrant colors.", img: "/images/21.jpg" },
  { name: "Jagadeesh", role: "Keep calm and code on.", img: "/images/jagadeesh.jpg" },
  { name: "Sasi", role: "Debugging: half my life.", img: "/images/16.jpg" },
  { name: "Rakesh", role: "Slicing through code challenges with precision", img: "/images/26.jpg" },
  { name: "Kumar", role: "Silencing the bugs, one fix at a time.", img: "/images/34.jpg" },
  { name: "Maddiboina Lokesh", role: "Software Engineer | R&D", img: "/team/lokesh.png" },
  //  { name: "Immadisetty Ganesh", role: "Software Engineer | AI&DS", img: "/team/roshini (6) - Copy.png" },
  { name: "Rajesh", role: "Graphic design", img: "/team/roshini (6) - Copy.png" },
  { name: "Suvarna", role: "Quickly put the developer on speed dial.", img: "/images/suvarna - Copy.jpg" },
  { name: "Gayathri", role: "Research", img: "/team/Gayathri - Copy.webp" },
  { name: "Sangeetha", role: "BDE", img: "/team/roshini (3) - Copy.png" },
  { name: "Shania", role: "BDE", img: "/team/shania mam - Copy.jpg" },
  // { name: "Sushmita", role: "Graphic design", img: "/team/Sushmita - Copy.png" },
  // { name: "Shweta", role: "Graphic design", img: "/team/Shweta - Copy.png" },
];

const partners = [
  { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "WordPress", logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png" },
];

export default function TeamSection() {
  return (
    <>
      {/* Team Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center mb-12">
            MEET OUR <span className="text-green-500">EXPERT</span>
          </h2>

          {/* Mobile TEAM above images */}
<div className="flex justify-center items-center mb-8 md:hidden">
  <h1 className="font-extrabold text-black leading-none text-center">
    <div className="flex justify-center items-start">
      <span className="text-[160px] leading-none">T</span>
      <span className="text-[80px] leading-none self-end">e</span>
    </div>
    <span className="block text-[100px] leading-none">am</span>
  </h1>
</div>



          {/* ✅ Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Left side big "TEAM" text (desktop only) */}
            <div className="hidden md:flex justify-center items-center">
              <h1 className="leading-none font-extrabold text-black">
                <span className="text-[250px] block">T</span>
                <span className="text-[120px]">eam</span>
              </h1>
            </div>

            {/* Team members */}
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full h-auto md:h-[280px] bg-green-400 rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-contain md:object-cover transition-transform duration-700 ease-in-out transform-gpu will-change-transform origin-center group-hover:rotate-[1turn]"
                  />
                </div>

                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#f4f9ff] py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-green-400 font-medium mb-2">Our Partners</h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Expertise in all Major Platforms
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center h-32">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
