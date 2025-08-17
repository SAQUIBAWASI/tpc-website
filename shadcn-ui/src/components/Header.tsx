import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Phone, Search, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
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
            <img
              src="/images/logo.PNG" // 🔹 Replace with your logo
              alt="TPC Logo"
              className="h-12"
            />
            {/* <span className="text-xl font-bold">TPC Supply</span> */}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-green-500 transition-colors"
              >
                {item.name}
              </a>
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
            <Button className="bg-green-600 hover:bg-green-700 hidden lg:flex">
              Get Quote
            </Button>

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
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-green-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+15551234567"
                  className="flex items-center space-x-2"
                >
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
