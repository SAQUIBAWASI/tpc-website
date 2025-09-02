// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Award, CheckCircle, Truck, Users } from 'lucide-react';
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// export default function AboutSection() {
//   const achievements = [
//     { icon: Users, value: '100+', label: 'Satisfied Clients' },
//     { icon: Truck, value: '100+', label: 'Projects Delivered' },
//     { icon: Award, value: '5+', label: 'Years of Excellence' },
//     { icon: CheckCircle, value: '99%', label: 'On-Time Delivery' }
//   ];

//   const features = [
//     'Premium quality materials from certified suppliers',
//     'Expert consultation and project planning support',
//     'Competitive pricing with transparent cost structure',
//     'Reliable delivery network across multiple regions',
//     'Comprehensive quality assurance and testing',
//     '24/7 customer support and emergency services'
//   ];

//   // ✅ Added missing companies list
//   const companies = [
//     { name: "Company A", logo: "/images/Client1.jpg" },
//     { name: "Company B", logo: "/images/Client2.jpg" },
//     { name: "Company C", logo: "/images/Client3.jpg" },
//     { name: "Company D", logo: "/images/Client4.jpg" },
//     { name: "Company E", logo: "/images/Client5.jpg" },
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Content */}
//           <div className="order-2 lg:order-1">
//             <div className="mb-6">
//               <Badge variant="secondary" className="mb-4 bg-green-100 text-green-400">
//                 About TPC Supply
//               </Badge>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 Building Trust Through
//                 <span className="block text-green-400">Quality & Service</span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                 For over 5 years, TPC Supply has been the cornerstone of construction excellence, 
//                 providing premium materials and unmatched service to builders, contractors, and 
//                 developers across the region.
//               </p>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Our commitment to quality, reliability, and customer satisfaction has made us 
//                 the trusted partner for projects ranging from residential homes to large-scale 
//                 commercial developments.
//               </p>
//             </div>

//             {/* Features List */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-700 text-sm">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link to="/about-us">
//                 <Button size="lg" className="bg-green-400 hover:bg-green-400">
//                   Learn More About Us
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </Button>
//               </Link>
//               <Button variant="outline" size="lg">
//                 Download Catalog
//               </Button>
//             </div>
//           </div>

//           {/* Image and Stats */}
//           <div className="order-1 lg:order-2">
//             <div className="relative">
//               {/* Main Image */}
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2831&q=80"
//                   alt="Construction materials warehouse"
//                   className="w-full h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>

//               {/* Floating Stats Card */}
//               <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border">
//                 <div className="grid grid-cols-2 gap-6">
//                   {achievements.map((achievement, index) => {
//                     const IconComponent = achievement.icon;
//                     return (
//                       <div key={index} className="text-center">
//                         <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-2">
//                           <IconComponent className="w-6 h-6 text-green-400" />
//                         </div>
//                         <div className="text-2xl font-bold text-gray-900">{achievement.value}</div>
//                         <div className="text-xs text-gray-600">{achievement.label}</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Trusted Companies Carousel */}
     
//     </section>
//   );
// }



// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Award, CheckCircle, Truck, Users } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function AboutSection() {
//   const achievements = [
//     { icon: Users, value: "100+", label: "Happy Clients" },
//     { icon: Truck, value: "120+", label: "Projects Completed" },
//     { icon: Award, value: "5+", label: "Years Experience" },
//     { icon: CheckCircle, value: "99%", label: "On-Time Delivery" },
//   ];

//   const features = [
//     "Premium quality materials from certified suppliers",
//     "Expert consultation and project planning",
//     "Transparent pricing & cost breakdowns",
//     "Reliable delivery network across regions",
//     "Strict quality assurance testing",
//     "24/7 customer support",
//   ];

//   return (
//     <section
//       id="about"
//       className="relative py-24 bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden"
//     >
//       {/* Background Decorative Shapes */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200 rounded-full blur-3xl opacity-30" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-300 rounded-full blur-3xl opacity-20" />

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <Badge className="bg-green-100 text-green-600 mb-4">
//             Who We Are
//           </Badge>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//             Best{" "}
//             <span className="text-green-500">
//               Digital Marketing in Hyderabad
//             </span>
//           </h2>
//           <p className="mt-6 text-gray-600 text-lg leading-relaxed">
//             Discover the best digital marketing agency in Hyderabad — a creative
//             and B2B-driven company offering end-to-end services: branding, web
//             design, eCommerce solutions, SEO, content marketing, digital
//             advertising, social media management, PR, and more. Recognized as
//             the leading website design company in Madhapur, Hyderabad.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left: Image with overlay */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex justify-center"
//           >
//             <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
//               <img
//                 src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
//                 alt="About TPC"
//                 className="object-cover w-full h-full"
//               />
//               <span className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
//                 Since 2018
//               </span>
//             </div>
//           </motion.div>

//           {/* Right: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//               Why Choose Us?
//             </h3>

//             {/* Features */}
//             <ul className="space-y-4 mb-10">
//               {features.map((feature, i) => (
//                 <motion.li
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   className="flex items-start space-x-3"
//                 >
//                   <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
//                   <span className="text-gray-700 text-base leading-relaxed">
//                     {feature}
//                   </span>
//                 </motion.li>
//               ))}
//             </ul>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link to="/about">
//                 <Button
//                   size="lg"
//                   className="bg-green-500 hover:bg-green-600 shadow-lg"
//                 >
//                   Learn More
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>

//         {/* Floating Stats */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {achievements.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
//               >
//                 <div className="flex justify-center mb-3">
//                   <Icon className="w-8 h-8 text-green-500" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">
//                   {item.value}
//                 </div>
//                 <div className="text-gray-600 text-sm">{item.label}</div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, CheckCircle, Truck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const achievements = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Truck, value: "120+", label: "Projects Completed" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: CheckCircle, value: "99%", label: "On-Time Delivery" },
  ];

  const features = [
    "Premium quality materials from certified suppliers",
    "Expert consultation and project planning",
    "Transparent pricing & cost breakdowns",
    "Reliable delivery network across regions",
    "Strict quality assurance testing",
    "24/7 customer support",
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-300 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-green-100 text-green-600 mb-4">Who We Are</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug relative inline-block">
            Best{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500">
              Digital Marketing
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>{" "}
            in Hyderabad
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Discover the best digital marketing agency in Hyderabad — a
            creative and B2B-driven company offering end-to-end services:
            branding, web design, SEO, content marketing, advertising,
            social media management, PR, and more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Floating Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-purple-400 blur-lg opacity-40 animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                alt="About TPC"
                className="relative z-10 object-cover w-full h-full rounded-2xl shadow-2xl border-4 border-white"
              />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md"
              >
                Since 2018
              </motion.span>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 transition-transform group-hover:scale-110 group-hover:text-green-600" />
                  <span className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="bg-green-500 hover:bg-green-600 shadow-lg">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Achievements */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



