# Twilio Implementation Plan - Technical Roadmap

**Project**: ProtektSurface Communication Services
**Version**: 1.0
**Date**: November 27, 2025

---

## Executive Summary

This document outlines the technical implementation plan for integrating Twilio's communication services (SendGrid email + SMS) into the ProtektSurface website. The implementation follows a phased approach, starting with email notifications and progressively adding SMS, analytics, and marketing automation.

---

## Current State Analysis

### Existing Infrastructure
- **Framework**: Next.js 16 (App Router)
- **Hosting**: Vercel
- **Forms**: `QuoteRequestForm.tsx` with react-hook-form + Zod validation
- **Database**: Neon PostgreSQL with Drizzle ORM (available but unused for leads)
- **Current form behavior**: Console.log only, no backend processing

### Form Schema (Already Defined)
```typescript
// components/QuoteRequestForm.tsx
const quoteFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceType: z.string().min(1),
  propertyType: z.string().optional(),
  address: z.string().min(5),
  urgency: z.string().min(1),
  message: z.string().optional(),
});
```

### Gap Analysis
| Requirement | Current State | Target State |
|-------------|---------------|--------------|
| Business notification | None | Email via SendGrid |
| Customer confirmation | None | Email via SendGrid |
| SMS follow-up | None | SMS via Twilio |
| Lead storage | None | PostgreSQL (optional) |
| Analytics | None | Webhooks + GA4 |

---

## Phase 1: Email MVP

### Dependencies
```bash
npm install @sendgrid/mail
```

### File Structure
```
app/
├── api/
│   └── quote/
│       └── route.ts          # POST handler
lib/
├── email/
│   ├── sendgrid.ts           # SendGrid client
│   └── templates/
│       ├── business-notification.ts
│       └── customer-confirmation.ts
```

### API Route Implementation

**`app/api/quote/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Validation schema (matches frontend)
const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  serviceType: z.string().min(1, 'Service type is required'),
  propertyType: z.string().optional(),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  urgency: z.string().min(1, 'Timeframe is required'),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const result = quoteSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    // Send notification to business
    await sgMail.send({
      to: process.env.BUSINESS_EMAIL!,
      from: process.env.FROM_EMAIL!,
      replyTo: data.email,
      subject: `New Quote Request - ${data.serviceType}`,
      html: generateBusinessEmail(data),
      text: generateBusinessEmailText(data),
    });

    // Send confirmation to customer
    await sgMail.send({
      to: data.email,
      from: process.env.FROM_EMAIL!,
      subject: 'Your Quote Request - Protekt Surface Solutions',
      html: generateCustomerEmail(data),
      text: generateCustomerEmailText(data),
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully'
    });

  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    );
  }
}

// Email template functions
function generateBusinessEmail(data: z.infer<typeof quoteSchema>): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a1a1a;">New Quote Request</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.serviceType}</p>
        ${data.propertyType ? `<p><strong>Property Type:</strong> ${data.propertyType}</p>` : ''}
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Timeframe:</strong> ${data.urgency}</p>
        ${data.message ? `<p><strong>Message:</strong><br>${data.message}</p>` : ''}
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Reply directly to this email to respond to the customer.
      </p>
    </div>
  `;
}

function generateBusinessEmailText(data: z.infer<typeof quoteSchema>): string {
  return `
New Quote Request

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.serviceType}
${data.propertyType ? `Property Type: ${data.propertyType}` : ''}
Address: ${data.address}
Timeframe: ${data.urgency}
${data.message ? `Message: ${data.message}` : ''}
  `.trim();
}

function generateCustomerEmail(data: z.infer<typeof quoteSchema>): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a1a1a;">Thank You for Your Quote Request</h2>
      <p>Hi ${data.name},</p>
      <p>We've received your request for <strong>${data.serviceType}</strong> and will be in touch within 24 hours.</p>

      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Your Request Summary</h3>
        <p><strong>Service:</strong> ${data.serviceType}</p>
        <p><strong>Location:</strong> ${data.address}</p>
        <p><strong>Preferred Timeframe:</strong> ${data.urgency}</p>
      </div>

      <p>If you have any urgent questions, please call us at <strong>1300 XXX XXX</strong>.</p>

      <p>Best regards,<br>The Protekt Surface Solutions Team</p>
    </div>
  `;
}

function generateCustomerEmailText(data: z.infer<typeof quoteSchema>): string {
  return `
Thank You for Your Quote Request

Hi ${data.name},

We've received your request for ${data.serviceType} and will be in touch within 24 hours.

Your Request Summary:
- Service: ${data.serviceType}
- Location: ${data.address}
- Preferred Timeframe: ${data.urgency}

If you have any urgent questions, please call us at 1300 XXX XXX.

Best regards,
The Protekt Surface Solutions Team
  `.trim();
}
```

### Frontend Update

**Update `QuoteRequestForm.tsx` onSubmit:**
```typescript
const onSubmit = async (data: QuoteFormData) => {
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit');
    }

    setIsSubmitted(true);
    toast({
      title: "Quote Request Sent!",
      description: "We'll be in touch within 24 hours.",
    });

  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Please try again or call us directly.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Phase 2: SMS Follow-up

### Dependencies
```bash
npm install twilio
```

### Additional Files
```
lib/
├── sms/
│   └── twilio.ts             # Twilio client
app/
├── api/
│   └── sms/
│       └── route.ts          # SMS endpoint (internal use)
```

### Twilio Client Setup

**`lib/sms/twilio.ts`**
```typescript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function sendSMS(to: string, message: string) {
  // Format Australian number
  const formattedNumber = formatAUPhone(to);

  try {
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: formattedNumber,
    });

    return { success: true, sid: result.sid };
  } catch (error) {
    console.error('SMS send error:', error);
    return { success: false, error };
  }
}

function formatAUPhone(phone: string): string {
  // Remove spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');

  // Convert 04xx to +614xx
  if (cleaned.startsWith('04')) {
    return '+61' + cleaned.substring(1);
  }

  // Already international format
  if (cleaned.startsWith('+61')) {
    return cleaned;
  }

  // Assume Australian mobile
  return '+61' + cleaned;
}
```

### Integrated Quote Flow with SMS

**Updated `app/api/quote/route.ts`:**
```typescript
// Add to existing route after email sends
import { sendSMS } from '@/lib/sms/twilio';

// Inside POST handler, after email sends:
if (process.env.TWILIO_PHONE_NUMBER) {
  await sendSMS(
    data.phone,
    `Hi ${data.name}! Thanks for your quote request with Protekt Surface Solutions. We'll be in touch within 24 hours. Questions? Reply to this message or call 1300 XXX XXX.`
  );
}
```

---

## Phase 3: Webhooks & Analytics

### Webhook Endpoint

**`app/api/webhooks/sendgrid/route.ts`**
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const events = await request.json();

    for (const event of events) {
      switch (event.event) {
        case 'delivered':
          console.log(`Email delivered: ${event.email}`);
          // Update database record
          break;
        case 'open':
          console.log(`Email opened: ${event.email}`);
          // Track engagement
          break;
        case 'click':
          console.log(`Link clicked: ${event.url}`);
          // Track conversion
          break;
        case 'bounce':
          console.log(`Email bounced: ${event.email}`);
          // Mark as invalid
          break;
        case 'spamreport':
          console.log(`Spam report: ${event.email}`);
          // Add to suppression list
          break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
```

### Rate Limiting with Upstash

**`lib/rate-limit.ts`**
```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requests per hour per IP
  analytics: true,
});

// Usage in API route:
// const { success } = await ratelimit.limit(ip);
// if (!success) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
```

---

## Phase 4: Marketing Automation

### Drip Campaign Structure
```
Day 0: Quote confirmation (immediate)
Day 1: SMS check-in
Day 3: "Any questions?" email
Day 7: "Ready to book?" email with incentive
Day 14: Seasonal promotion email
Day 30: Review request (if converted)
```

### Implementation Approach
- Use SendGrid Marketing Campaigns for sequences
- Store lead status in database
- Trigger campaigns via API based on status changes
- Track conversions to optimize sequence

---

## Testing Strategy

### Phase 1 Testing
1. **Unit tests**: Zod validation, email template generation
2. **Integration tests**: API route with mocked SendGrid
3. **E2E tests**: Full form submission flow
4. **Manual testing**: Verify email delivery and formatting

### Phase 2 Testing
1. **SMS delivery**: Use Twilio test credentials
2. **Phone formatting**: Test various AU number formats
3. **Failure handling**: Simulate API failures

### Testing Environment Variables
```env
# Use SendGrid sandbox for testing
SENDGRID_API_KEY=SG.test_xxxxx

# Use Twilio test credentials
TWILIO_ACCOUNT_SID=ACtest_xxxxx
TWILIO_AUTH_TOKEN=test_xxxxx
TWILIO_PHONE_NUMBER=+15005550006
```

---

## Deployment Checklist

### Pre-deployment
- [ ] All environment variables set in Vercel
- [ ] SendGrid domain verified
- [ ] Twilio phone number active
- [ ] API routes tested locally
- [ ] Error handling verified

### Post-deployment
- [ ] Submit test form on production
- [ ] Verify business email received
- [ ] Verify customer email received
- [ ] Verify SMS received (Phase 2)
- [ ] Check Vercel function logs
- [ ] Monitor SendGrid/Twilio dashboards

---

## Security Considerations

1. **API Key Protection**: Never expose in client-side code
2. **Input Validation**: Server-side Zod validation
3. **Rate Limiting**: Prevent abuse (Phase 3)
4. **Webhook Verification**: Validate SendGrid signatures
5. **Phone Number Validation**: Prevent SMS abuse
6. **HTTPS Only**: Enforced by Vercel

---

## Monitoring & Observability

### Key Metrics
- Form submission rate
- Email delivery rate
- Email open rate
- SMS delivery rate
- API error rate
- Response time

### Alerting
- Set up Vercel alerts for function errors
- SendGrid bounce/spam rate alerts
- Twilio delivery failure alerts

---

**Document Version**: 1.0
**Last Updated**: November 27, 2025
