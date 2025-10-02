export default function Services({ services }: { services: any[] }) {
  return (
    <section id="servis" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#0077b6]">LAYANAN SERVIS PROFESIONAL</h2>
          <p className="text-[#495057] text-xl max-w-3xl mx-auto">
            Ditangani oleh teknisi berpengalaman dengan peralatan terkini untuk hasil terbaik
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 text-[#0077b6] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-[#495057] leading-relaxed mb-6">{service.description}</p>
              <div className="space-y-3 mb-6">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#0077b6] rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="w-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Booking Sekarang
              </button>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="mt-20 bg-[#f8f9fa] border border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#0077b6] mb-8 text-center">Proses Servis Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Booking", desc: "Reservasi online atau telepon" },
              { step: "02", title: "Diagnosa", desc: "Pengecekan menyeluruh oleh ahli" },
              { step: "03", title: "Perbaikan", desc: "Proses servis dengan standar tertinggi" },
              { step: "04", title: "Quality Check", desc: "Pengecekan kualitas sebelum serah terima" },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">{process.title}</h4>
                <p className="text-[#495057] text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
