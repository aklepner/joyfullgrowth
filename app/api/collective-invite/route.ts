import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, boldBelief } = await req.json()

    if (!firstName || !lastName || !email || !boldBelief) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await resend.emails.send({
      from: "The Collective <onboarding@resend.dev>",
      to: "farhad@oralhealthunited.com",
      subject: `New Collective Invite Request: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">New Collective Invite Request</h2>
          <hr style="border: none; border-top: 2px solid #e2e8f0; margin: 24px 0;" />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Bold Belief:</strong></p>
          <blockquote style="border-left: 4px solid #14b8a6; padding-left: 16px; margin: 16px 0; color: #334155; font-style: italic;">
            ${boldBelief}
          </blockquote>
          <hr style="border: none; border-top: 2px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">Submitted from The Collective invite page at joyfullgrowth.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send invite email:", error)
    return NextResponse.json({ error: "Failed to send invite request" }, { status: 500 })
  }
}
