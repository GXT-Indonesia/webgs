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
      callback: (token: string) => {
        setTurnstileToken(token);
      },
      "expired-callback": () => {
        setTurnstileToken(null);
      },
      "error-callback": () => {
        setTurnstileToken(null);
      },
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
        // Refresh token Turnstile
        // @ts-ignore
        window.turnstile.reset();
        setTurnstileToken(null);
      } else {
        const data = await res.json();
        console.error("API error:", data);
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
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

            {/* Turnstile Widget (invisible) */}
            <div className="pt-2">
              <div ref={turnstileRef} />
            </div>

            {submitStatus === "success" && (
              <p className="text-green-600 text-sm font-medium">✅ Pesan berhasil dikirim. Terima kasih!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 text-sm font-medium">
                ❌ Gagal mengirim. Periksa koneksi atau coba lagi.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !turnstileToken}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
                isSubmitting || !turnstileToken
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } transition`}
            >
              {isSubmitting ? "Mengirim…" : "Kirim Pesan"}
            </button>
          </form>
        </div>

        {/* Info Kontak Alternatif */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-gray-500 mb-2 text-sm font-medium">Email</div>
            <a
              href="mailto:hello@gemasoft.id"
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition"
            >
              hello@gemasoft.id
            </a>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-gray-500 mb-2 text-sm font-medium">Telepon</div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-gray-900 hover:text-green-600 transition flex items-center justify-center gap-2"
            >
              +62 21 3971 5430
            </a>
            <p className="mt-2 text-gray-600 text-sm">
              
            </p>
          </div>
        </div>

        <div className="mt-8 text-gray-500 text-sm text-center">
          <p></p>
        </div>
      </div>

      {/* Load Turnstile script — hanya sekali di seluruh app */}
      <script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
    </div>
  );
}