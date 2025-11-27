# Honeypot Field Implementation Guide

**Project**: ProtektSurface
**Created**: November 27, 2025
**Estimated Time**: 30 minutes
**Difficulty**: Easy

---

## Overview

A honeypot field is a hidden form field that humans can't see or interact with, but automated bots will fill out. If the field contains data on submission, we know it's a bot.

This is a **secondary protection layer** - use alongside Cloudflare Turnstile for best results.

---

## How It Works

```
Human User:
┌─────────────────────────────────┐
│  Name: [John Smith          ]   │
│  Email: [john@example.com   ]   │
│  Website: [________________ ]   │  ◄── Hidden via CSS, humans never see it
│  Message: [Hello...         ]   │
└─────────────────────────────────┘
User submits → website field is empty → ✅ Allow

Bot:
┌─────────────────────────────────┐
│  Name: [Buy Viagra Cheap    ]   │
│  Email: [spam@bot.com       ]   │
│  Website: [http://spam.com  ]   │  ◄── Bot fills ALL fields it finds
│  Message: [Click here!!!    ]   │
└─────────────────────────────────┘
Bot submits → website field has data → ❌ Reject silently
```

---

## Implementation

### Step 1: Add Hidden Field to Form

Update `components/QuoteRequestForm.tsx`:

```tsx
// Add this field somewhere in your form (hidden from users)
<div
  className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden"
  aria-hidden="true"
>
  <label htmlFor="website">Website</label>
  <input
    type="text"
    id="website"
    name="website"
    tabIndex={-1}
    autoComplete="off"
    value={honeypot}
    onChange={(e) => setHoneypot(e.target.value)}
  />
</div>
```

Add state at the top of the component:

```tsx
const [honeypot, setHoneypot] = useState('');
```

Include in form submission:

```tsx
const onSubmit = async (data: QuoteFormData) => {
  // Check honeypot first
  if (honeypot) {
    // Silently "succeed" to not alert bots
    setIsSubmitted(true);
    return;
  }

  // ... rest of submission logic
};
```

---

### Step 2: Validate on Server (Belt & Suspenders)

Update `app/api/quote/route.ts`:

```typescript
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot field
    if (body.website) {
      // Return success to not alert bots, but don't process
      console.log('Honeypot triggered - bot detected');
      return NextResponse.json({
        success: true,
        message: 'Quote request submitted successfully',
      });
    }

    // ... rest of validation and processing
  }
}
```

---

## Full Implementation Example

### QuoteRequestForm.tsx (with honeypot)

```tsx
'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
// ... other imports

export function QuoteRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Honeypot state
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      // ... default values
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Honeypot check - silently "succeed" if bot
    if (honeypot) {
      console.log('Bot detected via honeypot');
      setIsSubmitted(true);
      toast({
        title: "Quote Request Sent!",
        description: "We've received your request.",
      });
      return;
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          website: honeypot, // Include for server-side check
        }),
      });

      // ... rest of submission handling
    } catch (error) {
      // ... error handling
    }
  };

  return (
    <Card className="p-6 sm:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* Honeypot Field - Hidden from humans */}
          <div
            className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="website">Website (leave blank)</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {/* ... rest of form fields ... */}

        </form>
      </Form>
    </Card>
  );
}
```

---

## Best Practices

### DO ✅

- Use a realistic field name (`website`, `url`, `company`, `fax`)
- Hide with CSS, not `type="hidden"` (bots look for hidden types)
- Position off-screen or with zero dimensions
- Set `tabIndex={-1}` so keyboard users don't tab into it
- Set `aria-hidden="true"` for screen readers
- Silently "succeed" on bot detection (don't alert them)
- Log bot attempts for monitoring

### DON'T ❌

- Don't use obvious names like `honeypot` or `trap`
- Don't use `display: none` alone (some bots check for this)
- Don't return an error message (bots learn to avoid)
- Don't rely on this as your only protection

---

## CSS Hiding Techniques

### Option 1: Off-screen positioning (Recommended)
```css
.honeypot {
  position: absolute;
  left: -9999px;
}
```

### Option 2: Zero dimensions
```css
.honeypot {
  height: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;
}
```

### Option 3: Combined (Most robust)
```css
.honeypot {
  position: absolute;
  left: -9999px;
  height: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
```

---

## Monitoring

Add logging to track effectiveness:

```typescript
// In API route
if (body.website) {
  console.log('Honeypot triggered:', {
    timestamp: new Date().toISOString(),
    ip: request.headers.get('x-forwarded-for'),
    value: body.website.substring(0, 50), // Log partial value
  });
  // ... silent success response
}
```

Check Vercel logs to see how many bots are caught.

---

## Limitations

| Limitation | Impact |
|------------|--------|
| Sophisticated bots skip hidden fields | Won't catch all bots |
| Screen readers might read it | Use `aria-hidden` |
| Form autofill might fill it | Use `autoComplete="off"` |
| No human verification | Can't stop manual spam |

---

## When to Use Honeypot

### As Primary Protection
- Very low traffic sites
- Temporary solution before CAPTCHA
- When user friction is unacceptable

### As Secondary Protection (Recommended)
- Alongside Cloudflare Turnstile
- Extra layer of defense
- Catches stragglers that bypass CAPTCHA

---

## Testing

1. Fill out form normally → Should succeed
2. Use browser dev tools to find hidden field
3. Fill hidden field with text → Should "succeed" but not send email
4. Check server logs for honeypot trigger

---

## Costs

| Item | Cost |
|------|------|
| Implementation | 30 minutes |
| Ongoing | $0 |

---

**Last Updated**: November 27, 2025
