# Cloudflare Turnstile Implementation Guide

**Project**: ProtektSurface
**Created**: November 27, 2025
**Implemented**: November 28, 2025
**Status**: Complete

---

## Overview

Cloudflare Turnstile provides bot protection for form submissions. It's a free, privacy-focused CAPTCHA alternative that blocks bots while providing minimal friction for legitimate users.

**Protected Forms:**
- `/get-quote` - QuoteRequestForm (detailed quote request)
- `/contact` - SimpleContactForm (general enquiries)

---

## Current Implementation

### Architecture
```
User → Form Component → Turnstile Widget → POST /api/* → SendGrid
              │                │                  │
              ▼                ▼                  ▼
         Form fields    Token generated    Token validated
                        (auto-solve for    with Cloudflare
                         trusted users)
```

### Key Files
```
lib/spam-protection/
├── turnstile.ts              # Server-side validation helper
└── index.ts                  # Exports

components/
├── QuoteRequestForm.tsx      # Quote form with Turnstile
└── SimpleContactForm.tsx     # Contact form with Turnstile

app/api/
├── quote/route.ts            # Quote API with Turnstile validation
└── contact/route.ts          # Contact API with Turnstile validation
```

### Environment Variables
```env
# Client-side (public)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAA...

# Server-side (secret - mark as Sensitive in Vercel)
TURNSTILE_SECRET_KEY=0x4AAAAAAA...
```

---

## Cloudflare Setup Guide

### Step 1: Create Cloudflare Account

1. Go to [cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Enter email and password
3. Verify email
4. **No domain setup required** - Turnstile works independently of Cloudflare proxy

---

### Step 2: Create Turnstile Widget

1. Log into [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Turnstile** in the left sidebar
3. Click **Add widget**

Fill in:

| Field | Value |
|-------|-------|
| **Widget name** | `ProtektSurface` |
| **Widget Mode** | Managed (recommended) |

---

### Step 3: Configure Hostnames (IMPORTANT)

**You must add ALL domains that will use this widget:**

Click **+ Add Hostnames** and add:
- `protektsurfacesolutions.com.au` (root domain)
- `www.protektsurfacesolutions.com.au` (www subdomain)
- `localhost` (for local development)

> **Lesson Learned**: If you only add `www.` but users visit the root domain (or vice versa), you'll get "invalid domain" errors. Add BOTH.

---

### Step 4: Widget Mode Selection

| Mode | Behavior | Recommendation |
|------|----------|----------------|
| **Managed** | Cloudflare decides when to challenge | Best for most sites |
| Non-interactive | Shows loading bar, no checkbox | When invisible is critical |
| Invisible | Only challenges suspicious users | Similar to Managed |

**Recommendation**: Use **Managed** mode. Trusted users see a brief "Verifying..." then a checkmark.

---

### Step 5: Pre-clearance Option

When asked "Would you like to opt for pre-clearance?":

**Select: No**

Pre-clearance is only useful if your site is proxied through Cloudflare's CDN. Since ProtektSurface uses:
- DNS at TPP Wholesale
- Hosting on Vercel (not Cloudflare)

This option does nothing for us.

---

### Step 6: Copy Keys

After creation, copy:
- **Site Key**: `0x4AAAA...` (public, used in frontend)
- **Secret Key**: `0x4AAAA...` (private, used in backend)

---

### Step 7: Add to Vercel

1. Go to [vercel.com](https://vercel.com) → Project → Settings → Environment Variables
2. Add:

| Variable | Value | Sensitive |
|----------|-------|-----------|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Site key | No |
| `TURNSTILE_SECRET_KEY` | Secret key | **Yes** |

3. Select environments: Production, Preview
4. **Redeploy** to pick up new variables (or wait for next push)

---

## Adding Turnstile to New Forms

### 1. Client-Side (Component)

```tsx
'use client';

import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { useToast } from "@/hooks/use-toast";

export function MyNewForm() {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    // Check for token if Turnstile is configured
    if (!turnstileToken && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      toast({
        title: "Verification required",
        description: "Please complete the security check.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('/api/my-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, turnstileToken }),
      });

      // Handle response...
    } catch (error) {
      // Reset Turnstile on error
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields... */}

      {/* Turnstile Widget - place before submit button */}
      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
        <div className="flex justify-center">
          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
            options={{ theme: 'auto' }}
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}
```

### 2. Server-Side (API Route)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import {
  validateTurnstileToken,
  isTurnstileConfigured,
  getClientIp,
} from '@/lib/spam-protection';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { turnstileToken, ...formData } = body;

  // Validate Turnstile if configured
  if (isTurnstileConfigured()) {
    const ip = getClientIp(request.headers);
    const result = await validateTurnstileToken(turnstileToken, ip);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }
  }

  // Continue with form processing...
}
```

---

## Testing

### Test Keys (Development)

| Scenario | Site Key | Secret Key |
|----------|----------|------------|
| Always pass | `1x00000000000000000000AA` | `1x0000000000000000000000000000000AA` |
| Always fail | `2x00000000000000000000AB` | `2x0000000000000000000000000000000AA` |
| Force challenge | `3x00000000000000000000FF` | N/A |

### Local Testing

```env
# .env.local
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

Or use real keys - just make sure `localhost` is in your Cloudflare hostnames.

---

## Troubleshooting

### "Invalid domain" Error

**Cause**: Hostname not added to Cloudflare widget settings.

**Fix**: In Cloudflare Turnstile dashboard → Edit widget → Add Hostnames:
- Add both `example.com` AND `www.example.com`
- Add `localhost` for local development
- Changes apply instantly (no propagation delay)

### Widget Not Appearing

- Check `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set in Vercel
- Check browser console for errors
- Verify the env var has `NEXT_PUBLIC_` prefix

### Validation Always Fails

- Verify `TURNSTILE_SECRET_KEY` matches the site key (same widget)
- Check Cloudflare dashboard Analytics for error codes
- Ensure you're not using test site key with production secret key

### Token Expired

- Tokens are valid for 5 minutes
- Widget auto-refreshes, but long forms may need manual reset
- Call `turnstileRef.current?.reset()` if needed

---

## Graceful Degradation

The implementation is designed to work without Turnstile:

- If `NEXT_PUBLIC_TURNSTILE_SITE_KEY` not set → Widget doesn't render
- If `TURNSTILE_SECRET_KEY` not set in development → Validation skipped
- Forms work normally without spam protection

This allows easy testing and quick rollback if issues occur.

---

## Rollback Plan

To disable Turnstile:

1. Remove `NEXT_PUBLIC_TURNSTILE_SITE_KEY` from Vercel env vars
2. Redeploy (or wait for next deployment)

The widget will stop rendering and forms will work without verification.

---

## Costs

| Item | Cost |
|------|------|
| Cloudflare Account | Free |
| Turnstile Widget | Free |
| Verifications | Free (unlimited) |

**Total**: $0/month

---

## Monitoring

### Cloudflare Dashboard
- **Turnstile → Analytics**: Solve rates, challenge rates, error rates
- **By Widget**: See stats per widget if you have multiple

### Vercel Logs
- Check function logs for `/api/quote` and `/api/contact`
- Look for `[Turnstile]` prefixed log messages

---

## Related Documentation

- [`config/CLOUDFLARE.md`](../../config/CLOUDFLARE.md) - Cloudflare account setup
- [`config/FORMS.md`](../../config/FORMS.md) - Form architecture
- [`config/SENDGRID_SETUP.md`](../../config/SENDGRID_SETUP.md) - Email configuration

---

**Last Updated**: November 28, 2025
