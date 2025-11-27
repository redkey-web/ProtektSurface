# ProtektSurface - Post-Migration TODO

**Created**: November 27, 2025
**Purpose**: Track features and improvements to implement after Next.js migration is complete

---

## High Priority

### Form Backend Integration

The following forms are currently **frontend-only placeholders** with no backend:

#### QuoteRequestForm (`/get-quote`, `/contact`)
- [ ] Create API route `app/api/quote/route.ts`
- [ ] Send email notifications (SendGrid, Resend, or Mailgun)
- [ ] Store submissions in database (optional)
- [ ] Add form validation error handling
- [ ] Add rate limiting to prevent spam

**Current Behavior**: Logs to console, shows success toast, data goes nowhere

#### InstantQuoteEstimator (`/quote-estimator`)
- [ ] Decide if estimates should be saved/emailed
- [ ] Option to email estimate to customer
- [ ] Track popular selections for analytics

**Current Behavior**: Self-contained calculator, redirects to /get-quote

#### TintSelectorQuiz (`/tint-selector`)
- [ ] Option to email quiz results
- [ ] Track quiz completions for analytics
- [ ] Save recommended products for follow-up

**Current Behavior**: Runs in browser, links to service pages based on score

---

## Medium Priority

### Analytics & Tracking
- [ ] Set up Google Analytics 4 (GA4)
- [ ] Configure Google Search Console
- [ ] Add conversion tracking for form submissions
- [ ] Set up Vercel Analytics (optional)

### CRM Integration (Optional)
- [ ] Connect to HubSpot, Salesforce, or similar
- [ ] Auto-create leads from quote requests
- [ ] Track customer journey

### Performance Optimization
- [ ] Run Lighthouse audits and fix issues
- [ ] Optimize images further (lazy loading, blur placeholders)
- [ ] Add ISR (Incremental Static Regeneration) if content changes frequently

---

## Low Priority

### Content Enhancements
- [ ] Add more blog posts
- [ ] Expand service area pages with unique content
- [ ] Add customer testimonials/reviews section
- [ ] Add FAQ schema markup to FAQ sections

### Technical Improvements
- [ ] Add error boundary components
- [ ] Set up error monitoring (Sentry, LogRocket)
- [ ] Add end-to-end tests (Playwright, Cypress)
- [ ] Configure preview deployments for branches

---

## Integration Options Reference

### Email Services
| Service | Pros | Pricing |
|---------|------|---------|
| **Resend** | Simple API, React Email support | Free tier: 3k/month |
| **SendGrid** | Reliable, good deliverability | Free tier: 100/day |
| **Mailgun** | Developer-friendly | Free tier: 5k/month |
| **Postmark** | Transactional focus | $15/month for 10k |

### Database Options (if storing leads)
- **Vercel Postgres** - Native integration, serverless
- **Supabase** - PostgreSQL with auth, realtime
- **PlanetScale** - MySQL, serverless, branching

### Simple Alternatives
- **Formspree** - No-code form backend
- **Typeform** - Hosted forms with analytics
- **Google Forms** - Free, basic

---

## Notes

- Migration documentation: `/migration/`
- Original Vite code preserved in: `_deprecated/` (after cleanup)
- Deployment: Replit (dev) → GitHub (sync) → Vercel (prod)

---

**Last Updated**: November 27, 2025
