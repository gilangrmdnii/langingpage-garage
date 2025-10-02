export default function Showroom({ cars }: { cars: any[] }) {
  return (
    <section id="showroom" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#0077b6]">GALERI MOBIL PREMIUM</h2>
          <p className="text-[#495057] text-xl max-w-3xl mx-auto">
            Temukan mobil impian Anda dengan kualitas terbaik dan harga kompetitif dari berbagai brand ternama
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Sport", "Sedan", "MPV", "Luxury", "SUV"].map((type) => (
            <button
              key={type}
              className="px-6 py-2 rounded-full border border-[#dee2e6] text-[#495057] hover:border-[#0077b6] hover:text-[#0077b6] transition"
            >
              {type}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white border border-[#dee2e6] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 group"
            >
              {/* Car Image */}
              <div className="h-48 bg-[#e9ecef] flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl text-[#adb5bd] group-hover:scale-110 transition-transform duration-500">
                  🚗
                </span>
                {/* Type */}
                <div className="absolute top-4 right-4 bg-[#0077b6]/10 text-[#0077b6] px-3 py-1 rounded-full text-sm font-medium border border-[#0077b6]/20">
                  {car.type}
                </div>
                {/* Year */}
                <div className="absolute top-4 left-4 bg-white/90 text-[#495057] px-2 py-1 rounded text-xs border border-[#dee2e6]">
                  {car.year}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#212529]">{car.name}</h3>
                  <span className="text-2xl font-bold text-[#0077b6]">{car.price}</span>
                </div>
                <div className="flex items-center text-[#495057] text-sm mb-4">
                  <span className="mr-4">🎨 {car.color}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {car.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center text-sm text-[#495057]">
                      <span className="w-2 h-2 bg-[#0077b6] rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Detail Mobil
                  </button>
                  <button className="w-12 h-12 border border-[#dee2e6] text-[#6c757d] rounded-lg hover:border-[#0077b6] hover:text-[#0077b6] transition flex items-center justify-center">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white px-12 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105 text-lg">
            Lihat Semua Mobil →
          </button>
        </div>
      </div>
    </section>
  );
}
