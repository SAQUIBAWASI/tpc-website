import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import History from '@/components/History';
import ProductsSection from '@/components/ProductsSection';
import Services from '@/components/Service';
import ServicesSection from '@/components/ServicesSection';
import Testimonial from '@/components/Testimonial';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Services />
      <Testimonial />
      <ProductsSection />
      <History />
      <ContactSection />
      <Footer />
    </div>
  );
}