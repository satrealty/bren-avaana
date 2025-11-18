import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Received in API route:", data);
    const { name, phone, email, message, consent, timestamp } = data;

    // 1️⃣ SEND TO GOOGLE SHEETS (JSON format)
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!;

   const res= await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), 
    });

    // 2️⃣ SEND EMAIL
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <p><strong>Consent:</strong> ${consent}</p>
        <p><strong>Submitted at:</strong> ${timestamp}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: "sidharthmk24@gmail.com",
      subject: "New Form Submission - Brigade-Avalon",
      html: htmlTemplate,
    });

    return new Response("Success", { status: 200 });
  } catch (error) {
    console.error("Error sending form:", error);
    return new Response("Failed", { status: 500 });
  }
}
