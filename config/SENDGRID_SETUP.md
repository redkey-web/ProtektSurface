# SendGrid Setup Record

**Project**: ProtektSurface
**Date Completed**: November 27, 2025
**Last Updated**: November 28, 2025
**Status**: Active

---

## What Was Done

### 1. SendGrid Account Setup
- Created SendGrid account (via Twilio)
- Free tier: 100 emails/day
- Trial valid until: January 26, 2026

### 2. Domain Authentication
Authenticated `protektsurfacesolutions.com.au` for email sending.

**Why**: Prevents emails from landing in spam, removes "via sendgrid.net" from sender.

**DNS Records Added at TPP Wholesale**:

| Type | Name | Value |
|------|------|-------|
| CNAME | `em2379` | `u57587629.wl130.sendgrid.net` |
| CNAME | `s1._domainkey` | `s1.domainkey.u57587629.wl130.sendgrid.net` |
| CNAME | `s2._domainkey` | `s2.domainkey.u57587629.wl130.sendgrid.net` |
| TXT | `_dmarc` | `"v=DMARC1; p=none;"` |

**Verification**: All 4 records verified in SendGrid dashboard.

### 3. API Key Created
- Name: `protektsurface-production`
- Permissions: Full Access
- Location: Vercel environment variables (sensitive)

### 4. Environment Variables Configured

**In Vercel** (Settings → Environment Variables):

| Variable | Value | Environments |
|----------|-------|--------------|
| `SENDGRID_API_KEY` | `SG.xxxxx...` (sensitive) | Production, Preview |
| `FROM_EMAIL` | `quotes@protektsurfacesolutions.com.au` | Production, Preview |
| `BUSINESS_EMAIL` | `david.trieu@protektauto.com.au` | Production, Preview |

### 5. Code Implementation

**Files Created**:
```
app/api/quote/route.ts           # Quote form endpoint
app/api/contact/route.ts         # Contact form endpoint
lib/validations/quote.ts         # Shared Zod schema
lib/email/sendgrid.ts            # SendGrid client
lib/email/templates.ts           # HTML email templates
lib/email/index.ts               # Module exports
lib/spam-protection/turnstile.ts # Cloudflare Turnstile validation
```

**Files Modified**:
```
components/QuoteRequestForm.tsx  # POSTs to /api/quote with Turnstile
components/SimpleContactForm.tsx # POSTs to /api/contact with Turnstile
package.json                     # Added @sendgrid/mail, @marsidev/react-turnstile
```

### 6. Deployment
- Code committed and pushed to GitHub
- Vercel auto-deployed with new environment variables

---

## Email Flow

### Quote Form (/get-quote → /api/quote)
```
User submits quote form
            │
            ▼
POST /api/quote
            │
            ▼
┌───────────┴───────────┐
│                       │
▼                       ▼
Business Email       Customer Email

TO: david.trieu@     TO: [form email]
    protektauto.
    com.au

FROM: quotes@        FROM: quotes@
      protektsurface       protektsurface
      solutions.           solutions.
      com.au               com.au

Subject: "New Quote    Subject: "Your Quote
Request - [service]"   Request - Protekt..."
```

### Contact Form (/contact → /api/contact)
```
User submits contact form
            │
            ▼
POST /api/contact
            │
            ▼
┌───────────┴───────────┐
│                       │
▼                       ▼
Business Email       Customer Auto-Reply

TO: david.trieu@     TO: [form email]
    protektauto.
    com.au

FROM: quotes@        FROM: quotes@
      protektsurface       protektsurface
      solutions.           solutions.
      com.au               com.au

Subject: "New Contact  Subject: "Thank You
Message from [name]"   for Contacting..."
```

---

## Verification Checklist

- [x] SendGrid account created
- [x] Domain authenticated (4 DNS records)
- [x] API key created and stored securely
- [x] Environment variables in Vercel
- [x] Quote form code implemented and deployed
- [x] Contact form code implemented and deployed
- [x] Cloudflare Turnstile spam protection added
- [ ] Test quote form email sent and received
- [ ] Test contact form email sent and received
- [ ] Customer confirmations received

---

## Troubleshooting

### Emails Not Sending
1. Check Vercel function logs for errors
2. Verify `SENDGRID_API_KEY` is set correctly
3. Check SendGrid Activity Feed for failures

### Emails Going to Spam
1. Verify domain authentication is complete (all green in SendGrid)
2. Check DNS propagation: `dig CNAME em2379.protektsurfacesolutions.com.au`
3. Wait 24-48 hours for reputation to build

### API Key Issues
1. Regenerate key in SendGrid dashboard
2. Update in Vercel environment variables
3. Redeploy

---

## Monitoring

### SendGrid Dashboard
- **Activity Feed**: See all sent emails
- **Statistics**: Delivery rates, opens, clicks
- **Suppressions**: Bounces, spam reports

### Vercel Logs
- **Functions**: Check `/api/quote` logs for errors
- **Deployments**: Verify successful builds

---

## Costs

| Item | Cost |
|------|------|
| SendGrid Free Tier | $0 (100 emails/day) |
| Domain Authentication | $0 |
| DNS Records | $0 (included with domain) |

**Total**: $0/month (within free tier limits)

---

## Future Upgrades

### When to Upgrade SendGrid
- Exceeding 100 emails/day
- Need email analytics
- Want dedicated IP

### Pricing
- Essentials: $19.95/mo for 50,000 emails
- Pro: $89.95/mo for 100,000 emails

---

## Related Documentation

- [SERVICES.md](./SERVICES.md) - All third-party services
- [FORMS.md](./FORMS.md) - Form architecture
- [services/email_sms/](../services/email_sms/) - Full implementation docs

---

**Setup Completed By**: Claude Code
**Verified By**: [Pending first test email]
