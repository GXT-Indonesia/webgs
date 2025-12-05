// src/app/api/contact/route.ts
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validasi dasar
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Semua field wajib diisi." },
        { status: 400 }
      );
    }

    // Kirim email via Resend
    const { data, error } = await resend.emails.send({
      from: "Kontak <contact@gemasoft.id>", // ✅ pastikan sudah diverifikasi di Resend
      to: "hello@gemasoft.id",
      subject: `[Kontak Website] ${subject}`,
      reply_to: email,
      text: `Dari: ${name} (${email})\n\n${message}`,
      html: `<p><strong>Nama:</strong> ${name}</p>
             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
             <hr/>
             <p><strong>Pesan:</strong></p>
             <p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Gagal mengirim email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });

  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal." },
      { status: 500 }
    );
  }
}