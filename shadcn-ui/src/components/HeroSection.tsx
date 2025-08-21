import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Play, Truck, Users } from 'lucide-react';
import bgVideo from '../T.mp4'; // ✅ src ke andar T.mp4 hai to is tarah import karo

export default function HeroSection() {
  return (
    <section id="herosection" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Award className="w-4 h-4" />
              {/* <span>Premium Quality Materials Since 1995</span> */}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Dreams with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Tpc Digital Marketing Agency
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for high-quality construction materials, tools, and expert supply chain solutions. 
            Building excellence, one project at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border border-green-400 bg-green-400 hover:text-gray-900 text-lg px-8 py-4"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4">
                <Truck className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-gray-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
