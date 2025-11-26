# Phase 1: Analysis Report

**Date**: November 2025
**Status**: Complete

---

## 1. Page Component Analysis

### LOC Summary by Category

| Category | Pages | Total LOC | Avg LOC | Strategy |
|----------|-------|-----------|---------|----------|
| Home | 1 | 509 | 509 | Individual route + client component |
| Blog Post | 1 | 644 | 644 | Dynamic route (content in component) |
| Film Types | 6 | 1,088 | 181 | Individual routes |
| Services | 3 | 641 | 214 | Individual routes |
| Info Pages | 2 | 294 | 147 | Individual routes |
| Interactive Tools | 3 | 139 | 46 | Individual routes (logic in shared components) |
| Service Areas | 17 | 425 | 25 | **Dynamic route** (shared template) |
| Blog/Author | 2 | 323 | 162 | Individual routes |
| Error | 1 | 21 | 21 | Next.js not-found.tsx |
| **Total** | **36** | **4,084** | **113** | |

### Detailed LOC per Page

**High Complexity (>300 LOC) - Individual Routes Required:**
| Page | LOC | Interactive Features | Notes |
|------|-----|---------------------|-------|
| `BlogPost.tsx` | 644 | Link routing | Content embedded in JSX (5 blog posts) |
| `Home.tsx` | 509 | Tint demo, FAQ accordion, animations | Hero tint animation, services grid, film types |

**Medium Complexity (150-300 LOC) - Individual Routes:**
| Page | LOC | Interactive Features | Notes |
|------|-----|---------------------|-------|
| `AutomotiveWindowTinting.tsx` | 273 | Links, images | Service page |
| `WindowProtectionFilm.tsx` | 255 | Links, images | Film type page |
| `PrivacyWindowFilm.tsx` | 204 | Links, images | Film type page |
| `UVBlockingFilm.tsx` | 200 | Links, images | Film type page |
| `CommercialWindowTinting.tsx` | 186 | Links, images | Service page |
| `ResidentialWindowTinting.tsx` | 182 | Links, images | Service page |
| `AuthorDavidTrieu.tsx` | 177 | Links | Author bio page |
| `CeramicWindowTint.tsx` | 161 | Links, images | Film type page |
| `Contact.tsx` | 157 | Form (uses QuoteRequestForm) | Contact form |
| `Blog.tsx` | 146 | Links | Blog index |
| `FrostedDecorativeWindowFilm.tsx` | 143 | Links, images | Film type page |
| `About.tsx` | 137 | Links | Simple content |
| `MarbleProtectionFilm.tsx` | 125 | Links, images | Film type page |

**Low Complexity (<100 LOC) - Thin Wrappers:**
| Page | LOC | Notes |
|------|-----|-------|
| `GetQuote.tsx` | 66 | Wraps `QuoteRequestForm` component (268 LOC) |
| `QuoteEstimator.tsx` | 43 | Wraps `InstantQuoteEstimator` component (254 LOC) |
| `TintSelector.tsx` | 30 | Wraps `TintSelectorQuiz` component (256 LOC) |
| `not-found.tsx` | 21 | 404 page |

**Service Areas (25 LOC each) - Dynamic Route:**
All 17 service area pages are identical thin wrappers calling `ServiceAreaPage` component (120 LOC) with suburb-specific data:
- granville, auburn, parramatta, silverwater, rosehill, camellia
- rydalmere, ermington, dundas, telopea, carlingford
- north-parramatta, harris-park, westmead, merrylands, liverpool, penrith

---

## 2. Shared Components Analysis

| Component | LOC | Used By | Interactive | Notes |
|-----------|-----|---------|-------------|-------|
| `Navigation.tsx` | 323 | All pages (layout) | Yes | Mobile menu, dropdowns |
| `QuoteRequestForm.tsx` | 268 | GetQuote, Contact | Yes | Form with validation |
| `TintSelectorQuiz.tsx` | 256 | TintSelector | Yes | Multi-step quiz |
| `InstantQuoteEstimator.tsx` | 254 | QuoteEstimator | Yes | Calculator with state |
| `Footer.tsx` | 236 | All pages (layout) | No | Links only |
| `OurProcess.tsx` | 196 | Home | No | Static content |
| `ServiceAreaPage.tsx` | 120 | All 17 service areas | No | Template component |
| `BeforeAfterSlider.tsx` | 97 | Various | Yes | Image comparison |
| `Testimonials.tsx` | 94 | Home | No | Static testimonials |
| `UVRayAnimation.tsx` | 89 | Various | Yes | CSS animation |
| `HeatMapVisualization.tsx` | 87 | Various | Yes | Interactive viz |
| `InteractiveTintSlider.tsx` | 81 | Various | Yes | Slider control |
| `BeforeAfterGallery.tsx` | 56 | Various | Yes | Image gallery |
| `Breadcrumbs.tsx` | 52 | All pages | No | Navigation aid |

**Key Findings:**
- Navigation and Footer go in `app/layout.tsx`
- All interactive components need `'use client'`
- ServiceAreaPage is perfect for dynamic route pattern

---

## 3. Routing Strategy Decision

### Individual Routes (22 pages)

```
app/
├── page.tsx                              # Home (509 LOC)
├── about/page.tsx                        # About (137 LOC)
├── contact/page.tsx                      # Contact (157 LOC)
├── get-quote/page.tsx                    # GetQuote wrapper
├── quote-estimator/page.tsx              # QuoteEstimator wrapper
├── tint-selector/page.tsx                # TintSelector wrapper
├── blog/page.tsx                         # Blog index (146 LOC)
├── author/david-trieu/page.tsx           # Author (177 LOC)
│
├── residential-window-tinting/page.tsx   # (182 LOC)
├── automotive-window-tinting/page.tsx    # (273 LOC)
├── commercial-window-tinting/page.tsx    # (186 LOC)
│
├── ceramic-window-tint/page.tsx          # (161 LOC)
├── frosted-decorative-window-film/page.tsx # (143 LOC)
├── marble-protection-film/page.tsx       # (125 LOC)
├── privacy-window-film/page.tsx          # (204 LOC)
├── window-protection-film/page.tsx       # (255 LOC)
└── uv-blocking-film/page.tsx             # (200 LOC)
```

### Dynamic Routes (18 pages via 2 routes)

```
app/
├── blog/[slug]/page.tsx                  # 5 blog posts (content in component)
└── service-areas/[suburb]/page.tsx       # 17 suburbs (shared template)
```

---

## 4. Environment Variables Audit

### Current Usage
| Variable | Location | Purpose |
|----------|----------|---------|
| `process.env.PORT` | `server/index.ts` | Server port (default: 5000) |
| `DATABASE_URL` | Drizzle config | PostgreSQL connection |

### Required for Next.js
| Variable | Next.js Name | Notes |
|----------|--------------|-------|
| PORT | Not needed | Vercel handles automatically |
| DATABASE_URL | DATABASE_URL | Same (server-only) |

**Finding**: No `VITE_*` variables used - migration is straightforward. No client-side environment variables needed.

---

## 5. Static Assets Audit

### Summary
| Metric | Value |
|--------|-------|
| Total images | 65 files |
| Total size | 62 MB |
| Location | `attached_assets/` |
| Formats | PNG (mostly), WEBP, JPG |

### Asset Categories

**Brand Assets:**
- `Untitled+(500+x+210+px).png_*.webp` - Main logo
- `image_1764039173355.png` - Protekt Auto logo
- Various pattern/texture images

**Generated Images (`generated_images/`):**
- Hero backgrounds
- Service images (residential, commercial, automotive)
- Film type textures
- 34 subdirectories with generated content

**Blog/Content Images:**
- `car Window tinting_*.jpg`
- Various service photos

### Migration Plan

```
public/
└── images/
    ├── brand/
    │   ├── logo.webp
    │   ├── protekt-auto-logo.png
    │   └── pattern.png
    ├── services/
    │   ├── residential-*.png
    │   ├── commercial-*.png
    │   └── automotive-*.webp
    ├── films/
    │   ├── ceramic-texture.png
    │   ├── marble-texture.png
    │   ├── privacy-texture.png
    │   └── ...
    └── hero/
        └── hero-background.png
```

**Optimization Opportunities:**
- Convert large PNGs to WebP (up to 70% size reduction)
- Use Next.js Image component for automatic optimization
- Add `priority` to hero/above-fold images

---

## 6. Dependency Analysis

### Keep (Compatible)
```
react, react-dom                   # Core
tailwindcss, @tailwindcss/*        # Styling
@radix-ui/*                        # 26 packages - shadcn primitives
framer-motion                      # Animations (add 'use client')
@tanstack/react-query              # Data fetching
lucide-react                       # Icons
zod, react-hook-form               # Form validation
drizzle-orm, @neondatabase/*       # Database
date-fns, recharts                 # Utilities
embla-carousel-react               # Carousel
class-variance-authority, clsx    # shadcn utilities
tailwind-merge, tailwindcss-animate
```

### Remove (Vite-specific)
```
wouter                             # → next/link, next/navigation
vite                               # → Next.js built-in
@vitejs/plugin-react               # → Next.js built-in
@replit/vite-plugin-*              # Replit-specific (3 packages)
esbuild                            # → Next.js built-in
tsx                                # → Next.js built-in
```

### Add (Next.js)
```
next                               # Framework
@vercel/analytics                  # Optional: analytics
@vercel/speed-insights             # Optional: performance
```

---

## 7. Blog Content Strategy

### Current Implementation
BlogPost.tsx contains 644 LOC with 5 blog posts hardcoded as JSX:

1. `benefits-of-ceramic-window-tinting-sydney-homes`
2. `car-window-tinting-laws-nsw-guide`
3. `uv-protection-window-film-health-benefits`
4. `commercial-window-tinting-energy-savings`
5. `choosing-right-window-tint-shade-guide`

### Recommendation
**Option A (Simpler)**: Keep content in TSX, use dynamic route
- Create `lib/blog-data.ts` with post metadata
- Create `lib/blog-content.tsx` with JSX content
- Dynamic route fetches by slug

**Option B (More Scalable)**: Convert to MDX
- Move content to `content/blog/*.mdx`
- Use `@next/mdx` or `contentlayer`
- Better for non-dev content editing

**Decision**: Start with Option A (matches current structure), can migrate to MDX later.

---

## 8. Key Migration Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Visual regression | Medium | High | Side-by-side testing per page |
| Interactive features break | Medium | High | Test forms, quizzes, sliders early |
| Image paths broken | Low | Medium | Systematic path update, test all images |
| SEO metadata missing | Low | High | Checklist per page, validate with tools |
| Build failures | Low | Medium | TypeScript strict mode, incremental builds |

---

## 9. Recommended Migration Order

### Phase 3: Core Infrastructure
1. Root layout (Navigation, Footer)
2. Global styles
3. shadcn/ui components
4. Shared components (Breadcrumbs, etc.)

### Phase 4: Pages (Priority Order)
1. **Home** - Most complex, test animations
2. **Contact/GetQuote** - Test forms work
3. **Simple pages** - About, Blog index
4. **Service pages** - Residential, Commercial, Automotive
5. **Film type pages** - 6 pages, similar structure
6. **Service areas** - Dynamic route for 17 pages
7. **Blog posts** - Dynamic route for 5 posts
8. **Interactive tools** - QuoteEstimator, TintSelector

---

## 10. Summary

| Metric | Value |
|--------|-------|
| Total pages to migrate | 36 |
| Individual routes needed | 22 |
| Dynamic routes needed | 2 |
| Components to port | 14 shared + 49 UI |
| Images to move | 65 files (62 MB) |
| Environment variables | 1 (DATABASE_URL) |
| Estimated complexity | **Medium** |

**Key Findings:**
1. ✅ Service areas are perfect for dynamic route (identical 25 LOC wrappers)
2. ✅ No Vite environment variables - clean migration
3. ✅ shadcn/ui components can be copied directly
4. ⚠️ Home page has complex tint animation - test carefully
5. ⚠️ BlogPost has 644 LOC of embedded content - consider extraction
6. ⚠️ 62MB of images need optimization/WebP conversion

**Ready to proceed to Phase 2: Project Setup**
