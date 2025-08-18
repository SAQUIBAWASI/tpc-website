import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, Globe, Minus, Move, Plus, ShoppingBag, Smartphone, Store } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Service images
const APP_DEV_IMG = "/images/salon3.jpg";
const WEB_DEV_IMG = "/images/salon4.jpg";
const DIGITAL_MARKETING_IMG = "/images/salon5.jpg";
const AI_DEV_IMG = "/images/ai.jpg"; // 🔹 Add your AI dev image
const SEO_IMG = "/images/salon7.jpg";

function Spec({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="grid grid-cols-[1fr,auto] items-end gap-4 border-t border-black/20 pt-3">
      <dt className="text-xs uppercase tracking-wide text-black/70">{label}</dt>
      <dd className="text-right text-2xl md:text-3xl font-extrabold text-black">
        {value}
        {unit && <span className="ml-1 text-base font-semibold text-black/80">{unit}</span>}
      </dd>
    </div>
  );
}

// Reusable card
function DroneCard({
  title,
  subtitle,
  description,
  specs,
  img,
  bgColor,
  link
}: {
  title: string;
  subtitle: string;
  description: string;
  specs: Array<{ label: string; value: string; unit: string }>;
  img: string;
  bgColor: string;
  link: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative grid overflow-hidden rounded-[30px] ${bgColor} p-4 sm:p-6 md:p-8 shadow-xl`}
    >
      {/* Decorative glyphs (desktop only) */}
      <div className="pointer-events-none absolute right-6 top-6 hidden md:block select-none text-black/70">
        <div className="flex items-center gap-8 text-sm font-semibold">
          <span className="inline-flex items-center gap-1"><Move size={18} />⌃</span>
          <span className="underline">l‰</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
        {/* LEFT SECTION */}
        <div className="relative">
          <div className="grid gap-5 rounded-[24px] bg-white p-3 md:grid-cols-[260px,1fr] md:p-5">
            {/* Specs */}
            <div className="relative rounded-[20px] border-2 border-black/15 p-4 max-h-none md:max-h-[300px] overflow-y-auto">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl md:text-4xl font-extrabold tracking-tight">{subtitle}</p>
                  <div className="mt-1 w-28 md:w-36 border-y-4 border-black/80 text-center text-xs uppercase tracking-widest">
                    service
                  </div>
                </div>
              </div>

              <p className="mt-3 text-sm md:text-base leading-snug text-black/80">{description}</p>

              <div className="mt-3 flex items-center gap-3">
                <button className="grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full border-2 border-black/70 bg-white text-black">
                  <Minus size={16} />
                </button>
                <button className="grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full border-2 border-black/70 bg-white text-black">
                  <Plus size={16} />
                </button>
              </div>

              <dl className="mt-4 space-y-4">
                {specs.map((spec, idx) => (
                  <Spec key={idx} label={spec.label} value={spec.value} unit={spec.unit} />
                ))}
              </dl>
            </div>

            {/* Image */}
            <div className="relative rounded-[20px] border-2 border-black/15 overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-48 md:h-[300px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-black">
            {title}
          </h2>
          <p className="mt-4 md:mt-6 max-w-xl text-base md:text-lg leading-relaxed text-black/80">
            {description}
          </p>

          <div className="mt-6 md:mt-16">
            <Button
              variant="default"
              size="lg"
              className="w-full md:w-auto rounded-full bg-black text-white hover:bg-black/90 shadow-md hover:shadow-lg"
              asChild
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3"
              >
                More details
                <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 🔹 Services Strip Component with Auto Sliding Carousel
function ServicesStrip() {
  const services = [
    { name: "APP DEVELOPMENT", icon: <Smartphone className="w-8 h-8" /> },
    { name: "WEB DEVELOPMENT", icon: <Globe className="w-8 h-8" /> },
    { name: "ECOMMERCE DEVELOPMENT", icon: <Store className="w-8 h-8" /> },
    { name: "SOFTWARE DEVELOPMENT", icon: <Code2 className="w-8 h-8" /> },
    { name: "SHOPIFY DEVELOPMENT", icon: <ShoppingBag className="w-8 h-8" /> },
    { name: "AI DEVELOPMENT", icon: <Brain className="w-8 h-8" /> }, // 🔹 Added
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Show 4 at a time
  const visibleServices = [
    services[currentIndex],
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
    services[(currentIndex + 3) % services.length],
  ];

  return (
    <section className="bg-[#16a34a] py-6 mt-16 rounded-2xl overflow-hidden">
      <div className="container mx-auto flex justify-center items-center gap-12 text-white transition-all duration-700">
        {visibleServices.map((service, index) => (
          <div key={index} className="flex items-center space-x-3">
            {service.icon}
            <span className="text-lg font-medium">{service.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Products() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-16 md:py-20 bg-accent/50 scroll-mt-24 md:scroll-mt-28">
      {/* Header */}
      <div
        ref={ref}
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl">Our Services</h2>
        <p className="mt-3 md:mt-4 text-muted-foreground">
          Explore our lineup of technology and marketing services to grow your business.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 md:mt-20 space-y-12 md:space-y-20 max-w-6xl mx-auto px-4">
        <DroneCard
          title="App Development"
          subtitle="Mobile App"
          description="Custom mobile applications designed for scalability, performance, and great user experience."
          specs={[
            { label: "Delivery time", value: "3", unit: "months" },
            { label: "Team size", value: "5", unit: "devs" }
          ]}
          img={APP_DEV_IMG}
          bgColor="bg-[#A8EB66]"
          link="/files/app-dev.pdf"
        />

        <DroneCard
          title="Web Development"
          subtitle="Website Development"
          description="Responsive and SEO-friendly websites tailored to your business needs."
          specs={[
            { label: "Delivery time", value: "2", unit: "months" },
            { label: "Pages included", value: "10", unit: "+" }
          ]}
          img={WEB_DEV_IMG}
          bgColor="bg-[#ff6b01]"
          link="/files/web-dev.pdf"
        />

        <DroneCard
          title="Digital Marketing"
          subtitle="DMS"
          description="Transforming businesses through strategic campaigns across multiple digital channels."
          specs={[
            { label: "Campaign reach", value: "1M", unit: "+" },
            { label: "ROI", value: "3x", unit: "" }
          ]}
          img={DIGITAL_MARKETING_IMG}
          bgColor="bg-[#e7c132]"
          link="/files/digital-marketing.pdf"
        />

        {/* 🔹 AI Development instead of SMM */}
        <DroneCard
          title="AI Development"
          subtitle="Artificial Intelligence"
          description="Innovative AI-powered solutions including chatbots, predictive analytics, and automation tools."
          specs={[
            { label: "Models delivered", value: "10", unit: "+" },
            { label: "Accuracy", value: "95", unit: "%" }
          ]}
          img={AI_DEV_IMG}
          bgColor="bg-[#4dc7ff]"
          link="/files/ai-dev.pdf"
        />

        <DroneCard
          title="Search Engine Optimization"
          subtitle="SEO"
          description="Improve search visibility and drive organic traffic with our expert SEO services."
          specs={[
            { label: "Keywords ranked", value: "100", unit: "+" },
            { label: "Traffic increase", value: "200", unit: "%" }
          ]}
          img={SEO_IMG}
          bgColor="bg-[#9b59b6]"
          link="/files/seo.pdf"
        />
      </div>

      {/* 🔹 Services Strip Carousel */}
      <ServicesStrip />
    </section>
  );
}
