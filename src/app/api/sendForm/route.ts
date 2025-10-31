import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { Name, Phone, Email, Message, Consent, Timestamp } = data;

    // 1️⃣ Send to Google Sheets
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;
    await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data),
    });

    // 2️⃣ Send email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Phone:</strong> ${Phone}</p>
        <p><strong>Message:</strong> ${Message || "N/A"}</p>
        <p><strong>Consent:</strong> ${Consent}</p>
        <p><strong>Submitted at:</strong> ${Timestamp}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: "satrealty2@gmail.com",
      subject: "New Form Submission - Brigade-Avalon",
      html: htmlTemplate,
    });

    return new Response("Success", { status: 200 });
  } catch (error) {
    console.error("Error sending form:", error);
    return new Response("Failed", { status: 500 });
  }
}
