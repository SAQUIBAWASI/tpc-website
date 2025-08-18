import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "Blogs", href: "blogs" },
    { name: "About", href: "about" },
    { name: "Career", href: "career" },
    { name: "Gallery", href: "gallery" },
    { name: "Contact", href: "contact" },
  ];

  const serviceItems = [
    { name: "App Development", href: "app-dev" },
    { name: "Web Development", href: "web-dev" },
    { name: "Digital Marketing", href: "digital-marketing" },
    { name: "AI Development", href: "ai-dev" },
    { name: "E-Commerce", href: "ecommerce" },
    { name: "Graphics Designing", href: "graphics" },
    { name: "Google Ads", href: "google-ads" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-green-600 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.PNG"
              alt="TPC Logo"
              className="h-12"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.name === "Services" && setIsServicesOpen(true)
                }
                onMouseLeave={() =>
                  item.name === "Services" && setIsServicesOpen(false)
                }
              >
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="hover:text-green-500 transition-colors cursor-pointer"
                  onClick={(e) => {
                    if (item.name === "Services") {
                      e.preventDefault();
                      setIsServicesOpen(!isServicesOpen);
                      document
                        .getElementById(item.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </Link>

                {/* Services Dropdown */}
                {item.name === "Services" && isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-lg overflow-hidden">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 cursor-pointer hover:bg-green-100 hover:text-green-600"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons + CTA */}
          <div className="flex items-center space-x-6">
            {/* Call */}
            <a href="tel:+15551234567">
              <Phone className="w-7 h-7 hover:text-green-500 cursor-pointer" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-7 h-7 text-green-500 cursor-pointer" />
            </a>

            {/* Search */}
            <button
              onClick={() => {
                const query = prompt("Enter search term:");
                if (query) alert(`Searching for: ${query}`);
              }}
            >
              <Search className="w-7 h-7 hover:text-green-500 cursor-pointer" />
            </button>

            {/* CTA */}
            <Link to="contact" smooth={true} duration={500}>
              <Button className="bg-green-600 hover:bg-green-700 hidden lg:flex">
                Get Quote
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 text-green-600">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="hover:text-green-500 cursor-pointer"
                    onClick={() => {
                      if (item.name === "Services") {
                        setIsServicesOpen(!isServicesOpen);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </Link>

                  {/* Mobile Services Dropdown */}
                  {item.name === "Services" && isServicesOpen && (
                    <div className="pl-4">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          smooth={true}
                          duration={500}
                          className="block px-4 py-2 cursor-pointer hover:bg-green-100 hover:text-green-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a href="tel:+15551234567" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </a>

                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>WhatsApp Us</span>
                </a>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
