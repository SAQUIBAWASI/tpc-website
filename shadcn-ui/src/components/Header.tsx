import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, Search, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // ✅ Ref for timeout
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: "Home", href: "herosection" },
    { name: "Services", href: "services" },
    { name: "Blogs", href: "blogs" },
    { name: "About", href: "about" },
    { name: "Career", href: "career" },
    { name: "Gallery", href: "gallery" },
    { name: "Contact", href: "contact" },
  ];

  const serviceItems = [
    { name: "App Development", href: "/app-development", isPage: true },
    { name: "Web Development", href: "/web-development", isPage: true },
    { name: "Digital Marketing", href: "/digital-marketing", isPage: true },
    { name: "AI Development", href: "/ai-development", isPage: true },
    { name: "E-Commerce", href: "/e-commerce", isPage: true },
    { name: "Graphics Designing", href: "/graphics-designing", isPage: true },
    { name: "Google Ads", href: "/google-ads", isPage: true },
  ];

  // ✅ Functions for dropdown open/close delay
  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 3000); // 3 sec baad hide
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-green-600 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.PNG" alt="TPC Logo" className="h-12" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.name === "Services" && handleServicesEnter()
                }
                onMouseLeave={() =>
                  item.name === "Services" && handleServicesLeave()
                }
              >
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 transition-colors cursor-pointer"
                  onClick={(e) => {
                    if (item.name === "Services") {
                      e.preventDefault();
                      handleServicesEnter();
                      document
                        .getElementById(item.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </ScrollLink>

                {/* ✅ Services Dropdown */}
                {item.name === "Services" && isServicesOpen && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-lg overflow-hidden"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    {serviceItems.map((service) =>
                      service.isPage ? (
                        <RouterLink
                          key={service.name}
                          to={service.href}
                          className="block px-4 py-2 cursor-pointer hover:bg-green-100 hover:text-green-600"
                          onClick={() => setIsServicesOpen(false)} // ✅ select karte hi close
                        >
                          {service.name}
                        </RouterLink>
                      ) : (
                        <ScrollLink
                          key={service.name}
                          to={service.href}
                          smooth={true}
                          duration={500}
                          className="block px-4 py-2 cursor-pointer hover:bg-green-100 hover:text-green-600"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </ScrollLink>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <a href="tel:+15551234567">
              <Phone className="w-7 h-7 hover:text-green-500 cursor-pointer" />
            </a>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-7 h-7 text-green-500 cursor-pointer" />
            </a>
            <button
              onClick={() => {
                const query = prompt("Enter search term:");
                if (query) alert(`Searching for: ${query}`);
              }}
            >
              <Search className="w-7 h-7 hover:text-green-500 cursor-pointer" />
            </button>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button className="bg-green-600 hover:bg-green-700 hidden lg:flex">
                Get Quote
              </Button>
            </ScrollLink>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              className="block py-2 text-lg hover:text-green-400"
              onClick={() => setIsMenuOpen(false)} // close after click
            >
              {item.name}
            </ScrollLink>
          ))}

          {/* Services Dropdown in Mobile */}
          <div className="mt-2">
            <p className="text-green-400 font-semibold">Services</p>
            <div className="pl-4 mt-2 space-y-2">
              {serviceItems.map((service) =>
                service.isPage ? (
                  <RouterLink
                    key={service.name}
                    to={service.href}
                    className="block py-1 hover:text-green-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    key={service.name}
                    to={service.href}
                    smooth={true}
                    duration={500}
                    className="block py-1 hover:text-green-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </ScrollLink>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
