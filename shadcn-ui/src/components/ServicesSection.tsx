// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Brush,
//   Code2,
//   Globe,
//   Minus,
//   Move,
//   Plus,
//   ShoppingBag,
//   Smartphone,
//   Store,
// } from "lucide-react";
// import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";

// // ✅ Use one video for all cards
// import hero from "../tpc vide 1.mp4";
// import ss1 from "../ss1.mp4";
// import ss2 from "../ss2.mp4";
// import ss3 from "../ss3.mp4";
// import ss4 from "../ss4.mp4";
// import ss5 from "../ss5.mp4";
// import ss6 from "../ss6.mp4";

// // import hh from '../hhe1.mp4'

// // Service images (fallback if video not working)
// const APP_DEV_IMG = "/images/App-Dev.jpg";
// const WEB_DEV_IMG = "/images/Web-Dev.jpeg";
// const DIGITAL_MARKETING_IMG = "/images/Digital-marketing.jpg";
// const SMM_IMG = "/images/AI.jpg";
// const SEO_IMG = "/images/Seo.jpg";
// const Brand = "/images/branding.jpg";

// function Spec({ label, value, unit }: { label: string; value: string; unit?: string }) {
//   return (
//     <div className="grid grid-cols-[1fr,auto] items-end gap-4 border-t border-black/20 pt-3">
//       <dt className="text-xs uppercase tracking-wide text-black/70">{label}</dt>
//       <dd className="text-right text-2xl md:text-3xl font-extrabold text-black">
//         {value}
//         {unit && (
//           <span className="ml-1 text-base font-semibold text-black/80">{unit}</span>
//         )}
//       </dd>
//     </div>
//   );
// }

// // Reusable card
// // function DroneCard({
// //   title,
// //   subtitle,
// //   description,
// //   specs,
// //   video,
// //   img,
// //   bgColor,
// //   link,
// // }: {
// //   title: string;
// //   subtitle: string;
// //   description: string;
// //   specs: Array<{ label: string; value: string; unit: string }>;
// //   video?: string;
// //   img: string;
// //   bgColor: string;
// //   link: string;
// // }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 24 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.6 }}
// //       className={`relative grid overflow-hidden rounded-[20px] ${bgColor} p-3 sm:p-4 md:p-5 shadow-xg`}
// //     >
// //       {/* Decorative glyphs (desktop only) */}
// //       <div className="pointer-events-none absolute right-6 top-6 hidden md:block select-none text-black/70">
// //         <div className="flex items-center gap-8 text-sm font-semibold">
// //           <span className="inline-flex items-center gap-1">
// //             <Move size={18} />⌃
// //           </span>
// //           <span className="underline">l‰</span>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
// //         {/* LEFT SECTION */}
// //         <div className="relative">
// //           <div className="grid gap-5 rounded-[24px] bg-white p-3 md:grid-cols-[260px,1fr] md:p-5">
// //             {/* Specs */}
// //             <div className="relative rounded-[20px] border-2 border-black/15 p-4 max-h-none md:max-h-[300px] overflow-y-visible">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-2xl md:text-4xl font-extrabold tracking-tight">
// //                     {subtitle}
// //                   </p>
// //                   <div className="mt-1 w-28 md:w-36 border-y-4 border-black/80 text-center text-xs uppercase tracking-widest">
// //                     service
// //                   </div>
// //                 </div>
// //               </div>

// //               <p className="mt-3 text-sm md:text-base leading-snug text-black/80">
// //                 {description}
// //               </p>

// //               <div className="mt-3 flex items-center gap-3">
// //                 <button className="grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full border-2 border-black/70 bg-white text-black">
// //                   <Minus size={16} />
// //                 </button>
// //                 <button className="grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full border-2 border-black/70 bg-white text-black">
// //                   <Plus size={16} />
// //                 </button>
// //               </div>

// //               <dl className="mt-4 space-y-4">
// //                 {specs.map((spec, idx) => (
// //                   <Spec
// //                     key={idx}
// //                     label={spec.label}
// //                     value={spec.value}
// //                     unit={spec.unit}
// //                   />
// //                 ))}
// //               </dl>
// //             </div>

// //             {/* ✅ Conditional video or image */}
// //             <div className="relative rounded-[20px] border-2 border-black/15 overflow-hidden">
// //               {video ? (
// //                 <video
// //                   src={video}
// //                   autoPlay
// //                   loop
// //                   muted
// //                   playsInline
// //                   className="w-full h-48 md:h-[300px] object-cover"
// //                 />
// //               ) : (
// //                 <img
// //                   src={img}
// //                   alt={title}
// //                   className="w-full h-48 md:h-[300px] object-cover transition-transform duration-500 hover:scale-105"
// //                 />
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* RIGHT SECTION */}
// //         <div className="relative">
// //           <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-black">
// //             {title}
// //           </h2>
// //           <p className="mt-4 md:mt-6 max-w-xl text-base md:text-lg leading-relaxed text-black/80">
// //             {description}
// //           </p>

// //           <div className="mt-6 md:mt-16">
// //             <Button
// //               variant="default"
// //               size="lg"
// //               className="w-full md:w-auto rounded-full bg-black text-white hover:bg-black/90 shadow-md hover:shadow-lg"
// //               asChild
// //             >
// //               <Link
// //                 to={link}
// //                 className="inline-flex items-center justify-center gap-3"
// //               >
// //                 More details
// //                 <ArrowRight
// //                   size={22}
// //                   className="transition-transform duration-300 group-hover:translate-x-1"
// //                 />
// //               </Link>
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// function DroneCard({
//   title,
//   subtitle,
//   description,
//   specs,
//   video,
//   img,
//   bgColor,
//   link,
// }: {
//   title: string;
//   subtitle: string;
//   description: string;
//   specs: Array<{ label: string; value: string; unit: string }>;
//   video?: string;
//   img: string;
//   bgColor: string;
//   link: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className={`relative grid overflow-hidden rounded-[20px] ${bgColor} p-3 sm:p-4 md:p-5 shadow-xg`}
//     >
//       {/* Decorative glyphs */}
//       <div className="pointer-events-none absolute right-6 top-6 hidden md:block select-none text-black/70">
//         <div className="flex items-center gap-8 text-sm font-semibold">
//           <span className="inline-flex items-center gap-1">
//             <Move size={18} />⌃
//           </span>
//           <span className="underline">l‰</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
//         {/* LEFT SECTION */}
//         <div className="relative">
//           <div className="grid gap-5 rounded-[24px] bg-white p-3 md:grid-cols-[260px,1fr] md:p-5">
//             {/* Specs */}
//             <div className="relative rounded-[20px] border-2 border-black/15 p-4 max-h-none md:max-h-[300px] overflow-y-visible">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-2xl md:text-4xl font-extrabold tracking-tight">
//                     {subtitle}
//                   </p>
//                   <div className="mt-1 w-28 md:w-36 border-y-4 border-black/80 text-center text-xs uppercase tracking-widest">
//                     service
//                   </div>
//                 </div>
//               </div>

//               {/* ✅ Remove this description block from the left side */}
//               {/*
//               <p className="mt-3 text-sm md:text-base leading-snug text-black/80">
//                 {description}
//               </p>
//               */}

//               {/* <div className="mt-3 flex items-center gap-3">
//                 <button className="grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full border-2 border-black/70 bg-white text-black">
//                   <Minus size={16} />
//                 </button>
//                 <button className="grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full border-2 border-black/70 bg-white text-black">
//                   <Plus size={16} />
//                 </button>
//               </div> */}

//               <dl className="mt-4 space-y-4">
//                 {specs.map((spec, idx) => (
//                   <Spec
//                     key={idx}
//                     label={spec.label}
//                     value={spec.value}
//                     unit={spec.unit}
//                   />
//                 ))}
//               </dl>
//             </div>

//             {/* Image or video */}
//             <div className="relative rounded-[20px] border-2 border-black/15 overflow-hidden">
//               {video ? (
//                 <video
//                   src={video}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-48 md:h-[300px] object-cover"
//                 />
//               ) : (
//                 <img
//                   src={img}
//                   alt={title}
//                   className="w-full h-48 md:h-[300px] object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="relative">
//           <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-black">
//             {title}
//           </h2>
//           <p className="mt-4 md:mt-6 max-w-xl text-base md:text-lg leading-relaxed text-black/80">
//             {description}
//           </p>

//           <div className="mt-6 md:mt-16">
//             <Button
//               variant="default"
//               size="lg"
//               className="w-full md:w-auto rounded-full bg-black text-white hover:bg-black/90 shadow-md hover:shadow-lg"
//               asChild
//             >
//               <Link
//                 to={link}
//                 className="inline-flex items-center justify-center gap-3"
//               >
//                 More details
//                 <ArrowRight
//                   size={22}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Products() {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   return (
//     <section
//       id="services"
//       className="py-16 md:py-20 bg-accent/50 scroll-mt-24 md:scroll-mt-28"
//     >
//       {/* Header */}
//       <div
//         ref={ref}
//         className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
//           inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         }`}
//       >
//         <h1 className="font-geometric text-4xl md:text-5xl font-bold mt-12">
//           Our{" "}
//           <span className="bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
//             Services
//           </span>
//         </h1>

//         <p className="mt-3 md:mt-4 text-muted-foreground">
//           Explore our lineup of technology and marketing services to grow your
//           business.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="mt-12 md:mt-20 space-y-12 md:space-y-18 max-w-6xl mx-auto px-4">

//         <DroneCard
//           title="Branding"
//           subtitle="Creative Brandings"
//           description="Build a strong and memorable identity for your business with our expert branding solutions, from logo design to complete brand strategy."
//           specs={[
//             { label: "Brand projects", value: "50", unit: "+" },
//             { label: "Satisfaction rate", value: "98", unit: "%" },
//           ]}
//           video={ss1}
//           img={Brand}
//           bgColor="bg-[#f39c12]"
//           link="/graphic-designing"
//         />

// {/* Branding DroneCard here... */}

// {/* TPC block under Branding */}
// <div className="relative w-full h-80 md:h-[400px] mt-6 overflow-visible">
//   {/* Video first (background layer) */}
//   <video
//     src={ss1}
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="absolute left-[7%] top-[1.5%] w-[35%] h-[96%] object-cover z-0 rounded-[30px]"
//   />

//   {/* SVG on top as overlay */}
//   <img
//     src="/images/bb1.svg"
//     alt="TPC Background"
//     className="absolute left-0 top-0 w-[140%] h-full object-contain z-10"
//   />
// </div>

//         <DroneCard
//           title="Web Development"
//           subtitle="Website Development"
//           description="Patterns Company specializes in delivering bespoke Web Development Services In Hyderabad tailored to your unique needs and aspirations."
//           specs={[
//             { label: "Delivery time", value: "2", unit: "months" },
//             { label: "Pages included", value: "10", unit: "+" },
//           ]}
//           video={ss2}
//           img={WEB_DEV_IMG}
//           bgColor="bg-[#A8EB66]"
//           link="/web-development"
//         />

//         <DroneCard
//           title="App Development"
//           subtitle="Mobile App"
//           description="Transforming ideas into seamless digital solutions through expert app development Services in Hyderabad at Patterns Company."
//           specs={[
//             { label: "Delivery time", value: "3", unit: "months" },
//             { label: "Team size", value: "5", unit: "devs" },
//           ]}
//           video={ss3}
//           img={APP_DEV_IMG}
//           bgColor="bg-[#ff6b01]"
//           link="/app-development"
//         />

//         <DroneCard
//           title="Digital Marketing"
//           subtitle="DMS"
//           description="Transforming businesses through strategic campaigns across multiple digital channels."
//           specs={[
//             { label: "Campaign reach", value: "1M", unit: "+" },
//             { label: "ROI", value: "3x", unit: "" },
//           ]}
//           video={ss4}
//           img={DIGITAL_MARKETING_IMG}
//           bgColor="bg-[#e7c132]"
//           link="/digital-marketing"
//         />

//         <DroneCard
//           title="Search Engine Optimization"
//           subtitle="SEO"
//           description="Improve search visibility and drive organic traffic with our expert SEO services."
//           specs={[
//             { label: "Keywords ranked", value: "100", unit: "+" },
//             { label: "Traffic increase", value: "200", unit: "%" },
//           ]}
//           video={ss5}
//           img={SEO_IMG}
//           bgColor="bg-[#9b59b6]"
//           link="/digital-marketing"
//         />

//         <DroneCard
//           title="AI Development"
//           subtitle="SMM"
//           description="Boost your brand presence with engaging social media strategies and content."
//           specs={[
//             { label: "Platforms", value: "6", unit: "+" },
//             { label: "Engagement rate", value: "25", unit: "%" },
//           ]}
//           video={ss6}
//           img={SMM_IMG}
//           bgColor="bg-[#4dc7ff]"
//           link="/ai-development"
//         />
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import ss1 from "../ss1.mp4";
import ss2 from "../ss2.mp4";
import ss3 from "../ss3.mp4";
import ss4 from "../ss4.mp4";
import ss5 from "../ss5.mp4";
import ss6 from "../ss6.mp4";
import ll1 from "../ll1.png";
import ll2 from "../ll2.png";
import kk13 from "../kk13.png";
import kk19 from "../kk19.png";
import kk18 from "../kk18.png";

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-accent/50 scroll-mt-24 md:scroll-mt-28"
    >
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-geometric text-4xl md:text-5xl font-bold mt-12">
          Our{" "}
          <span className="bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
            Services
          </span>
        </h1>
        <p className="mt-3 md:mt-4 text-muted-foreground">
          Explore our lineup of technology and marketing services to grow your
          business.
        </p>
      </div>

      {/* Branding Block */}
      <div className="container-ser container pt-10">
        <div className="service-content-web">
          <div className="service-image">
            <video className="search-video" autoPlay loop muted playsInline>
              <source src={ss1} type="video/mp4" />
            </video>
            <img src={ll1} alt="Branding" className="layer" />
          </div>
          <div className="service-text">
            <div className="service-title-wrapper">
              <h2 className="service-title">Branding</h2>
              <p className="service-description">
                Build a strong and memorable identity for your business with our
                expert branding solutions, from logo design to complete brand
                strategy. complete brand strategy online.
              </p>
            </div>
            <Link
              to="/graphic-designing"
              className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Web Development Block */}
      <div className="container-ser container pt-10">
        <div className="service-content-web1">
          <div className="service-image">
            <video className="search-video" autoPlay loop muted playsInline>
              <source src={ss2} type="video/mp4" />
            </video>
            <img src={ll2} alt="Web Development" className="layer" />
          </div>
          <div className="service-text">
            <div className="service-title-wrapper">
              <h2 className="service-title">Web Development</h2>
              <p className="service-description">
                Patterns Company specializes in delivering bespoke Web
                Development Services Int Hyderabad tailored to your unique needs
                and aspirations.
              </p>
            </div>
            <Link
              to="/web-development"
              className="service-btn bg-black text-white px-4 py-2  rounded-lg hover:bg-green-400 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* App Development Block */}
      <div className="container-ser container pt-10">
        <div className="service-content">
          <div className="service-image">
            <video className="search-video" autoPlay loop muted playsInline>
              <source src={ss3} type="video/mp4" />
            </video>
            <img src={kk13} alt="App Development" className="layer" />
          </div>
          <div className="service-text">
            <div className="service-title-wrapper1s">
              <h2 className="service-title">App Development</h2>
              <p className="service-description">
                Transforming ideas into seamless digital solutions through
                expert app development Services in Hyderabad at Patterns
                Company.
              </p>
            </div>

            <Link
              to="/app-development"
              className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Digital Marketing Block */}
      <div className="container-ser container pt-10">
        <div className="service-content-social">
          <div className="service-image">
            <video className="search-video" autoPlay loop muted playsInline>
              <source src={ss4} type="video/mp4" />
            </video>
            <img src={kk19} alt="Digital Marketing" className="layer" />
          </div>
          <div className="service-text">
            <div className="service-title-wrapper">
              <h2 className="service-title">Digital Marketing</h2>
              <p className="service-description">
                Transforming businesses through strategic campaigns across
                multiple digital channels.
              </p>
            </div>
            <Link
              to="/digital-marketing"
              className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Block */}
      {/* <div className="container-ser container pt-10">
        <div className="service-content">
          <div className="service-image">
            <video className="search-video" autoPlay loop muted playsInline>
              <source src={ss5} type="video/mp4" />
            </video>
            <img src={kk18} alt="SEO" className="layer" />
          </div>
          <div className="service-text">
            <h2 className="service-title">Search Engine Optimization</h2>
            <p className="service-description">
              Improve search visibility and drive organic traffic with our
              expert SEO services.
            </p>
            <Link
              to="/seo"
              className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div> */}

      {/* AI Development Block */}
      <div className="container-ser container pt-10">
        <div className="service-content-Engine1">
          <div className="service-image">
            <video className="search-video" autoPlay loop muted playsInline>
              <source src={ss6} type="video/mp4" />
            </video>
            <img src={kk18} alt="AI Development" className="layer" />
          </div>
          <div className="service-text">
            <div className="service-title-wrapper">
              <h2 className="service-title">AI Development</h2>
              <p className="service-description">
                Boost your brand presence with engaging social media strategies
                and content.
              </p>
            </div>
            <Link
              to="/ai-development"
              className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
