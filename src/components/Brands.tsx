import SectionTitle from "./UI/SectionTitle";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

interface BrandsProps {
  brands: Brand[];
}

export default function Brands({ brands }: BrandsProps) {
  return (
    <section
      className="py-16 bg-gradient-to-r from-[#001233] via-[#03045e] to-[#001845]"
      id="brands"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Our Trusted Brands"
          subtitle="We work with world-class car brands"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-center items-center grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
