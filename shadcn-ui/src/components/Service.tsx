import { Button } from "@/components/ui/button";
import { Globe, Palette, Search, Share2, ShoppingCart, Smartphone } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Globe className="text-black w-10 h-10" />,
      title: "Web Development",
      description:
        "Professional website development with modern technologies and responsive design.",
    },
    {
      icon: <Smartphone className="text-black w-10 h-10" />,
      title: "App Development",
      description:
        "Custom mobile applications for iOS and Android platforms.",
    },
    {
      icon: <Share2 className="text-black w-10 h-10" />,
      title: "SMM",
      description:
        "Social Media Marketing to boost your brand presence and engagement.",
    },
    {
      icon: <Search className="text-black w-10 h-10" />,
      title: "SEO",
      description:
        "Search Engine Optimization to improve your website's visibility and rankings.",
    },
    {
      icon: <ShoppingCart className="text-black w-10 h-10" />,
      title: "E-Commerce",
      description:
        "Complete e-commerce solutions for online business success.",
    },
    {
      icon: <Palette className="text-black w-10 h-10" />,
      title: "Graphic Designing",
      description:
        "Creative graphic design services for branding and marketing materials.",
    },
  ];

  return (
    <section id="services-overview" className="py-20 bg-accent/50 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto">
        <div 
          ref={ref}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-3xl md:text-5xl">Anything your business needs</h2>
          <p className="mt-4 text-muted-foreground">
            We provide comprehensive digital solutions for modern businesses
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-black p-6 rounded-[2rem] flex flex-col gap-3 shadow-lg hover:scale-105 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ backgroundColor: '#A8EB66', transitionDelay: `${200 + index * 100}ms` }}
            >
              <div>{feature.icon}</div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <a href="#form">Book a service</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
