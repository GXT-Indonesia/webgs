// src/app/page.tsx
import Link from "next/link";
import { 
  Database, Server, Code, Merge, 
  Users, DollarSign, BarChart3, Package, 
  CheckCircle, Star, ArrowRight, Building2, 
  Rocket, Cloud, HardDrive, Shield
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section - Fokus pada ERP Odoo */}
      <section className="pt-28 pb-20 md:pb-32 bg-blue-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Solusi ERP Odoo Terlengkap di Indonesia
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Implementasi <span className="text-blue-700">ERP Odoo</span> yang <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Benar-Benar Berhasil</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              GEMASoft menyediakan layanan lengkap untuk ERP Odoo: implementasi, pengembangan custom modul, <span className="font-medium">hosting khusus Odoo</span>, dan dukungan berkelanjutan. Kami memastikan sistem ERP Anda memberikan ROI maksimal dengan minimal downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Konsultasi Implementasi Odoo
              </Link>
              <Link
                href="/services/erp-odoo"
                className="border border-gray-300 bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Lihat Solusi Odoo Kami
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="font-medium text-gray-700">85+ Implementasi Odoo</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-600" />
                <p className="font-medium text-gray-700">Hosting Khusus Odoo</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 relative z-10">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { color: "bg-blue-600", title: "Sales", icon: BarChart3 },
                  { color: "bg-green-600", title: "Inventory", icon: Package },
                  { color: "bg-purple-600", title: "Accounting", icon: DollarSign },
                  { color: "bg-yellow-500", title: "HR", icon: Users },
                  { color: "bg-red-600", title: "Project", icon: Building2 },
                  { color: "bg-indigo-600", title: "Manufacturing", icon: HardDrive },
                ].map((module, i) => {
                  const Icon = module.icon;
                  return (
                    <div key={i} className={`rounded-lg ${module.color} p-3 text-white flex flex-col justify-center items-center h-24 transition-transform hover:scale-105`}>
                      <Icon className="w-6 h-6 mb-1" />
                      <span className="text-xs font-medium mt-1">{module.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Fokus Odoo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Mengapa Memilih GEMASoft untuk Odoo</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Solusi Odoo yang Dirancang untuk Bisnis Indonesia</h2>
            <p className="text-gray-600">
              Kami bukan hanya implementor Odoo — kami adalah mitra yang memahami tantangan bisnis Indonesia dan menyediakan solusi Odoo yang benar-benar berdampak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cloud className="w-8 h-8 text-blue-600" />,
                title: "Hosting Khusus Odoo",
                desc: "Infrastruktur cloud yang dioptimalkan khusus untuk Odoo dengan uptime 99.9%, backup otomatis, dan skalabilitas yang mudah sesuai pertumbuhan bisnis Anda.",
              },
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "Custom Modul Profesional",
                desc: "Pengembangan modul kustom yang sepenuhnya sesuai dengan proses bisnis unik Anda, dengan kualitas kode yang terjamin dan dokumentasi lengkap.",
              },
              {
                icon: <Star className="w-8 h-8 text-blue-600" />,
                title: "Pendampingan Berkelanjutan",
                desc: "Dukungan purna jual dengan tim ahli Odoo siap membantu Anda 24/7, termasuk pelatihan pengguna, optimasi sistem, dan update berkala.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Odoo Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Solusi Odoo Komprehensif</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Layanan Odoo dari A sampai Z</h2>
            <p className="text-gray-600">
              Kami menyediakan layanan lengkap untuk memastikan implementasi Odoo Anda sukses dan memberikan ROI maksimal.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Implementasi Odoo ERP",
                desc: "Implementasi sistem ERP Odoo yang komprehensif, mulai dari analisis kebutuhan, konfigurasi, migrasi data, hingga pelatihan pengguna. Proses terstruktur dengan metodologi yang terbukti.",
                features: ["Analisis Kebutuhan Bisnis", "Konfigurasi Modul Inti", "Migrasi Data Aman", "Pelatihan Pengguna"],
                icon: <Database className="w-8 h-8" />,
                color: "from-blue-600 to-indigo-700",
                content: "Kami memastikan Odoo diimplementasikan sesuai proses bisnis Anda, bukan sebaliknya."
              },
              {
                title: "Custom Modul Odoo",
                desc: "Pengembangan modul kustom yang disesuaikan dengan kebutuhan spesifik bisnis Anda. Solusi yang memenuhi celah yang tidak terpenuhi oleh modul standar Odoo.",
                features: ["Analisis Proses Bisnis", "UI/UX Design Khusus", "Quality Assurance", "Dokumentasi Lengkap"],
                icon: <Code className="w-8 h-8" />,
                color: "from-green-600 to-emerald-700",
                content: "Setiap modul kustom kami bangun dengan standar kualitas tertinggi untuk memastikan kompatibilitas dengan update Odoo di masa depan."
              },
              {
                title: "Hosting & Maintenance Odoo",
                desc: "Layanan hosting khusus untuk Odoo dengan infrastruktur yang dioptimalkan, monitoring 24/7, backup otomatis, dan maintenance berkala untuk memastikan sistem selalu berjalan optimal.",
                features: ["Server Khusus Odoo", "Backup & Recovery", "Security Hardening", "Update & Patch Management"],
                icon: <Server className="w-8 h-8" />,
                color: "from-purple-600 to-violet-700",
                content: "Dengan hosting khusus Odoo, Anda tidak perlu khawatir tentang performa, keamanan, atau downtime sistem."
              },
            ].map((service, i) => (
              <div 
                key={i} 
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10`}
              >
                <div className="md:w-1/2">
                  <div className={`bg-gradient-to-r ${service.color} text-white rounded-2xl p-6 mb-6`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="mb-4 opacity-90">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feat, idx) => (
                        <span key={idx} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100">
                    <p className="italic text-gray-700">
                      "{service.content}"
                    </p>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center mt-4 text-blue-600 font-medium hover:underline"
                  >
                    Konsultasi Kebutuhan Odoo Anda
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-white border-2 border-dashed rounded-2xl w-full h-80 flex items-center justify-center border-gray-200">
                    <div className="text-center">
                      <div className="text-5xl mb-4">📊</div>
                      <p className="text-gray-500">Ilustrasi {service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Odoo Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Keuntungan Implementasi Odoo</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Transformasi Bisnis dengan Odoo</h2>
            <p className="text-gray-600">
              Bisnis Anda akan mengalami transformasi signifikan dengan implementasi Odoo yang tepat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrasi Data Real-time",
                desc: "Hilangkan data silo dengan integrasi semua departemen dalam satu sistem yang terpusat.",
                icon: Merge
              },
              {
                title: "Pengurangan Biaya Operasional",
                desc: "Otomasikan proses manual dan kurangi kesalahan manusia, menghemat hingga 30% biaya operasional.",
                icon: DollarSign
              },
              {
                title: "Peningkatan Produktivitas",
                desc: "Proses bisnis yang lebih cepat dan efisien dengan alur kerja terotomatisasi.",
                icon: Rocket
              },
              {
                title: "Keputusan Berbasis Data",
                desc: "Dashboard dan laporan real-time untuk pengambilan keputusan yang lebih akurat dan cepat.",
                icon: BarChart3
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-md transition">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Fokus Odoo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Kisah Keberhasilan Odoo</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Klien Kami dengan Implementasi Odoo</h2>
            <p className="text-gray-600">
              Lebih dari 85 perusahaan di Indonesia telah sukses mengimplementasikan Odoo dengan bantuan GEMASoft.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold mr-4">
                DJ
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">PT Dharma Jaya</h3>
                <p className="text-gray-600">Perusahaan Distribusi dengan 5 Cabang</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4 text-lg">
              "Sebelum menggunakan Odoo, kami kesulitan mengintegrasikan data antar cabang dan departemen. Dengan implementasi Odoo oleh GEMASoft, kini kami memiliki visibilitas penuh terhadap inventori, penjualan, dan keuangan secara real-time. Yang paling mengesankan adalah layanan hosting mereka yang sangat stabil — dalam 2 tahun, tidak ada downtime sama sekali."
            </p>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium text-gray-700">Penilaian Kepuasan: 5.0/5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fokus Odoo */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-3xl font-bold mb-6">Siap Mengimplementasikan ERP Odoo untuk Bisnis Anda?</h2>
          <p className="mb-8 text-lg">
            Jadwalkan konsultasi GRATIS dengan ahli Odoo kami dan temukan solusi terbaik untuk kebutuhan bisnis Anda. Kami juga menyediakan layanan hosting khusus Odoo dengan performa optimal.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
          >
            Konsultasi Implementasi Odoo GRATIS
          </Link>
          <p className="mt-4 text-blue-100">
            Tidak ada komitmen - hanya solusi Odoo yang sesuai untuk bisnis Anda
          </p>
        </div>
      </section>
    </div>
  );
}
