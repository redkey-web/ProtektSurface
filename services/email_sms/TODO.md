# Twilio Communication Services - Implementation TODO

**Project**: ProtektSurface
**Created**: November 27, 2025
**Status**: Phase 1 In Progress (Code Complete - Awaiting API Keys)

---

## Phase 1 - Email MVP (Priority: Critical)

> **Goal**: Get quote form submissions flowing to business email

### Twilio/SendGrid Setup
- [ ] Create Twilio account at [twilio.com](https://www.twilio.com)
- [ ] Complete identity verification (required for AU)
- [ ] Enable SendGrid from Twilio console
- [ ] Create SendGrid API key (Full Access for dev, Restricted for prod)
- [ ] Verify sending domain (`protektsurface.com.au`)
- [ ] Add DNS records (SPF, DKIM, DMARC)

### Environment Variables
- [ ] Add `SENDGRID_API_KEY` to `.env.local`
- [ ] Add `SENDGRID_API_KEY` to Vercel environment variables
- [ ] Add `BUSINESS_EMAIL` (destination for notifications)
- [ ] Add `FROM_EMAIL` (verified sender address)

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

### Twilio SMS Setup
- [ ] Enable Programmable Messaging in Twilio console
- [ ] Purchase Australian mobile number (~$6/month)
- [ ] Configure messaging service
- [ ] Set up A2P 10DLC registration (if required)

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

For immediate implementation (Phase 1 only):

```
[ ] 1. Create Twilio account
[ ] 2. Enable SendGrid
[ ] 3. Get API key
[ ] 4. Add to Vercel env vars
[x] 5. Run: npm install @sendgrid/mail
[x] 6. Create API route
[x] 7. Update form component
[ ] 8. Test & deploy
```

---

**Last Updated**: November 27, 2025
