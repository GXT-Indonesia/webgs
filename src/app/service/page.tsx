// src/app/services/page.tsx
import Link from "next/link";
import { 
  Database, Server, Code, Package, 
  Smartphone, Cloud, Workflow, Shield,
  ArrowRight, BarChart3, Users, Building2,
  DollarSign, HardDrive, CheckCircle, Star
} from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Solusi <span className="text-blue-700">ERP Odoo</span> Terlengkap
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Kami menyediakan layanan lengkap untuk implementasi, pengembangan, dan hosting Odoo yang disesuaikan dengan kebutuhan bisnis Anda
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Konsultasi Layanan Kami
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Layanan Utama</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Solusi Odoo Komprehensif</h2>
            <p className="text-gray-600">
              Kami menyediakan layanan lengkap untuk memastikan implementasi Odoo Anda sukses dan memberikan ROI maksimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8 text-blue-600" />,
                title: "Implementasi Odoo ERP",
                desc: "Implementasi sistem ERP Odoo yang komprehensif, mulai dari analisis kebutuhan, konfigurasi, migrasi data, hingga pelatihan pengguna.",
                features: ["Analisis Kebutuhan Bisnis", "Konfigurasi Modul Inti", "Migrasi Data Aman", "Pelatihan Pengguna"],
                link: "#implementasi-odoo"
              },
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "Custom Modul Odoo",
                desc: "Pengembangan modul kustom yang disesuaikan dengan kebutuhan spesifik bisnis Anda, dengan kualitas kode yang terjamin.",
                features: ["Analisis Proses Bisnis", "UI/UX Design Khusus", "Quality Assurance", "Dokumentasi Lengkap"],
                link: "#custom-modul"
              },
              {
                icon: <Server className="w-8 h-8 text-blue-600" />,
                title: "Hosting & Maintenance Odoo",
                desc: "Layanan hosting khusus untuk Odoo dengan infrastruktur yang dioptimalkan, monitoring 24/7, dan maintenance berkala.",
                features: ["Server Khusus Odoo", "Backup & Recovery", "Security Hardening", "Update & Patch Management"],
                link: "#hosting-maintenance"
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Pelajari lebih lanjut
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 bg-gray-50" id="implementasi-odoo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Implementasi Odoo ERP</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Kami menyediakan layanan implementasi Odoo yang terstruktur dan terukur, dengan metodologi yang telah terbukti berhasil di ratusan proyek.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Analisis mendalam terhadap proses bisnis Anda untuk memahami kebutuhan spesifik</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <p className="text-gray-600">Konfigurasi modul inti Odoo sesuai dengan alur kerja bisnis Anda</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <p className="text-gray-600">Migrasi data aman dari sistem lama ke Odoo dengan minimal downtime</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <p className="text-gray-600">Pelatihan pengguna intensif dan dokumentasi lengkap</p>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="mt-6 inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                Jadwalkan Analisis Kebutuhan Bisnis
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-lg mb-2">Modul Inti yang Kami Implementasikan</h3>
              <p className="text-gray-600 mb-4">Modul standar yang biasanya diimplementasikan untuk bisnis Indonesia:</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Sales & CRM",
                  "Inventory & Warehouse",
                  "Accounting & Finance",
                  "HR & Payroll",
                  "Manufacturing",
                  "Project Management",
                  "Purchase",
                  "Website & E-commerce"
                ].map((module, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="custom-modul">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-lg mb-2">Proses Pengembangan Custom Modul</h3>
                <p className="text-gray-600 mb-4">Metodologi kami dalam mengembangkan modul kustom untuk Odoo:</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <p className="text-gray-600">Analisis kebutuhan dan desain UI/UX</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <p className="text-gray-600">Pengembangan modul dengan standar kode tinggi</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <p className="text-gray-600">Quality assurance dan testing komprehensif</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <p className="text-gray-600">Dokumentasi lengkap dan pelatihan pengguna</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Custom Modul Odoo</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Setiap bisnis unik. Jika modul standar Odoo tidak sepenuhnya memenuhi kebutuhan bisnis Anda, tim kami akan mengembangkan modul kustom yang dirancang khusus untuk proses bisnis Anda.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Kode yang kompatibel dengan update Odoo di masa depan</p>
                </div>
                <div className="flex items-start">
                  <Star className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Performa optimal dengan best practices pengembangan Odoo</p>
                </div>
                <div className="flex items-start">
                  <Star className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Dokumentasi teknis dan user guide yang lengkap</p>
                </div>
                <div className="flex items-start">
                  <Star className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Garansi bug fixing selama 6 bulan setelah implementasi</p>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="mt-6 inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                Konsultasi Kebutuhan Custom Modul
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16" id="hosting-maintenance">
            <div>
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Hosting & Maintenance Odoo</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Kami menyediakan layanan hosting khusus untuk Odoo yang dioptimalkan untuk performa maksimal, keamanan tinggi, dan uptime 99.9%.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Server dikelola oleh tim ahli dengan pengalaman khusus di Odoo</p>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Backup otomatis harian, mingguan, dan bulanan dengan retention policy</p>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Monitoring 24/7 dengan notifikasi instan untuk masalah kritis</p>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Update keamanan dan patch management berkala</p>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-2">Pilihan Paket Hosting Odoo:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Basic: Untuk bisnis kecil dengan &lt;10 user</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Professional: Untuk bisnis menengah dengan 10-50 user</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span>Enterprise: Untuk bisnis besar dengan &gt;50 user</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/contact" 
                className="mt-6 inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                Konsultasi Kebutuhan Hosting
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-lg mb-2">Spesifikasi Server Kami</h3>
              <p className="text-gray-600 mb-4">Infrastruktur yang dioptimalkan khusus untuk Odoo:</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <HardDrive className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Storage</h4>
                    <p className="text-gray-600">SSD NVMe dengan RAID 10 untuk kecepatan dan redundansi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Performa</h4>
                    <p className="text-gray-600">CPU khusus untuk beban komputasi Odoo dengan alokasi memori optimal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Keamanan</h4>
                    <p className="text-gray-600">Firewall, DDoS protection, dan isolasi database</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cloud className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Cloud Infrastructure</h4>
                    <p className="text-gray-600">Lokasi server di Jakarta untuk latency rendah di Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Layanan Pendukung</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Solusi Digital Lengkap</h2>
            <p className="text-gray-600">
              Selain layanan Odoo, kami juga menyediakan solusi digital lainnya untuk mendukung transformasi bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8 text-blue-600" />,
                title: "Pengembangan Aplikasi Web & Mobile",
                desc: "Aplikasi kustom yang terintegrasi dengan Odoo untuk meningkatkan pengalaman pengguna dan efisiensi operasional.",
                link: "#web-mobile-apps"
              },
              {
                icon: <Cloud className="w-8 h-8 text-blue-600" />,
                title: "Cloud Solution & Migration",
                desc: "Strategi migrasi ke cloud dan manajemen infrastruktur yang aman, scalable, dan hemat biaya.",
                link: "#cloud-solution"
              },
              {
                icon: <Workflow className="w-8 h-8 text-blue-600" />,
                title: "Business Process Automation",
                desc: "Otomatisasi alur kerja bisnis dengan integrasi sistem dan tools khusus untuk meningkatkan produktivitas.",
                link: "#automation"
              },
              {
                icon: <Building2 className="w-8 h-8 text-blue-600" />,
                title: "Digital Transformation Consulting",
                desc: "Konsultasi strategis untuk transformasi digital yang terukur dan berkelanjutan untuk bisnis Anda.",
                link: "#digital-transformation"
              },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Pelajari lebih lanjut
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-3xl font-bold mb-6">Temukan Solusi Odoo Terbaik untuk Bisnis Anda</h2>
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
