import { FC } from "react";

interface HeroProps {
  heroSlides: { title: string; subtitle: string; bg: string }[];
  currentSlide: number;
  stats: { number: string; label: string }[];
}

const Hero: FC<HeroProps> = ({ heroSlides, currentSlide, stats }) => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === i ? "opacity-100" : "opacity-0"} ${slide.bg}`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl font-bold mb-6 text-white">
          GARASI <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">MOBIL</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">{heroSlides[currentSlide].subtitle}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">🏪 Jelajahi Showroom</button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition">🔧 Booking Servis</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
