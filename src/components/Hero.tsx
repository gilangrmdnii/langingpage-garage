"use client";

import { FC } from "react";

export interface HeroProps {
  stats: { number: string; label: string }[];
}

const Hero: FC<HeroProps> = ({ stats }) => {
  const headerImage = "/cars/header2.png"; 

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Halaman Utama Garasi Mobil - Penawaran Spesial Mobil dan Servis Profesional"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

      {/* Decorative Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#00b4d8]/30 blur-3xl rounded-full animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0077b6]/30 blur-3xl rounded-full animate-pulse" aria-hidden="true"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-wide text-white drop-shadow-lg">
          GARASI{" "}
          <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent">
            MOBIL
          </span>
        </h1>

        {/* Subtitle / Penawaran */}
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-[#caf0f8] leading-relaxed drop-shadow">
          Penawaran Spesial Mobil dan Servis Profesional — Kredit Mudah & Garansi Resmi Terawasi OJK
        </p>

        {/* Badge Penawaran */}
        <div
          className="inline-block mb-8 px-5 py-2 bg-[#00b4d8] rounded-full text-white font-semibold shadow-lg animate-bounce"
          aria-label="Promo Diskon Hingga 20 Persen"
        >
          💎 Promo Diskon Hingga 20%!
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-4xl font-extrabold text-white mb-2 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] bg-clip-text text-transparent"
                aria-label={`${stat.number} ${stat.label}`}
              >
                {stat.number}
              </div>
              <div className="text-sm text-[#90e0ef] uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tombol Call-To-Action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="px-8 py-4 rounded-xl font-semibold text-white bg-[#0077b6]/90 backdrop-blur-md shadow-lg hover:bg-[#0096c7] hover:shadow-[#00b4d8]/50 hover:scale-105 transition-transform duration-300"
            aria-label="Jelajahi Showroom Mobil"
          >
            🏪 Jelajahi Showroom
          </button>
          <button
            className="px-8 py-4 rounded-xl font-semibold border-2 border-[#00b4d8] text-[#00b4d8] bg-white/10 backdrop-blur-md shadow-md hover:bg-[#00b4d8] hover:text-white hover:scale-105 transition-transform duration-300"
            aria-label="Booking Servis Mobil"
          >
            🔧 Booking Servis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
