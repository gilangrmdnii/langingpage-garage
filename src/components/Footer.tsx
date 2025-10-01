export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Garage</h3>
            <p className="text-gray-400">
              Showroom & Bengkel mobil premium terpercaya dengan layanan terbaik untuk Anda.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#showroom" className="hover:text-orange-500">Showroom</a></li>
              <li><a href="#servis" className="hover:text-orange-500">Servis</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500">Testimoni</a></li>
              <li><a href="#kontak" className="hover:text-orange-500">Kontak</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2">
              <li>📍 Jl. Otomotif No. 123, Jakarta</li>
              <li>☎️ (021) 1234-5678</li>
              <li>📧 info@garage.id</li>
            </ul>
          </div>

          {/* Sosial */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-orange-500">👍</a>
              <a href="#" className="hover:text-orange-500">🐦</a>
              <a href="#" className="hover:text-orange-500">📸</a>
              <a href="#" className="hover:text-orange-500">▶️</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Garage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
