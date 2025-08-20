import AboutSection from '@/components/AboutSection';
import CareersSection from '@/components/CareerSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import History from '@/components/History';
import ServicesSection from '@/components/ServicesSection';
import Testimonial from '@/components/Testimonial';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Testimonial />
      <CareersSection />
      <Gallery />
      <History />
       <ContactSection />
      <Footer />
    </div>
  );
}