> **DEPRECATED**: This folder has been superseded by the webdev documentation system.
>
> **New Locations**:
> - Email: `webdev/services/email/SENDGRID.md`
> - SMS: `webdev/services/sms/TWILIO.md`
> - Forms: `webdev/forms/SENDGRID_INTEGRATION.md`
>
> This folder is kept for historical reference only.

---

# Communication Services Architecture

**Project**: ProtektSurface
**Version**: 1.0
**Date**: November 27, 2025
**Status**: DEPRECATED - See webdev/services/

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        PROTEKTSURFACE WEBSITE                          │
│                         (Next.js on Vercel)                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐   │
│  │  Quote Form     │     │  Contact Form   │     │  Booking Form   │   │
│  │  /get-quote     │     │  /contact       │     │  (Future)       │   │
│  └────────┬────────┘     └────────┬────────┘     └────────┬────────┘   │
│           │                       │                       │             │
│           └───────────────────────┼───────────────────────┘             │
│                                   │                                     │
│                                   ▼                                     │
│                    ┌──────────────────────────┐                         │
│                    │    API Routes            │                         │
│                    │    /api/quote            │                         │
│                    │    /api/contact          │                         │
│                    │    /api/webhooks/*       │                         │
│                    └──────────────┬───────────┘                         │
│                                   │                                     │
└───────────────────────────────────┼─────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
           ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
           │   SendGrid   │ │    Twilio    │ │   Database   │
           │   (Email)    │ │    (SMS)     │ │   (Neon)     │
           └──────────────┘ └──────────────┘ └──────────────┘
```

---

## Data Flow Diagrams

### Quote Form Submission Flow (Phase 1 + 2)

```
┌──────────┐    ┌───────────────┐    ┌─────────────────┐
│  User    │    │ QuoteRequest  │    │ POST /api/quote │
│  Browser │───▶│ Form.tsx      │───▶│ route.ts        │
└──────────┘    └───────────────┘    └────────┬────────┘
                                              │
                     ┌────────────────────────┼────────────────────────┐
                     │                        │                        │
                     ▼                        ▼                        ▼
              ┌────────────┐          ┌────────────┐          ┌────────────┐
              │ Validate   │          │ SendGrid   │          │ Twilio     │
              │ with Zod   │          │ Send Email │          │ Send SMS   │
              └─────┬──────┘          └─────┬──────┘          └─────┬──────┘
                    │                       │                       │
                    │                       ▼                       ▼
                    │               ┌────────────┐          ┌────────────┐
                    │               │ Business   │          │ Customer   │
                    │               │ Inbox      │          │ Phone      │
                    │               └────────────┘          └────────────┘
                    │                       │
                    │                       ▼
                    │               ┌────────────┐
                    │               │ Customer   │
                    │               │ Inbox      │
                    │               └────────────┘
                    │
                    ▼
              ┌────────────┐
              │ Return     │
              │ Response   │
              └────────────┘
```

### Webhook Processing Flow (Phase 3)

```
┌──────────┐    ┌─────────────────────┐    ┌────────────────────┐
│ SendGrid │───▶│ POST /api/webhooks/ │───▶│ Process Event      │
│ Webhook  │    │ sendgrid/route.ts   │    │ (delivered/opened/ │
└──────────┘    └─────────────────────┘    │  clicked/bounced)  │
                                           └─────────┬──────────┘
                                                     │
                              ┌───────────────────────┼───────────────────────┐
                              │                       │                       │
                              ▼                       ▼                       ▼
                       ┌────────────┐          ┌────────────┐          ┌────────────┐
                       │ Update     │          │ Log to     │          │ Send Alert │
                       │ Database   │          │ Analytics  │          │ (if error) │
                       └────────────┘          └────────────┘          └────────────┘
```

---

## Component Architecture

### Directory Structure

```
app/
├── api/
│   ├── quote/
│   │   └── route.ts              # Quote form handler
│   ├── contact/
│   │   └── route.ts              # Contact form handler (if different)
│   ├── sms/
│   │   └── route.ts              # Direct SMS sending (internal)
│   └── webhooks/
│       ├── sendgrid/
│       │   └── route.ts          # Email event webhooks
│       └── twilio/
│           └── route.ts          # SMS event webhooks
│
lib/
├── email/
│   ├── sendgrid.ts               # SendGrid client configuration
│   ├── templates/
│   │   ├── quote-notification.ts # Business notification template
│   │   ├── quote-confirmation.ts # Customer confirmation template
│   │   └── index.ts              # Template exports
│   └── index.ts                  # Email service exports
│
├── sms/
│   ├── twilio.ts                 # Twilio client configuration
│   ├── templates/
│   │   ├── quote-followup.ts     # Post-quote SMS template
│   │   └── index.ts              # Template exports
│   └── index.ts                  # SMS service exports
│
├── validations/
│   ├── quote.ts                  # Quote form Zod schema
│   └── contact.ts                # Contact form Zod schema
│
└── utils/
    ├── phone.ts                  # Phone number formatting
    └── rate-limit.ts             # Rate limiting utilities

components/
├── forms/
│   ├── QuoteRequestForm.tsx      # Main quote form (existing)
│   └── ContactForm.tsx           # Contact form (if exists)
│
services/
└── email_sms/
    ├── TODO.md                   # Implementation checklist
    ├── IMPLEMENTATION_PLAN.md    # Technical roadmap
    ├── FEATURES_ROADMAP.md       # Feature descriptions
    ├── TWILIO_SETUP_GUIDE.md     # Setup instructions
    └── ARCHITECTURE.md           # This document
```

---

## API Specifications

### POST /api/quote

**Request:**
```typescript
interface QuoteRequest {
  name: string;          // min 2 chars
  email: string;         // valid email
  phone: string;         // min 10 digits
  serviceType: string;   // required
  propertyType?: string; // optional
  address: string;       // min 5 chars
  urgency: string;       // required
  message?: string;      // optional
}
```

**Response (Success - 200):**
```typescript
interface QuoteResponse {
  success: true;
  message: string;
  emailSent: boolean;
  smsSent: boolean;      // Phase 2+
}
```

**Response (Validation Error - 400):**
```typescript
interface ValidationError {
  error: "Validation failed";
  details: ZodIssue[];
}
```

**Response (Server Error - 500):**
```typescript
interface ServerError {
  error: string;
}
```

### POST /api/webhooks/sendgrid

**Request (from SendGrid):**
```typescript
interface SendGridEvent {
  email: string;
  timestamp: number;
  event: 'processed' | 'delivered' | 'open' | 'click' | 'bounce' | 'spamreport';
  sg_message_id: string;
  useragent?: string;
  url?: string;          // For click events
  reason?: string;       // For bounce events
}
```

**Response:**
```typescript
{ received: true }
```

---

## Service Modules

### Email Service (`lib/email/sendgrid.ts`)

```typescript
import sgMail from '@sendgrid/mail';

// Initialize on module load
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    await sgMail.send({
      from: process.env.FROM_EMAIL!,
      ...options,
    });
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

export async function sendBusinessNotification(data: QuoteData): Promise<boolean> {
  return sendEmail({
    to: process.env.BUSINESS_EMAIL!,
    subject: `New Quote Request - ${data.serviceType}`,
    html: generateBusinessEmailHtml(data),
    text: generateBusinessEmailText(data),
    replyTo: data.email,
  });
}

export async function sendCustomerConfirmation(data: QuoteData): Promise<boolean> {
  return sendEmail({
    to: data.email,
    subject: 'Your Quote Request - Protekt Surface Solutions',
    html: generateCustomerEmailHtml(data),
    text: generateCustomerEmailText(data),
  });
}
```

### SMS Service (`lib/sms/twilio.ts`)

```typescript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

interface SMSOptions {
  to: string;
  body: string;
}

export async function sendSMS(options: SMSOptions): Promise<{ success: boolean; sid?: string }> {
  try {
    const formatted = formatAustralianPhone(options.to);

    const message = await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: formatted,
      body: options.body,
    });

    return { success: true, sid: message.sid };
  } catch (error) {
    console.error('SMS send error:', error);
    return { success: false };
  }
}

export async function sendQuoteFollowup(data: QuoteData): Promise<{ success: boolean; sid?: string }> {
  return sendSMS({
    to: data.phone,
    body: generateQuoteFollowupSMS(data),
  });
}

function formatAustralianPhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');

  if (cleaned.startsWith('04')) {
    return '+61' + cleaned.substring(1);
  }
  if (cleaned.startsWith('+61')) {
    return cleaned;
  }
  if (cleaned.startsWith('61')) {
    return '+' + cleaned;
  }

  return '+61' + cleaned;
}
```

---

## Error Handling Strategy

### Error Types

```typescript
enum CommunicationErrorType {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  EMAIL_SEND_FAILED = 'EMAIL_SEND_FAILED',
  SMS_SEND_FAILED = 'SMS_SEND_FAILED',
  RATE_LIMITED = 'RATE_LIMITED',
  INVALID_PHONE = 'INVALID_PHONE',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
}

interface CommunicationError {
  type: CommunicationErrorType;
  message: string;
  details?: unknown;
}
```

### Error Handling Flow

```
Error Occurs
     │
     ▼
┌──────────────────────┐
│ Is it recoverable?   │
└──────────┬───────────┘
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
   Yes          No
     │           │
     ▼           ▼
┌─────────┐  ┌─────────────┐
│ Retry   │  │ Log Error   │
│ (1-3x)  │  │ Return      │
└────┬────┘  │ User-friendly│
     │       │ Message      │
     │       └─────────────┘
     ▼
Still fails?
     │
     ▼
┌─────────────┐
│ Partial     │
│ Success     │
│ (email ok,  │
│  sms failed)│
└─────────────┘
```

### Graceful Degradation

If SMS fails but email succeeds:
- Return success to user (they got confirmation)
- Log SMS failure for monitoring
- Don't block the user experience

```typescript
// In API route
const emailSent = await sendBusinessNotification(data);
const confirmationSent = await sendCustomerConfirmation(data);

let smsSent = false;
if (process.env.TWILIO_PHONE_NUMBER) {
  const smsResult = await sendQuoteFollowup(data);
  smsSent = smsResult.success;

  if (!smsSent) {
    console.error('SMS failed but continuing...', smsResult);
  }
}

// Return success if at least business email was sent
return NextResponse.json({
  success: emailSent,
  message: emailSent ? 'Quote request submitted' : 'Failed to submit',
  emailSent,
  smsSent,
});
```

---

## Security Architecture

### API Key Protection

```
┌─────────────────────────────────────────────────────────────┐
│                     SECURITY LAYERS                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Environment Variables                                   │
│     └── Stored in Vercel (encrypted at rest)               │
│                                                             │
│  2. Server-Side Only                                        │
│     └── API keys never exposed to browser                  │
│                                                             │
│  3. Input Validation                                        │
│     └── Zod schemas validate all inputs                    │
│                                                             │
│  4. Rate Limiting (Phase 3)                                │
│     └── Upstash Redis limits requests per IP               │
│                                                             │
│  5. Webhook Verification (Phase 3)                         │
│     └── Validate SendGrid webhook signatures               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Input Validation

All user input is validated server-side:

```typescript
const quoteSchema = z.object({
  name: z.string()
    .min(2, 'Name too short')
    .max(100, 'Name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Invalid characters'),

  email: z.string()
    .email('Invalid email')
    .max(254, 'Email too long'),

  phone: z.string()
    .min(10, 'Phone too short')
    .max(15, 'Phone too long')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Invalid phone format'),

  // ... other fields
});
```

### Rate Limiting Architecture (Phase 3)

```
Request → Check IP → Lookup in Redis → Under Limit? → Process
                                            │
                                            ▼
                                        Over Limit
                                            │
                                            ▼
                                     Return 429
                                     "Too Many Requests"
```

---

## Scalability Considerations

### Current Capacity (Free Tiers)

| Service | Limit | Typical Usage |
|---------|-------|---------------|
| SendGrid | 100 emails/day | ~3 per lead (2 emails + potential retry) |
| Twilio SMS | Pay per message | ~1 per lead |
| Vercel | 100GB bandwidth | More than enough |
| Neon DB | 3GB storage | Years of lead data |

**Free tier supports:** ~30 leads/day

### Scaling Triggers

| Milestone | Action |
|-----------|--------|
| 50+ leads/day | Upgrade SendGrid to paid tier |
| 100+ leads/day | Add database storage for redundancy |
| 500+ leads/day | Consider dedicated IP for email |
| 1000+ leads/day | Enterprise tier, dedicated support |

---

## Monitoring & Observability

### Logging Strategy

```typescript
// Structured logging for production
const log = {
  info: (event: string, data: object) => {
    console.log(JSON.stringify({ level: 'info', event, ...data, timestamp: new Date().toISOString() }));
  },
  error: (event: string, error: unknown, data?: object) => {
    console.error(JSON.stringify({ level: 'error', event, error: String(error), ...data, timestamp: new Date().toISOString() }));
  },
};

// Usage
log.info('quote_submitted', { email: data.email, service: data.serviceType });
log.error('email_failed', error, { email: data.email });
```

### Key Metrics to Track

| Metric | Source | Alert Threshold |
|--------|--------|-----------------|
| Form submission rate | Vercel Analytics | N/A (business metric) |
| Email delivery rate | SendGrid | < 95% |
| Email open rate | SendGrid | < 20% |
| SMS delivery rate | Twilio | < 95% |
| API error rate | Vercel Logs | > 5% |
| Response time | Vercel | > 3s |

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        VERCEL                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐    ┌─────────────────┐                │
│  │   Production    │    │    Preview      │                │
│  │   Environment   │    │   Environment   │                │
│  └────────┬────────┘    └────────┬────────┘                │
│           │                      │                          │
│           ▼                      ▼                          │
│  ┌─────────────────────────────────────────┐               │
│  │         Serverless Functions            │               │
│  │         /api/quote                      │               │
│  │         /api/webhooks/*                 │               │
│  └─────────────────────────────────────────┘               │
│                                                             │
│  Environment Variables:                                     │
│  - SENDGRID_API_KEY (sensitive)                            │
│  - TWILIO_ACCOUNT_SID                                      │
│  - TWILIO_AUTH_TOKEN (sensitive)                           │
│  - etc.                                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
           │
           │ HTTPS
           ▼
┌─────────────────────┐  ┌─────────────────────┐
│      SendGrid       │  │       Twilio        │
│   api.sendgrid.com  │  │   api.twilio.com    │
└─────────────────────┘  └─────────────────────┘
```

---

## Future Architecture (Phase 5)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     FUTURE COMMUNICATION HUB                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                    Message Router                                 │  │
│  │  Decides which channel(s) based on:                              │  │
│  │  - Customer preference                                            │  │
│  │  - Message urgency                                                │  │
│  │  - Time of day                                                    │  │
│  │  - Previous engagement                                            │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                              │                                          │
│         ┌────────────────────┼────────────────────┐                    │
│         │                    │                    │                    │
│         ▼                    ▼                    ▼                    │
│  ┌────────────┐      ┌────────────┐      ┌────────────┐               │
│  │   Email    │      │    SMS     │      │  WhatsApp  │               │
│  │  SendGrid  │      │   Twilio   │      │   Twilio   │               │
│  └────────────┘      └────────────┘      └────────────┘               │
│         │                    │                    │                    │
│         └────────────────────┼────────────────────┘                    │
│                              │                                          │
│                              ▼                                          │
│                    ┌──────────────────┐                                │
│                    │  Event Tracking  │                                │
│                    │  & Analytics     │                                │
│                    └──────────────────┘                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

**Document Version**: 1.0
**Last Updated**: November 27, 2025
