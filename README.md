# ProtektSurface

Professional window tinting services website for Sydney, Australia.

**Production URL**: [protektsurface.com.au](https://protektsurface.com.au)
**Preview URL**: [protektsurface.vercel.app](https://protektsurface.vercel.app)

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel (production)
- **Development**: Replit (IDE)
- **Source Control**: GitHub

---

## Development Workflow

```
┌──────────┐    git push    ┌──────────┐    auto-deploy    ┌──────────┐
│  Replit  │ ──────────────→│  GitHub  │──────────────────→│  Vercel  │
│  (Dev)   │                │  (Sync)  │                   │  (Prod)  │
└──────────┘                └──────────┘                   └──────────┘
     │                                                          │
     │ Preview on                                    Production │
     │ *.replit.dev                                  (manual    │
     ↓                                               promotion) ↓
```

### Daily Commands

**Edit and deploy:**
```bash
# Edit files in Replit IDE
# Preview changes on *.replit.dev

# When ready, commit and push
git add .
git commit -m "description of changes"
git push origin main

# Vercel creates preview deployment (1-2 min)
# Promote to production when ready:
vercel promote <deployment-url>
```

**Pull updates (if changes made elsewhere):**
```bash
git pull origin main
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server (port 5000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Project Structure

```
protektsurface/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (nav, footer)
│   ├── page.tsx           # Home page
│   ├── about/             # /about
│   ├── contact/           # /contact
│   ├── blog/              # /blog and /blog/[slug]
│   ├── service-areas/     # /service-areas/[suburb]
│   └── [service-pages]/   # Service and film type pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Navigation, Footer
│   └── shared/           # Reusable components
├── lib/                   # Utilities and data
├── public/               # Static assets (images, etc.)
├── migration/            # Migration documentation
└── _deprecated/          # Legacy Vite code (rollback)
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `REPLIT` | Replit only | Auto-set by Replit, enables standalone mode |
| `VERCEL` | Vercel only | Auto-set by Vercel, enables optimizations |
| `SENDGRID_API_KEY` | Production | SendGrid API key for emails |
| `FROM_EMAIL` | Production | Sender email address |
| `BUSINESS_EMAIL` | Production | Recipient for form notifications |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Production | Cloudflare Turnstile site key |
| `TURNSTILE_SECRET_KEY` | Production | Cloudflare Turnstile secret key |
| `DATABASE_URL` | Optional | PostgreSQL connection (if using DB) |

---

## Deployment

### Production Deployments (Manual Promotion)

All pushes to `main` create preview deployments. To promote to production:

```bash
# List recent deployments
vercel ls

# Promote specific deployment
vercel promote <deployment-url>

# Check status
vercel promote status
```

### SEO Protection

Preview URLs (`*.vercel.app`) are blocked from Google indexing via `X-Robots-Tag` headers. Only the production domain is indexed.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 5000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Third-Party Services

| Service | Purpose | Documentation |
|---------|---------|---------------|
| **SendGrid** | Email delivery | [`config/SENDGRID_SETUP.md`](./config/SENDGRID_SETUP.md) |
| **Cloudflare Turnstile** | Bot protection | [`config/CLOUDFLARE.md`](./config/CLOUDFLARE.md) |

### Forms with Backend

| Form | Page | API | Features |
|------|------|-----|----------|
| QuoteRequestForm | `/get-quote` | `/api/quote` | Email + Turnstile |
| SimpleContactForm | `/contact` | `/api/contact` | Email + Turnstile |

See [`config/FORMS.md`](./config/FORMS.md) for form architecture.

---

## Documentation

- [`config/FORMS.md`](./config/FORMS.md) - Form architecture and API endpoints
- [`config/SENDGRID_SETUP.md`](./config/SENDGRID_SETUP.md) - Email configuration
- [`config/CLOUDFLARE.md`](./config/CLOUDFLARE.md) - Turnstile spam protection
- [`config/HOSTING.md`](./config/HOSTING.md) - Domain and hosting setup
- [`migration/MIGRATION_PLAN.md`](./migration/MIGRATION_PLAN.md) - Architecture and deployment guide
- [`_deprecated/README.md`](./_deprecated/README.md) - Rollback procedure

---

## Platform-Specific Behavior

| Feature | Replit | Vercel |
|---------|--------|--------|
| Output mode | `standalone` | Default |
| Image optimization | Disabled | Enabled (AVIF, WebP) |
| Port | 5000 | Auto |
| Dev origins | `*.replit.dev` allowed | N/A |

---

**Migrated**: November 2025
**Original Stack**: Vite + Express + React SPA
**Current Stack**: Next.js 16 App Router + Vercel
