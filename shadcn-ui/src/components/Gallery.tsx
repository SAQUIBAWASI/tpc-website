import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const teamMembers = [
  { name: "Ajay Manthri", role: "Founder & CEO", img: "/images/Founder.jpg" },
  { name: "Jyothsna", role: "Manager", img: "/images/team2.png" },
  { name: "Shruthi", role: "Human Resource", img: "/images/team3.png" },
  { name: "Rahul", role: "Designer", img: "/images/team4.png" },
  { name: "Sneha", role: "Developer", img: "/images/team5.png" },
  { name: "Kiran", role: "UI/UX", img: "/images/team6.png" },
  { name: "Anjali", role: "Marketing", img: "/images/team7.png" },
  { name: "Vikram", role: "DevOps", img: "/images/team8.png" },
  { name: "Pooja", role: "Finance", img: "/images/team9.png" },
  { name: "Rohit", role: "Tester", img: "/images/team10.png" },
  { name: "Meena", role: "Content Writer", img: "/images/team11.png" },
  { name: "Arjun", role: "AI Engineer", img: "/images/team12.png" },
  { name: "Divya", role: "Support", img: "/images/team13.png" },
  { name: "Karthik", role: "Data Analyst", img: "/images/team14.png" },
  { name: "Simran", role: "Intern", img: "/images/team15.png" },
  { name: "Raj", role: "Backend Dev", img: "/images/team16.png" },
  { name: "Neha", role: "Frontend Dev", img: "/images/team17.png" },
  { name: "Suresh", role: "QA", img: "/images/team18.png" },
  { name: "Tanvi", role: "Operations", img: "/images/team19.png" },
  { name: "Aman", role: "Research", img: "/images/team20.png" },
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
<section id="gallery" className="py-20 bg-[#16A34A]">
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
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-md group-hover:scale-105 transform transition duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-gray-900">
                  {member.name}
                </h3>
                <p className="text-green-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#f4f9ff] py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h3 className="text-green-700 font-medium mb-2">Our Partners</h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Expertise in all Major Platforms
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation
            pagination={{ clickable: true }}
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
