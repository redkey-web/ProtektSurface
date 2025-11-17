# Protekt Surface Solutions

## Overview
Premium surface protection and window tinting website for Protekt Surface Solutions, a Sydney-based company offering residential and commercial surface protection services. Sister site to ProtektAuto, sharing the same dark, premium aesthetic but with gold accent colors matching the Protekt Surface Solutions brand.

## Project Status
**Created**: November 17, 2025
**Status**: MVP Complete - Marketing website with full service pages

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack Query
- **Backend**: Express.js (minimal, serves frontend only)
- **Storage**: In-memory (no database needed for marketing site)

## Architecture

### Design System
- **Color Scheme**: Dark theme with gold accents (#D4A574 / HSL 38 45% 65%)
- **Typography**: Inter for headings, Work Sans for body text
- **Layout**: Mobile-first responsive design
- **Components**: shadcn/ui component library with custom theming

### Pages
1. **Home** (`/`) - Hero section with services overview
2. **Residential Window Tint** (`/residential-window-tint`)
3. **Commercial Window Tint** (`/commercial-window-tint`)
4. **Decorative Frosted Film** (`/decorative-frosted-film`)
5. **Marble & Stone Protection** (`/marble-protection`)

### Key Components
- **Navigation**: Fixed header with mobile hamburger menu, slide-in animation
- **Footer**: Contact info, service links, company details
- **Service Cards**: Image cards with hover effects linking to detail pages
- **Hero Sections**: Full-screen hero on home, half-screen on service pages

### Assets
- Logo: Protekt Surface Solutions house logo with gold accents
- Generated Images: AI-generated service images for hero and service cards
- All images imported via @assets alias

## Contact Information
- **Phone**: (02) 8606 2842
- **Email**: info@protektsurfacesolutions.com.au
- **Address**: 24 George Street, Clyde, NSW 2142

## Services Offered
1. **Residential Window Tint** - Home energy efficiency and privacy
2. **Commercial Window Tint** - Business property protection
3. **Decorative Frosted Film** - Privacy with elegant etched glass look
4. **Marble & Natural Stone Protection** - Invisible protective films

## Development Notes
- Dark mode is default and only mode (no light mode toggle)
- All interactive elements use hover-elevate and active-elevate-2 utilities
- Gold primary color used for CTAs, links, and accents throughout
- Mobile-first design with breakpoints at sm (640px) and md (768px)
- No backend API needed - pure marketing/informational site

## Design Guidelines
See `design_guidelines.md` for complete visual specifications including:
- Typography scale and font families
- Spacing primitives and layout system
- Component styling rules
- Color palette (gold accents, dark backgrounds)
- Mobile-first responsive breakpoints
- Animation and interaction guidelines
