import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Truck
} from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dsksupply.com', 'orders@dsksupply.com'],
      description: 'Send us your requirements'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Industrial Avenue', 'Construction District, CD 12345'],
      description: 'Visit our main facility'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Fri: 7:00 AM - 7:00 PM', 'Sat: 8:00 AM - 4:00 PM'],
      description: 'We are here to help'
    }
  ];

  const services = [
    { icon: MessageCircle, title: 'Free Consultation', description: 'Expert advice on material selection' },
    { icon: Users, title: 'Bulk Orders', description: 'Special pricing for large projects' },
    { icon: Truck, title: 'Emergency Supply', description: '24/7 urgent delivery service' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your
            <span className="block text-blue-600">Next Project?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact our team of experts for personalized consultation, quotes, and project support. 
            We're here to make your construction dreams a reality.
          </p>
        </div>

        {/* Quick Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select project type</option>
                  <option>Residential Construction</option>
                  <option>Commercial Building</option>
                  <option>Infrastructure Project</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements, timeline, and any specific materials you need..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-lg text-gray-600 mb-8">
                Get in touch with our team through any of the following channels. 
                We're committed to providing exceptional service and support.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Location: 123 Industrial Avenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}