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

## Phase 8: Pre-Deployment - Replit Setup

**Goal**: Configure the project for dual-platform deployment (Replit for development, Vercel for production) so you can continue editing on Replit and push to Vercel.

### 8.1 Configure Dual-Platform next.config.js

Update `next.config.js` to auto-detect platform:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Auto-detect platform and adjust output mode
  output: process.env.REPLIT ? 'standalone' : undefined,

  // Image optimization: disabled on Replit (no optimizer), enabled on Vercel
  images: {
    unoptimized: !!process.env.REPLIT,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Allow Replit dev origins
  allowedDevOrigins: process.env.REPLIT
    ? ['*.replit.dev', 'https://*.replit.dev']
    : undefined,

  // Platform detection for debugging
  env: {
    NEXT_PUBLIC_DEPLOYMENT: process.env.VERCEL
      ? 'vercel'
      : process.env.REPLIT ? 'replit' : 'local',
  },

  // Security headers (work on both platforms)
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

  // SEO redirects (work on both platforms)
  async redirects() {
    return [
      // Legacy service redirects
      { source: '/services/residential-window-tinting', destination: '/residential-window-tinting', permanent: true },
      // ... other redirects
    ];
  },
};

module.exports = nextConfig;
```

### 8.2 Configure package.json Scripts for Replit

Update scripts to work on Replit (port 5000, bind to 0.0.0.0):

```json
{
  "scripts": {
    "dev": "next dev -p 5000 -H 0.0.0.0",
    "build": "next build",
    "start": "next start -p 5000 -H 0.0.0.0",
    "lint": "next lint"
  }
}
```

### 8.3 Create .replit Configuration File

Create `.replit` file in project root:

```toml
run = "npm run dev"
entrypoint = "app/page.tsx"

[deployment]
run = ["sh", "-c", "npm run build && npm run start"]
deploymentTarget = "cloudrun"

[nix]
channel = "stable-24_05"

[[ports]]
localPort = 5000
externalPort = 80
```

### 8.4 Test Build on Replit

1. Push code to Replit (via Git clone or import)
2. Run `npm install`
3. Run `npm run build` - verify all 42 pages build successfully
4. Run `npm run dev` - verify site loads on Replit preview URL
5. Test navigation, images, forms on `*.replit.dev` URL

### 8.5 Connect Replit to GitHub

1. In Replit, go to Version Control tab
2. Connect to GitHub repository (or create new repo)
3. Commit all changes: `git add . && git commit -m "feat: complete Next.js migration"`
4. Push to GitHub: `git push origin main`
5. Verify code appears on GitHub

---

## Phase 9: Deployment - Vercel Setup

**Goal**: Connect Vercel to the same GitHub repository for automatic production deployments.

### 9.1 Connect Vercel to GitHub

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Select "Import Git Repository"
4. Choose the GitHub repository (same one Replit uses)
5. Vercel auto-detects Next.js - accept default settings
6. Click "Deploy"

### 9.2 Configure Vercel Project

1. **Environment Variables** (if needed):
   - `DATABASE_URL` - add in Vercel Dashboard → Settings → Environment Variables
   - Any other production secrets

2. **Build Settings** (usually auto-detected):
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Domain Configuration**:
   - Add custom domain in Vercel Dashboard → Settings → Domains
   - Configure DNS records as instructed

### 9.3 Verify Deployment Pipeline

Test the bidirectional workflow:

```
┌─────────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT PIPELINE                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────┐    git push    ┌──────────┐    auto-deploy       │
│   │  Replit  │ ──────────────→│  GitHub  │────────────────→     │
│   │  (Dev)   │                │  (Sync)  │                      │
│   └──────────┘                └──────────┘                      │
│       │                            │                             │
│       │ Preview                    │              ┌──────────┐  │
│       │ on *.replit.dev            └─────────────→│  Vercel  │  │
│       ↓                                           │  (Prod)  │  │
│   Test changes                                    └──────────┘  │
│   locally                                              │        │
│                                                        ↓        │
│                                              Live at domain     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

1. Make a test change on Replit
2. Commit and push: `git add . && git commit -m "test" && git push`
3. Verify Vercel dashboard shows new deployment
4. Verify production site updates (typically 1-2 minutes)

### 9.4 Post-Deployment Verification

- [ ] All pages load on production (protektsurface.com.au)
- [ ] Images display correctly (Vercel image optimization working)
- [ ] Contact/quote forms function
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor error logs for 48 hours

### 9.5 SEO Protection (Block Preview URLs from Google)

**Goal**: Only production domain should be indexed by Google. Block all Vercel preview URLs.

**Two-Layer Approach**:

**Layer 1: X-Robots-Tag Headers** in `next.config.js`:

```javascript
// next.config.js - async headers()
async headers() {
  return [
    // Block Vercel preview URLs from Google indexing
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'protektsurface.vercel.app' }],
      headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
    },
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'protektsurface-redkeys-projects.vercel.app' }],
      headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
    },
    // Catch any other Vercel preview deployments
    {
      source: '/:path*',
      has: [{ type: 'host', value: '(?!protektsurface\\.com\\.au).*\\.vercel\\.app' }],
      headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
    },
    // Security headers...
  ];
}
```

**Layer 2: robots.txt + Sitemap**:

```
# public/robots.txt
User-agent: *
Allow: /

# Sitemap points to PRODUCTION domain only
Sitemap: https://protektsurface.com.au/sitemap.xml
```

**Verification**:
```bash
curl -sI https://protektsurface.vercel.app/ | grep x-robots-tag
# Should return: x-robots-tag: noindex, nofollow
```

**Result**:
| URL | Indexed? | Why |
|-----|----------|-----|
| `protektsurface.com.au/*` | ✅ Yes | robots.txt allows, sitemap lists |
| `*.vercel.app/*` | ❌ No | X-Robots-Tag: noindex, nofollow |
| `*.replit.dev/*` | ❌ No | Not in sitemap, not discovered |

### 9.6 Deployment Protection (Manual Promotion)

**Goal**: Prevent automatic production deployments. All pushes create testable previews; promote manually when ready.

**Dashboard Configuration**:
1. Vercel Dashboard → Project → **Settings**
2. **Environments** → **Production**
3. Under **Branch Tracking**, disable **"Auto-assign Custom Production Domains"**
4. Save

**Workflow After Setup**:

| Action | Result |
|--------|--------|
| `git push origin main` | Creates deployment at unique preview URL |
| Test at preview URL | Verify changes work correctly |
| `vercel promote <url>` | Promotes to production (goes live) |

**CLI Commands**:
```bash
# List recent deployments
vercel ls

# Promote a specific deployment to production
vercel promote https://protektsurface-abc123-redkeys-projects.vercel.app

# Check promotion status
vercel promote status
```

**Benefits**:
- Single `main` branch (no release branches needed)
- Every push is testable before going live
- Production stays stable until explicitly promoted
- Full control over releases

---

## Phase 10: Cleanup

### 10.1 Deprecate Legacy Code

Keep legacy Vite code for rollback capability:

```bash
mkdir _deprecated
mv client _deprecated/
mv server _deprecated/
```

### 10.2 Update .gitignore

```gitignore
# Deprecated legacy code (keep in repo but exclude from builds)
_deprecated/

# Next.js build output
.next/
out/

# Dependencies
node_modules/

# Environment files
.env*.local
```

### 10.3 Documentation

- [ ] Update README.md with new scripts and workflow
- [ ] Document environment variables
- [ ] Document Replit → GitHub → Vercel workflow
- [ ] Create rollback procedure document

---

## Phase 11: Bidirectional Workflow Setup (Ongoing)

### 11.1 Platform Roles

| Platform | Role | Environment | URL |
|----------|------|-------------|-----|
| **Replit** | Development, editing | Development | `*.replit.dev` |
| **GitHub** | Source control, sync hub | N/A | `github.com/repo` |
| **Vercel** | Production hosting, SEO | Production | `protektsurface.com.au` |

### 11.2 Daily Workflow

**Making changes (edit on Replit, deploy to Vercel):**

```bash
# 1. Edit files in Replit IDE
# 2. Preview changes on *.replit.dev

# 3. When ready, commit and push
git add .
git commit -m "feat: add new service page"
git push origin main

# 4. Vercel auto-deploys from GitHub (1-2 min)
# 5. Verify on production site
```

**Pulling updates (if changes made elsewhere):**

```bash
# In Replit terminal
git pull origin main
```

### 11.3 Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Replit not showing latest | Didn't pull | Run `git pull origin main` |
| Vercel not deploying | Build failed | Check Vercel dashboard for errors |
| Different behavior on platforms | Platform detection failed | Verify `REPLIT` env var is set |
| Changes lost after deploy | Didn't commit | Always `git commit` before `git push` |
| Images broken on Vercel | Wrong path | Use `/images/...` from public folder |
| Images broken on Replit | Optimization enabled | Ensure `images.unoptimized: !!process.env.REPLIT` |

### 11.4 Why This Works

| Concern | How It's Handled |
|---------|------------------|
| Different configs needed? | `next.config.js` auto-detects platform via env vars |
| Port differences? | Scripts use port 5000 for Replit, Vercel handles automatically |
| Image optimization? | Disabled on Replit, enabled on Vercel |
| Output mode? | `standalone` on Replit, default on Vercel |
| Same codebase? | Yes - Git keeps everything in sync |

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

| Phase | Description | Estimated Effort |
|-------|-------------|------------------|
| 1. Analysis & Audit | Visual audit, dependency mapping | 2-3 hours |
| 2. Project Setup | Next.js initialization, folder structure | 1-2 hours |
| 3. Core Infrastructure | Layout, components, styles | 2-3 hours |
| 4. Page Migration | Port 22 pages to Next.js | 8-12 hours |
| 5. Assets & Images | Move images, next/image conversion | 1-2 hours |
| 6. SEO Implementation | Metadata, JSON-LD, sitemap | 2-3 hours |
| 7. Testing & Validation | Visual testing, Lighthouse | 2-3 hours |
| 8. Pre-Deployment (Replit) | Configure dual-platform, test on Replit | 1-2 hours |
| 9. Deployment (Vercel) | Connect GitHub, deploy to production | 1 hour |
| 10. Cleanup | Deprecate legacy code, documentation | 1 hour |
| 11. Bidirectional Workflow | Verify Replit → GitHub → Vercel pipeline | 0.5 hour |
| **Total** | | **22-35 hours** |

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
