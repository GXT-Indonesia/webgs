// src/app/api/contact/route.ts
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, turnstileToken } = await request.json();

    if (!name || !email || !subject || !message || !turnstileToken) {
      return NextResponse.json({ error: "Form tidak lengkap." }, { status: 400 });
    }

    // ✅ Verifikasi Turnstile
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      console.warn("Turnstile verification failed:", verifyData);
      return NextResponse.json({ error: "Verifikasi keamanan gagal." }, { status: 400 });
    }

    // ✅ Kirim email — perbaikan: `reply_to` → `replyTo`
    const { data, error } = await resend.emails.send({
      from: "Kontak <contact@gemasoft.id>",
      to: "hello@gemasoft.id",
      subject: `[Kontak] ${subject} — dari ${name}`,
      replyTo: email, // ✅ ini yang diperbaiki
      html: `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="margin:16px 0"/>
        <h3>Pesan:</h3>
        <p>${message.replace(/\n/g, "<br/>")}</p>
        <hr style="margin:16px 0"/>
        <p><small>Skor Turnstile: ${verifyData.score || "?"}</small></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Gagal mengirim email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Kesalahan server." }, { status: 500 });
  }
}