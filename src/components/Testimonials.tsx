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
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">APA KATA PELANGGAN</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Testimoni nyata dari pelanggan yang puas dengan layanan showroom dan servis kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-300 mb-6 italic">"{t.comment}"</p>
              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-orange-500 mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
