import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

  export async function POST(req, res) {

    if (req.method !== 'POST') {
      return NextResponse.json({ error: 'Method Not Allowed' }, {status: 405});
    }
    const data = await req.json()

    if (!data.email || !data.name || !data.message) {
      return NextResponse.json({ error: 'Please fill in all fields'}, {status: 400});
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Customer Enquiry',
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        html: `<h1>Customer Enquiry</h1><p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
      })

      return NextResponse.json({ message: 'Hello from Contact Route Next.js!' }, {status:200});

    } catch (error) {
      console.error(error);
      return NextResponse.json({message: error.message});
    }

   
  }

  