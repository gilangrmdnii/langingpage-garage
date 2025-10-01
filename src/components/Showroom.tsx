export default function Showroom({ cars }: { cars: any[] }) {
  return (
    <section id="showroom" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">GALERI MOBIL PREMIUM</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Temukan mobil impian Anda dengan kualitas terbaik dan harga kompetitif dari berbagai brand ternama
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", "Sport", "Sedan", "MPV", "Luxury", "SUV"].map((type) => (
            <button
              key={type}
              className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
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
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 group"
            >
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🚗</span>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.type}
                </div>
                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-2 py-1 rounded text-xs">
                  {car.year}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{car.name}</h3>
                  <span className="text-2xl font-bold text-orange-500">{car.price}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <span className="mr-4">🎨 {car.color}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {car.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Detail Mobil
                  </button>
                  <button className="w-12 h-12 border border-gray-600 text-gray-400 rounded-lg hover:border-orange-500 hover:text-orange-500 transition flex items-center justify-center">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105 text-lg">
            Lihat Semua Mobil →
          </button>
        </div>
      </div>
    </section>
  );
}
