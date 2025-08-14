import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Hammer, 
  Truck, 
  Shield, 
  Clock, 
  Users, 
  MapPin,
  ArrowRight 
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Hammer,
      title: 'Construction Materials',
      description: 'Premium quality cement, steel, bricks, and building materials from trusted manufacturers.',
      features: ['High-grade cement', 'Quality steel bars', 'Premium bricks', 'Roofing materials']
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Reliable delivery services ensuring your materials reach the site on time, every time.',
      features: ['Same-day delivery', 'Scheduled deliveries', 'Bulk orders', 'Site delivery']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All materials undergo rigorous quality checks to meet industry standards and regulations.',
      features: ['Quality testing', 'Certified materials', 'Warranty included', 'Compliance assured']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist with orders, queries, and emergency supplies.',
      features: ['Emergency supply', 'Expert consultation', 'Order tracking', 'Technical support']
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Professional guidance on material selection, quantity estimation, and project planning.',
      features: ['Material planning', 'Cost estimation', 'Project consultation', 'Technical advice']
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Serving construction sites across multiple regions with extensive distribution network.',
      features: ['Multi-city delivery', 'Remote locations', 'Bulk logistics', 'Regional warehouses']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Construction
            <span className="block text-blue-600">Supply Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From premium materials to expert consultation, we provide everything you need 
            to bring your construction projects to life with excellence and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}