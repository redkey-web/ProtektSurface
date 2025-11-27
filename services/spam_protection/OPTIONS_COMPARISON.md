# Spam Protection Options Comparison

**Project**: ProtektSurface
**Created**: November 27, 2025

---

## Quick Comparison

| Solution | User Friction | Cost | Effectiveness | Implementation |
|----------|---------------|------|---------------|----------------|
| **Cloudflare Turnstile** | Near-zero | Free | High | 2 hours |
| **Google reCAPTCHA v3** | Near-zero | Free* | High | 2 hours |
| **hCaptcha** | Low-Medium | Free | High | 2 hours |
| **Honeypot Fields** | Zero | Free | Low-Medium | 30 mins |
| **Rate Limiting** | Zero | Free* | Medium | 1-2 hours |
| **Vercel WAF** | Zero | $20/mo | High | 5 mins |

*Free tier with limits or privacy concerns

---

## Option 1: Cloudflare Turnstile ⭐ RECOMMENDED

### What It Is
An invisible CAPTCHA alternative that verifies users without puzzles. Uses machine learning to detect bots while showing nothing to legitimate users.

### How It Works
```
User loads page
       │
       ▼
Turnstile widget loads (invisible)
       │
       ▼
Widget analyzes browser behavior
       │
       ├──▶ Looks legitimate → Token issued (user sees nothing)
       │
       └──▶ Suspicious → Interactive challenge appears
                │
                ▼
         User clicks checkbox or solves simple puzzle
                │
                ▼
         Token issued
       │
       ▼
Form submits with token
       │
       ▼
Server validates token with Cloudflare API
       │
       ├──▶ Valid → Process form
       └──▶ Invalid → Reject submission
```

### Pros
- ✅ **Free unlimited** - No per-verification costs
- ✅ **Privacy-focused** - No user tracking, GDPR compliant
- ✅ **Invisible to most users** - Challenges only when needed
- ✅ **High effectiveness** - Catches sophisticated bots
- ✅ **Easy integration** - React component available
- ✅ **Trusted provider** - Cloudflare reputation
- ✅ **Fast** - ~300ms verification

### Cons
- ❌ Requires Cloudflare account (free)
- ❌ Dependency on external service
- ❌ Occasional false positives (rare)

### Setup Summary
1. Create Cloudflare account
2. Add site in Turnstile dashboard
3. Get site key + secret key
4. Add React component to form
5. Validate token server-side

### Code Preview
```tsx
// Client-side
import { Turnstile } from '@marsidev/react-turnstile'

<Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
```

```typescript
// Server-side validation
const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
  method: 'POST',
  body: `secret=${SECRET_KEY}&response=${token}`,
});
```

---

## Option 2: Google reCAPTCHA v3

### What It Is
Google's invisible CAPTCHA that scores user interactions (0.0 to 1.0) without visible challenges.

### How It Works
```
User loads page
       │
       ▼
reCAPTCHA script loads
       │
       ▼
Monitors user behavior continuously
       │
       ▼
Returns score (0.0 = bot, 1.0 = human)
       │
       ▼
You decide threshold (e.g., reject if score < 0.5)
```

### Pros
- ✅ Completely invisible
- ✅ High accuracy
- ✅ Free tier available

### Cons
- ❌ **Privacy concerns** - Tracks users across sites
- ❌ **GDPR complexity** - Requires consent in EU
- ❌ **Google dependency** - Data goes to Google
- ❌ **Badge requirement** - Must show reCAPTCHA badge
- ❌ Threshold tuning required

### Why Not Recommended
Privacy concerns make this unsuitable for an Australian business website where GDPR-like regulations apply. Users may be uncomfortable with Google tracking.

---

## Option 3: hCaptcha

### What It Is
Privacy-focused CAPTCHA alternative that sometimes shows image challenges ("select all motorcycles").

### How It Works
```
User loads page
       │
       ▼
hCaptcha loads
       │
       ├──▶ Low risk → Invisible pass
       │
       └──▶ Medium/High risk → Image challenge
                │
                ▼
         User selects correct images
                │
                ▼
         Token issued
```

### Pros
- ✅ Privacy-focused (unlike Google)
- ✅ Free tier available
- ✅ GDPR compliant
- ✅ High bot detection

### Cons
- ❌ **More visible challenges** than Turnstile
- ❌ **User friction** - Image puzzles frustrate users
- ❌ Accessibility concerns
- ❌ Slower than invisible solutions

### Why Not Recommended
Higher user friction than Turnstile. For a lead generation form, every extra click reduces conversions.

---

## Option 4: Honeypot Fields

### What It Is
A hidden form field that humans can't see but bots fill out automatically. If the field has data, reject the submission.

### How It Works
```html
<!-- Hidden from humans via CSS -->
<input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" />
```

```
Bot scans form
       │
       ▼
Sees "website" field
       │
       ▼
Fills it with data (bots fill all fields)
       │
       ▼
Server checks: if (website !== '') reject()
```

### Pros
- ✅ **Zero user friction** - Completely invisible
- ✅ **Free** - No external service
- ✅ **Fast to implement** - 30 minutes
- ✅ **No dependencies** - Pure code solution

### Cons
- ❌ **Only catches dumb bots** - Sophisticated bots skip hidden fields
- ❌ **No human verification** - Can't stop manual spam
- ❌ **Diminishing effectiveness** - Bots evolve

### When to Use
- As a **secondary layer** alongside Turnstile
- For **quick wins** before implementing CAPTCHA
- On **low-traffic sites** where sophisticated attacks are unlikely

### Code Preview
```tsx
// In form
<input
  type="text"
  name="website"
  className="hidden absolute -left-[9999px]"
  tabIndex={-1}
  autoComplete="off"
/>

// In API
if (body.website) {
  return NextResponse.json({ success: false }, { status: 400 });
}
```

---

## Option 5: Rate Limiting

### What It Is
Limits how many requests can come from a single IP address in a time window.

### How It Works
```
Request arrives
       │
       ▼
Check IP address
       │
       ▼
Count requests in last N minutes
       │
       ├──▶ Under limit → Allow
       │
       └──▶ Over limit → Return 429 Too Many Requests
```

### Pros
- ✅ **Zero user friction**
- ✅ **Prevents floods** - Stops rapid-fire attacks
- ✅ **Free** (in-memory) or cheap (Redis)

### Cons
- ❌ **Doesn't stop distributed attacks** - Multiple IPs bypass it
- ❌ **Doesn't verify humans** - Can't stop manual spam
- ❌ **Shared IP issues** - Office/mobile users may hit limits
- ❌ **State management** - Needs persistence for production

### Implementation Options

**In-Memory (Simple, not production-ready)**
```typescript
const rateLimit = new Map<string, { count: number; timestamp: number }>();
// Resets on every deploy
```

**Upstash Redis (Production-ready, free tier)**
```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '1 m'), // 3 requests per minute
});
```

### When to Use
- As a **secondary layer** alongside CAPTCHA
- To prevent **DDoS on API endpoints**
- When you need to **limit costs** (function invocations)

---

## Option 6: Vercel WAF (Web Application Firewall)

### What It Is
Enterprise-grade protection built into Vercel's platform.

### Features
- Bot protection
- DDoS mitigation
- Rate limiting
- Geographic blocking
- Custom rules

### Pros
- ✅ **Zero code changes**
- ✅ **Comprehensive protection**
- ✅ **Managed service**

### Cons
- ❌ **$20/month minimum** (Pro plan required)
- ❌ **Overkill for small sites**

### When to Use
- When budget allows
- For high-traffic sites
- When you need enterprise security

---

## Recommendation Matrix

| Your Situation | Recommended Solution |
|----------------|---------------------|
| Low budget, want best protection | **Cloudflare Turnstile** |
| Need something in 30 minutes | Honeypot (then add Turnstile) |
| Privacy is critical | **Cloudflare Turnstile** or hCaptcha |
| Already using Google services | reCAPTCHA v3 (with privacy notices) |
| Budget available | Vercel WAF + Turnstile |
| Maximum protection | Turnstile + Honeypot + Rate Limiting |

---

## Our Recommendation for ProtektSurface

### Primary: Cloudflare Turnstile
- Free
- Invisible to users
- High effectiveness
- Privacy compliant
- Industry standard

### Secondary: Honeypot Field
- Additional layer
- Zero friction
- Catches basic bots
- Quick to add

### Future: Rate Limiting
- Add if spam increases
- Prevents flood attacks
- Use Upstash free tier

---

## Implementation Order

```
1. Cloudflare Turnstile (2 hours)
   └── Complete protection for most threats

2. Honeypot Field (30 minutes, optional)
   └── Extra layer, catches stragglers

3. Rate Limiting (if needed)
   └── Only if experiencing flood attacks
```

See: [CLOUDFLARE_TURNSTILE_IMPLEMENTATION.md](./CLOUDFLARE_TURNSTILE_IMPLEMENTATION.md)

---

**Last Updated**: November 27, 2025
