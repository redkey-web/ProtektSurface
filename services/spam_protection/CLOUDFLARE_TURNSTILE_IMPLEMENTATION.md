# Cloudflare Turnstile Implementation Guide

**Project**: ProtektSurface
**Created**: November 27, 2025
**Estimated Time**: 2 hours
**Difficulty**: Easy-Medium

---

## Overview

This guide walks through implementing Cloudflare Turnstile on the ProtektSurface quote request form. By the end, bot submissions will be blocked while legitimate users experience no friction.

---

## Prerequisites

- [ ] Cloudflare account (free)
- [ ] Access to Vercel environment variables
- [ ] Local development environment working

---

## Architecture

### Before (Current)
```
User → QuoteRequestForm → POST /api/quote → SendGrid
                                  │
                                  ▼
                            No verification
                            (bots can submit)
```

### After (With Turnstile)
```
User → QuoteRequestForm → Turnstile Widget → POST /api/quote → SendGrid
              │                   │                  │
              ▼                   ▼                  ▼
         Form fields      Token generated    Token validated
                          (invisible)        with Cloudflare
```

---

## Implementation Checklist

### Phase 1: Cloudflare Setup
- [ ] Create Cloudflare account
- [ ] Navigate to Turnstile dashboard
- [ ] Add site widget
- [ ] Copy site key and secret key

### Phase 2: Environment Configuration
- [ ] Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` to `.env.local`
- [ ] Add `TURNSTILE_SECRET_KEY` to `.env.local`
- [ ] Add both to Vercel environment variables

### Phase 3: Code Implementation
- [ ] Install `@marsidev/react-turnstile` package
- [ ] Create `lib/spam-protection/turnstile.ts` helper
- [ ] Update `QuoteRequestForm.tsx` component
- [ ] Update `app/api/quote/route.ts` endpoint

### Phase 4: Testing & Deployment
- [ ] Test locally with test keys
- [ ] Test with real keys
- [ ] Deploy to Vercel preview
- [ ] Test on preview
- [ ] Deploy to production

---

## Step-by-Step Guide

### Step 1: Create Cloudflare Account

1. Go to [cloudflare.com](https://www.cloudflare.com)
2. Click "Sign Up"
3. Enter email and password
4. Verify email

> Note: You don't need to add your domain to Cloudflare. Turnstile works independently.

---

### Step 2: Create Turnstile Widget

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Turnstile** in the left sidebar
3. Click **Add site**

Fill in the form:

| Field | Value |
|-------|-------|
| **Site name** | ProtektSurface |
| **Domain** | `protektsurfacesolutions.com.au` |
| **Widget Mode** | Managed (recommended) |

#### Widget Mode Options

| Mode | Behavior | Use Case |
|------|----------|----------|
| **Managed** | Cloudflare decides when to show challenges | Best for most sites ⭐ |
| **Non-interactive** | Never shows visible widget | When invisible is critical |
| **Invisible** | Only shows challenges to suspicious users | Similar to Managed |

**Recommendation**: Start with **Managed** mode.

4. Click **Create**

5. Copy your keys:
   - **Site Key**: `0x4AAAA...` (public, used client-side)
   - **Secret Key**: `0x4AAAA...` (private, used server-side)

---

### Step 3: Configure Environment Variables

#### Local Development (`.env.local`)

Create or update `.env.local`:

```env
# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAAxxxxxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=0x4AAAAAAAxxxxxxxxxxxxxxxx
```

> **Important**: `NEXT_PUBLIC_` prefix makes the variable available client-side.

#### Vercel Production

1. Go to [Vercel Dashboard](https://vercel.com) → Your Project → Settings → Environment Variables

2. Add both variables:

| Variable | Value | Environments |
|----------|-------|--------------|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Your site key | Production, Preview |
| `TURNSTILE_SECRET_KEY` | Your secret key (Sensitive ✓) | Production, Preview |

> **Note**: Mark `TURNSTILE_SECRET_KEY` as **Sensitive** so it's hidden in logs.

---

### Step 4: Install Dependencies

```bash
npm install @marsidev/react-turnstile
```

---

### Step 5: Create Validation Helper

Create `lib/spam-protection/turnstile.ts`:

```typescript
interface TurnstileValidationResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
  action?: string;
  cdata?: string;
}

interface ValidationResult {
  success: boolean;
  error?: string;
  data?: TurnstileValidationResponse;
}

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function validateTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<ValidationResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY not configured');
    // In development, allow requests through
    if (process.env.NODE_ENV === 'development') {
      console.warn('Turnstile validation skipped in development');
      return { success: true };
    }
    return { success: false, error: 'Server configuration error' };
  }

  if (!token) {
    return { success: false, error: 'Verification token missing' };
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (remoteIp) {
      formData.append('remoteip', remoteIp);
    }

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const data: TurnstileValidationResponse = await response.json();

    if (data.success) {
      return { success: true, data };
    }

    // Log error codes for debugging
    console.warn('Turnstile validation failed:', data['error-codes']);

    return {
      success: false,
      error: 'Verification failed. Please try again.',
      data,
    };
  } catch (error) {
    console.error('Turnstile API error:', error);
    return { success: false, error: 'Verification service unavailable' };
  }
}

export function isTurnstileConfigured(): boolean {
  return !!process.env.TURNSTILE_SECRET_KEY;
}
```

Create `lib/spam-protection/index.ts`:

```typescript
export { validateTurnstileToken, isTurnstileConfigured } from './turnstile';
```

---

### Step 6: Update QuoteRequestForm Component

Update `components/QuoteRequestForm.tsx`:

```tsx
'use client';

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  propertyType: z.string().optional(),
  address: z.string().min(5, "Please enter your address"),
  urgency: z.string().min(1, "Please select a timeframe"),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export function QuoteRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      propertyType: "",
      address: "",
      urgency: "",
      message: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Check for Turnstile token
    if (!turnstileToken && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      toast({
        title: "Verification required",
        description: "Please complete the security check and try again.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          turnstileToken, // Include the token
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        // Reset Turnstile on error
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        throw new Error(result.error || 'Failed to submit quote request');
      }

      setIsSubmitted(true);
      toast({
        title: "Quote Request Sent!",
        description: "We've received your request and will contact you within 24 hours.",
      });
    } catch (error) {
      console.error('Quote submission error:', error);
      // Reset Turnstile on error
      turnstileRef.current?.reset();
      setTurnstileToken(null);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Quote Request Received!
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground mb-8">
          Thank you for your interest. We&apos;ll review your requirements and contact
          you within 24 hours with a detailed quote.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setTurnstileToken(null);
            turnstileRef.current?.reset();
          }}
          variant="outline"
          data-testid="button-submit-another"
        >
          Submit Another Request
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* ... existing form fields ... */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Smith"
                      {...field}
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0400 000 000"
                      {...field}
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Service Type field */}
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-service-type">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="residential">Residential Window Tinting</SelectItem>
                    <SelectItem value="commercial">Commercial Window Tinting</SelectItem>
                    <SelectItem value="automotive">Automotive Window Tinting</SelectItem>
                    <SelectItem value="ceramic">Ceramic Window Tint</SelectItem>
                    <SelectItem value="frosted">Frosted & Decorative Film</SelectItem>
                    <SelectItem value="marble">Marble & Stone Protection Film</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Property Type field */}
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property/Vehicle Type (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., 3-bedroom house, Toyota Camry, office building"
                    {...field}
                    data-testid="input-property-type"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address field */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address/Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Suburb or full address"
                    {...field}
                    data-testid="input-address"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Urgency field */}
          <FormField
            control={form.control}
            name="urgency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>When do you need this done?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-urgency">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="asap">As soon as possible</SelectItem>
                    <SelectItem value="week">Within a week</SelectItem>
                    <SelectItem value="month">Within a month</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Details (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your project, specific requirements, or questions..."
                    className="min-h-32"
                    {...field}
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cloudflare Turnstile Widget */}
          {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
            <div className="flex justify-center">
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => {
                  setTurnstileToken(null);
                  toast({
                    title: "Verification failed",
                    description: "Please refresh the page and try again.",
                    variant: "destructive",
                  });
                }}
                onExpire={() => setTurnstileToken(null)}
                options={{
                  theme: 'auto',
                  size: 'normal',
                }}
              />
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={form.formState.isSubmitting}
            data-testid="button-submit-quote"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Get Free Quote"}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
```

---

### Step 7: Update API Route

Update `app/api/quote/route.ts`:

```typescript
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
import { validateTurnstileToken, isTurnstileConfigured } from '@/lib/spam-protection';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Extract Turnstile token before validation
    const { turnstileToken, ...formData } = body;

    // Validate Turnstile token first (if configured)
    if (isTurnstileConfigured()) {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
                 request.headers.get('x-real-ip') ||
                 undefined;

      const turnstileResult = await validateTurnstileToken(turnstileToken, ip);

      if (!turnstileResult.success) {
        return NextResponse.json(
          {
            success: false,
            error: turnstileResult.error || 'Security verification failed'
          },
          { status: 400 }
        );
      }
    }

    // Validate form input with Zod
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
```

---

### Step 8: Testing

#### Test Keys (Development)

Cloudflare provides test keys that always pass or fail:

| Key Type | Site Key | Secret Key | Behavior |
|----------|----------|------------|----------|
| Always Pass | `1x00000000000000000000AA` | `1x0000000000000000000000000000000AA` | Always succeeds |
| Always Fail | `2x00000000000000000000AB` | `2x0000000000000000000000000000000AB` | Always fails |
| Force Challenge | `3x00000000000000000000FF` | N/A | Always shows challenge |

#### Local Testing Steps

1. Use test keys in `.env.local`:
```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

2. Run dev server:
```bash
npm run dev
```

3. Go to `http://localhost:3000/get-quote`

4. Submit form - should succeed

5. Change to "Always Fail" keys and test rejection

#### Production Testing

1. Swap to real keys
2. Deploy to Vercel preview
3. Test form submission
4. Check Cloudflare dashboard for analytics

---

## Troubleshooting

### Widget Not Appearing

- Check `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set
- Check browser console for errors
- Verify domain is allowed in Cloudflare dashboard

### Validation Always Fails

- Check `TURNSTILE_SECRET_KEY` is correct
- Check secret key matches site key (same widget)
- Check Cloudflare dashboard for error logs

### Token Expired Errors

- Tokens are valid for 5 minutes
- If form takes long to fill, token may expire
- Widget should auto-refresh, but test this scenario

### "hostname mismatch" Error

- Add `localhost` to allowed domains in Cloudflare
- Add preview URLs (e.g., `*.vercel.app`) if testing on preview

---

## Widget Customization

### Theme Options

```tsx
<Turnstile
  siteKey={...}
  options={{
    theme: 'auto', // 'light' | 'dark' | 'auto'
  }}
/>
```

### Size Options

```tsx
<Turnstile
  siteKey={...}
  options={{
    size: 'normal', // 'normal' | 'compact' | 'flexible'
  }}
/>
```

### Appearance Options

```tsx
<Turnstile
  siteKey={...}
  options={{
    appearance: 'always', // 'always' | 'execute' | 'interaction-only'
  }}
/>
```

---

## Security Best Practices

1. **Never expose secret key client-side** - Only use `NEXT_PUBLIC_` for site key
2. **Validate on server** - Never trust client-side validation alone
3. **Check hostname** - Optionally verify `hostname` in response matches your domain
4. **Use once** - Each token should only be validated once (idempotency)
5. **Handle failures gracefully** - Don't reveal why validation failed to users

---

## Monitoring

### Cloudflare Dashboard

- **Widget Analytics**: See solve rates, challenge rates
- **Error Rates**: Monitor validation failures
- **Geography**: See where users are located

### Vercel Logs

- Check `/api/quote` function logs for errors
- Monitor for unusual patterns

---

## Rollback Plan

If issues occur, you can quickly disable Turnstile:

1. Remove `NEXT_PUBLIC_TURNSTILE_SITE_KEY` from Vercel
2. Redeploy

The form will work without Turnstile (the widget conditionally renders).

---

## Costs

| Item | Cost |
|------|------|
| Cloudflare Account | Free |
| Turnstile Widget | Free |
| Verifications | Free (unlimited) |

**Total**: $0/month

---

## Next Steps After Implementation

1. Monitor Cloudflare analytics for first week
2. Add honeypot field for extra protection (optional)
3. Consider rate limiting if high traffic (optional)

---

**Last Updated**: November 27, 2025
