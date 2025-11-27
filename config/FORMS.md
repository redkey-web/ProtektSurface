# Forms Architecture

**Project**: ProtektSurface
**Last Updated**: November 27, 2025

---

## Form Overview

| Form | Location | Purpose | Backend |
|------|----------|---------|---------|
| **QuoteRequestForm** | `/get-quote` | Lead capture | `/api/quote` |
| **InstantQuoteEstimator** | `/quote-estimator` | Price calculator | None (client-side) |
| **TintSelectorQuiz** | `/tint-selector` | Product finder | None (client-side) |

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
Client-side Zod validation
       │
       ▼
POST /api/quote (JSON body)
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
```

---

## 2. InstantQuoteEstimator

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

## 3. TintSelectorQuiz

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

## API Endpoint

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
  "message": "Looking for heat reduction"
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

**Server Error** (500):
```typescript
{
  "success": false,
  "error": "Failed to process your request. Please try again."
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

# Test at http://localhost:3000/get-quote
```

### Without SendGrid (Development)
If `SENDGRID_API_KEY` is not set:
- Form still works
- Logs to console instead of sending email
- Returns success response

### With SendGrid
1. Set environment variables in `.env.local`
2. Submit form
3. Check inbox for emails

---

**Document Version**: 1.0
