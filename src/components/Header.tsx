// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          GEMASoft
        </Link>

        <div className="flex items-center space-x-8">
          {/* Navigation - Rata kanan */}
          <nav className="flex space-x-6">
            <Link 
              href="/about" 
              className="font-medium hover:text-blue-700 transition"
            >
              Tentang Kami
            </Link>
            <Link 
              href="/services" 
              className="font-medium hover:text-blue-700 transition"
            >
              Layanan
            </Link>
          </nav>
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    </header>
  );
}