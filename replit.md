# Protekt Surface Solutions

## Overview
Professional window tinting website for Protekt Surface Solutions, a Sydney-based company offering residential, commercial, and automotive window tinting services. Features light theme design with gold accent colors (#D4A574) matching the Protekt Surface Solutions brand, optimized for SEO with primary keyword "window tinting sydney".

## Project Status
**Created**: November 17, 2025
**Last Updated**: November 25, 2025 - Service Areas & Blog Enhanced
**Status**: Phase 5+ Complete - Localized service area content, comprehensive internal linking across all pages

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS + shadcn/ui components (light theme)
- **State Management**: TanStack Query
- **Backend**: Express.js (minimal, serves frontend only)
- **Storage**: In-memory (no database needed for marketing site)

## Architecture

### Design System
- **Color Scheme**: Light theme (98% lightness background) with gold accents (#D4A574 / HSL 38 45% 65%)
- **Typography**: Inter for headings, Work Sans for body text
- **Layout**: Mobile-first responsive design
- **Components**: shadcn/ui component library with custom theming

### Navigation Structure
**Desktop Navigation:**
- Transparent header with enlarged logo
- Hover-based dropdown menus for Services, Film Types, and More
- More dropdown contains: About Us, Tint Selector Quiz, Blog
- Get Quote CTA button prominently displayed
- Contact link in main nav

**Mobile Navigation:**
- Hamburger menu with slide-in drawer
- Accordion-style dropdowns for Services, Film Types, and More
- Contact link in drawer
- Phone call button at bottom

### Pages & URL Structure

**IMPORTANT**: Site uses flat root-level URL structure (not nested) for optimal SEO performance.

**Services** (root level):
1. Residential Window Tinting - `/residential-window-tinting`
2. Automotive Window Tinting - `/automotive-window-tinting` (Protekt Auto brand)
3. Commercial Window Tinting - `/commercial-window-tinting`
4. Mobile Window Tinting - `/mobile-window-tinting`

**Film Types** (root level):
1. Ceramic Window Tint - `/ceramic-window-tint`
2. Privacy Window Film - `/privacy-window-film` ⭐ NEW - High-volume keyword (800/mo)
3. UV Blocking Film - `/uv-blocking-film` ⭐ NEW - Target keyword (200/mo)
4. Window Protection Film - `/window-protection-film` ⭐ NEW - Target keyword (150/mo)
5. Frosted & Decorative Film - `/frosted-decorative-window-film`
6. Marble Protection Film - `/marble-protection-film`

**Interactive Tools**:
1. Tint Selector Quiz - `/tint-selector` - Personalized film recommendations
2. Quote Estimator - `/quote-estimator` - Multi-step price estimation wizard
3. Get Quote - `/get-quote` - Comprehensive quote request form

**Info Pages**:
1. Home - `/` - Hero with primary keyword "window tinting sydney" + Testimonials
2. Contact - `/contact` - Contact form + Google Maps embed
3. About - `/about` - Company information

**Blog** (SEO content marketing):
1. Blog Listing - `/blog` - All articles with excerpts and categories
2. Individual Posts - `/blog/:slug` - Full articles with internal/external links
   - "5 Key Benefits of Ceramic Window Tinting for Sydney Homes" (Nov 25, 2025)
   - "Car Window Tinting Laws in NSW: What You Need to Know in 2025" (Nov 18, 2025)
   - "How UV Blocking Window Film Protects Your Health and Home" (Nov 11, 2025)
   - "Commercial Window Tinting: How Much Can Sydney Businesses Save on Energy?" (Nov 4, 2025)
   - "How to Choose the Right Window Tint Shade for Your Needs" (Oct 28, 2025)

**SEO Redirects** (preserves old URLs):
- `/services/residential-window-tinting` → `/residential-window-tinting`
- `/services/automotive-window-tinting` → `/automotive-window-tinting`
- `/services/commercial-window-tinting` → `/commercial-window-tinting`
- `/services/mobile-window-tinting` → `/mobile-window-tinting`
- `/film-types/ceramic-window-tint` → `/ceramic-window-tint`
- `/film-types/frosted-decorative-window-film` → `/frosted-decorative-window-film`
- `/film-types/marble-protection-film` → `/marble-protection-film`
- `/residential-window-tint` → `/residential-window-tinting`
- `/commercial-window-tint` → `/commercial-window-tinting`
- `/decorative-frosted-film` → `/frosted-decorative-window-film`
- `/marble-protection` → `/marble-protection-film`

### Key Components

**Navigation & Layout:**
- **Navigation**: Transparent fixed header with dropdown menus (desktop hover, mobile accordion), Quiz link, Get Quote CTA
- **Breadcrumbs**: SEO-friendly breadcrumb navigation on all category pages
- **Footer**: Contact info, service links, company details organized by Services, Film Types, and Service Areas
- **Service Cards**: Image cards with hover effects on homepage
- **Hero Sections**: Full-screen hero on home, half-screen on service pages

**Interactive Features (Phase 1 & 2):**
- **BeforeAfterGallery**: Lightbox-enabled before/after image gallery (used on Residential page)
- **BeforeAfterSlider**: Draggable interactive comparison slider (used on Ceramic page)
- **Testimonials**: Customer testimonials section on homepage (6 testimonials)
- **QuoteRequestForm**: Comprehensive quote request form with service/film selection
- **InstantQuoteEstimator**: Multi-step wizard (project type → measurements → film selection → redirect to quote form)
- **TintSelectorQuiz**: 5-question personalized recommendation quiz
- **Google Maps**: Embedded map on Contact page showing business location

**Advanced Visual Demonstrations (Phase 3):**
- **InteractiveTintSlider**: Adjustable tint darkness demo (5-85%) with real-time overlay on Ceramic page
- **UVRayAnimation**: Animated UV protection visualization showing 99% UV blocking on Residential page
- **HeatMapVisualization**: Heat rejection color transition demo (38°C → 24°C) with statistics on Ceramic page
- **Enhanced Hero Sections**: Realistic tinted gradients (gray-900 overlay with multiply blend mode) across all service pages
- **Marble Texture Background**: Subtle marble texture overlay (10% opacity) on Marble Protection Film page
- **Protekt Auto Branding**: White Protekt Auto logo prominently displayed on Automotive page hero with dark contrasting background

### SEO Optimization
**Primary Keyword**: window tinting sydney
**Page Meta Tags**:
- Homepage: "Window Tinting Sydney | Protekt Surface Solutions"
- Description: Professional window tinting with target keywords
- Keywords meta tag: window tinting sydney, car window tinting sydney, ceramic window tint, etc.

**Target Keywords by Page**:
- Residential: house window tinting (900 vol)
- Automotive: car window tinting sydney (300 vol)
- Mobile: mobile window tinting (500 vol)
- Ceramic: ceramic window tint (700 vol)
- Privacy: privacy window film (800 vol) ⭐ NEW
- UV Blocking: uv blocking window film (200 vol) ⭐ NEW
- Protection: window protection film (150 vol) ⭐ NEW

**SEO Features**:
- Breadcrumb navigation on all pages
- Semantic HTML structure
- Keyword-optimized headings and content
- Internal linking between related services

### Assets
- Logo: Protekt Surface Solutions house logo with gold accents (black elements visible on light background)
- Protekt Auto Logo: White logo for Automotive page (displayed on dark contrasting background)
- Generated Images: AI-generated service images for heroes, cards, and interactive features
  - Service pages: Residential, Commercial, Automotive, Mobile window tinting
  - Film types: Ceramic window tint, Decorative frosted film, Marble protection film
  - Before/after comparisons: Residential room before/after, Car interior before/after, Commercial office before/after
  - Textures: White marble texture for Marble Protection page background
- All images imported via @assets alias

## Contact Information
- **Phone**: (02) 8606 2842
- **Email**: info@protektsurfacesolutions.com.au
- **Address**: 24 George Street, Clyde, NSW 2142

## Services & Film Types Offered

**Services:**
1. **Residential Window Tinting** - Home energy efficiency and privacy
2. **Automotive Window Tinting** - Professional car tinting by Protekt Auto brand
3. **Commercial Window Tinting** - Business property protection
4. **Mobile Window Tinting** - On-site service at customer location

**Film Types:**
1. **Ceramic Window Tint** - Premium nano-ceramic film technology
2. **Privacy Window Film** ⭐ NEW - Elegant privacy with natural light
3. **UV Blocking Film** ⭐ NEW - 99% UV protection for health and interiors
4. **Window Protection Film** ⭐ NEW - Invisible strength and impact resistance
5. **Frosted & Decorative Film** - Privacy with elegant etched glass look
6. **Marble Protection Film** - Invisible protective films for natural stone

## Development Notes
- Light theme (not dark) for logo visibility - black logo elements must be visible
- Transparent navigation header with enlarged logo using negative margins
- All interactive elements have data-testid attributes for testing
- All interactive elements use hover-elevate and active-elevate-2 utilities
- Gold primary color (#D4A574) used for CTAs, links, and accents throughout
- Mobile-first design with breakpoints at sm (640px) and md (768px)
- Desktop navigation shows horizontal menu items, mobile uses hamburger
- No backend API needed - pure marketing/informational site
- Phase 1, 2, & 3 features fully tested with Playwright end-to-end tests

## Implemented Features

**Phase 1 - Core Features (✅ Complete):**
- ✅ Before/After Image Galleries with lightbox
- ✅ Interactive Before/After Comparison Slider
- ✅ Google Maps Integration on Contact Page
- ✅ Customer Testimonials Section
- ✅ Quote Request Forms on Service Pages
- ✅ 17 Service Area Pages (Granville, Auburn, Parramatta, Liverpool, Penrith, etc.)

**Phase 2 - Interactive Tools (✅ Complete):**
- ✅ Instant Quote Estimator (multi-step wizard)
- ✅ Tint Selector Quiz (personalized recommendations)
- ✅ Comprehensive Get Quote Form
- ✅ Navigation updates with Quiz link and Get Quote CTA

**Phase 3 - Advanced Visual Demonstrations (✅ Complete):**
- ✅ Interactive Tint Slider (adjustable darkness demo with real-time overlay)
- ✅ UV Ray Animation (animated UV protection visualization)
- ✅ Heat Map Visualization (heat rejection color transition demo)
- ✅ Enhanced Hero Sections (realistic tinted gradients with white text)
- ✅ Marble Texture Background (subtle texture on Marble Protection page)

**Phase 4 - SEO Enhancement & URL Restructure (✅ Complete):**
- ✅ Flat root-level URL structure for all pages (better SEO)
- ✅ Privacy Window Film page (/privacy-window-film) - 800 vol/mo keyword
- ✅ UV Blocking Film page (/uv-blocking-film) - 200 vol/mo keyword
- ✅ Window Protection Film page (/window-protection-film) - 150 vol/mo keyword
- ✅ Comprehensive redirect system from old nested URLs
- ✅ Updated all navigation, footer, and internal links
- ✅ All hero sections updated to Phase 3 design standards
- ✅ Breadcrumbs simplified for root-level structure

**Phase 5 - Blog & Content Marketing (✅ Complete):**
- ✅ Blog listing page (/blog) with article cards
- ✅ Individual blog post pages (/blog/:slug)
- ✅ 5 SEO-optimized articles with dates 1 week apart
- ✅ Internal linking to ALL service/film type pages (comprehensive coverage)
- ✅ External links to authoritative sources (open in new windows)
- ✅ "More" dropdown in navigation (About Us, Tint Selector Quiz, Blog)
- ✅ Breadcrumb navigation on blog pages

**Phase 6 - Customer Journey Section (✅ Complete):**
- ✅ Created reusable OurProcess component with 7-step customer journey
- ✅ Integrated into Home page (full version with CTA)
- ✅ Integrated into Residential, Commercial, Automotive pages (without CTA)
- ✅ Integrated into Get Quote page (compact version with benefits)
- ✅ Customer-centric messaging with "What's in it for me" benefits on each step
- ✅ Responsive design with timeline view on desktop, stacked cards on mobile

**Phase 5+ - Localized Content Enhancement (✅ Complete):**
- ✅ ServiceAreaPage component updated with customizable props (services, featuredLinks, localInfo)
- ✅ All 17 service area pages now have unique localized content:
  - Suburb-specific descriptions reflecting local characteristics
  - Tailored service lists (industrial areas get commercial/warehouse focus, residential areas get home/family focus)
  - Varied featured links spreading traffic to ALL film type pages
- ✅ Blog posts updated with comprehensive internal linking:
  - Links to frosted-decorative-window-film, window-protection-film, marble-protection-film added
  - Ensures SEO link equity distributed across all pages

**Future Enhancements (Not Yet Implemented):**
- Energy Savings Calculator
- Virtual Tint Simulator (AR/image upload)
- Commercial Quote Builder
- Room/Building Visualizer
- Google Analytics Integration
- LocalBusiness schema markup

## Design Guidelines
See `design_guidelines.md` for complete visual specifications including:
- Typography scale and font families
- Spacing primitives and layout system
- Component styling rules
- Color palette (gold accents, light backgrounds)
- Mobile-first responsive breakpoints
- Animation and interaction guidelines
