import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Truck, Users } from 'lucide-react';
import { Link } from "react-router-dom";
import video from '../large_view.mp4';

import hero from '../tpc vide 1.mp4'


export default function HeroSection() {
  return (
    <section
      id="herosection"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Video Background */}
      <div className="absolute inset-0 z-0">
        <video style={{ backgroundPosition: 'top' }}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* ✅ Content */}
      {/* <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-center text-3xl sm:text-5xl md:text-6xl leading-tight mt-2">
            <div>WE</div>
            <div>CREATE</div>
            <div>FUTURE</div>
            <div>WEBSITES</div>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 mb-5 hero-btn">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-green-400 hover:bg-green-500 text-base sm:text-lg px-10 sm:px-8 py-3 sm:py-4"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-white border border-green-400 bg-green-400 hover:text-gray-900 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Get In Touch
              </Button>
            </Link>
          </div>


  
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
            <div className="text-center">
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative z-10 container mx-auto px-4 text-center text-white min-h-screen flex flex-col justify-between">
        {/* ✅ Hero Heading moved lower */}
        <div className="flex-1 flex items-start justify-center pt-32 sm:pt-20 md:pt-40">
          <h1 className=" font-geometric font-bold text-3xl sm:text-5xl md:text-6xl leading-relaxed">
            <div><span className='text-[80px] '>W</span><span className='text-[30px]'>E</span></div>
            <div>CREATE</div>
            <div>FUTURE</div>
            <div>WEBSITES</div>
          </h1>
        </div>

        {/* ✅ Buttons at the bottom */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
          <Link to="/services">
            <Button
              size="lg"
              className="bg-green-400 hover:bg-green-500 text-base sm:text-lg px-10 sm:px-8 py-3 sm:py-4"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>

          <Link to="/contact">
            <Button
              variant="outline"
              size="lg"
              className="text-white border border-green-400 bg-green-400 hover:text-gray-900 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>



      {/* ✅ Scroll Indicator */}
      <div className=" move absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

