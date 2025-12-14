import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail, isEmailConfigured } from '@/lib/email';
import {
  validateTurnstileToken,
  isTurnstileConfigured,
  getClientIp,
} from '@/lib/spam-protection';

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(20),
  email: z.string().email().max(254),
  message: z.string().min(10).max(2000),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Email template for business notification
function generateBusinessNotificationHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 24px;">New Contact Message</h1>
      </div>

      <div style="background: #fff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px;">
        <h2 style="color: #1a1a2e; margin-top: 0;">Contact Details</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 120px;">Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Phone:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
              <a href="tel:${data.phone}" style="color: #0066cc;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
              <a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a>
            </td>
          </tr>
        </table>

        <h3 style="color: #1a1a2e; margin-top: 25px;">Message</h3>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
          <a href="mailto:${data.email}" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: 600;">Reply to ${data.name}</a>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateBusinessNotificationText(data: ContactFormData): string {
  return `
NEW CONTACT MESSAGE
====================

From: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

MESSAGE:
${data.message}

---
Reply directly to this email to respond to ${data.name}.
  `.trim();
}

// Auto-reply template for customer
function generateCustomerAutoReplyHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
      </div>

      <div style="background: #fff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px;">
        <p>Hi ${data.name},</p>

        <p>Thank you for reaching out to Protekt Surface Solutions. We've received your message and will get back to you as soon as possible, typically within 24 hours.</p>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1a1a2e;">Your Message</h3>
          <p style="white-space: pre-wrap; margin-bottom: 0;">${data.message}</p>
        </div>

        <p>In the meantime, if your enquiry is urgent, please don't hesitate to call us directly:</p>

        <p style="text-align: center; margin: 25px 0;">
          <a href="tel:0286062842" style="display: inline-block; background: #1a1a2e; color: #fff; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: 600;">(02) 8606 2842</a>
        </p>

        <p>Best regards,<br>The Protekt Surface Solutions Team</p>
      </div>

      <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
        <p>Protekt Surface Solutions<br>24 George Street, Clyde NSW 2142</p>
      </div>
    </body>
    </html>
  `;
}

function generateCustomerAutoReplyText(data: ContactFormData): string {
  return `
Hi ${data.name},

Thank you for reaching out to Protekt Surface Solutions. We've received your message and will get back to you as soon as possible, typically within 24 hours.

YOUR MESSAGE:
${data.message}

If your enquiry is urgent, please call us directly at (02) 8606 2842.

Best regards,
The Protekt Surface Solutions Team

---
Protekt Surface Solutions
24 George Street, Clyde NSW 2142
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { turnstileToken, ...formData } = body;

    // Validate Turnstile token if configured
    if (isTurnstileConfigured()) {
      const ip = getClientIp(request.headers);
      const turnstileResult = await validateTurnstileToken(turnstileToken, ip);

      if (!turnstileResult.success) {
        return NextResponse.json(
          { success: false, error: turnstileResult.error },
          { status: 400 }
        );
      }
    }

    // Validate form data
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: result.error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    const data: ContactFormData = result.data;

    // Check email configuration
    if (!isEmailConfigured()) {
      console.error('Email service not configured');

      if (process.env.NODE_ENV === 'development') {
        console.log('Contact message received (email not configured):', data);
        return NextResponse.json({
          success: true,
          message: 'Message received (email service not configured)',
          emailSent: false,
        });
      }

      return NextResponse.json(
        { success: false, error: 'Email service temporarily unavailable' },
        { status: 503 }
      );
    }

    const businessEmail = process.env.BUSINESS_EMAIL;
    if (!businessEmail) {
      console.error('BUSINESS_EMAIL not configured');
      return NextResponse.json(
        { success: false, error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Send notification to business
    const businessEmailResult = await sendEmail({
      to: businessEmail,
      subject: `New Contact Message from ${data.name}`,
      html: generateBusinessNotificationHtml(data),
      text: generateBusinessNotificationText(data),
      replyTo: data.email,
    });

    if (!businessEmailResult.success) {
      console.error('Failed to send business notification:', businessEmailResult.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send your message. Please try again.' },
        { status: 500 }
      );
    }

    // Send auto-reply to customer
    const autoReplyResult = await sendEmail({
      to: data.email,
      subject: 'Thank You for Contacting Protekt Surface Solutions',
      html: generateCustomerAutoReplyHtml(data),
      text: generateCustomerAutoReplyText(data),
    });

    if (!autoReplyResult.success) {
      console.error('Failed to send auto-reply:', autoReplyResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      emailSent: true,
      autoReplySent: autoReplyResult.success,
    });

  } catch (error) {
    console.error('Contact API error:', error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Invalid request format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
