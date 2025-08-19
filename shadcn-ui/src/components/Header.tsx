import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, Search, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // which submenu is open (mobile)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {
      name: "Services",
      href: "#services",
      children: [
        { name: "Website Design", href: "#website-design" },
        { name: "App Development", href: "#app-development" },
      ],
    },
    { name: "Career", href: "#career" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-green-600 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.PNG" alt="TPC Logo" className="h-12" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium relative">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="hover:text-green-500 transition-colors flex items-center"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4 ml-1" />}
                </a>

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded shadow-lg w-48">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons + CTA */}
          <div className="flex items-center space-x-6">
            <a href="tel:+15551234567">
              <Phone className="w-7 h-7 hover:text-green-500 cursor-pointer" />
            </a>
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
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

            <Button className="bg-green-600 hover:bg-green-700 hidden lg:flex">
              Get Quote
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2 text-lg font-medium">
              {navItems.map((item) => (
                <div key={item.name}>
                  {/* Parent link (clickable if no children) */}
                  <button
                    onClick={() =>
                      item.children
                        ? setOpenSubMenu(openSubMenu === item.name ? null : item.name)
                        : setIsMenuOpen(false)
                    }
                    className="w-full flex justify-between items-center px-2 py-2 hover:text-green-500"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform ${
                          openSubMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu for mobile */}
                  {item.children && openSubMenu === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


