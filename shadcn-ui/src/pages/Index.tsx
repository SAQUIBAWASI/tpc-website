import AboutSection from '@/components/AboutSection';
import Blogs from '@/components/Blogs';
import CareersSection from '@/components/CareerSection';
import Careers from '@/components/Careers';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import History from '@/components/History';
import ServicesSection from '@/components/ServicesSection';
import Testimonial from '@/components/Testimonial';
import Location from '@/components/location';
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import SS from '@/components/About2';
import About2 from '@/components/About2';



export default function Index() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      {/* <SS /> */}
      <About2/>
      <Gallery />

      
      <Testimonial />
      <CareersSection />
      {/* <History /> */}
      <Blogs />


{/* Floating WhatsApp */}
      <a
        href="https://wa.me/919392557785?text=Hello%2C%20I%27m%20interested%20in%20Ecommerce%20services"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 text-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.52c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.45h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.14.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z" />
          <path d="M26.7 5.3C23.9 2.5 20.2 1 16.3 1 8.6 1 2.3 7.3 2.3 15c0 2.4.6 4.8 1.8 6.9L2 31l9.3-2.1c2 .9 4.3 1.4 6.6 1.4 7.7 0 14-6.3 14-14 0-3.9-1.5-7.6-4.2-10.3zM16 28.6c-2.1 0-4.2-.5-6.1-1.4l-.4-.2-5.5 1.2 1.2-5.4-.3-.4C3.9 20.6 3.3 17.9 3.3 15 3.3 8.9 8.9 3.3 16 3.3c3.1 0 6 1.2 8.2 3.4 2.2 2.2 3.4 5.1 3.4 8.3 0 6.4-5.2 11.6-11.6 11.6z" />
        </svg>
      </a>
{/* Scroll to Top */}
{showTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-24 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 shadow-xl"
    aria-label="Scroll to top"
  >
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M6 15l6-6 6 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)}

      <Location />
       {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}