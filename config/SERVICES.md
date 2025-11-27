# Third-Party Services Reference

**Project**: ProtektSurface
**Last Updated**: November 27, 2025

---

## Service Overview

| Service | Purpose | Status | Monthly Cost |
|---------|---------|--------|--------------|
| **Vercel** | Website hosting | Active | Free tier |
| **SendGrid** | Transactional email | Active | Free (100/day) |
| **Twilio** | SMS (future) | Planned | ~$15/mo |
| **TPP Wholesale** | Domain registrar & DNS | Active | Domain fee only |
| **Google Workspace** | Business email hosting | Active | Existing |
| **GitHub** | Code repository | Active | Free |

---

## 1. Vercel (Hosting)

**Purpose**: Website hosting, serverless functions, CI/CD

**URLs**:
- Dashboard: https://vercel.com
- Project: `protektsurface`
- Production: https://protektsurfacesolutions.com.au

**Signup**:
1. Go to vercel.com
2. Sign up with GitHub
3. Import repository

**Configuration**:
- Framework: Next.js (auto-detected)
- Build Command: `next build`
- Output Directory: `.next`
- Node.js Version: 18.x

**Environment Variables** (Settings → Environment Variables):
| Variable | Purpose | Environment |
|----------|---------|-------------|
| `SENDGRID_API_KEY` | Email API authentication | Production, Preview |
| `FROM_EMAIL` | Sender address for emails | Production, Preview |
| `BUSINESS_EMAIL` | Lead notification recipient | Production, Preview |

**Linking Method**: GitHub integration (auto-deploy on push to main)

---

## 2. SendGrid (Email)

**Purpose**: Transactional email for form submissions

**URLs**:
- Dashboard: https://app.sendgrid.com
- API Docs: https://docs.sendgrid.com

**Account**: Accessed via Twilio (parent company)

**Signup**:
1. Go to sendgrid.com or twilio.com
2. Create account
3. Verify email and phone
4. Complete identity verification (required for sending)

**Configuration Completed**:
- [x] Domain authenticated: `protektsurfacesolutions.com.au`
- [x] API key created: `protektsurface-production`
- [x] DNS records added at TPP Wholesale

**DNS Records Added** (at TPP Wholesale):
| Type | Name | Value |
|------|------|-------|
| CNAME | `em2379` | `u57587629.wl130.sendgrid.net` |
| CNAME | `s1._domainkey` | `s1.domainkey.u57587629.wl130.sendgrid.net` |
| CNAME | `s2._domainkey` | `s2.domainkey.u57587629.wl130.sendgrid.net` |
| TXT | `_dmarc` | `"v=DMARC1; p=none;"` |

**Linking Method**:
- API key stored in Vercel environment variables
- Code uses `@sendgrid/mail` npm package
- API route: `/api/quote`

**Free Tier Limits**:
- 100 emails/day
- No credit card required

---

## 3. Twilio (SMS - Future)

**Purpose**: SMS follow-up for quote requests (Phase 2)

**URLs**:
- Dashboard: https://console.twilio.com
- Pricing (AU): https://www.twilio.com/en-us/sms/pricing/au

**Signup**:
1. Go to twilio.com/try-twilio
2. Create account
3. Verify identity (required for AU numbers)
4. Get $15 trial credit

**Configuration Required** (Phase 2):
- [ ] Purchase Australian mobile number (~$6/mo)
- [ ] Enable Programmable Messaging
- [ ] Add environment variables:
  - `TWILIO_ACCOUNT_SID`
  - `TWILIO_AUTH_TOKEN`
  - `TWILIO_PHONE_NUMBER`

**Linking Method**:
- `twilio` npm package
- Integrated into `/api/quote` route

**Costs**:
- Phone number: ~$6 AUD/month
- SMS (send): $0.055 AUD/message
- SMS (receive): ~$0.01 AUD/message

---

## 4. TPP Wholesale (Domain & DNS)

**Purpose**: Domain registrar and DNS management

**URLs**:
- Dashboard: https://www.tppwholesale.com.au
- Zone Manager: Domain Name → Zone Manager

**Domain**: `protektsurfacesolutions.com.au`
**Expires**: April 9, 2027

**Nameservers**:
```
ns1.partnerconsole.net
ns2.partnerconsole.net
ns3.partnerconsole.net
```

**Current DNS Records**:
| Type | Name | Value | Purpose |
|------|------|-------|---------|
| A | @ | 76.76.21.21 | Vercel website |
| CNAME | www | cname.vercel-dns.com | Vercel website |
| MX | @ | SMTP.GOOGLE.COM | Google email |
| TXT | @ | google-site-verification=... | Search Console |
| CNAME | em2379 | u57587629.wl130.sendgrid.net | SendGrid |
| CNAME | s1._domainkey | s1.domainkey.u57587629... | SendGrid DKIM |
| CNAME | s2._domainkey | s2.domainkey.u57587629... | SendGrid DKIM |
| TXT | _dmarc | "v=DMARC1; p=none;" | SendGrid DMARC |

**Linking Method**: DNS records point to various services

---

## 5. Google Workspace (Email)

**Purpose**: Business email hosting (separate from SendGrid)

**URLs**:
- Admin: https://admin.google.com
- Gmail: https://mail.google.com

**Email Domain**: `protektauto.com.au` (shared across businesses)

**Configuration**:
- MX records point to Google
- Used for receiving lead notifications

**Linking Method**:
- `BUSINESS_EMAIL` env var set to Google Workspace email
- SendGrid sends TO this address

---

## 6. GitHub (Repository)

**Purpose**: Code repository, version control

**URLs**:
- Repository: https://github.com/redkey-web/ProtektSurface

**Branches**:
- `main` - Production (auto-deploys to Vercel)

**Linking Method**: Vercel GitHub integration

---

## Service Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     USER SUBMITS FORM                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      VERCEL (Hosting)                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Next.js Application                         │   │
│  │  ┌─────────────────┐    ┌─────────────────────────────┐ │   │
│  │  │ QuoteRequestForm│───▶│ POST /api/quote             │ │   │
│  │  └─────────────────┘    │ (Serverless Function)       │ │   │
│  │                         └──────────────┬──────────────┘ │   │
│  └─────────────────────────────────────────┼───────────────┘   │
└─────────────────────────────────────────────┼───────────────────┘
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    │                         │                         │
                    ▼                         ▼                         ▼
         ┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
         │    SENDGRID      │      │     TWILIO       │      │  GOOGLE EMAIL    │
         │  (Send Email)    │      │   (Send SMS)     │      │  (Receive)       │
         │                  │      │   [Future]       │      │                  │
         │ FROM: quotes@    │      │                  │      │ TO: david.trieu@ │
         │ protektsurface   │      │                  │      │ protektauto      │
         └──────────────────┘      └──────────────────┘      └──────────────────┘
                    │                                                  ▲
                    │                                                  │
                    └──────────────────────────────────────────────────┘
                              Email delivered to inbox
```

---

## Credential Locations

| Service | Credential Type | Location |
|---------|-----------------|----------|
| SendGrid | API Key | Vercel env vars (sensitive) |
| Twilio | Account SID | Vercel env vars (future) |
| Twilio | Auth Token | Vercel env vars (future) |
| TPP Wholesale | Login | Password manager |
| Vercel | Login | GitHub OAuth |
| Google Workspace | Login | Google account |

---

## Emergency Contacts

| Service | Support URL |
|---------|-------------|
| Vercel | https://vercel.com/help |
| SendGrid | https://support.sendgrid.com |
| Twilio | https://support.twilio.com |
| TPP Wholesale | https://www.tppwholesale.com.au/support |

---

**Document Version**: 1.0
