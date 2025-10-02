"use client";

type Testimonial = {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
};

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-[#e0f7fa] via-[#f8f9fa] to-white"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#0077b6]">
            APA KATA PELANGGAN
          </h2>
          <p className="text-[#495057] text-xl max-w-3xl mx-auto">
            Testimoni nyata dari pelanggan yang puas dengan layanan showroom dan servis kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#dee2e6] relative"
            >
              <p className="text-[#343a40] mb-6 italic">"{t.comment}"</p>
              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-[#00b4d8] mr-4"
                />
                <div>
                  <h4 className="text-[#03045e] font-semibold">{t.name}</h4>
                  <p className="text-[#6c757d] text-sm">{t.role}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </div>

              {/* Accent line bawah */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
