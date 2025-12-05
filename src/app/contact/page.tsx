"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Inisialisasi Turnstile
  useEffect(() => {
    if (typeof window === "undefined" || !turnstileRef.current) return;

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      console.warn("NEXT_PUBLIC_TURNSTILE_SITE_KEY belum di-set");
      return;
    }

    // @ts-ignore
    window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
      callback: (token: string) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(null),
      "error-callback": () => setTurnstileToken(null),
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      setSubmitStatus("error");
      alert("Harap tunggu verifikasi keamanan...");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, turnstileToken }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        // Reset Turnstile
        // @ts-ignore
        window.turnstile.reset?.();
        setTurnstileToken(null);
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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Hubungi Kami</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tim GEMASoft siap mendengarkan kebutuhan bisnis Anda. Isi formulir atau hubungi langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 🔹 Kiri: Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Turnstile (invisible widget) */}
              <div>
                <div ref={turnstileRef} className="h-0" />
              </div>

              {submitStatus === "success" && (
                <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                  ✅ Terima kasih! Pesan Anda telah terkirim. Kami akan segera merespons.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium">
                  ❌ Gagal mengirim. Pastikan koneksi stabil atau coba lagi.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !turnstileToken}
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white transition ${
                  isSubmitting || !turnstileToken
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Mengirim…" : "Kirim Pesan"}
              </button>
            </form>
          </div>

          {/* 🔸 Kanan: Info Kontak */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Bisnis</h3>
                  <a
                    href="mailto:hello@gemasoft.id"
                    className="text-lg text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
                  >
                    hello@gemasoft.id
                  </a>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telepon / WhatsApp</h3>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-green-600 transition flex items-center gap-1"
                  >
                    +62 812-3456-7890
                  </a>
                  <p className="mt-1 text-sm text-gray-500">
                    Layanan: Senin–Jumat, 08.00–17.00 WIB
                  </p>
                </div>
              </div>

              {/* Respons Time */}
              <div className="border-t border-gray-200 pt-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    ⏱️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Waktu Respons</h3>
                    <p className="text-gray-600">
                      Kami biasanya merespons dalam <strong>1×24 jam</strong> pada hari kerja.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional: Map / Office */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Kantor</h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Load Turnstile */}
      <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
    </div>
  );
}