import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json()

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await resend.emails.send({
      from: "joyFULL Growth <onboarding@resend.dev>",
      to: "farhad@oralhealthunited.com",
      subject: `joyFULL Growth Contact: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">New Contact Request</h2>
          <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin: 16px 0;">
            <p style="margin: 0 0 12px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 0 0 12px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 8px 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #94a3b8; font-size: 14px;">Sent from joyFULL Growth website — Contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
