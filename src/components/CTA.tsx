export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Siap Dapatkan Mobil Impian atau Servis Terbaik?
          </h2>
          <p className="text-lg mb-8 text-orange-100">
            Hubungi kami sekarang dan nikmati pengalaman premium dengan layanan showroom & bengkel terbaik.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
              Hubungi Kami
            </button>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all">
              Booking Servis →
            </button>
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute inset-0 bg-[url('/garage-bg.jpg')] bg-cover bg-center opacity-20"></div>
    </section>
  );
}
