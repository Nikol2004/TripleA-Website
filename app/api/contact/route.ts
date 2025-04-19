import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import xss from 'xss';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email().max(100),
  message: z.string().min(1).max(2000),
  website: z.string().optional(), 
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if ('website' in body && typeof body.website === 'string' && body.website.trim() !== '') {
      return NextResponse.json(
        { success: false, message: 'Bot detected' },
        { status: 403 }
      );
    }

    const parsed = ContactSchema.parse(body);

    const firstName = xss(parsed.firstName);
    const lastName = xss(parsed.lastName);
    const email = xss(parsed.email);
    const message = xss(parsed.message);

    await resend.emails.send({
      from: 'Ambassadors Aligned <contact@ambassadorsaligned.org>',
      to: ['contact@ambassadorsaligned.org', 'admin@ambassadorsaligned.org'],
      subject: 'New Contact Form Submission',
      html: `
        <h3>New message from ${firstName} ${lastName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('[Contact API Error]', err);
    return NextResponse.json(
      { success: false, message: 'Invalid submission or internal error' },
      { status: 400 }
    );
  }
}
