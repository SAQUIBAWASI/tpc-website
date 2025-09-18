import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";

// ✅ Common Components
import Header from '@/components/Header';

// ✅ Main Pages
import Index from './pages/Index';
import NotFound from './pages/NotFound';

// ✅ Service Components (ye sab aapke components folder ke andar hai)
import AboutUs from '@/components/AboutUs';
import AIDevelopment from '@/components/AiDevelopment';
import AppDevelopment from '@/components/AppDevelopment';
import CareerDetails from '@/components/CareerDetails';
import DigitalMarketing from '@/components/DigitalMarketing';
import ECommerce from '@/components/ECommerce';
// import Gallery from "@/components/Gallery";
import GoogleAds from '@/components/GoogleAds';
import GraphicDesigning from '@/components/GraphicDesigning';
import ServicesSection from "@/components/ServicesSection";
import WebDevelopment from '@/components/WebDevelopment';
import About from './components/About';
import Job from './components/Careers';
import Blog from "./components/Blog";
import Contact from './components/Contact';
import Team from'./components/team';
import PrivacyPolicy from './components/ui/PrivacyPolicy';
import SS from './components/About2';


import CanvasCursor from './components/CanvasCursor';




const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>

      
         {/* 👈 Add it once here */}
        {/* ✅ Header har page pe visible hoga */}
        <Header />
        {/* <CanvasCursor /> */}
        <Helmet>
          <title> Best | Digital | Marketing</title>
           <meta name="description" content="best digital marketing company in hyderabad" />
        </Helmet>
        
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />

          {/* ✅ Services Routes */}

          <Route path="/services" element={<ServicesSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/ai-development" element={<AIDevelopment />} />
          <Route path="/e-commerce" element={<ECommerce />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/careers" element={<CareerDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Job />} />
          <Route path="/blog" element={<Blog />} />
          <Route path ="/contact" element={<Contact/>}/>
          <Route path="/team" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />


        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
