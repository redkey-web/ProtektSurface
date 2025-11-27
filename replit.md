# Protekt Surface Solutions

## Overview
Professional window tinting website for Protekt Surface Solutions, a Sydney-based company offering residential, commercial, automotive window tinting, and natural stone protection services. Features light theme design with gold accent colors (#D4A574). Optimized for SEO with primary keyword "window tinting sydney".

## Project Status
**Created**: November 17, 2025
**Last Updated**: November 27, 2025 - Migrated to Next.js 16
**Status**: Next.js migration complete, deployed to Vercel
**Production URL**: https://protektsurface.vercel.app

## Tech Stack
- **Framework**: Next.js 16 App Router (SSG - Static Site Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components (light theme)
- **Deployment**: 
  - **Development**: Replit (port 5000, `REPLIT=1` env var)
  - **Production**: Vercel (automatic deploys from GitHub)
- **Build**: 42 pages SSG, Turbopack for dev

## Deployment Pipeline
```
Replit (dev) → GitHub (sync) → Vercel (prod)
```
- Edit code on Replit
- Commit and push to GitHub
- Vercel auto-deploys from main branch (1-2 min)

## Project Structure
```
protekt-surface/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Homepage
│   ├── residential-window-tinting/
│   ├── automotive-window-tinting/
│   ├── commercial-window-tinting/
│   ├── mobile-window-tinting/
│   ├── ceramic-window-tint/
│   ├── privacy-window-film/
│   ├── uv-blocking-film/
│   ├── window-protection-film/
│   ├── frosted-decorative-window-film/
│   ├── marble-protection-film/
│   ├── natural-stone-protection/
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/           # Dynamic blog posts
│   ├── service-areas/
│   │   └── [suburb]/         # Dynamic service area pages
│   ├── contact/
│   ├── about/
│   ├── get-quote/
│   ├── quote-estimator/
│   ├── tint-selector/
│   ├── sitemap.xml/          # Dynamic sitemap
│   └── robots.txt/           # Dynamic robots.txt
├── components/               # React components
│   ├── layout/               # Navigation, Footer, Breadcrumbs
│   ├── ui/                   # shadcn/ui components
│   └── *.tsx                 # Feature components
├── lib/                      # Utilities and helpers
├── content/                  # Blog posts, service area data
├── public/                   # Static assets
│   └── images/               # All images (migrated from attached_assets)
├── migration/                # Migration documentation
│   ├── MIGRATION_PLAN.md
│   ├── TO_DO.md
│   └── README.md
└── _deprecated/              # Legacy Vite code (safe to delete after Dec 27, 2025)
```

## Image Configuration

**IMPORTANT**: Images are now in `public/images/` (NOT `attached_assets/`)

### Image Import Pattern (Next.js)
```tsx
// Use next/image for optimized images
import Image from 'next/image';

<Image
  src="/images/services/residential-hero.png"
  alt="Residential window tinting"
  width={800}
  height={600}
  priority  // For above-the-fold images
/>
```

### Image Directories
```
public/images/
├── logos/                    # Company logos
│   ├── protekt-surface-solutions.png
│   └── protekt-auto-white.png
├── services/                 # Service page heroes
├── film-types/               # Film type page images
├── before-after/             # Comparison images
├── textures/                 # Background textures
└── blog/                     # Blog post images
```

### Platform-Specific Image Handling
- **Replit** (`REPLIT=1`): Images unoptimized (no Vercel Image Optimization)
- **Vercel**: Full image optimization enabled

In `next.config.js`:
```js
images: {
  unoptimized: !!process.env.REPLIT,
}
```

## Design System
- **Color Scheme**: Light theme (98% lightness background) with gold accents (#D4A574 / HSL 38 45% 65%)
- **Typography**: Inter for headings, Work Sans for body text
- **Layout**: Mobile-first responsive design
- **Components**: shadcn/ui component library with custom theming

## Business Information

### Contact Details
- **Phone**: (02) 8606 2842
- **Email**: info@protektsurfacesolutions.com.au
- **Address**: 24 George Street, Clyde, NSW 2142

### Performance Terminology
**IMPORTANT**: Use correct terminology for window film performance:
- **Solar Energy Rejection**: Up to 70% (NOT "heat rejection")
- **UV Protection**: 99% UV blocking (all products)
- **Infrared Blocking**: Varies by product (ceramic films have highest)

Products differ in solar energy rejection and infrared blocking capabilities, but ALL block 99% UV rays.

### Automotive Service Policy
**IMPORTANT**: Automotive window tinting is WORKSHOP-ONLY:
- Located at Clyde workshop (near Parramatta)
- NO mobile service for vehicles
- Protekt Auto branding for automotive services

### Testimonials Policy
**IMPORTANT**: Only use verified Google Business reviews:
- Reviews must be from Google Business Profile for "Protekt Surface Solutions" (Sydney)
- Currently using: Sarah Pantaleo review
- Do NOT fabricate or use unverified testimonials

## Services Offered

**Window Tinting Services:**
1. **Residential Window Tinting** - Home energy efficiency and privacy
2. **Automotive Window Tinting** - Workshop-only, Protekt Auto brand
3. **Commercial Window Tinting** - Business property protection
4. **Mobile Window Tinting** - On-site service for flat glass (NOT vehicles)

**Film Types:**
1. **Ceramic Window Tint** - Premium nano-ceramic technology
2. **Privacy Window Film** - Elegant privacy with natural light
3. **UV Blocking Film** - 99% UV protection
4. **Window Protection Film** - Impact resistance
5. **Frosted & Decorative Film** - Etched glass look
6. **Marble Protection Film** - Natural stone protection

**Additional Services:**
- **Natural Stone Protection** - Marble, granite, engineered stone protection

## URL Structure
Site uses flat root-level URLs for SEO:
- `/residential-window-tinting`
- `/automotive-window-tinting`
- `/commercial-window-tinting`
- `/mobile-window-tinting`
- `/ceramic-window-tint`
- `/privacy-window-film`
- `/uv-blocking-film`
- `/window-protection-film`
- `/frosted-decorative-window-film`
- `/marble-protection-film`
- `/natural-stone-protection`
- `/blog` and `/blog/[slug]`
- `/service-areas/[suburb]` (17 suburbs)

## SEO Configuration
- **Primary Keyword**: window tinting sydney
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Auto-generated at `/robots.txt`
- **Metadata**: Configured in each page's `generateMetadata` function

## Development Notes

### Running Locally
```bash
npm run dev      # Starts Next.js on port 5000
npm run build    # Builds for production (42 pages SSG)
npm run start    # Runs production build
```

### Key Configuration Files
- `next.config.js` - Next.js config with platform detection
- `tailwind.config.ts` - Tailwind with custom colors
- `.replit` - Replit workflow config with `REPLIT=1` env var

### Interactive Components
All interactive components use `'use client'` directive:
- `InteractiveTintDemo` - Adjustable tint darkness slider
- `BeforeAfterSlider` - Draggable comparison
- `QuoteRequestForm` - Contact form (frontend-only, no API)
- `TintSelectorQuiz` - Recommendation quiz (frontend-only)
- `InstantQuoteEstimator` - Price estimator (frontend-only)

### Component Guidelines
- Light theme for logo visibility (black logo elements)
- Gold primary color (#D4A574) for CTAs and accents
- All interactive elements have `data-testid` attributes
- Use `hover-elevate` and `active-elevate-2` utilities

## Migration Reference
See `migration/` folder for:
- `MIGRATION_PLAN.md` - Full migration strategy
- `TO_DO.md` - Detailed checklist (Phases 1-12)
- `README.md` - Quick reference

Legacy code in `_deprecated/` can be deleted after December 27, 2025.
