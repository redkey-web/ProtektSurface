# ProtektSurface Migration Checklist

**Migration**: Vite + Express → Next.js 16 App Router → Vercel
**Started**: November 27, 2025
**Status**: Phase 3 Complete - Ready for Page Migration

---

## Legend
- `[ ]` Not started
- `[~]` In progress
- `[x]` Completed
- `[!]` Blocked/Issue
- `[-]` Skipped (not applicable)

---

## Phase 1: Analysis & Audit (CRITICAL - DO NOT SKIP) ✓

### 1.1 Visual Audit
- [-] Start original Vite site (`npm run dev` on port 5000) - Deferred to page migration
- [-] Start Next.js site (on port 3000) once initialized - Deferred to page migration
- [-] Screenshot/document every page from Vite site - Deferred to page migration
- [-] Document all visual elements per page - Deferred to page migration

### 1.2 Page Complexity Audit ✓

**See ANALYSIS_REPORT.md for full details**

**Home & Info Pages:**
| Page | File | LOC | Interactive Features | Strategy |
|------|------|-----|---------------------|----------|
| Home | `Home.tsx` | 509 | Tint demo, FAQ | Individual route |
| About | `About.tsx` | 137 | Links | Individual route |
| Contact | `Contact.tsx` | 157 | Form | Individual route |

**Service Pages:**
| Page | File | LOC | Interactive Features | Strategy |
|------|------|-----|---------------------|----------|
| Residential | `ResidentialWindowTinting.tsx` | 182 | Links | Individual route |
| Automotive | `AutomotiveWindowTinting.tsx` | 273 | Links | Individual route |
| Commercial | `CommercialWindowTinting.tsx` | 186 | Links | Individual route |

**Film Type Pages:**
| Page | File | LOC | Interactive Features | Strategy |
|------|------|-----|---------------------|----------|
| Ceramic | `CeramicWindowTint.tsx` | 161 | Links | Individual route |
| Frosted/Decorative | `FrostedDecorativeWindowFilm.tsx` | 143 | Links | Individual route |
| Marble Protection | `MarbleProtectionFilm.tsx` | 125 | Links | Individual route |
| Privacy | `PrivacyWindowFilm.tsx` | 204 | Links | Individual route |
| Window Protection | `WindowProtectionFilm.tsx` | 255 | Links | Individual route |
| UV Blocking | `UVBlockingFilm.tsx` | 200 | Links | Individual route |

**Interactive Tools:**
| Page | File | LOC | Interactive Features | Strategy |
|------|------|-----|---------------------|----------|
| Get Quote | `GetQuote.tsx` | 66 | Form wrapper | Individual route |
| Quote Estimator | `QuoteEstimator.tsx` | 43 | Calculator wrapper | Individual route |
| Tint Selector | `TintSelector.tsx` | 30 | Quiz wrapper | Individual route |

**Blog:**
| Page | File | LOC | Interactive Features | Strategy |
|------|------|-----|---------------------|----------|
| Blog Index | `Blog.tsx` | 146 | Links | Individual route |
| Blog Post | `BlogPost.tsx` | 644 | Links (5 posts embedded) | Dynamic route |
| Author Page | `AuthorDavidTrieu.tsx` | 177 | Links | Individual route |

**Service Areas (17 pages):**
- [x] Confirm all service area pages share identical structure (25 LOC each)
- [x] Document any per-suburb customizations (none - all use ServiceAreaPage template)
- [x] Decision: Dynamic `[suburb]` route ✓

### 1.3 Dependency Audit ✓
- [x] List all npm dependencies (76 deps)
- [x] Identify Vite-specific packages to remove (wouter, vite, @replit/*)
- [x] Identify Next.js packages to add (next)
- [x] Check for incompatible packages (none found)

### 1.4 Environment Variables Audit ✓
- [x] List all `VITE_*` variables used (none!)
- [x] Map to `NEXT_PUBLIC_*` equivalents (N/A)
- [x] Document server-only variables (DATABASE_URL only)
- [x] Note any secrets needed for Vercel (DATABASE_URL)

### 1.5 Assets Audit ✓
- [x] Inventory all images in `attached_assets/` (65 files, 62MB)
- [x] Note image formats and sizes (mostly PNG, some WebP/JPG)
- [x] Plan public folder structure (public/images/*)

---

## Phase 2: Project Setup ✓

### 2.1 Initialize Next.js ✓
- [x] Initialize Next.js 16 project (installed via npm)
- [x] Configure TypeScript (`tsconfig.json`)
- [x] Set up path aliases (`@/*`, `@shared/*`, `@assets/*`)
- [x] Verify builds: `npm run build` ✓

### 2.2 Folder Structure ✓
- [x] Create `app/` directory
- [x] Create `components/` directory
- [x] Create `lib/` directory
- [-] Create `content/config/` directory - Skipped (not needed, 3.6 was skipped)
- [x] Create `public/images/` directory structure
- [x] Create `hooks/` directory

### 2.3 Configuration Files ✓
- [x] Create/configure `next.config.js`
  - [x] Add redirects for legacy URLs (10 redirects)
  - [x] Configure image optimization (avif, webp)
  - [x] Add security headers (X-Frame, X-Content-Type, Referrer)
- [-] Create `vercel.json` (region, caching) - Deferred until deployment
- [x] Update `tsconfig.json` for Next.js
- [x] Configure `tailwind.config.ts` (added app/, components/, lib/ paths)
- [-] Configure `postcss.config.js` - Using existing config

### 2.4 Dependencies ✓
- [x] Install Next.js dependencies (next@16.0.5)
- [-] Remove Vite-specific dependencies - Kept for side-by-side testing
- [x] Verify all packages compatible
- [x] Run `npm run build` to verify ✓

---

## Phase 3: Core Infrastructure ✓

### 3.1 Styles ✓
- [x] Create `app/globals.css`
- [x] Port CSS variables from `client/src/index.css`
- [x] Verify Tailwind classes work
- [-] Test dark mode (if applicable) - Not using dark mode

### 3.2 shadcn/ui Components ✓
- [x] Copy `client/src/components/ui/` to `components/ui/`
- [x] Update import paths (using `@/lib/utils`)
- [~] Verify all 49 components work - Deferred to page migration
- [~] Test: button, card, dialog, toast - Deferred to page migration

### 3.3 Root Layout ✓
- [x] Create `app/layout.tsx`
- [x] Add root metadata configuration
- [x] Import global styles
- [-] Add QueryClientProvider (if keeping react-query) - Deferred
- [-] Add TooltipProvider - Deferred
- [-] Add Toaster component - Deferred

### 3.4 Navigation Component ✓
- [x] Copy `Navigation.tsx` to `components/layout/`
- [x] Replace `wouter` imports with `next/link`
- [x] Replace `useLocation` with `usePathname`
- [x] Add `'use client'` directive
- [~] Test all navigation links - Deferred to page migration
- [~] Test mobile menu functionality - Deferred to page migration
- [~] Test active state highlighting - Deferred to page migration

### 3.5 Footer Component ✓
- [x] Copy `Footer.tsx` to `components/layout/`
- [x] Replace routing imports with `next/link`
- [x] Update image paths to `/images/*`
- [~] Test all footer links - Deferred to page migration

### 3.6 Central Business Config
- [-] Create `content/config/business.json` - Skipped (hardcoded data works)
- [-] Extract business data from components - Skipped
- [-] Create `lib/business.ts` loader - Skipped
- [-] Update components to use central config - Skipped

### 3.7 Shared Components ✓
- [x] Port `QuoteRequestForm.tsx`
- [x] Port `TintSelectorQuiz.tsx`
- [x] Port `ServiceAreaPage.tsx`
- [x] Port `Breadcrumbs.tsx`
- [x] Port `Testimonials.tsx`
- [x] Port `InstantQuoteEstimator.tsx`
- [x] Add `'use client'` where needed
- [~] Test each component in isolation - Deferred to page migration

### 3.8 Utility Libraries ✓
- [x] Create `lib/utils.ts` (cn function)
- [-] Port `lib/queryClient.ts` (if keeping) - Skipped for now
- [-] Create `lib/schema.ts` (JSON-LD generators) - Deferred to SEO phase

---

## Phase 4: Page Migration

### 4.1 Home Page
- [ ] Create `app/page.tsx`
- [ ] Add metadata export
- [ ] Port Home component (may need client component)
- [ ] Test all sections
- [ ] Visual comparison with original
- [ ] Move `client/src/pages/Home.tsx` to `_deprecated/`

### 4.2 About Page
- [ ] Create `app/about/page.tsx`
- [ ] Add metadata export
- [ ] Port About component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

### 4.3 Contact Page
- [ ] Create `app/contact/page.tsx`
- [ ] Add metadata export
- [ ] Port Contact component
- [ ] Test contact form functionality
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

### 4.4 Service Pages

**Residential Window Tinting:**
- [ ] Create `app/residential-window-tinting/page.tsx`
- [ ] Add metadata + JSON-LD schema
- [ ] Port component (+ client component if needed)
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Automotive Window Tinting:**
- [ ] Create `app/automotive-window-tinting/page.tsx`
- [ ] Add metadata + JSON-LD schema
- [ ] Port component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Commercial Window Tinting:**
- [ ] Create `app/commercial-window-tinting/page.tsx`
- [ ] Add metadata + JSON-LD schema
- [ ] Port component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

### 4.5 Film Type Pages

**Ceramic Window Tint:**
- [ ] Create `app/ceramic-window-tint/page.tsx`
- [ ] Add metadata + JSON-LD
- [ ] Port component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Frosted/Decorative Window Film:**
- [ ] Create `app/frosted-decorative-window-film/page.tsx`
- [ ] Add metadata + JSON-LD
- [ ] Port component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Marble Protection Film:**
- [ ] Create `app/marble-protection-film/page.tsx`
- [ ] Add metadata + JSON-LD
- [ ] Port component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Privacy Window Film:**
- [ ] Create `app/privacy-window-film/page.tsx`
- [ ] Add metadata + JSON-LD
- [ ] Port component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Window Protection Film:**
- [ ] Create `app/window-protection-film/page.tsx`
- [ ] Add metadata + JSON-LD
- [ ] Port component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**UV Blocking Film:**
- [ ] Create `app/uv-blocking-film/page.tsx`
- [ ] Add metadata + JSON-LD
- [ ] Port component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

### 4.6 Interactive Tool Pages

**Get Quote:**
- [ ] Create `app/get-quote/page.tsx` (server)
- [ ] Create `app/get-quote/GetQuoteClient.tsx` (client)
- [ ] Add metadata
- [ ] Port all form logic
- [ ] Test form submission
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Quote Estimator:**
- [ ] Create `app/quote-estimator/page.tsx` (server)
- [ ] Create `app/quote-estimator/QuoteEstimatorClient.tsx` (client)
- [ ] Add metadata
- [ ] Port calculator/estimator logic
- [ ] Test all interactions
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Tint Selector:**
- [ ] Create `app/tint-selector/page.tsx` (server)
- [ ] Create `app/tint-selector/TintSelectorClient.tsx` (client)
- [ ] Add metadata
- [ ] Port quiz/selector logic
- [ ] Test all interactions
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

### 4.7 Blog Pages

**Blog Index:**
- [ ] Create `app/blog/page.tsx`
- [ ] Add metadata
- [ ] Port blog listing component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Blog Post (Dynamic):**
- [ ] Create `app/blog/[slug]/page.tsx`
- [ ] Implement `generateStaticParams()`
- [ ] Implement `generateMetadata()`
- [ ] Port blog post component
- [ ] Test with multiple posts
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

**Author Page:**
- [ ] Create `app/author/david-trieu/page.tsx`
- [ ] Add metadata
- [ ] Port author component
- [ ] Visual comparison
- [ ] Move to `_deprecated/`

### 4.8 Service Area Pages

**Setup Dynamic Route:**
- [ ] Create `lib/service-areas-data.ts` with all suburb data
- [ ] Create `app/service-areas/[suburb]/page.tsx`
- [ ] Implement `generateStaticParams()` for all 17 suburbs
- [ ] Implement `generateMetadata()`
- [ ] Create shared `ServiceAreaPageClient.tsx`

**Verify All Suburbs:**
- [ ] granville
- [ ] auburn
- [ ] parramatta
- [ ] silverwater
- [ ] rosehill
- [ ] camellia
- [ ] rydalmere
- [ ] ermington
- [ ] dundas
- [ ] telopea
- [ ] carlingford
- [ ] north-parramatta
- [ ] harris-park
- [ ] westmead
- [ ] merrylands
- [ ] liverpool
- [ ] penrith

- [ ] Visual comparison (sample 3-4 suburbs)
- [ ] Move all `ServiceAreas/*.tsx` to `_deprecated/`

### 4.9 Error Pages
- [ ] Create `app/not-found.tsx`
- [ ] Port 404 styling
- [ ] Test 404 behavior

---

## Phase 5: Assets & Images

### 5.1 Image Migration
- [ ] Create `public/images/` structure
- [ ] Copy images from `attached_assets/`
- [ ] Organize into subfolders (services, blog, etc.)
- [ ] Document image locations

### 5.2 Update Image References
- [ ] Replace all `<img>` with `<Image>` from next/image
- [ ] Add `width` and `height` props to all images
- [ ] Add `sizes` prop to all `fill` images
- [ ] Add `priority` prop to above-fold images (hero, logo)
- [ ] Verify no console warnings about images

### 5.3 Static Assets
- [ ] Copy `favicon.png` to `public/`
- [ ] Create/update `public/robots.txt`
- [ ] Create sitemap configuration
- [ ] Update paths in layout

---

## Phase 6: SEO Implementation

### 6.1 Metadata
- [ ] Root metadata in `app/layout.tsx`
- [ ] Unique metadata per page (all 22+ pages)
- [ ] Open Graph configuration
- [ ] Twitter card configuration
- [ ] Canonical URLs for all pages

### 6.2 JSON-LD Schema
- [ ] LocalBusiness schema (home, contact)
- [ ] Service schema (service pages)
- [ ] Product schema (film types)
- [ ] Article schema (blog posts)
- [ ] Validate with Google Rich Results Test

### 6.3 Sitemap & Robots
- [ ] Configure sitemap generation
- [ ] Create `public/robots.txt`
- [ ] Verify sitemap includes all pages
- [ ] Test with Google Search Console

---

## Phase 7: API Routes (If Needed)

### 7.1 Contact Form API
- [ ] Create `app/api/contact/route.ts`
- [ ] Port form handling logic
- [ ] Test form submission
- [ ] Verify email delivery (if applicable)

### 7.2 Other APIs
- [ ] Audit if any other API routes needed
- [ ] Port Express routes (if any)
- [ ] Test all API endpoints

---

## Phase 8: Testing & Validation

### 8.1 Visual Testing (Per Page)

| Page | Desktop | Tablet (768px) | Mobile (375px) | Images | Animations |
|------|---------|----------------|----------------|--------|------------|
| Home | [ ] | [ ] | [ ] | [ ] | [ ] |
| About | [ ] | [ ] | [ ] | [ ] | [ ] |
| Contact | [ ] | [ ] | [ ] | [ ] | [ ] |
| Residential | [ ] | [ ] | [ ] | [ ] | [ ] |
| Automotive | [ ] | [ ] | [ ] | [ ] | [ ] |
| Commercial | [ ] | [ ] | [ ] | [ ] | [ ] |
| Ceramic | [ ] | [ ] | [ ] | [ ] | [ ] |
| Frosted | [ ] | [ ] | [ ] | [ ] | [ ] |
| Marble | [ ] | [ ] | [ ] | [ ] | [ ] |
| Privacy | [ ] | [ ] | [ ] | [ ] | [ ] |
| Window Protection | [ ] | [ ] | [ ] | [ ] | [ ] |
| UV Blocking | [ ] | [ ] | [ ] | [ ] | [ ] |
| Get Quote | [ ] | [ ] | [ ] | [ ] | [ ] |
| Quote Estimator | [ ] | [ ] | [ ] | [ ] | [ ] |
| Tint Selector | [ ] | [ ] | [ ] | [ ] | [ ] |
| Blog | [ ] | [ ] | [ ] | [ ] | [ ] |
| Blog Post | [ ] | [ ] | [ ] | [ ] | [ ] |
| Author | [ ] | [ ] | [ ] | [ ] | [ ] |
| Service Areas (sample) | [ ] | [ ] | [ ] | [ ] | [ ] |

### 8.2 Functional Testing
- [ ] All navigation links work
- [ ] All internal links work
- [ ] Contact form submits
- [ ] Quote forms submit
- [ ] Tint selector works
- [ ] Blog post navigation works
- [ ] 404 page displays correctly
- [ ] Redirects work (legacy URLs)

### 8.3 Accessibility Testing
- [ ] Keyboard navigation works
- [ ] No nested interactive elements
- [ ] Focus states visible
- [ ] Alt text on all images
- [ ] Color contrast passes

### 8.4 Performance Testing (Lighthouse)

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| Home | [ ] 90+ | [ ] 90+ | [ ] 90+ | [ ] 90+ |
| Service Page (sample) | [ ] 90+ | [ ] 90+ | [ ] 90+ | [ ] 90+ |
| Film Type (sample) | [ ] 90+ | [ ] 90+ | [ ] 90+ | [ ] 90+ |
| Blog | [ ] 90+ | [ ] 90+ | [ ] 90+ | [ ] 90+ |

### 8.5 Build Testing
- [ ] `npm run build` completes without errors
- [ ] All pages listed as ○ (static) or ● (SSG)
- [ ] No TypeScript errors
- [ ] No console warnings in production
- [ ] Build size reasonable

---

## Phase 9: Deployment

### 9.1 Pre-Deployment
- [ ] All tests passing
- [ ] Environment variables documented
- [ ] Build successful locally
- [ ] Git repository clean
- [ ] Legacy code in `_deprecated/`

### 9.2 Vercel Setup
- [ ] Create Vercel project
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Set environment variables
- [ ] Configure custom domain (if ready)

### 9.3 Deploy & Verify
- [ ] Deploy to preview
- [ ] Verify preview deployment
- [ ] Test all critical paths on preview
- [ ] Deploy to production
- [ ] Verify production deployment

### 9.4 Post-Deployment
- [ ] Verify all pages load
- [ ] Test contact form on production
- [ ] Verify analytics working
- [ ] Submit sitemap to Google
- [ ] Monitor for errors (24-48 hours)

---

## Phase 10: Cleanup

### 10.1 Remove Legacy Code
- [ ] Verify `_deprecated/` contains all old code
- [ ] Update `.gitignore` to exclude `_deprecated/` from builds
- [ ] Update `tsconfig.json` exclude paths
- [ ] Document rollback procedure

### 10.2 Update Configuration
- [ ] Remove Vite from `package.json`
- [ ] Remove Replit plugins
- [ ] Update npm scripts
- [ ] Clean up unused dependencies

### 10.3 Documentation
- [ ] Update README.md
- [ ] Document new npm scripts
- [ ] Document environment variables
- [ ] Document deployment process

### 10.4 Monitoring Period
- [ ] Monitor error logs for 1 week
- [ ] Check Google Search Console for issues
- [ ] Verify Core Web Vitals in field
- [ ] Address any regressions

---

## Issues & Blockers Log

| Date | Issue | Status | Resolution |
|------|-------|--------|------------|
| | | | |

---

## Notes

### Conversion Quick Reference

| Vite Pattern | Next.js Pattern |
|--------------|-----------------|
| `import { Link } from 'wouter'` | `import Link from 'next/link'` |
| `useLocation()` | `usePathname()` |
| `import img from '@assets/...'` | `src="/images/..."` |
| `import.meta.env.VITE_*` | `process.env.NEXT_PUBLIC_*` |
| `<img src={} />` | `<Image src="" width={} height={} />` |

### Files Moved to _deprecated/

| Date | File/Folder | Reason |
|------|-------------|--------|
| | | |

---

**Last Updated**: November 27, 2025
**Migration Progress**: Phase 3 Complete - Ready for Phase 4 (Page Migration)
