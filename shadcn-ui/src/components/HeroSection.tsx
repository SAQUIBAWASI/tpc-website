// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
// import { Link } from "react-router-dom";
// import hero from '../tpc vide 1.mp4'
// import mv from '../mv.mp4'
// import r from '../19.mp4'
// import h1 from '../large_view.mp4'
// import h2 from '../mobile-v.mp4'
// import h3 from '../mobile-view.mp4'

// export default function HeroSection() {
//   return (
//     // ✅ Added pt-24 (top padding) to push hero below navbar
//     <section id="herosection" className="relative min-h-screen overflow-hidden pt-20">
      
//       {/* ✅ Desktop View (text left + half-circle video right) */}
//       <div className="hidden md:flex items-center min-h-screen bg-white text-black">
        
//         {/* Left Side Text */}
//         <div className="relative z-10 w-1/2 px-10 flex flex-col justify-center items-start space-y-6">
//           <p className="text-green-600 text-lg font-semibold">5+ YEARS OF EXPERIENCE</p>
//           <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight">
//             <div>WE</div>
//             <div>CREATE</div>
//             <div>FUTURE</div>
//             <div>WEBSITES</div>
//           </h1>

//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <Link to="/services">
//               <Button
//                 size="lg"
//                 className="bg-green-500 hover:bg-green-600 text-base sm:text-lg px-10 sm:px-8 py-3 sm:py-4"
//               >
//                 Explore Our Services
//                 <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//               </Button>
//             </Link>

//             <Link to="/contact">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border border-green-500 text-green-600 hover:bg-green-500 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
//               >
//                 Get In Touch
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Side Video with Half-Circle */}
//         <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden clip-half-right">
//           <video autoPlay muted loop playsInline className="w-full h-full object-cover">
//             <source src={h1} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>

//       {/* ✅ Mobile View (full background video with centered text) */}
//       <div className="md:hidden relative flex items-center justify-center min-h-screen text-center text-white">
//         {/* Background video */}
//         <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
//           <source src={h1} type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-black/50 z-0"></div>

//         {/* Foreground text */}
//         <div className="relative z-10 px-6 pt-20">
//           <p className="text-green-400 text-sm font-semibold">5+ YEARS OF EXPERIENCE</p>
//           <h1 className="font-bold text-3xl leading-tight mt-2">
//             <div>WE</div>
//             <div>CREATE</div>
//             <div>FUTURE</div>
//             <div>WEBSITES</div>
//           </h1>

//           <div className="flex flex-col gap-4 mt-6">
//             <Link to="/services">
//               <Button
//                 size="lg"
//                 className="bg-green-500 hover:bg-green-600 text-base px-8 py-3"
//               >
//                 Explore Our Services
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </Button>
//             </Link>

//             <Link to="/contact">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border border-green-400 text-green-400 hover:bg-green-500 hover:text-white text-base px-6 py-3"
//               >
//                 Get In Touch
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Half-Circle Shape CSS */}
//       <style>{`
//         .clip-half-right {
//           clip-path: ellipse(100% 100% at right center);
//         }
//       `}</style>
//     </section>
//   );
// }


import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import h1 from '../large_view.mp4';

export default function HeroSection() {
  return (
    <section id="herosection" className="relative min-h-screen overflow-hidden pt-20">

      {/* ✅ Desktop View (>=1024px) */}
      <div className="hidden lg:flex items-center min-h-screen bg-white text-black">
        
        {/* Left Side Text */}
        <div className="relative z-10 w-1/2 px-10 flex flex-col justify-center items-start space-y-6">
          <p className="text-green-600 text-lg font-semibold">5+ YEARS OF EXPERIENCE</p>
          <h1 className="font-bold text-6xl leading-tight">
            <div>WE</div>
            <div>CREATE</div>
            <div>FUTURE</div>
            <div>WEBSITES</div>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-10 py-4"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border border-green-500 text-green-600 hover:bg-green-500 hover:text-white text-lg px-8 py-4"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side Video */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden clip-half-right">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={h1} type="video/mp4" />
          </video>
        </div>
      </div>


      {/* ✅ Tablet + Mobile View (<1024px) */}
      <div className="lg:hidden relative flex items-center justify-center min-h-screen text-center text-white">
        {/* Background video */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={h1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Foreground text */}
        <div className="relative z-10 px-6 pt-20">
          <p className="text-green-400 text-sm md:text-base font-semibold">5+ YEARS OF EXPERIENCE</p>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight mt-2">
            <div>WE</div>
            <div>CREATE</div>
            <div>FUTURE</div>
            <div>WEBSITES</div>
          </h1>

          <div className="flex flex-col gap-4 mt-6">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-base md:text-lg px-8 py-3 md:px-10 md:py-4"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border border-green-400 text-green-400 hover:bg-green-500 hover:text-white text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Half-Circle Shape CSS */}
      <style>{`
        .clip-half-right {
          clip-path: ellipse(100% 100% at right center);
        }
      `}</style>
    </section>
  );
}
