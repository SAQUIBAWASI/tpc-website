


import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, Search, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const navItems = [
    { name: "Home", href: "/", isPage: true },
     { name: "AboutUs", href: "/about", isPage: true },
    { name: "Services", href: "" },
    { name: "Career", href: "/career", isPage: true },
    { name: "Gallery", href: "/Team", isPage: true },
    { name: "Blog", href: "/blog", isPage: true },
    { name: "Contact", href: "/contact", isPage: true },
  ];

  const serviceItems = [
    { name: "App Development", href: "/app-development", isPage: true },
    { name: "Web Development", href: "/web-development", isPage: true },
    { name: "Digital Marketing", href: "/digital-marketing", isPage: true },
    { name: "AI Development", href: "/ai-development", isPage: true },
    { name: "E-Commerce", href: "/e-commerce", isPage: true },
    { name: "Graphics Designing", href: "/graphic-designing", isPage: true },
    { name: "Google Ads", href: "/google-ads", isPage: true },
  ];

  // Desktop hover handlers
  const handleDesktopServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDesktopServicesOpen(true);
  };

  const handleDesktopServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDesktopServicesOpen(false);
    }, 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-green-401 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center space-x-2 ml-5">
            <img src="/images/tpc1.png" alt="TPC Logo" className="h-16" />
          </RouterLink>

          {/* Desktop Nav */}
          {/* <nav className="hidden md:flex space-x-8 text-lg font-medium"> */}
          <nav className="hidden lg:flex space-x-8 text-lg font-medium">


            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.name === "Services" && handleDesktopServicesEnter()
                }
                onMouseLeave={() =>
                  item.name === "Services" && handleDesktopServicesLeave()
                }
              >
                {item.isPage ? (
                  <RouterLink
                    to={item.href}
                    className="hover:text-green-401 transition-colors"
                  >
                    {item.name}
                  </RouterLink>
                ) : (
                  <span className="hover:text-green-401 cursor-pointer">
                    {item.name}
                  </span>
                )}

                {/* Desktop Services Dropdown */}
                {item.name === "Services" && isDesktopServicesOpen && (
                  <div className="absolute left-0 mt-11 w-56 bg-white text-black shadow-lg rounded-lg overflow-hidden">
                    {serviceItems.map((service) => (
                      <RouterLink
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-401"
                        onClick={() => setIsDesktopServicesOpen(false)}
                      >
                        {service.name}
                      </RouterLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <a href="tel:+918500693113" className="relative">
  <span className="absolute inset-0 rounded-full animate-phone-pulse bg-green-401/20"></span>
  <Phone className="w-7 h-7 text-white hover:text-green-401 cursor-pointer animate-phone-ring relative z-10" />
</a>

            {/* <a
              href="https://wa.me/8500693113"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-7 h-7 text-white hover:text-green-401 cursor-pointer" />
            </a> */}
            <button
              onClick={() => {
                const query = prompt("Enter search term:");
                if (query) alert(`Searching for: ${query}`);
              }}
            >
              <Search className="w-7 h-7 text-white hover:text-green-401 cursor-pointer" />
            </button>

            {/* <RouterLink to="/contact">
              <Button className="bg-green-401 hover:bg-green-401 hidden lg:flex">
                Get Quote
              </Button>
            </RouterLink> */}

            {/* Mobile Menu Toggle */}
            {/* <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            > */}
            <button
  className="lg:hidden p-2"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>


              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div style={{background:'black'}} className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          {navItems.map((item) => {
            if (item.name === "Services") {
              return (
                <div key={item.name}>
                  <p
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="block py-2 text-lg hover:text-green-401 cursor-pointer font-semibold"
                  >
                    {item.name}
                    <span className="absolute right-6">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </span>

                  </p>

                  {/* Mobile Services Dropdown */}
                  {isMobileServicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {serviceItems.map((service) => (
                        <RouterLink
                          key={service.name}
                          to={service.href}
                          className="block py-1 hover:text-green-401"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                        >
                          {service.name}
                        </RouterLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else if (item.isPage) {
              return (
                <RouterLink
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-lg hover:text-green-401"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </RouterLink>
              );
            } else {
              return (
                <span
                  key={item.name}
                  className="block py-2 text-lg hover:text-green-401"
                >
                  {item.name}
                </span>
              );
            }
          })}
        </div>
      )}
    </header>
  );
}
