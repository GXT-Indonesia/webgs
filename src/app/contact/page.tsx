// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
        <p className="text-gray-600 mb-10">
          Tim GEMASoft siap mendengarkan kebutuhan bisnis Anda. Isi formulir di bawah atau hubungi langsung melalui email/telepon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Nama</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="email@perusahaan.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Ceritakan kebutuhan bisnis Anda..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Info Kontak */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Informasi Kontak</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium">Kantor Pusat</p>
                <p>Jakarta, Indonesia</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p>hello@gemasoft.id</p>
              </div>
              <div>
                <p className="font-medium">Telepon</p>
                <p>+62 8xx xxxx xxxx</p>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Respons Cepat</h3>
                <p>Kami biasanya merespons dalam 1x24 jam pada hari kerja.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
