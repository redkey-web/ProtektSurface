> **DEPRECATED**: This document has been superseded by the webdev documentation system.
>
> **New Location**: `webdev/forms/FORM_ARCHITECTURE.md`
>
> This file is kept for historical reference only.

---

# Forms Architecture

**Project**: ProtektSurface
**Last Updated**: November 28, 2025
**Status**: DEPRECATED - See webdev/forms/

---

## Form Overview

| Form | Location | Purpose | Backend | Spam Protection |
|------|----------|---------|---------|-----------------|
| **QuoteRequestForm** | `/get-quote` | Lead capture | `/api/quote` | Cloudflare Turnstile |
| **SimpleContactForm** | `/contact` | General enquiries | `/api/contact` | Cloudflare Turnstile |
| **InstantQuoteEstimator** | `/quote-estimator` | Price calculator | None (client-side) | None needed |
| **TintSelectorQuiz** | `/tint-selector` | Product finder | None (client-side) | None needed |

---

## Form Interconnection Flow

```
                    ┌─────────────────────────────────┐
                    │         WEBSITE VISITORS        │
                    └─────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
         ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
         │   Service    │  │    Quote     │  │    Tint      │
         │    Pages     │  │  Estimator   │  │  Selector    │
         │              │  │              │  │    Quiz      │
         │ /residential │  │    /quote-   │  │              │
         │ /commercial  │  │   estimator  │  │ /tint-       │
         │ /automotive  │  │              │  │  selector    │
         └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
                │                 │                 │
                │                 │                 │
                │         ┌──────┴──────┐          │
                │         │ Price Range │          │
                │         │  Estimate   │          │
                │         └──────┬──────┘          │
                │                │                 │
                │                ▼                 │
                │    "Get Accurate Quote" CTA      │
                │                │                 │
                └────────────────┼─────────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────────────┐
                    │       QuoteRequestForm          │
                    │         /get-quote              │
                    │                                 │
                    │  ┌───────────────────────────┐  │
                    │  │ Name, Email, Phone        │  │
                    │  │ Service Type              │  │
                    │  │ Property Type             │  │
                    │  │ Address                   │  │
                    │  │ Urgency                   │  │
                    │  │ Message                   │  │
                    │  └───────────────────────────┘  │
                    └─────────────────────────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────────────┐
                    │        POST /api/quote          │
                    └─────────────────────────────────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
              ┌──────────┐ ┌──────────┐ ┌──────────┐
              │ Business │ │ Customer │ │   SMS    │
              │  Email   │ │  Email   │ │ (Future) │
              └──────────┘ └──────────┘ └──────────┘
```

---

## 1. QuoteRequestForm

**Component**: `components/QuoteRequestForm.tsx`
**Page**: `app/get-quote/page.tsx`
**URL**: `/get-quote`
**API**: `POST /api/quote`

### Purpose
Primary lead capture form. Collects customer details and sends to business.

### Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | text | Yes | Min 2 chars |
| `email` | email | Yes | Valid email |
| `phone` | tel | Yes | Min 10 digits |
| `serviceType` | select | Yes | Must select one |
| `propertyType` | text | No | Optional |
| `address` | text | Yes | Min 5 chars |
| `urgency` | select | Yes | Must select one |
| `message` | textarea | No | Max 2000 chars |

### Service Type Options
```typescript
{
  residential: "Residential Window Tinting",
  commercial: "Commercial Window Tinting",
  automotive: "Automotive Window Tinting",
  ceramic: "Ceramic Window Tint",
  frosted: "Frosted & Decorative Film",
  marble: "Marble & Stone Protection Film",
}
```

### Urgency Options
```typescript
{
  asap: "As soon as possible",
  week: "Within a week",
  month: "Within a month",
  flexible: "Flexible",
}
```

### Data Flow
```
User fills form
       │
       ▼
Cloudflare Turnstile verification
       │
       ▼
Client-side Zod validation
       │
       ▼
POST /api/quote (JSON body + turnstileToken)
       │
       ▼
Server-side Turnstile validation
       │
       ▼
Server-side Zod validation
       │
       ▼
SendGrid API calls
       │
       ├──▶ Business notification email
       │         TO: BUSINESS_EMAIL env var
       │         FROM: FROM_EMAIL env var
       │
       └──▶ Customer confirmation email
                 TO: form.email
                 FROM: FROM_EMAIL env var
       │
       ▼
JSON response { success: true }
       │
       ▼
Toast notification + success state
```

### Key Files
```
components/QuoteRequestForm.tsx  # Form component
lib/validations/quote.ts         # Zod schema (shared)
app/api/quote/route.ts           # API endpoint
lib/email/sendgrid.ts            # SendGrid client
lib/email/templates.ts           # Email HTML templates
lib/spam-protection/turnstile.ts # Turnstile validation
```

---

## 2. SimpleContactForm

**Component**: `components/SimpleContactForm.tsx`
**Page**: `app/contact/page.tsx`
**URL**: `/contact`
**API**: `POST /api/contact`

### Purpose
Simple contact form for general enquiries. Lighter version of QuoteRequestForm.

### Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | text | Yes | Min 2 chars |
| `email` | email | Yes | Valid email |
| `message` | textarea | Yes | Min 10 chars, max 2000 |

### Data Flow
```
User fills form
       │
       ▼
Cloudflare Turnstile verification
       │
       ▼
Client-side Zod validation
       │
       ▼
POST /api/contact (JSON body + turnstileToken)
       │
       ▼
Server-side Turnstile validation
       │
       ▼
Server-side Zod validation
       │
       ▼
SendGrid API calls
       │
       ├──▶ Business notification email
       │         TO: BUSINESS_EMAIL env var
       │
       └──▶ Customer auto-reply email
                 TO: form.email
       │
       ▼
JSON response { success: true }
```

### Key Files
```
components/SimpleContactForm.tsx   # Form component
app/api/contact/route.ts           # API endpoint
lib/spam-protection/turnstile.ts   # Turnstile validation
```

---

## 3. InstantQuoteEstimator

**Component**: `components/InstantQuoteEstimator.tsx`
**Page**: `app/quote-estimator/page.tsx`
**URL**: `/quote-estimator`
**API**: None (client-side only)

### Purpose
Multi-step calculator that gives price estimates. Funnels users to QuoteRequestForm.

### Steps

**Step 1: Service Type**
- Residential Window Tinting
- Commercial Window Tinting
- Automotive Window Tinting

**Step 2: Film Quality**
- Standard Film
- Ceramic Film (Recommended)
- Premium Film

**Step 3: Quantity**
- Square meters (residential/commercial)
- Vehicle selection (automotive)

### Price Calculation
```typescript
const baseRates = {
  residential: { standard: 30, ceramic: 50, premium: 70 },  // per sqm
  commercial: { standard: 35, ceramic: 55, premium: 80 },   // per sqm
  automotive: { standard: 250, ceramic: 400, premium: 600 }, // per vehicle
};

// Shows range: estimate ±10%
```

### Funnel to QuoteRequestForm
```
Calculator result shown
         │
         ▼
"Get Accurate Quote" button
         │
         ▼
Navigate to /get-quote
```

### Data Flow
```
User selects options
       │
       ▼
Local state updates (useState)
       │
       ▼
Price calculated client-side
       │
       ▼
Display estimate range
       │
       ▼
CTA links to /get-quote
```

---

## 4. TintSelectorQuiz

**Component**: `components/TintSelectorQuiz.tsx`
**Page**: `app/tint-selector/page.tsx`
**URL**: `/tint-selector`
**API**: None (client-side only)

### Purpose
Interactive quiz that recommends tint types based on user preferences. Funnels to product pages and QuoteRequestForm.

### Quiz Questions

**Q1: Main Priority**
- Heat & UV reduction
- Privacy
- Cost-effectiveness
- Maximum performance

**Q2: Installation Location**
- Home
- Office/Commercial
- Vehicle
- Private areas (bathroom, etc.)

**Q3: Budget Range**
- Economy
- Mid-range
- Premium
- No preference

**Q4: Warranty Importance**
- Lifetime warranty essential
- 5-10 years is fine
- Not important

**Q5: Transparency Preference**
- Clear visibility important
- Some visibility reduction OK
- Privacy is priority

### Scoring System
```typescript
// Each answer adds points to film types
type FilmScores = {
  ceramic: number;   // High-performance
  frosted: number;   // Privacy-focused
  standard: number;  // Budget-friendly
};

// Highest score = recommended film
```

### Result Actions
```
Quiz completed
       │
       ▼
Recommendation shown
       │
       ├──▶ "Learn More" → Product page (/ceramic-window-tint, etc.)
       │
       ├──▶ "Get Quote" → /get-quote
       │
       └──▶ "Retake Quiz" → Reset state
```

---

## Form Validation

### Shared Schema
All forms use Zod for validation. The main schema is shared between frontend and backend:

**File**: `lib/validations/quote.ts`

```typescript
import { z } from 'zod';

export const quoteFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().min(10).max(20),
  serviceType: z.string().min(1),
  propertyType: z.string().optional(),
  address: z.string().min(5).max(500),
  urgency: z.string().min(1),
  message: z.string().max(2000).optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
```

### Frontend Validation
- Uses `react-hook-form` with `@hookform/resolvers/zod`
- Validates on blur and submit
- Shows inline error messages

### Backend Validation
- Same Zod schema re-validated server-side
- Returns 400 with error details if invalid
- Never trusts client-side validation alone

---

## API Endpoints

### POST /api/quote

**File**: `app/api/quote/route.ts`

**Request**:
```typescript
POST /api/quote
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "0412345678",
  "serviceType": "residential",
  "propertyType": "3 bedroom house",
  "address": "123 Main St, Sydney",
  "urgency": "week",
  "message": "Looking for heat reduction",
  "turnstileToken": "0.xxx..." // Cloudflare Turnstile token
}
```

**Success Response** (200):
```typescript
{
  "success": true,
  "message": "Quote request submitted successfully",
  "emailSent": true,
  "confirmationSent": true
}
```

**Validation Error** (400):
```typescript
{
  "success": false,
  "error": "Validation failed",
  "details": [
    { "field": "email", "message": "Invalid email address" }
  ]
}
```

**Turnstile Error** (400):
```typescript
{
  "success": false,
  "error": "Verification failed. Please try again."
}
```

**Server Error** (500):
```typescript
{
  "success": false,
  "error": "Failed to process your request. Please try again."
}
```

---

### POST /api/contact

**File**: `app/api/contact/route.ts`

**Request**:
```typescript
POST /api/contact
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john@example.com",
  "message": "I have a question about your services...",
  "turnstileToken": "0.xxx..." // Cloudflare Turnstile token
}
```

**Success Response** (200):
```typescript
{
  "success": true,
  "message": "Message sent successfully",
  "emailSent": true,
  "autoReplySent": true
}
```

**Validation/Turnstile Error** (400):
```typescript
{
  "success": false,
  "error": "Validation failed" | "Verification failed. Please try again."
}
```

---

## Email Templates

### Business Notification
- Professional HTML layout
- Urgency badge (color-coded)
- All form fields displayed
- Click-to-call and click-to-email buttons
- Reply-to set to customer's email

### Customer Confirmation
- Branded header
- Thank you message
- Request summary
- "What happens next" steps
- Contact info for urgent queries

**Files**: `lib/email/templates.ts`

---

## Spam Protection

### Cloudflare Turnstile

Both `QuoteRequestForm` and `SimpleContactForm` use Cloudflare Turnstile for bot protection.

**How it works:**
1. Widget renders on form (invisible in most cases)
2. User interaction generates a token
3. Token sent with form submission
4. Server validates token with Cloudflare API
5. Request rejected if token invalid

**Environment Variables:**
```env
# Client-side (public)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAA...

# Server-side (secret)
TURNSTILE_SECRET_KEY=0x4AAAA...
```

**Key Files:**
```
lib/spam-protection/turnstile.ts  # Server-side validation
lib/spam-protection/index.ts      # Exports
```

**Graceful Degradation:**
- If `TURNSTILE_SECRET_KEY` not set in development, validation is skipped
- If `NEXT_PUBLIC_TURNSTILE_SITE_KEY` not set, widget doesn't render
- Forms still work without Turnstile (for testing)

---

## Future Enhancements

### Phase 2: SMS Follow-up
- Send SMS via Twilio after form submission
- Integrated into same `/api/quote` endpoint

### Phase 3: Analytics
- Track form submissions in GA4
- Webhook for email delivery tracking
- Lead storage in database

### Phase 4: File Upload
- Allow photo attachments
- Vercel Blob storage

---

## Testing Forms

### Local Testing
```bash
# Start dev server
npm run dev

# Test quote form at http://localhost:5000/get-quote
# Test contact form at http://localhost:5000/contact
```

### Turnstile Test Keys

Use these dummy keys for local development:

| Scenario | Site Key | Secret Key |
|----------|----------|------------|
| Always pass | `1x00000000000000000000AA` | `1x0000000000000000000000000000000AA` |
| Always fail | `2x00000000000000000000AB` | `2x0000000000000000000000000000000AA` |
| Force challenge | `3x00000000000000000000FF` | N/A |

```env
# .env.local for testing
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

### Without SendGrid (Development)
If `SENDGRID_API_KEY` is not set:
- Form still works
- Logs to console instead of sending email
- Returns success response

### Without Turnstile (Development)
If Turnstile keys not set:
- Widget doesn't render
- Server-side validation skipped
- Forms work normally

### With SendGrid + Turnstile
1. Set all environment variables in `.env.local`
2. Submit form
3. Check inbox for emails
4. Check Cloudflare dashboard for analytics

---

**Document Version**: 2.0
