# Protekt Surface Solutions - Design Guidelines

## Design Approach

**Reference-Based Approach**: Directly inspired by ProtektAuto's dark, premium aesthetic with sleek card-based layouts and bold typography. This creates brand cohesion across the Protekt family of sites while maintaining distinct service identities.

## Core Design Elements

### Typography

**Font Families** (via Google Fonts):
- Primary: Inter (headings, navigation, buttons)
- Secondary: Work Sans (body text, descriptions)

**Type Scale**:
- Hero Headline: text-5xl font-bold (mobile), text-7xl (desktop)
- Section Headers: text-3xl font-bold (mobile), text-5xl (desktop)
- Service Titles: text-2xl font-semibold
- Body Text: text-base leading-relaxed
- Small Text/Labels: text-sm

### Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-12 (mobile), py-20 (desktop)
- Component gaps: gap-6 (mobile), gap-8 (desktop)
- Container max-width: max-w-7xl with px-4 (mobile), px-6 (desktop)

### Component Library

#### Navigation
- **Mobile**: Dark background (#0a0a0a), hamburger menu (gold icon), slide-in overlay
- **Desktop**: Horizontal nav bar, logo left, menu items right, gold underline on hover
- Logo: Protekt Surface Solutions house logo, h-12 to h-16

#### Hero Section
- **Layout**: Full-width hero with large background image showing residential/commercial surfaces
- **Content**: Logo centered, compelling headline "Premium Surface Protection Solutions", subheadline, dual CTAs
- **CTAs**: Primary button with gold background (#D4A574), secondary with gold border, both with backdrop-blur-md on dark overlay
- **Height**: min-h-screen on mobile for impact

#### Service Cards
- **Grid**: Single column (mobile), 2-column grid-cols-2 (desktop)
- **Card Style**: Dark background (#1a1a1a), rounded-xl, overflow-hidden
- **Image**: Aspect ratio 16:9, object-cover, full-width top placement
- **Content**: p-6 padding, service title in gold, description text-gray-300, "Learn More" link with gold arrow
- **Hover**: Subtle scale transform-hover and gold border glow

#### Individual Service Pages
- **Hero**: Service-specific background image with title overlay
- **Benefits Grid**: 2-column on desktop, icons in gold, white text
- **CTA Section**: Full-width gold banner with "Get Your Free Quote" button

#### Footer
- **Background**: Darkest (#0a0a0a)
- **Layout**: 3-column grid (desktop) - Services links, Contact info, Social/Logo
- **Contact**: Phone (02) 8606 2842 in gold, email and address in gray-400
- **Accents**: Gold divider lines, subtle gold social icons

### Visual Treatment

**Background Palette**:
- Primary: #0a0a0a (deepest black)
- Secondary: #1a1a1a (card backgrounds)
- Tertiary: #2a2a2a (hover states)

**Accent Gold**: #D4A574
- Use for: Primary buttons, links, icons, borders, hover states, logo accents
- Text on gold backgrounds: #0a0a0a (dark text for contrast)

**Text**:
- Primary: white (#ffffff)
- Secondary: gray-300 (#d1d5db)
- Muted: gray-400 (#9ca3af)

### Images

**Hero Image**: Large background image of modern home interior with protected surfaces (marble countertops, large windows with tinting), dark overlay (opacity-60) for text readability

**Service Images**: 
1. Residential Window Tint - Bright living room with tinted windows
2. Commercial Window Tint - Modern office building glass facade
3. Decorative Frosted Film - Elegant frosted glass partition in office
4. Marble Protection - Luxurious marble countertop/flooring close-up

All images maintain 16:9 aspect ratio for consistency.

### Mobile-First Specifications

- Touch targets minimum 44px
- Hamburger menu icon: 40px × 40px tap area
- Button padding: py-3 px-6 (mobile), py-4 px-8 (desktop)
- Font sizes scale up by 1-2 steps from mobile to desktop
- Single column layouts stack vertically on mobile
- Service cards full-width with m-4 spacing on mobile

### Animations

**Minimal, purposeful motion**:
- Hamburger menu: slide-in from right (300ms ease)
- Card hover: subtle scale (1.02) and border glow
- Button states: background transition (200ms)
- NO scroll-triggered animations or excessive motion

This design creates a premium, professional presence for Protekt Surface Solutions that mirrors ProtektAuto's sophistication while emphasizing the residential and commercial focus through carefully selected imagery and service-specific content sections.