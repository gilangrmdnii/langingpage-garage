"use client";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./UI/Button";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}

export default function Header({ isMenuOpen, setIsMenuOpen, isScrolled }: HeaderProps) {
  // Lock body scroll ketika menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled
        ? "bg-[#001233] backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo/logo_landscape.png" 
            alt="AutoShow Logo"
            className="h-10 w-auto object-contain"
          />
        </div>


        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium text-[#caf0f8]">
          <a href="#showroom" className="hover:text-[#0096c7] transition-colors">Showroom</a>
          <a href="#services" className="hover:text-[#0096c7] transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-[#0096c7] transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-[#0096c7] transition-colors">Contact</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="bg-[#0077b6] hover:bg-[#0096c7] text-white">
            Book Now
          </Button>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden text-[#caf0f8]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#03045e] px-6 py-4 space-y-4 text-[#caf0f8] font-medium">
          <a href="#showroom" onClick={() => setIsMenuOpen(false)}>Showroom</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <Button className="w-full bg-[#0077b6] hover:bg-[#0096c7] text-white">
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
}
