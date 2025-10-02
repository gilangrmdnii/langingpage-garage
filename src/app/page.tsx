"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Tabs from "@/components/Tabs";
import Showroom from "@/components/Showroom";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import { heroSlides, services, cars, brands, testimonials, stats } from "@/lib/data";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"showroom" | "service">("showroom");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isScrolled={isScrolled} />
      <Hero stats={stats} />
      <Brands brands={brands} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "showroom" && <Showroom cars={cars} />}
      {activeTab === "service" && <Services services={services} />}
      <Testimonials testimonials={testimonials} />
      <CTA />
      <Footer />
    </div>
  );
}
