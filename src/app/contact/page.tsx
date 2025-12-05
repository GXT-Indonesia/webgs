"use client";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Kami siap membantu. Silakan isi formulir di bawah, atau hubungi langsung via email / WhatsApp.
          </p>
        </div>

        {/* Form Kontak */}
        <div className="mb-16 bg-gray-50 rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Kirim Pesan</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subjek
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {submitStatus === "success" && (
              <p className="text-green-600 text-sm font-medium">✅ Pesan berhasil dikirim. Terima kasih!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 text-sm font-medium">
                ❌ Gagal mengirim pesan. Silakan coba lagi atau hubungi via email.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
                isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              } transition`}
            >
              {isSubmitting ? "Mengirim…" : "Kirim Pesan"}
            </button>
          </form>
        </div>

        {/* Info Kontak Alternatif */}
        <div className="space-y-6">
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

          {/* Telepon / WhatsApp */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-gray-500 mb-2 text-sm font-medium">Telepon / WhatsApp</div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-gray-900 hover:text-green-600 transition flex items-center justify-center gap-2"
            >
              +62 812-3456-7890
            </a>
            <p className="mt-2 text-gray-600 text-sm">
              Layanan tersedia Senin–Jumat, 08.00–17.00 WIB
            </p>
          </div>
        </div>

        <div className="mt-8 text-gray-500 text-sm text-center">
          <p>Kami biasanya merespons dalam 1×24 jam pada hari kerja.</p>
        </div>
      </div>
    </div>
  );
}