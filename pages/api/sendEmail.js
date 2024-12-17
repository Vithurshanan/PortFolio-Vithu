import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, service, message } = req.body;

    try {
      
      const transporter = nodemailer.createTransport({
        service: "gmail", 
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS, 
        },
      });

     
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: "New Contact Form Submission",
        text: `
          New contact form submission:
          - Name: ${firstName} ${lastName}
          - Email: ${email}
          - Phone: ${phone}
          - Service: ${service}
          - Message: ${message}
        `,
      };

     
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
