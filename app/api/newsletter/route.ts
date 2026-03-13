import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: "Email service not configured" }, { status: 500 })
    }
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { firstName, lastName, email, journals } = await req.json()

    if (!firstName || !lastName || !email || !journals) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const selectedJournals = []
    if (journals.dentist) selectedJournals.push("High Performance Dentist Journal")
    if (journals.leadership) selectedJournals.push("Clinical Leadership Journal")

    await resend.emails.send({
      from: "joyFULL Growth <onboarding@resend.dev>",
      to: "farhad@oralhealthunited.com",
      subject: `New Newsletter Signup: ${firstName} ${lastName}`,
      html: `
        <h2>New Newsletter Signup</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Journals Selected:</strong></p>
        <ul>
          ${selectedJournals.map((j) => `<li>${j}</li>`).join("")}
        </ul>
      `,
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: "Failed to process signup" }, { status: 500 })
  }
}
