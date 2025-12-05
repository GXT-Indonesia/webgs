// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GEMASoft - Solusi Transformasi Digital untuk Bisnis Indonesia",
  description: "GEMASoft menyediakan layanan implementasi ERP Odoo, pengembangan aplikasi web & mobile, solusi cloud infrastructure, dan konsultasi transformasi digital untuk bisnis di Indonesia.",
  keywords: "ERP Odoo Indonesia, custom software development, web app developer Jakarta, mobile app developer Indonesia, cloud solution provider, transformasi digital bisnis, IT konsultan Indonesia",
  authors: [{ name: "GEMASoft" }],
  openGraph: {
    title: "GEMASoft - Mitra Transformasi Digital Bisnis",
    description: "Solusi teknologi terintegrasi untuk bisnis Indonesia yang berkembang",
    url: "https://gemasoft.id",
    siteName: "GEMASoft",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}