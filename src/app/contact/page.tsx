export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Kami siap membantu. Silakan hubungi kami melalui email atau telepon berikut:
        </p>

        <div className="space-y-8">
          {/* Email */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-gray-500 mb-2 text-sm font-medium">Email</div>
            <a
              href="mailto:hello@gemasoft.id"
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition"
            >
              hello@gemasoft.id
            </a>
          </div>

          {/* Telepon */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-gray-500 mb-2 text-sm font-medium">Telepon / WhatsApp</div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-gray-900 hover:text-green-600 transition flex items-center justify-center gap-2"
            >
              <span>+62 21 3971 5430</span>
            </a>
            <p className="mt-2 text-gray-600 text-sm">
              Layanan tersedia Senin–Jumat, 08.00–17.00 WIB
            </p>
          </div>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          <p>Kami biasanya merespons dalam 1×24 jam pada hari kerja.</p>
        </div>
      </div>
    </div>
  );
}
