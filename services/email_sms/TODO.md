# Twilio Communication Services - Implementation TODO

**Project**: ProtektSurface
**Created**: November 27, 2025
**Status**: Phase 1 Complete ✅ | Phase 2 Ready to Implement

---

## Phase 1 - Email MVP (Priority: Critical)

> **Goal**: Get quote form submissions flowing to business email

### Twilio/SendGrid Setup
- [x] Create Twilio account at [twilio.com](https://www.twilio.com)
- [x] Complete identity verification (required for AU)
- [x] Enable SendGrid from Twilio console
- [x] Create SendGrid API key (Full Access for dev, Restricted for prod)
- [x] Verify sending domain (`protektsurfacesolutions.com.au`)
- [x] Add DNS records (SPF, DKIM, DMARC) - See [SENDGRID_SETUP.md](../../config/SENDGRID_SETUP.md)

### Environment Variables
- [x] Add `SENDGRID_API_KEY` to `.env.local`
- [x] Add `SENDGRID_API_KEY` to Vercel environment variables
- [x] Add `BUSINESS_EMAIL` (destination for notifications)
- [x] Add `FROM_EMAIL` (verified sender address)

### API Development
- [x] Install dependencies: `npm install @sendgrid/mail`
- [x] Create `/app/api/quote/route.ts` POST endpoint
- [x] Implement Zod validation (reuse existing schema)
- [x] Create business notification email template
- [x] Create customer confirmation email template
- [x] Add error handling with user-friendly messages
- [ ] Test locally with SendGrid sandbox

### Frontend Integration
- [x] Update `QuoteRequestForm.tsx` to POST to `/api/quote`
- [x] Handle loading states during submission
- [x] Handle success/error responses
- [x] Update toast messages for real feedback

### Testing & Deployment
- [ ] Test form submission end-to-end locally
- [ ] Verify business receives notification email
- [ ] Verify customer receives confirmation email
- [ ] Deploy to Vercel preview
- [ ] Test on preview deployment
- [ ] Deploy to production
- [ ] Monitor first real submissions

---

## Phase 2 - SMS Follow-up (Priority: High)

> **Goal**: Automated SMS to customers after quote request
>
> **📖 See**: [AUSTRALIA_GUIDE.md](./AUSTRALIA_GUIDE.md) for AU-specific regulations, pricing, and compliance requirements

### Twilio SMS Setup
- [ ] Enable Programmable Messaging in Twilio console
- [ ] Purchase Australian mobile number (~$6.50/month) - See [AU Pricing](./AUSTRALIA_GUIDE.md#sms-pricing-summary-australia)
- [ ] Configure messaging service
- [ ] Register Alphanumeric Sender ID (if using) - 5 business days lead time

### Environment Variables
- [ ] Add `TWILIO_ACCOUNT_SID` to environment
- [ ] Add `TWILIO_AUTH_TOKEN` to environment
- [ ] Add `TWILIO_PHONE_NUMBER` to environment

### API Development
- [ ] Install dependencies: `npm install twilio`
- [ ] Create `/app/api/sms/route.ts` endpoint
- [ ] Create SMS templates for follow-up
- [ ] Integrate SMS sending into quote form flow
- [ ] Add phone number validation (AU format)
- [ ] Handle SMS sending failures gracefully

### Testing
- [ ] Test SMS delivery to test numbers
- [ ] Verify message content and formatting
- [ ] Test failure scenarios
- [ ] Monitor delivery rates in Twilio console

---

## Phase 3 - Webhooks & Analytics (Priority: Medium)

> **Goal**: Track email delivery and engagement

### Webhook Setup
- [ ] Create `/app/api/webhooks/sendgrid/route.ts`
- [ ] Configure SendGrid Event Webhook in dashboard
- [ ] Implement webhook signature verification
- [ ] Handle events: delivered, opened, clicked, bounced, spam

### Database Storage (Optional)
- [ ] Create `lead_submissions` table schema
- [ ] Store form submissions in database
- [ ] Link email/SMS events to submissions
- [ ] Build simple admin view for leads

### Spam Prevention
- [ ] Add honeypot field to quote form
- [ ] Implement rate limiting with Upstash Redis
- [ ] Add basic bot detection

### Analytics Integration
- [ ] Track `quote_form_submit` event in GA4
- [ ] Track `email_sent` event
- [ ] Track `sms_sent` event
- [ ] Create conversion funnel in GA4

---

## Phase 4 - Marketing Automation (Priority: Low)

> **Goal**: Re-engagement and nurture campaigns

### Contact Management
- [ ] Set up SendGrid Marketing Campaigns
- [ ] Create contact lists (leads, customers)
- [ ] Implement unsubscribe handling
- [ ] Add subscription preferences to forms

### Automated Sequences
- [ ] Design follow-up email sequence:
  - Day 1: Quote confirmation (already done)
  - Day 3: "Any questions?" check-in
  - Day 7: "Ready to book?" reminder
  - Day 14: Seasonal promotion
- [ ] Implement drip campaign triggers
- [ ] A/B test subject lines

### Templates
- [ ] Create branded email templates
- [ ] Create seasonal promotion templates
- [ ] Create review request template
- [ ] Create appointment reminder template

---

## Phase 5 - Advanced Features (Priority: Future)

> **Goal**: Full communication platform

### WhatsApp Business
- [ ] Apply for WhatsApp Business API access
- [ ] Configure WhatsApp messaging in Twilio
- [ ] Create WhatsApp message templates
- [ ] Implement two-way conversations

### Appointment System
- [ ] Integrate with booking system (Calendly/Cal.com)
- [ ] Send appointment confirmation SMS
- [ ] Send reminder SMS (24hr, 1hr before)
- [ ] Handle rescheduling notifications

### Two-Way SMS
- [ ] Set up incoming message webhook
- [ ] Implement basic auto-replies
- [ ] Route complex queries to business phone
- [ ] Log conversation history

### Voice Notifications
- [ ] Configure Twilio Voice
- [ ] Create urgent lead voice alert
- [ ] Implement call tracking for ads

---

## Environment Variables Reference

### Phase 1 (Email)
```env
# SendGrid
SENDGRID_API_KEY=SG.xxxxx
FROM_EMAIL=quotes@protektsurface.com.au
BUSINESS_EMAIL=info@protektsurface.com.au
```

### Phase 2 (SMS)
```env
# Twilio
TWILIO_ACCOUNT_SID=ACxxxxx
TWILIO_AUTH_TOKEN=xxxxx
TWILIO_PHONE_NUMBER=+61xxxxxxxxx
```

### Phase 3 (Webhooks)
```env
# Webhook Security
SENDGRID_WEBHOOK_SECRET=xxxxx

# Rate Limiting (Upstash)
UPSTASH_REDIS_REST_URL=xxxxx
UPSTASH_REDIS_REST_TOKEN=xxxxx
```

### Phase 4+ (Marketing)
```env
# SendGrid Marketing
SENDGRID_MARKETING_API_KEY=SG.xxxxx
```

---

## Cost Estimates

| Phase | Monthly Cost | Notes |
|-------|--------------|-------|
| Phase 1 | $0 | Free tier: 100 emails/day |
| Phase 2 | ~$10-15 | Phone number + ~50 SMS |
| Phase 3 | ~$5-10 | Upstash Redis (optional) |
| Phase 4 | ~$20+ | SendGrid Marketing tier |
| Phase 5 | Variable | WhatsApp, Voice pricing |

---

## Quick Start Checklist

### Phase 1 (Email) - COMPLETE ✅

```
[x] 1. Create Twilio/SendGrid account
[x] 2. Enable SendGrid
[x] 3. Get API key
[x] 4. Add to Vercel env vars
[x] 5. Run: npm install @sendgrid/mail
[x] 6. Create API route
[x] 7. Update form component
[x] 8. Deploy to production
[ ] 9. Test email delivery (pending)
```

### Phase 2 (SMS) - Ready to Start

```
[ ] 1. Enable Programmable Messaging in Twilio
[ ] 2. Purchase AU mobile number ($6.50/mo)
[ ] 3. Add SMS compliance to forms (consent checkbox)
[ ] 4. Run: npm install twilio
[ ] 5. Create SMS sending function
[ ] 6. Integrate into /api/quote
[ ] 7. Test & deploy
```

---

## Documentation Index

| Document | Purpose |
|----------|---------|
| [TODO.md](./TODO.md) | This file - implementation checklist |
| [AUSTRALIA_GUIDE.md](./AUSTRALIA_GUIDE.md) | **AU regulations, pricing, compliance** |
| [FEATURES_ROADMAP.md](./FEATURES_ROADMAP.md) | All planned features and business value |
| [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) | Technical implementation details |
| [TWILIO_SETUP_GUIDE.md](./TWILIO_SETUP_GUIDE.md) | Twilio account setup walkthrough |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | System architecture diagrams |

### Related Documentation

| Document | Purpose |
|----------|---------|
| [config/SENDGRID_SETUP.md](../../config/SENDGRID_SETUP.md) | SendGrid setup record (Phase 1) |
| [config/SERVICES.md](../../config/SERVICES.md) | All third-party services |
| [config/FORMS.md](../../config/FORMS.md) | Form architecture |

---

**Last Updated**: November 27, 2025
