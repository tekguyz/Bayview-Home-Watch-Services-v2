import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

if (!process.env.RESEND_API_KEY) {
  console.warn(
    "[Bayview Contact] RESEND_API_KEY is not set. Emails will not be delivered. Add it to .env.local or your Vercel environment variables."
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // Honeypot check — bots fill this field, real users don't
    if (data.website && data.website.length > 0) {
      // Silently succeed so bots don't know they were caught
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn(
        "RESEND_API_KEY is not set. The form submission succeeded, but the email was not sent."
      );
      return NextResponse.json({
        success: true,
        debug: "Form successfully validated. Set RESEND_API_KEY to enable real email transmission.",
      });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: "bayviewhomewatchservices@gmail.com",
      replyTo: data.email,
      subject: `New Home Watch Inquiry from ${data.name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: #1B2B50; padding: 32px; border-radius: 12px; text-align: center; margin-bottom: 32px;">
            <h1 style="color: #00ADAC; font-size: 1.5rem; margin: 0;">New Inquiry</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 0.9rem;">Bayview Home Watch Services</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 160px; font-size: 0.875rem;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0F1D38;">${data.name}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 0.875rem;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0F1D38;"><a href="mailto:${data.email}" style="color: #00ADAC;">${data.email}</a></td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 0.875rem;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0F1D38;"><a href="tel:${data.phone}" style="color: #00ADAC;">${data.phone}</a></td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 0.875rem;">Service Needed</td><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0F1D38;">${data.service}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 0.875rem;">Away Duration</td><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0F1D38;">${data.duration}</td></tr>
            ${data.referral ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 0.875rem;">Found via</td><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #0F1D38;">${data.referral}</td></tr>` : ""}
            ${data.message ? `<tr><td style="padding: 12px 0; color: #666; font-size: 0.875rem; vertical-align: top; padding-top: 16px;">Message</td><td style="padding: 12px 0; padding-top: 16px; color: #0F1D38; line-height: 1.6;">${data.message}</td></tr>` : ""}
          </table>

          <div style="background: #F5F0E8; border-radius: 8px; padding: 20px; margin-top: 32px; text-align: center;">
            <p style="margin: 0; color: #666; font-size: 0.8rem;">Reply directly to this email to respond to ${data.name}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Bayview Contact] Failed to send email:", 
      error instanceof Error ? error.message : "Unknown error"
    );
    // Do NOT expose raw error to client
    return NextResponse.json(
      { success: false, error: "We couldn't send your message right now. Please call us directly." },
      { status: 500 }
    );
  }
}
