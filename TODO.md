# ProtektSurface - Development TODO

**Created**: November 27, 2025
**Stack**: Next.js 16 + Vercel
**Production**: https://protektsurface.vercel.app

---

## Critical - Before Custom Domain

### Domain & DNS Configuration
- [ ] Add custom domain in Vercel Dashboard (Settings → Domains)
- [ ] Configure DNS records at registrar:
  - `A` record: `76.76.21.21` (Vercel)
  - `CNAME` for `www`: `cname.vercel-dns.com`
- [ ] Verify SSL certificate auto-provisioned
- [ ] Update `metadataBase` in `app/layout.tsx` to production URL
- [ ] Update canonical URLs across all pages
- [ ] Update `robots.txt` sitemap URL to production domain
- [ ] Update `app/sitemap.ts` base URL

### Google Search Console
- [ ] Add and verify `protektsurface.com.au` property
- [ ] Submit sitemap: `https://protektsurface.com.au/sitemap.xml`
- [ ] Request indexing for key pages
- [ ] Set up email alerts for crawl errors

---

## High Priority - Form Backend

### QuoteRequestForm API (`/get-quote`, `/contact`)

**Current**: Frontend-only, logs to console, data goes nowhere

```
app/api/quote/route.ts
```

- [ ] Create POST endpoint with Zod validation
- [ ] Integrate email service (Resend recommended):
  ```bash
  npm install resend
  ```
- [ ] Send notification email to business
- [ ] Send confirmation email to customer
- [ ] Add rate limiting (Vercel KV or upstash)
- [ ] Add honeypot field for spam prevention
- [ ] Store submissions in database (optional)
- [ ] Add error handling with user-friendly messages

**Environment Variables Needed**:
```env
RESEND_API_KEY=re_xxxxx
BUSINESS_EMAIL=info@protektsurface.com.au
```

### Contact Form Enhancements
- [ ] Add file upload for photos (Vercel Blob or Cloudinary)
- [ ] Add Google reCAPTCHA v3
- [ ] Add form submission analytics events

---

## Medium Priority - Analytics & SEO

### Google Analytics 4
- [ ] Create GA4 property
- [ ] Add measurement ID to environment:
  ```env
  NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
  ```
- [ ] Create `components/GoogleAnalytics.tsx`:
  ```tsx
  // Use next/script with strategy="afterInteractive"
  ```
- [ ] Add to `app/layout.tsx`
- [ ] Set up conversion events:
  - `quote_form_submit`
  - `contact_form_submit`
  - `phone_click`
  - `email_click`

### SEO Improvements
- [ ] Validate JSON-LD schemas with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Add BreadcrumbList schema to all pages
- [ ] Add FAQ schema to pages with FAQs
- [ ] Add Review/AggregateRating schema (when reviews added)
- [ ] Audit meta descriptions (unique, 150-160 chars)
- [ ] Add `og:image` unique images per page (optional)
- [ ] Create XML sitemap for images

### Performance
- [ ] Run Lighthouse CI on all page types
- [ ] Implement blur placeholders for images:
  ```tsx
  <Image placeholder="blur" blurDataURL="..." />
  ```
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Preload critical fonts
- [ ] Analyze bundle with `@next/bundle-analyzer`

---

## Technical Improvements

### Error Handling & Monitoring
- [ ] Add global error boundary (`app/error.tsx`)
- [ ] Add not-found boundary (`app/not-found.tsx`) - ✓ exists
- [ ] Set up Sentry or Vercel Error Tracking:
  ```bash
  npm install @sentry/nextjs
  ```
- [ ] Add error logging for API routes
- [ ] Set up uptime monitoring (Vercel, UptimeRobot)

### Code Quality
- [ ] Enable TypeScript strict mode in `tsconfig.json`
- [ ] Add ESLint with Next.js recommended rules
- [ ] Add Prettier configuration
- [ ] Set up pre-commit hooks (husky + lint-staged)

### Testing
- [ ] Add Playwright for E2E tests:
  ```bash
  npm install -D @playwright/test
  ```
- [ ] Test critical user flows:
  - Homepage → Service page → Quote form
  - Blog navigation
  - Mobile menu functionality
- [ ] Add to CI/CD pipeline

### Security
- [ ] Add Content Security Policy headers
- [ ] Review and tighten CORS settings
- [ ] Add rate limiting to all API routes
- [ ] Implement CSRF protection for forms

---

## Future Features

### Customer Reviews System
- [ ] Create reviews data model
- [ ] Build reviews display component
- [ ] Add Google Business reviews integration (optional)
- [ ] Implement Review schema markup

### Blog CMS (Optional)
- [ ] Evaluate options: Contentlayer, Sanity, or MDX
- [ ] Migrate blog content from TSX to CMS
- [ ] Add blog search functionality
- [ ] Add related posts component

### Online Booking
- [ ] Integrate Calendly or Cal.com
- [ ] Or build custom booking system:
  - Available time slots
  - Service selection
  - Customer details
  - Confirmation emails

### Live Chat
- [ ] Evaluate: Intercom, Crisp, Tawk.to
- [ ] Add chat widget to layout
- [ ] Set up business hours auto-replies

---

## Environment Variables Checklist

### Required for Production
```env
# Email (when forms are connected)
RESEND_API_KEY=
BUSINESS_EMAIL=

# Analytics
NEXT_PUBLIC_GA_ID=

# Database (if storing leads)
DATABASE_URL=
```

### Optional
```env
# Error tracking
SENTRY_DSN=

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=

# File uploads
BLOB_READ_WRITE_TOKEN=
```

---

## Integration Quick Reference

### Email Services
| Service | API | Free Tier |
|---------|-----|-----------|
| **Resend** | REST, React Email | 3k/month |
| **SendGrid** | REST, SMTP | 100/day |
| **Postmark** | REST | Trial only |

### Recommended Stack
- **Email**: Resend (simple, modern API)
- **Analytics**: GA4 + Vercel Analytics
- **Error Tracking**: Sentry or Vercel
- **Database**: Vercel Postgres (if needed)
- **Rate Limiting**: Upstash Redis

---

## Files to Update for Production Domain

When switching from `protektsurface.vercel.app` to `protektsurface.com.au`:

1. `app/layout.tsx` - metadataBase URL
2. `app/sitemap.ts` - base URL
3. `public/robots.txt` - sitemap URL
4. `next.config.js` - X-Robots-Tag rules (remove vercel.app blocking if using custom domain only)
5. All pages with hardcoded canonical URLs

---

**Last Updated**: November 27, 2025
