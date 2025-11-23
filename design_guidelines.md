# Design Guidelines: अनंत आरोग्य सदन Homoeopathy Consultancy

## Design Approach
**Reference-Based Healthcare**: Drawing from Practo's professional UI, Headspace's wellness aesthetics, and Calm's soothing design language. Modern healthcare platform with futuristic minimalism balanced by traditional trust-building for Indian medical context.

## Color System

**Primary Palette**:
- Wellness Teal: #14B8A6 (primary actions, headers, accents)
- Deep Teal: #0D9488 (hover states, secondary elements)
- Healing Green: #10B981 (success states, wellness indicators)

**Accent Colors**:
- Warm Coral: #FB7185 (CTAs, attention elements)
- Sunset Orange: #F59E0B (highlights, energy accents)

**Neutrals**:
- Background: #FAFAFA (off-white, warm undertone)
- Surface: #FFFFFF (cards, containers)
- Text Primary: #1F2937 (headings, important content)
- Text Secondary: #6B7280 (body text, descriptions)

**Application**:
- Headers/Navigation: Teal gradient backgrounds
- Primary buttons: Wellness Teal with white text
- Secondary buttons: Outline with Teal border
- Section backgrounds: Alternating white and soft teal tints (bg-teal-50/30)

## Typography

**Primary**: 'Poppins' (Google Fonts CDN)
- Hero: 3.5rem (56px) font-bold, tight tracking
- Section Headers: 2.5rem (40px) font-semibold
- Subheadings: 1.5rem (24px) font-medium
- Body: 1.125rem (18px) font-normal, leading-relaxed

**Secondary**: 'Noto Sans Devanagari' for Hindi text, matching weights

## Layout System

**Spacing Units**: Tailwind 4, 8, 12, 16, 20, 24, 32
- Section padding: py-24 desktop, py-16 mobile
- Component gaps: gap-8 between cards, gap-6 within
- Container: max-w-7xl with px-6

## Component Library

### Navigation
Sticky header (h-24), teal gradient background with backdrop-blur
- Logo left (h-14), bilingual text beside
- Horizontal menu center-right with dropdown for services
- WhatsApp floating button (bottom-right, fixed)
- Mobile: slide-in drawer from right

### Hero Slider
Full-width, 90vh desktop/75vh mobile, 3 slides with 6s intervals
- Crossfade transitions (1.2s ease)
- Dark gradient overlay (from-black/60 to-transparent)
- Content: max-w-4xl, left-aligned within container
- Dual CTAs: Primary (teal solid) + Secondary (white outline), both with backdrop-blur-lg
- Dot indicators bottom-center with teal active state

### Booking Section
Two-column grid (lg:grid-cols-5): Form spans 3 columns, info/visual 2 columns
- Form: Elevated card (shadow-xl, rounded-2xl, p-10)
- Inputs: Large (h-14), rounded-xl, focus ring teal
- WhatsApp CTA: Prominent, coral accent, icon+text
- Right column: Benefits list + decorative medical illustration

### Services Grid
3-column (lg:grid-cols-3), staggered reveal animation
- Cards: White surface, shadow-lg, rounded-2xl, overflow-hidden
- Image top: aspect-ratio-16/9, subtle teal overlay on hover
- Content: p-8, icon (teal), title (bold), description, arrow link
- Hover: Lift (translateY(-8px)), shadow-2xl, smooth transition

### Disease Condition Cards
2-column layout (md:grid-cols-2), alternating image-text sides
- Large images (w-full md:w-1/2), rounded-3xl
- Text: Generous padding-12, symptom lists with checkmarks (teal)
- CTA button at bottom: "Learn Treatment Approach"

### Testimonials
Horizontal carousel, 3 cards visible desktop, 1 mobile
- Video thumbnails: Play icon overlay (coral), rounded-lg
- Text cards: Patient quote, name, condition badge (teal pill)
- Navigation: Arrow buttons + progress bar (teal)

### Footer
4-column grid (footer-cols-4), teal-900 background, white text
- Column 1: Logo + tagline
- Column 2: Quick links (services, diseases)
- Column 3: Contact info + registration number (highlighted)
- Column 4: Google Maps embed (rounded, border-teal-500)

## Images

**Hero Slider** (3 large format webp):
1. Modern consultation room: Doctor with patient, warm lighting, professional setting
2. Homeopathic remedies close-up: Glass vials, natural herbs, soft bokeh background
3. Family wellness: Multi-generational health, outdoor/bright setting

**Section Images**:
- About section: Clinic exterior or founders portrait (professional)
- Services cards: Each service gets custom illustration (consultation, remedies, follow-up)
- Disease pages: Medical illustrations showing treatment approach (6-8 unique images)
- Testimonial video thumbnails: Patient consent photos with play overlay

**Decorative Elements**:
- Abstract wellness patterns (SVG): Flowing organic shapes in teal gradients
- Icon library: Heroicons (medical, health, wellness themed)

## Animations

**Scroll Reveal**: Fade-up with slight scale (0.95 to 1), stagger by 100ms
**Card Hover**: Transform translateY(-8px) + shadow enhancement, 300ms ease-out
**Button Interactions**: Scale(1.05), 200ms, teal glow effect
**Slider**: Smooth crossfade, ken burns effect (subtle zoom on images)

**Performance**: Use Intersection Observer, CSS transforms only, no layout thrashing

## Disease Page Structure
1. Hero banner (h-80): Disease-specific image, gradient overlay, title
2. Two-column overview: Symptoms (checkmark list) + Causes (numbered)
3. Treatment philosophy: Full-width, image left/text right alternating
4. Success metrics: 3-card stats grid (patients treated, success rate, years experience)
5. Testimonial mini-carousel: 2 video cards
6. Related conditions: 4-card grid with images
7. Bottom CTA: Prominent booking section with form

## Responsive Strategy
- Mobile (<768px): Single column, simplified nav, stacked forms
- Tablet (768-1024px): 2-column grids, reduced spacing
- Desktop (>1024px): Full layouts, generous whitespace

## Accessibility
- WCAG AA compliance: 4.5:1 text contrast
- Focus visible: 2px teal ring on all interactive elements
- Semantic HTML5 structure
- ARIA labels for carousels, dropdowns
- Keyboard navigation: Tab order, escape handlers