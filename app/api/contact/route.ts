import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json().catch(() => null);
    const { name, email, message, phone, company, subject, formName, leadSource, ...extraFields } = rawBody ?? {};

    const safeName = typeof name === 'string' ? name.trim() : '';
    const safeEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const safeMessage = typeof message === 'string' ? message.trim() : '';

    if (!safeName || !safeEmail || !safeMessage) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Use App Password, not regular password
      },
    });

    // Notification Email (To You)
    const adminMail = {
      from: `Portfolio System <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO_EMAIL,
      subject: `⚡ New Lead: ${name}`,
      html: `
        <div style="background-color: #060b16; color: #ffffff; padding: 40px; font-family: 'Orbitron', sans-serif;">
          <h2 style="color: #39FF14; border-bottom: 1px solid #39FF14; padding-bottom: 10px;">New Project Inquiry</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #39FF14;">
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="font-size: 12px; color: #475569; margin-top: 20px;">Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      `
    };

    await transporter.sendMail(adminMail);

    // Submit lead to CRM (non-blocking — emails already sent)
    if (process.env.CRM_API_URL && process.env.CRM_API_KEY) {
      try {
        const crmPayload = {
          name: safeName,
          email: safeEmail,
          phone: typeof phone === 'string' ? phone.trim() : '',
          company: typeof company === 'string' ? company.trim() : '',
          message: safeMessage,
          subject: typeof subject === 'string' && subject.trim() ? subject.trim() : `New Lead: ${safeName}`,
          formName: typeof formName === 'string' && formName.trim() ? formName.trim() : 'Contact Form',
          leadSource: typeof leadSource === 'string' && leadSource.trim() ? leadSource.trim() : 'portfolio-website',
          conversionPage: request.headers.get('referer') || new URL(request.url).origin + '/contact',
          customFields: Object.fromEntries(
            Object.entries(extraFields).filter(([, value]) => value !== undefined && value !== null && value !== '')
          ),
        };

        const crmResponse = await fetch(process.env.CRM_API_URL || 'https://crm.merakicommunications.com/api/v1/leads', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.CRM_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(crmPayload),
        });

        if (!crmResponse.ok) {
          const errorText = await crmResponse.text();
          console.error('CRM submission failed:', crmResponse.status, errorText);
        }
      } catch (crmError) {
        console.error('CRM submission failed:', crmError);
      }
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: "Transmission failed" }, { status: 500 });
  }
}