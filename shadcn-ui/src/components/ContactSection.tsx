import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  MessageCircle,
  Truck,
  Users
} from 'lucide-react';

export default function ContactSection() {
  const services = [
    { icon: MessageCircle, title: 'Free Consultation', description: 'Expert advice on material selection' },
    { icon: Users, title: 'Bulk Orders', description: 'Special pricing for large projects' },
    { icon: Truck, title: 'Emergency Supply', description: '24/7 urgent delivery service' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your
            <span className="block text-green-600">Next Project?</span>
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center justify-center py-12 bg-white relative">
          <div className="text-center mb-8">
            {/* <img
              src="/logo.svg"
              alt="Logo"
              className="mx-auto mb-2 w-12 h-12"
            /> */}
            <h2 className="text-5xl font-bold text-black">
              Contact <span className="font-normal">us</span>
            </h2>
          </div>

          <form className="w-full max-w-2xl space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl bg-[#9bf074] px-4 py-3 text-gray-700 focus:outline-none"
            />

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="w-1/2 rounded-xl bg-[#9bf074] px-4 py-3 text-gray-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-1/2 rounded-xl bg-[#9bf074] px-4 py-3 text-gray-700 focus:outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Country"
              className="w-full rounded-xl bg-[#9bf074] px-4 py-3 text-gray-700 focus:outline-none"
            />

            <textarea
              placeholder="Here you can provide details. Tell us about your company and we will prepare a suitable offer."
              rows={4}
              className="w-full rounded-xl bg-[#9bf074] px-4 py-3 text-gray-700 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#103e0f] text-[#9bf074] py-3 text-lg font-semibold hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
