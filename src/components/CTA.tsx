export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#03045e] via-[#023e8a] to-[#0077b6] text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/garage-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Siap Dapatkan Mobil Impian atau Servis Terbaik?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-[#90e0ef] leading-relaxed">
            Hubungi kami sekarang dan nikmati pengalaman{" "}
            <span className="font-semibold text-[#ffb703]">premium</span>{" "}
            dengan layanan showroom & bengkel terbaik.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary action tetap pakai ocean blue light */}
            <button className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              🚗 Hubungi Kami
            </button>

            {/* Secondary action beri aksen orange */}
            <button className="bg-[#ff6a00] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#e85d04] hover:scale-105 transition-transform duration-300">
              Booking Servis →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
