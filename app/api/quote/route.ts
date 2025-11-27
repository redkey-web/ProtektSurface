import { NextRequest, NextResponse } from 'next/server';
import { quoteFormSchema, QuoteFormData, getServiceTypeLabel } from '@/lib/validations/quote';
import {
  sendEmail,
  isEmailConfigured,
  generateBusinessNotificationHtml,
  generateBusinessNotificationText,
  generateCustomerConfirmationHtml,
  generateCustomerConfirmationText,
} from '@/lib/email';
import {
  validateTurnstileToken,
  isTurnstileConfigured,
  getClientIp,
} from '@/lib/spam-protection';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Extract Turnstile token before form validation
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

    // Validate input with Zod
    const result = quoteFormSchema.safeParse(formData);

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

    const data: QuoteFormData = result.data;

    // Check if email service is configured
    if (!isEmailConfigured()) {
      console.error('Email service not configured - SENDGRID_API_KEY or FROM_EMAIL missing');

      // In development, log the data and return success
      if (process.env.NODE_ENV === 'development') {
        console.log('Quote request received (email not configured):', data);
        return NextResponse.json({
          success: true,
          message: 'Quote request received (email service not configured)',
          emailSent: false,
          confirmationSent: false,
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

    // Send notification email to business
    const serviceLabel = getServiceTypeLabel(data.serviceType);
    const businessEmailResult = await sendEmail({
      to: businessEmail,
      subject: `New Quote Request - ${serviceLabel}`,
      html: generateBusinessNotificationHtml(data),
      text: generateBusinessNotificationText(data),
      replyTo: data.email,
    });

    if (!businessEmailResult.success) {
      console.error('Failed to send business notification:', businessEmailResult.error);
      return NextResponse.json(
        { success: false, error: 'Failed to process your request. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const confirmationResult = await sendEmail({
      to: data.email,
      subject: 'Your Quote Request - Protekt Surface Solutions',
      html: generateCustomerConfirmationHtml(data),
      text: generateCustomerConfirmationText(data),
    });

    // Log if confirmation failed but don't fail the whole request
    if (!confirmationResult.success) {
      console.error('Failed to send customer confirmation:', confirmationResult.error);
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      emailSent: true,
      confirmationSent: confirmationResult.success,
    });

  } catch (error) {
    console.error('Quote API error:', error);

    // Handle JSON parse errors
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
