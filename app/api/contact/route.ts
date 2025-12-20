import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Create transporter with your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'winord02@gmail.com',
        pass: 'ahck ptwb rrso yezu'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email to you (notification)
    const mailOptionsToYou = {
      from: 'winord02@gmail.com',
      to: 'zada38843@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #4f46e5;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `
    };

    // Confirmation email to the user
    const mailOptionsToUser = {
      from: '"Mussawar Hayat" <winord02@gmail.com>',
      to: email,
      replyTo: 'zada38843@gmail.com',
      subject: 'Thank you for contacting Mussawar Hayat - Web3 Developer',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #4f46e5; margin: 0;">Thank You for Contacting Me!</h1>
          </div>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin: 20px 0;">
            <h2 style="margin: 0 0 15px 0;">Congratulations! You've made a great choice!</h2>
            <p style="margin: 0; font-size: 16px; line-height: 1.5;">
              You've selected one of the best Web3 developers for your project. 
              I'm excited to work with you and bring your ideas to life in the decentralized space.
            </p>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin: 0 0 10px 0;">What happens next?</h3>
            <ul style="color: #666; line-height: 1.6;">
              <li>I'll review your message within 24 hours</li>
              <li>I'll send you a personalized response with project insights</li>
              <li>We can schedule a call to discuss your project in detail</li>
              <li>I'll provide you with a detailed proposal and timeline</li>
            </ul>
          </div>

          <div style="background: white; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin: 0 0 10px 0;">Your Message Summary:</h3>
            <p style="color: #666; margin: 0;"><strong>Name:</strong> ${name}</p>
            <p style="color: #666; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <p style="color: #666; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>

          <div style="text-align: center; padding: 30px 0;">
            <h3 style="color: #333; margin: 0 0 10px 0;">Why Choose Me as Your Web3 Developer?</h3>
            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 15px;">
              <div style="background: #eff6ff; padding: 15px; border-radius: 8px; flex: 1; min-width: 150px;">
                <h4 style="color: #1e40af; margin: 0 0 5px 0;">5+ Years Experience</h4>
                <p style="color: #64748b; margin: 0; font-size: 14px;">Expert in Web3 development</p>
              </div>
              <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; flex: 1; min-width: 150px;">
                <h4 style="color: #166534; margin: 0 0 5px 0;">100+ Projects Delivered</h4>
                <p style="color: #64748b; margin: 0; font-size: 14px;">Proven track record</p>
              </div>
              <div style="background: #fef3c7; padding: 15px; border-radius: 8px; flex: 1; min-width: 150px;">
                <h4 style="color: #92400e; margin: 0 0 5px 0;">Full-Stack Expert</h4>
                <p style="color: #64748b; margin: 0; font-size: 14px;">End-to-end solutions</p>
              </div>
            </div>
          </div>

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; margin-top: 30px;">
            <p style="color: #6b7280; margin: 0;">
              <strong>Mussawar Hayat</strong><br>
              Full Stack Web3 Developer<br>
              <span style="color: #4f46e5;">Building Since 2019</span>
            </p>
            <div style="margin-top: 15px;">
              <a href="https://ordwin.fun" style="color: #4f46e5; text-decoration: none; margin: 0 10px;">Portfolio</a> |
              <a href="mailto:zada38843@gmail.com" style="color: #4f46e5; text-decoration: none; margin: 0 10px;">Email</a>
            </div>
          </div>
        </div>
      `
    };

    // Send both emails
    console.log('Sending emails...');
    console.log('User email:', email);
    
    const [result1, result2] = await Promise.allSettled([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToUser)
    ]);

    console.log('Email to you result:', result1);
    console.log('Email to user result:', result2);

    if (result1.status === 'rejected') {
      throw new Error('Failed to send notification email: ' + result1.reason.message);
    }
    
    if (result2.status === 'rejected') {
      console.error('Failed to send user confirmation email:', result2.reason);
      // Still return success even if user email fails, but log the error
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    }, { status: 500 });
  }
}
