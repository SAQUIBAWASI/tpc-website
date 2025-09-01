import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Truck, Users } from 'lucide-react';
import { Link } from "react-router-dom";
import video from '../large_view.mp4'


export default function HeroSection() {
  return (
    <section
      id="herosection"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Video Background */}
      <div className="absolute inset-0 z-0">
        <video style={{backgroundPosition:'top'}}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Tagline Icon */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs sm:text-sm">
              <Award className="w-4 h-4" />
              <span>Trusted by Businesses</span>
            </div>
          </div>

          {/* ✅ Main Heading */}
          <h1 style={{padding:'53px'}} className="font-bold text-2xl sm:text-3xl md:text-5xl leading-snug px-2 sm:px-4 mb-6">
            <span style={{padding:'10px'}} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Best Digital Marketing & Web Development in Hyderabad
            </span>
          </h1>

          {/* ✅ CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/services">
              <Button size="lg" className="bg-green-400 hover:bg-green-500 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
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

          {/* ✅ Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-400/20 rounded-full mb-3">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">500+</div>
              <div className="text-gray-200 text-sm sm:text-base">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-400/20 rounded-full mb-3">
                <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">1000+</div>
              <div className="text-gray-200 text-sm sm:text-base">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-400/20 rounded-full mb-3">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">25+</div>
              <div className="text-gray-200 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

