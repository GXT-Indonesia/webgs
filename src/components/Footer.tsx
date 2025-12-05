// src/components/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About GEMASoft */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-blue-400 mb-4 block">
              GEMASoft
            </Link>
            <p className="text-gray-400 mb-6">
              Mitra transformasi digital terpercaya untuk bisnis di Indonesia. Kami menyediakan solusi ERP, pengembangan aplikasi, dan infrastruktur cloud yang terukur.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Layanan Kami</h3>
            <ul className="space-y-3">
              <FooterLink href="/services#erp-odoo">Implementasi ERP Odoo</FooterLink>
              <FooterLink href="/services#web-mobile">Pengembangan Web & Mobile</FooterLink>
              <FooterLink href="/services#cloud">Solusi Cloud Infrastructure</FooterLink>
              <FooterLink href="/services#digital">Transformasi Digital</FooterLink>
              <FooterLink href="/services#custom">Custom Software Development</FooterLink>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">Tentang Kami</FooterLink>
              <FooterLink href="/about#clients">Klien Kami</FooterLink>
              <FooterLink href="/about#team">Tim Ahli</FooterLink>
              <FooterLink href="/blog">Blog & Insight</FooterLink>
              <FooterLink href="/career">Karir di GEMASoft</FooterLink>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kontak Kami</h3>
            <ul className="space-y-4">
              <ContactItem icon={<MapPin className="w-5 h-5 text-blue-400" />} text="Jakarta, Indonesia" />
              <ContactItem icon={<Phone className="w-5 h-5 text-blue-400" />} text="+62 21 1234 5678" />
              <ContactItem icon={<Mail className="w-5 h-5 text-blue-400" />} text="hello@gemasoft.id" />
            </ul>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-blue-400 hover:text-white transition"
              >
                Hubungi Kami
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GEMASoft. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Solusi Teknologi Bisnis untuk Indonesia yang Lebih Digital
          </p>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ children, href }) => (
  <li>
    <Link 
      href={href} 
      className="text-gray-400 hover:text-white transition flex items-center group"
    >
      <span className="mr-2">•</span>
      <span>{children}</span>
      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition" />
    </Link>
  </li>
);

const ContactItem = ({ icon, text }) => (
  <li className="flex items-start">
    <div className="mt-1 mr-3 flex-shrink-0">
      {icon}
    </div>
    <span className="text-gray-300">{text}</span>
  </li>
);
