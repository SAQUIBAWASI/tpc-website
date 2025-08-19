import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, CheckCircle, Truck, Users } from 'lucide-react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AboutSection() {
  const achievements = [
    { icon: Users, value: '100+', label: 'Satisfied Clients' },
    { icon: Truck, value: '100+', label: 'Projects Delivered' },
    { icon: Award, value: '5+', label: 'Years of Excellence' },
    { icon: CheckCircle, value: '99%', label: 'On-Time Delivery' }
  ];

  const features = [
    'Premium quality materials from certified suppliers',
    'Expert consultation and project planning support',
    'Competitive pricing with transparent cost structure',
    'Reliable delivery network across multiple regions',
    'Comprehensive quality assurance and testing',
    '24/7 customer support and emergency services'
  ];

  // ✅ Added missing companies list
  const companies = [
    { name: "Company A", logo: "/images/Client1.jpg" },
    { name: "Company B", logo: "/images/Client2.jpg" },
    { name: "Company C", logo: "/images/Client3.jpg" },
    { name: "Company D", logo: "/images/Client4.jpg" },
    { name: "Company E", logo: "/images/Client5.jpg" },
    { name: "Company E", logo: "/images/Client6.jpg" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
                About TPC Supply
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Trust Through
                <span className="block text-green-600">Quality & Service</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 5 years, TPC Supply has been the cornerstone of construction excellence, 
                providing premium materials and unmatched service to builders, contractors, and 
                developers across the region.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality, reliability, and customer satisfaction has made us 
                the trusted partner for projects ranging from residential homes to large-scale 
                commercial developments.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Download Catalog
              </Button>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2831&q=80"
                  alt="Construction materials warehouse"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-2">
                          <IconComponent className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{achievement.value}</div>
                        <div className="text-xs text-gray-600">{achievement.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Trusted Companies Carousel */}
      <div className="max-w-7xl mx-auto flex items-center px-4 mt-20">
        {/* Left text */}
        <div className="w-1/4 pr-6 hidden md:block">
          <h3 className="text-xl font-bold text-gray-800 leading-snug">
            Trusted by <br /> Top Companies
          </h3>
          {/* <div className="mt-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="opacity-20"
            >
              <path d="M10 10 L70 70 M70 10 L10 70" />
            </svg>
          </div> */}
        </div>

        {/* Carousel */}
        <div className="w-full md:w-3/4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="flex items-center"
          >
            {companies.map((c, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-center">
                  <div className="bg-white shadow-md rounded-lg p-6 w-52 h-28 flex items-center justify-center">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-16 object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
