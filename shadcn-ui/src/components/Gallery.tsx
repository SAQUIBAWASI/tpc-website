// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const teamMembers = [
//   { name: "Ajay Manthri", role: "Founder & CEO", img: "/images/ajay.jpg" },
//   { name: "Jyothsna", role: "Manager", img: "/images/13.jpg" },
//   { name: "Shruthi", role: "Human Resource", img: "/images/36.jpg" },
//   { name: "Srini", role: "Hyderabad Public School ka Property", img: "/images/Sinu6.png" },
//   { name: "Pandu Reddy", role: "Developer", img: "/images/pandu-reddy.png" },
//   { name: "Suvarna", role: "UI/UX", img: "/images/7.jpg" },
//   { name: "Anil", role: "Marketing", img: "/images/anil 1.jpg" },
//   { name: "Pragnya", role: "Embrace the unknown.", img: "/images/47.jpg" },
//   { name: "Hema", role: "Digital Marketing", img: "/images/2.jpg" },
//   { name: "Rama Krishna", role: "SEO", img: "/images/.jpg" },
//   { name: "Ramya", role: "Content Writer", img: "/images/3.jpg" },
//   { name: "Chandra Kanth", role: "Tester", img: "/images/ck.jpg" },
//   { name: "Phanindra", role: "Code is poetry in motion.", img: "/images/pk.jpg" },
//   { name: "Rani", role: "Visual storytelling ", img: "/images/21.jpg" },
//   { name: "Jagadeesh", role: "Keep calm and code on.", img: "/images/jagadeesh.jpg" },
//   { name: "Sathwika", role: "BDE", img: "/images/5.jpg" },
//   { name: "Sasi", role: "Frontend Dev", img: "/images/16.jpg" },
//   { name: "Rakesh", role: "QA", img: "/images/26.jpg" },
//   { name: "Kumar", role: "Operations BUG", img: "/images/34.jpg" },
//   { name: "Aman", role: "Research", img: "/images/26.jpg" },
// ];

// const partners = [
//   { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
//   { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
//   { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
//   { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
//   { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
//   { name: "WordPress", logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png" },
//   { name: "GoDaddy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/GoDaddy_logo.svg" },
//   { name: "Cloudflare", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Cloudflare_Logo.png" },
//   { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Vercel_logo_black.svg" },
// ];

// export default function TeamSection() {
//   return (
//     <>
//       {/* Team Section */}
//       <section id="gallery" className="py-20 bg-[#7ED957]">
//         <div className="container mx-auto px-6">
//           {/* Title */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-extrabold text-white mb-4">
//               Meet Our <span className="text-yellow-300">Expert Team</span>
//             </h2>
//             <p className="text-gray-100 max-w-2xl mx-auto">
//               A passionate group of innovators, designers, developers, and
//               strategists working together to build exceptional digital
//               experiences.
//             </p>
//           </div>

//           {/* ✅ Team Grid (2 columns on mobile) */}
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="group bg-black rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center"
//               >
//                 <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-400 shadow-md group-hover:scale-105 transform transition duration-300">
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="mt-4 font-semibold text-xl text-white">
//                   {member.name}
//                 </h3>
//                 <p className="text-green-400">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partners Section */}
//       <section className="bg-[#f4f9ff] py-12">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           {/* Heading */}
//           <h3 className="text-green-400 font-medium mb-2">Our Partners</h3>
//           <h2 className="text-2xl md:text-3xl font-bold mb-8">
//             Expertise in all Major Platforms
//           </h2>

//           {/* ✅ Swiper Carousel */}
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={30}
//             slidesPerView={2} // ✅ default 2 (for mobile)
//             loop={true}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//             }}
//             className="pb-10"
//           >
//             {partners.map((partner, index) => (
//               <SwiperSlide key={index}>
//                 <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center h-32">
//                   <img
//                     src={partner.logo}
//                     alt={partner.name}
//                     className="max-h-20 object-contain"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//     </>
//   );
// }

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
  { name: "Jyothsna", role: "Manager", img: "/images/13.jpg" },
  { name: "Shruthi", role: "Human Resource", img: "/images/36.jpg" },
  { name: "Roshini", role: "BDE", img: "/team/roshini (1) - Copy.png" },
  { name: "Sathwika", role: "Stay a head, embrace digital trends.", img: "/images/5.jpg" },
  { name: "Srini", role: "Hyderabad Public School ka Property", img: "/images/Sinu6.png" },
  { name: "Pandu Reddy", role: "Aaj mei Khuch Naya Karunga", img: "/images/pandu-reddy.png" },
  { name: "Pragnya", role: "Embrace the unknown.", img: "/images/47.jpg" },
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
  { name: "----", role: "Graphic design", img: "/team/roshini (3) - Copy.png" },
  { name: "Shania", role: "Graphic design", img: "/team/shania mam - Copy.jpg" },
  { name: "Sushmita", role: "Graphic design", img: "/team/Sushmita - Copy.png" },
  { name: "Shweta", role: "Graphic design", img: "/team/Shweta - Copy.png" },
];

const partners = [
  { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "WordPress", logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png" },
  // { name: "GoDaddy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/GoDaddy_logo.svg" },
  // { name: "Cloudflare", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Cloudflare_Logo.png" },
  // { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Vercel_logo_black.svg" },
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Left side big "Team" text */}
            {/* <div className="flex justify-center items-center">
              <h1 className="text-[120px] leading-none font-extrabold text-black">
                Te<br />am
              </h1>
            </div> */}
            <div className="flex justify-center items-center">
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
                {/* <div className="w-full h-[280px] bg-green-400 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
                  />

                </div> */}

                <div className="w-full h-[280px] bg-green-400 rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform-gpu will-change-transform origin-center group-hover:rotate-[1turn]"
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
