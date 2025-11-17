# Protekt Surface Solutions

## Overview
Professional window tinting website for Protekt Surface Solutions, a Sydney-based company offering residential, commercial, and automotive window tinting services. Features light theme design with gold accent colors (#D4A574) matching the Protekt Surface Solutions brand, optimized for SEO with primary keyword "window tinting sydney".

## Project Status
**Created**: November 17, 2025
**Last Updated**: November 17, 2025 - Navigation restructure and SEO optimization
**Status**: Phase 1 Complete - Core services with dropdown navigation and SEO-optimized content

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
- Hover-based dropdown menus for Services and Film Types
- Phone CTA button prominently displayed

**Mobile Navigation:**
- Hamburger menu with slide-in drawer
- Accordion-style dropdowns for Services and Film Types
- Same phone CTA at bottom of drawer

### Pages & URL Structure

**Services** (`/services/*`):
1. Residential Window Tinting - `/services/residential-window-tinting`
2. Automotive Window Tinting - `/services/automotive-window-tinting` (Protekt Auto brand)
3. Commercial Window Tinting - `/services/commercial-window-tinting`
4. Mobile Window Tinting - `/services/mobile-window-tinting`

**Film Types** (`/film-types/*`):
1. Ceramic Window Tint - `/film-types/ceramic-window-tint`
2. Frosted & Decorative Film - `/film-types/frosted-decorative-window-film`
3. Marble Protection Film - `/film-types/marble-protection-film`

**Home** (`/`) - Hero with primary keyword "window tinting sydney"

**Legacy URL Redirects** (maintained for SEO):
- `/residential-window-tint` → Residential Window Tinting
- `/commercial-window-tint` → Commercial Window Tinting
- `/decorative-frosted-film` → Frosted & Decorative Film
- `/marble-protection` → Marble Protection Film

### Key Components
- **Navigation**: Transparent fixed header with dropdown menus (desktop hover, mobile accordion)
- **Breadcrumbs**: SEO-friendly breadcrumb navigation on all category pages
- **Footer**: Contact info, service links, company details
- **Service Cards**: Image cards with hover effects on homepage
- **Hero Sections**: Full-screen hero on home, half-screen on service pages

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

**SEO Features**:
- Breadcrumb navigation on all pages
- Semantic HTML structure
- Keyword-optimized headings and content
- Internal linking between related services

### Assets
- Logo: Protekt Surface Solutions house logo with gold accents (black elements visible on light background)
- Generated Images: AI-generated service images for heroes and cards
  - Residential window tinting
  - Commercial window tinting  
  - Automotive window tinting
  - Mobile window tinting service
  - Ceramic window tint technology
  - Decorative frosted film
  - Marble protection film
- All images imported via @assets alias

## Contact Information
- **Phone**: (02) 8606 2842
- **Email**: info@protektsurfacesolutions.com.au
- **Address**: 24 George Street, Clyde, NSW 2142

## Services Offered
1. **Residential Window Tinting** - Home energy efficiency and privacy
2. **Automotive Window Tinting** - Professional car tinting by Protekt Auto brand
3. **Commercial Window Tinting** - Business property protection
4. **Mobile Window Tinting** - On-site service at customer location
5. **Ceramic Window Tint** - Premium nano-ceramic film technology
6. **Frosted & Decorative Film** - Privacy with elegant etched glass look
7. **Marble Protection Film** - Invisible protective films for natural stone

## Development Notes
- Light theme (not dark) for logo visibility - black logo elements must be visible
- Transparent navigation header with enlarged logo using negative margins
- All interactive elements have data-testid attributes for testing
- All interactive elements use hover-elevate and active-elevate-2 utilities
- Gold primary color (#D4A574) used for CTAs, links, and accents throughout
- Mobile-first design with breakpoints at sm (640px) and md (768px)
- Desktop navigation shows horizontal menu items, mobile uses hamburger
- No backend API needed - pure marketing/informational site

## Future Phases (Not Yet Implemented)
**Phase 2**:
- Privacy Window Film page
- Window Protection Film page  
- UV Protection Window Film page
- Window Film Installation page

**Phase 3**:
- Service Area pages (Liverpool, Parramatta, Penrith)
- LocalBusiness schema markup
- Additional service area coverage

## Design Guidelines
See `design_guidelines.md` for complete visual specifications including:
- Typography scale and font families
- Spacing primitives and layout system
- Component styling rules
- Color palette (gold accents, light backgrounds)
- Mobile-first responsive breakpoints
- Animation and interaction guidelines
