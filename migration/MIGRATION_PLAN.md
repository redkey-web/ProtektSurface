# ProtektSurface Vercel Migration Plan

**Current Stack**: Vite + Express + React SPA + Wouter
**Target Stack**: Next.js 15 App Router + Vercel
**Reference**: Poweramp migration guide at `/Users/mechatronmike/Jack/poweramp/migration-guide`

---

## Executive Summary

| Aspect | Current | Target |
|--------|---------|--------|
| Frontend | Vite + React SPA | Next.js 15 App Router |
| Backend | Express.js (minimal) | Next.js API Routes |
| Rendering | Client-side (CSR) | Static Site Generation (SSG) |
| Routing | Wouter | Next.js file-based routing |
| Styling | Tailwind + shadcn/ui | Tailwind + shadcn/ui (preserved) |
| Database | PostgreSQL + Drizzle | PostgreSQL + Drizzle (preserved) |
| Deployment | Replit | Vercel (primary) |

### Expected Outcomes
- Zero cold-start times (vs potential delays on Replit)
- Full SEO capabilities with SSG
- 90%+ Lighthouse scores
- Native Vercel edge network optimization
- Automatic image optimization

---

## Phase 1: Analysis & Audit (DO NOT SKIP)

### 1.1 Route Inventory

**Main Pages (9)**:
| Route | Component | Strategy |
|-------|-----------|----------|
| `/` | Home.tsx | Individual route |
| `/residential-window-tinting` | ResidentialWindowTinting.tsx | Individual route |
| `/automotive-window-tinting` | AutomotiveWindowTinting.tsx | Individual route |
| `/commercial-window-tinting` | CommercialWindowTinting.tsx | Individual route |
| `/contact` | Contact.tsx | Individual route |
| `/about` | About.tsx | Individual route |
| `/get-quote` | GetQuote.tsx | Individual route |
| `/quote-estimator` | QuoteEstimator.tsx | Individual route (interactive) |
| `/tint-selector` | TintSelector.tsx | Individual route (interactive) |

**Film Type Pages (6)**:
| Route | Component | Strategy |
|-------|-----------|----------|
| `/ceramic-window-tint` | CeramicWindowTint.tsx | Individual route |
| `/frosted-decorative-window-film` | FrostedDecorativeWindowFilm.tsx | Individual route |
| `/marble-protection-film` | MarbleProtectionFilm.tsx | Individual route |
| `/privacy-window-film` | PrivacyWindowFilm.tsx | Individual route |
| `/window-protection-film` | WindowProtectionFilm.tsx | Individual route |
| `/uv-blocking-film` | UVBlockingFilm.tsx | Individual route |

**Service Area Pages (17)** - Candidates for dynamic route:
| Route Pattern | Strategy |
|---------------|----------|
| `/service-areas/[suburb]` | **Dynamic route** - all share same template |

Service areas: granville, auburn, parramatta, silverwater, rosehill, camellia, rydalmere, ermington, dundas, telopea, carlingford, north-parramatta, harris-park, westmead, merrylands, liverpool, penrith

**Blog Pages (3)**:
| Route | Component | Strategy |
|-------|-----------|----------|
| `/blog` | Blog.tsx | Individual route |
| `/blog/:slug` | BlogPost.tsx | Dynamic route `[slug]` |
| `/author/david-trieu` | AuthorDavidTrieu.tsx | Individual route |

### 1.2 Critical Pre-Migration Tasks

- [ ] **Visual Audit**: Run both sites side-by-side (Vite on 5173, Next.js on 3000)
- [ ] Count lines of code per page component
- [ ] Document all interactive features per page
- [ ] List all images and their sources
- [ ] Audit environment variables

### 1.3 Dependency Analysis

**Keep (Compatible)**:
- `react`, `react-dom` (18.x)
- `tailwindcss`, `@tailwindcss/typography`
- All `@radix-ui/*` components
- `framer-motion` (add `'use client'`)
- `@tanstack/react-query`
- `lucide-react`
- `zod`, `react-hook-form`, `@hookform/resolvers`
- `drizzle-orm`, `@neondatabase/serverless`
- `date-fns`, `recharts`, `embla-carousel-react`
- All shadcn/ui dependencies

**Remove (Vite-specific)**:
- `wouter` → `next/link` + `next/navigation`
- `@vitejs/plugin-react`
- `@replit/vite-plugin-*`
- `vite` itself
- `esbuild` (Next.js handles bundling)

**Add (Next.js)**:
- `next@15`
- `@vercel/analytics` (optional)
- `@vercel/speed-insights` (optional)

---

## Phase 2: Project Setup

### 2.1 Initialize Next.js Structure

```
protekt-surface/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Header, Footer)
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   │
│   ├── residential-window-tinting/
│   │   └── page.tsx
│   ├── automotive-window-tinting/
│   │   └── page.tsx
│   ├── commercial-window-tinting/
│   │   └── page.tsx
│   │
│   ├── ceramic-window-tint/
│   │   └── page.tsx
│   ├── frosted-decorative-window-film/
│   │   └── page.tsx
│   ├── marble-protection-film/
│   │   └── page.tsx
│   ├── privacy-window-film/
│   │   └── page.tsx
│   ├── window-protection-film/
│   │   └── page.tsx
│   ├── uv-blocking-film/
│   │   └── page.tsx
│   ├── natural-stone-protection/    # NEW service
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── get-quote/
│   │   └── page.tsx
│   ├── quote-estimator/
│   │   ├── page.tsx             # Server: metadata
│   │   └── QuoteEstimatorClient.tsx  # Client: interactive
│   ├── tint-selector/
│   │   ├── page.tsx
│   │   └── TintSelectorClient.tsx
│   │
│   ├── service-areas/
│   │   └── [suburb]/            # Dynamic route for all suburbs
│   │       └── page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx             # Blog index
│   │   └── [slug]/
│   │       └── page.tsx         # Individual blog posts
│   │
│   ├── author/
│   │   └── david-trieu/
│   │       └── page.tsx
│   │
│   ├── api/                     # API routes (if needed)
│   │   └── contact/
│   │       └── route.ts
│   │
│   └── not-found.tsx            # 404 page
│
├── components/                   # Shared components
│   ├── ui/                      # shadcn components (copy directly)
│   ├── layout/
│   │   ├── Navigation.tsx       # Convert wouter → next/link
│   │   └── Footer.tsx
│   └── [other components]
│
├── lib/                         # Utilities
│   ├── utils.ts                 # cn() and helpers
│   └── business.ts              # Central business config
│
├── content/
│   └── config/
│       └── business.json        # Central business data
│
├── public/
│   └── images/                  # Static assets (from attached_assets)
│
└── _deprecated/                 # Legacy Vite code (for rollback)
    ├── client/
    └── server/
```

### 2.2 Configuration Files

**next.config.js** (Vercel-optimized):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  async redirects() {
    return [
      // Legacy service redirects
      { source: '/services/residential-window-tinting', destination: '/residential-window-tinting', permanent: true },
      { source: '/services/automotive-window-tinting', destination: '/automotive-window-tinting', permanent: true },
      { source: '/services/commercial-window-tinting', destination: '/commercial-window-tinting', permanent: true },
      // Legacy film-type redirects
      { source: '/film-types/ceramic-window-tint', destination: '/ceramic-window-tint', permanent: true },
      { source: '/film-types/frosted-decorative-window-film', destination: '/frosted-decorative-window-film', permanent: true },
      { source: '/film-types/marble-protection-film', destination: '/marble-protection-film', permanent: true },
      // Old URL patterns
      { source: '/residential-window-tint', destination: '/residential-window-tinting', permanent: true },
      { source: '/commercial-window-tint', destination: '/commercial-window-tinting', permanent: true },
      { source: '/decorative-frosted-film', destination: '/frosted-decorative-window-film', permanent: true },
      { source: '/marble-protection', destination: '/marble-protection-film', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

**vercel.json**:
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "regions": ["syd1"],
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Phase 3: Core Infrastructure

### 3.1 Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://protektsurface.com.au'),
  title: {
    default: 'ProtektSurface | Window Tinting Sydney',
    template: '%s | ProtektSurface',
  },
  description: 'Professional window tinting services in Sydney...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
```

### 3.2 Navigation Conversion

Key changes from wouter to Next.js:
```tsx
// BEFORE (wouter)
import { Link, useLocation } from 'wouter';
const [location] = useLocation();

// AFTER (Next.js)
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const pathname = usePathname();
```

### 3.3 Central Business Config

```json
// content/config/business.json
{
  "name": "ProtektSurface",
  "contact": {
    "phone": "...",
    "email": "..."
  },
  "serviceAreas": ["Granville", "Auburn", "Parramatta", ...],
  "services": [
    { "id": "residential-window-tinting", "name": "Residential Window Tinting" },
    { "id": "automotive-window-tinting", "name": "Automotive Window Tinting" },
    ...
  ]
}
```

---

## Phase 4: Page Migration

### 4.1 Simple Pages Pattern

```tsx
// app/about/page.tsx (Server Component)
import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ProtektSurface...',
  alternates: {
    canonical: 'https://protektsurface.com.au/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
```

```tsx
// app/about/AboutPageClient.tsx (Client Component)
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPageClient() {
  // Ported component logic
}
```

### 4.2 Dynamic Service Areas

```tsx
// app/service-areas/[suburb]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceAreaData } from '@/lib/service-areas-data';
import ServiceAreaPageClient from './ServiceAreaPageClient';

type Props = {
  params: Promise<{ suburb: string }>;
};

export async function generateStaticParams() {
  return Object.keys(serviceAreaData).map((suburb) => ({
    suburb,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb } = await params;
  const data = serviceAreaData[suburb];

  if (!data) return {};

  return {
    title: `Window Tinting ${data.name}`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://protektsurface.com.au/service-areas/${suburb}`,
    },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { suburb } = await params;
  const data = serviceAreaData[suburb];

  if (!data) notFound();

  return <ServiceAreaPageClient data={data} />;
}
```

### 4.3 Blog Dynamic Routes

```tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  // Return all blog post slugs
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
```

---

## Phase 5: Assets & Images

### 5.1 Move Images

```bash
# Copy from attached_assets to public/images
cp -r attached_assets/* public/images/
```

### 5.2 Update Image References

```tsx
// BEFORE (Vite)
<img src="/attached_assets/image.webp" alt="..." />

// AFTER (Next.js)
import Image from 'next/image';

<Image
  src="/images/image.webp"
  alt="..."
  width={800}
  height={600}
  priority  // For above-fold images
/>
```

---

## Phase 6: SEO Implementation

### 6.1 Per-Page Metadata

Every page needs unique metadata export:
```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Unique description...',
  alternates: {
    canonical: 'https://protektsurface.com.au/page-url',
  },
  openGraph: {
    title: 'Page Title',
    description: '...',
    images: ['/images/og-image.jpg'],
  },
};
```

### 6.2 JSON-LD Schema

```tsx
// For service pages
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Residential Window Tinting",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ProtektSurface",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageContent />
    </>
  );
}
```

---

## Phase 7: Testing & Validation

### 7.1 Pre-Deployment Checklist

- [ ] `npm run build` completes without errors
- [ ] All pages listed as ○ (static) in build output
- [ ] Visual comparison with original (side-by-side)
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile responsive on all breakpoints

### 7.2 Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | 90+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 90+ |

### 7.3 Build Output Verification

```
Route (app)                              Size    First Load JS
┌ ○ /                                   X kB       XXX kB
├ ○ /about                              X kB       XXX kB
├ ○ /residential-window-tinting         X kB       XXX kB
├ ● /service-areas/[suburb]             X kB       XXX kB
├ ○ /blog                               X kB       XXX kB
└ ● /blog/[slug]                        X kB       XXX kB

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
```

---

## Phase 8: Deployment

### 8.1 Vercel Setup

1. Connect GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Set environment variables:
   - `DATABASE_URL` (if using database)
   - Any other secrets
4. Deploy to preview
5. Verify preview deployment
6. Deploy to production
7. Configure custom domain

### 8.2 Post-Deployment

- [ ] Verify all pages load on production
- [ ] Test contact forms
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor error logs for 48 hours

---

## Phase 9: Cleanup

### 9.1 Deprecate Legacy Code

```bash
mkdir _deprecated
mv client _deprecated/
mv server _deprecated/
```

### 9.2 Update Configuration

Remove from `package.json`:
- Vite scripts
- Vite dependencies
- Replit plugins

Update scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Key Lessons from Poweramp Migration

### DO:
1. **Run visual audit FIRST** - Compare every page side-by-side
2. **Preserve component complexity** - Don't oversimplify to MDX
3. **Use individual routes for unique pages** - Service pages need their own routes
4. **Port TSX directly** - Just add `'use client'` for interactive components
5. **Test incrementally** - One page fully working before moving on

### DON'T:
1. **Skip discovery phase** - Analyze before coding
2. **Oversimplify to MDX** - Rich components (500+ LOC) need full TSX
3. **Use dynamic routes for unique pages** - Only when layout is truly shared
4. **Nest interactive elements** - Use shadcn `asChild` pattern
5. **Forget image props** - `fill` needs `sizes`, LCP needs `priority`

---

## Migration Estimate

| Phase | Estimated Effort |
|-------|------------------|
| Analysis & Audit | 2-3 hours |
| Project Setup | 1-2 hours |
| Core Infrastructure | 2-3 hours |
| Page Migration (22 pages) | 8-12 hours |
| Service Areas (17 pages via dynamic) | 2-3 hours |
| Assets & Images | 1-2 hours |
| SEO Implementation | 2-3 hours |
| Testing & Validation | 2-3 hours |
| Deployment | 1-2 hours |
| Cleanup | 1 hour |
| **Total** | **22-34 hours** |

---

## Quick Reference: Conversion Patterns

| Vite Pattern | Next.js Pattern |
|--------------|-----------------|
| `import { Link } from 'wouter'` | `import Link from 'next/link'` |
| `useLocation()` | `usePathname()` |
| `import.meta.env.VITE_*` | `process.env.NEXT_PUBLIC_*` |
| `client/src/pages/Page.tsx` | `app/page-name/page.tsx` |
| `<img src={...} />` | `<Image src="..." width={} height={} />` |
| Express routes | `app/api/*/route.ts` |

---

**Plan Created**: November 2025
**Reference Guide**: `/Users/mechatronmike/Jack/poweramp/migration-guide`
