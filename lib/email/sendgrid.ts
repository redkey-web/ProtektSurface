import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

/**
 * Send an email via SendGrid
 */
export async function sendEmail(options: EmailOptions): Promise<SendEmailResult> {
  const fromEmail = process.env.FROM_EMAIL;

  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not configured');
    return { success: false, error: 'Email service not configured' };
  }

  if (!fromEmail) {
    console.error('FROM_EMAIL is not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    await sgMail.send({
      from: fromEmail,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      replyTo: options.replyTo,
    });

    return { success: true };
  } catch (error) {
    console.error('SendGrid error:', error);

    // Extract error message if available
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    return { success: false, error: errorMessage };
  }
}

/**
 * Check if email service is configured
 */
export function isEmailConfigured(): boolean {
  return Boolean(process.env.SENDGRID_API_KEY && process.env.FROM_EMAIL);
}
