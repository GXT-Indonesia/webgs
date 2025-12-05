// src/app/about/page.tsx
import Link from "next/link";
import { 
  Users, Award, Target, Lightbulb, 
  Building2, TrendingUp, Star, ChevronRight,
  Server, Database, Code
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Tentang GEMASoft
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Mitra <span className="text-blue-700">Transformasi Digital</span> Bisnis Indonesia
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sejak 2015, GEMASoft telah membantu lebih dari 150 bisnis di Indonesia mengadopsi teknologi untuk pertumbuhan yang berkelanjutan. Kami adalah spesialis implementasi ERP Odoo dan solusi digital terintegrasi.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Konsultasi dengan Tim Kami
            <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Kisah Kami</h2>
              <p className="text-gray-600 mb-4">
                GEMASoft berdiri pada tahun 2015 dengan visi sederhana: membantu bisnis Indonesia berkembang melalui adopsi teknologi yang tepat. Berawal dari tim kecil yang fokus pada implementasi ERP Odoo, kami telah berkembang menjadi mitra transformasi digital lengkap untuk berbagai skala bisnis.
              </p>
              <p className="text-gray-600 mb-6">
                Pengalaman kami dengan ratusan proyek implementasi Odoo di berbagai industri mengajarkan satu hal: teknologi hanya alat. Keberhasilan sebenarnya terletak pada pemahaman mendalam tentang proses bisnis dan kemampuan untuk menyelaraskan solusi teknis dengan tujuan strategis perusahaan.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="font-medium text-gray-800">
                  "Kami tidak hanya mengimplementasikan software — kami membangun fondasi digital yang memungkinkan bisnis Anda berkembang."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-blue-600" />
              </div>
              <div className="bg-gray-100 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                <Server className="w-12 h-12 text-blue-600" />
              </div>
              <div className="bg-gray-100 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                <Database className="w-12 h-12 text-blue-600" />
              </div>
              <div className="bg-gray-100 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                <Code className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Nilai Kami</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Prinsip yang Membimbing Kami</h2>
            <p className="text-gray-600">
              Setiap keputusan dan tindakan kami didasarkan pada nilai-nilai inti ini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: "Bisnis Dulu, Teknologi Kedua",
                desc: "Kami memulai dengan memahami tujuan bisnis Anda, baru kemudian merekomendasikan solusi teknis yang tepat. Teknologi harus melayani bisnis, bukan sebaliknya.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
                title: "Inovasi yang Terukur",
                desc: "Kami mengukur keberhasilan dari dampak nyata pada bisnis Anda: pengurangan biaya, peningkatan produktivitas, dan percepatan pengambilan keputusan.",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Kemitraan Jangka Panjang",
                desc: "Kami membangun hubungan jangka panjang dengan klien kami. Keberhasilan Anda adalah keberhasilan kami, dan kami berkomitmen untuk mendukung pertumbuhan bisnis Anda.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Keahlian Kami</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Spesialisasi dalam Solusi Odoo</h2>
            <p className="text-gray-600">
              Tim kami memiliki pengalaman mendalam dalam implementasi dan pengembangan Odoo untuk berbagai industri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold">Pengalaman Industri</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tim kami telah menangani implementasi Odoo di berbagai sektor industri:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Manufaktur & Distribusi</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Ritel & E-commerce</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Jasa Keuangan & Akuntansi</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Logistik & Transportasi</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Jasa Profesional & Konsultasi</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold">Keunggulan Kompetitif</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Apa yang membedakan GEMASoft dari mitra implementasi Odoo lainnya:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Ahli Bersertifikat Odoo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Hosting Khusus Odoo dengan Uptime 99.9%</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Metodologi Implementasi Terstruktur</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Pendampingan Purna Jual yang Komprehensif</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                  <span>Harga Transparan Tanpa Biaya Tersembunyi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium">Tim Kami</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">Ahli di Balik Keberhasilan</h2>
            <p className="text-gray-600">
              Tim GEMASoft terdiri dari para ahli yang berpengalaman di bidang implementasi Odoo dan pengembangan solusi digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Andi Wijaya", role: "CEO & Odoo Architect", desc: "10+ tahun pengalaman di ERP dan transformasi digital", img: "/team/1.jpg" },
              { name: "Budi Santoso", role: "CTO & Senior Developer", desc: "Ahli pengembangan custom modul Odoo dan integrasi sistem", img: "/team/2.jpg" },
              { name: "Clara Putri", role: "Cloud Infrastructure Lead", desc: "Spesialis hosting dan infrastruktur cloud untuk Odoo", img: "/team/3.jpg" },
              { name: "David Hartanto", role: "Business Consultant", desc: "Ahli analisis proses bisnis dan implementasi Odoo", img: "/team/4.jpg" },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="bg-gray-100 border-2 border-dashed w-full h-48 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-3xl font-bold mb-6">Siap Berkolaborasi dengan GEMASoft?</h2>
          <p className="mb-8 text-lg">
            Jadwalkan sesi konsultasi GRATIS untuk mengetahui bagaimana solusi Odoo kami dapat mengoptimalkan bisnis Anda.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
          >
            Jadwalkan Konsultasi Gratis
          </Link>
          <p className="mt-4 text-blue-100">
            Tidak ada komitmen - hanya solusi bisnis yang jelas
          </p>
        </div>
      </section>
    </div>
  );
}
