import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, Truck, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const achievements = [
    { icon: Users, value: '500+', label: 'Satisfied Clients' },
    { icon: Truck, value: '1000+', label: 'Projects Delivered' },
    { icon: Award, value: '25+', label: 'Years of Excellence' },
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
                About DSK Supply
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Trust Through
                <span className="block text-blue-600">Quality & Service</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 25 years, DSK Supply has been the cornerstone of construction excellence, 
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
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
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80"
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
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2">
                          <IconComponent className="w-6 h-6 text-blue-600" />
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
    </section>
  );
}