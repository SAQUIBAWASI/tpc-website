import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ✅ Common Components
import Header from '@/components/Header';

// ✅ Main Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';

// ✅ Service Components (ye sab aapke components folder ke andar hai)
import AboutUs from '@/components/AboutUs';
import AIDevelopment from '@/components/AiDevelopment';
import AppDevelopment from '@/components/AppDevelopment';
import DigitalMarketing from '@/components/DigitalMarketing';
import Gallery from "@/components/Gallery";
import ServicesSection from "@/components/ServicesSection";
import WebDevelopment from '@/components/WebDevelopment';



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        {/* ✅ Header har page pe visible hoga */}
        <Header />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />

          {/* ✅ Services Routes */}

        <Route path="/services" element={<ServicesSection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/ai-development" element={<AIDevelopment />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
