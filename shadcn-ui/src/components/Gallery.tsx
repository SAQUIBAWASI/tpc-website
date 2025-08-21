import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const teamMembers = [
  { name: "Ajay Manthri", role: "Founder & CEO", img: "/images/ajay.jpg" },
  { name: "Jyothsna", role: "Manager", img: "/images/13.jpg" },
  { name: "Shruthi", role: "Human Resource", img: "/images/2.jpg" },
  { name: "Rahul", role: "Designer", img: "/images/3.jpg" },
  { name: "Sneha", role: "Developer", img: "/images/5.jpg" },
  { name: "Kiran", role: "UI/UX", img: "/images/7.jpg" },
  { name: "Anjali", role: "Marketing", img: "/images/25.jpg" },
  { name: "Vikram", role: "DevOps", img: "/images/23.jpg" },
  { name: "Pooja", role: "Finance", img: "/images/9.jpg" },
  { name: "Rohit", role: "Tester", img: "/images/10.jpg" },
  { name: "Meena", role: "Content Writer", img: "/images/11.jpg" },
  { name: "Arjun", role: "AI Engineer", img: "/images/21.jpg" },
  { name: "Divya", role: "Support", img: "/images/14.jpg" },
  { name: "Karthik", role: "Data Analyst", img: "/images/14.jpg" },
  { name: "Simran", role: "Intern", img: "/images/34.jpg" },
  { name: "Raj", role: "Backend Dev", img: "/images/36.jpg" },
  { name: "Neha", role: "Frontend Dev", img: "/images/27.jpg" },
  { name: "Suresh", role: "QA", img: "/images/47.jpg" },
  { name: "Tanvi", role: "Operations", img: "/images/49.jpg" },
  { name: "Aman", role: "Research", img: "/images/26.jpg" },
];

const partners = [
  {
    name: "NitroPack",
    logo: "https://nitropack.io/images/logo-dark.svg",
  },
  {
    name: "WordPress",
    logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
  },
  {
    name: "AWS Certified",
    logo: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-logo_horiz_RGB.9d022c1d30f03e3f2dbb3c9f883f0d51f9939e4a.png",
  },
  {
    name: "Dreamscape Networks",
    logo: "https://seeklogo.com/images/D/dreamscape-logo-BD5083C5E7-seeklogo.com.png",
  },
  {
    name: "Google Workspace",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg",
  },
];

export default function TeamSection() {
  return (
    <>
      {/* Team Section */}
<section id="gallery" className="py-20 bg-[#7ED957]">
  <div className="container mx-auto px-6">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-white mb-4">
        Meet Our <span className="text-yellow-300">Expert Team</span>
      </h2>
      <p className="text-gray-100 max-w-2xl mx-auto">
        A passionate group of innovators, designers, developers, and
        strategists working together to build exceptional digital
        experiences.
      </p>
    </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-black rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-400 shadow-md group-hover:scale-105 transform transition duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-white">
                  {member.name}
                </h3>
                <p className="text-green-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#f4f9ff] py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h3 className="text-green-400 font-medium mb-2">Our Partners</h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Expertise in all Major Platforms
          </h2>

         {/* Swiper Carousel */}
<Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={3}
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
