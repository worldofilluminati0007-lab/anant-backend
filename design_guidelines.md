# Design Guidelines: अनंत आरोग्य सदन Homoeopathy Consultancy

## Design Approach
**Reference-Based Hybrid**: Drawing inspiration from modern healthcare platforms (Headspace, Practo) combined with wellness aesthetics (Calm, Ayurvedic wellness sites). The design balances futuristic elements with traditional trust-building for Indian healthcare context.

## Core Design Principles
- **Trust & Credibility**: Clean, professional layouts with generous whitespace
- **Futuristic Minimalism**: Smooth animations, subtle gradients, and modern card-based interfaces
- **Cultural Resonance**: Respectful integration of Devanagari script with bilingual approach
- **Accessibility First**: High contrast ratios, clear hierarchy, readable typography

## Typography System

**Primary Font**: 'Poppins' (Google Fonts) - Modern, clean, excellent multilingual support
- Hero Headlines: 3rem (48px) desktop, 2rem (32px) mobile, font-weight 700
- Section Headers: 2rem (32px) desktop, 1.5rem (24px) mobile, font-weight 600
- Subheadings: 1.25rem (20px), font-weight 500
- Body Text: 1rem (16px), font-weight 400, line-height 1.7

**Secondary Font**: 'Noto Sans Devanagari' for Hindi text
- Ensures proper rendering of "अनंत आरोग्य सदन"
- Match weights to Poppins for visual harmony

## Layout & Spacing System

**Tailwind Units**: Use consistent spacing of 4, 6, 8, 12, 16, 20, 24, 32 units
- Section padding: py-16 (desktop), py-12 (mobile)
- Component spacing: gap-8 between cards, gap-6 within components
- Container max-width: max-w-7xl (1280px)

## Component Library

### Header/Navigation
- Sticky header (h-20) with subtle shadow on scroll
- Logo placement: left-aligned (h-12 to h-16)
- Navigation: horizontal menu, dropdown indicators for services submenu
- Mobile: hamburger menu transitioning to full-screen overlay
- WhatsApp icon/button in header for quick access

### Hero Slider
- Full-width (100vw), 85vh height desktop, 70vh mobile
- 3 slides with crossfade transitions (1s duration), 5s interval
- Overlay gradient: dark gradient from bottom (60% opacity) for text legibility
- Content positioning: Centered vertically, left-aligned text within max-w-4xl container
- CTA buttons: Primary (solid) + Secondary (outline), both with backdrop-blur-md
- Slide indicators: Dots at bottom center with smooth transitions

### Booking Form Section
- Two-column layout desktop (md:grid-cols-2): Form left, info/visual right
- Form fields: Stacked with generous spacing (gap-6)
- Input styling: Rounded corners (rounded-lg), border focus states with shadow
- WhatsApp button: Prominent, icon + text, distinctive styling
- Background: Subtle gradient or soft geometric pattern

### Disease/Services Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card design: Elevated with shadow-lg, rounded-xl corners
- Image: Top-positioned, aspect-ratio 16:9, rounded-t-xl
- Content: p-6 padding, icon + title + description + CTA link
- Hover: Lift effect (transform translateY(-4px)), shadow enhancement

### Testimonial Carousel
- Horizontal scroll or slider with 3 visible cards desktop, 1 mobile
- Video card: Thumbnail with play icon overlay, patient name, condition treated
- Navigation: Arrow buttons + dot indicators
- Auto-play muted with user controls

### Footer
- Three-column layout desktop (grid-cols-3), stacked mobile
- Sections: About/Contact, Quick Links, Social Media
- Registration number prominently displayed
- Map integration option for clinic location

## Image Strategy

### Hero Slider Images (3 images)
1. **Consultation Scene**: Doctor consulting patient, modern clinical setting, warm professional atmosphere
2. **Holistic Healing**: Hands holding homeopathic remedies, natural elements (herbs, flowers), soft focus background
3. **Wellness Journey**: Patient recovery/wellness imagery, family health, positive outcomes

### Section-Specific Images
- **About Section**: Founders portrait or clinic exterior (professional photography style)
- **Disease Pages**: Each disease gets unique AI-generated treatment illustration (e.g., diabetes management, arthritis relief)
- **Testimonial Thumbnails**: Video preview frames with patient consent imagery
- **Services Overview**: Icon-based illustrations with subtle healthcare motifs

All images: webp format, descriptive filenames (e.g., homeopathy-consultation-anant-arogya.webp), comprehensive alt text

## Interaction & Animation

**Micro-interactions**:
- Button hover: Scale (1.02), shadow increase, 200ms transition
- Card hover: Lift effect, glow/shadow enhancement
- Form focus: Input border color change, subtle scale (1.01)
- Scroll reveal: Fade-up animation for sections (Intersection Observer)

**Slider Transitions**: Crossfade (opacity) 1s ease-in-out, no aggressive movement

**Navigation**: Smooth scroll behavior, 80px offset for sticky header

## Disease Pages Layout

Each disease page follows consistent structure:
1. Hero banner (h-64): Disease-specific image, title overlay
2. Overview section: Two-column (symptoms left, causes right)
3. Treatment approach: Full-width content with supporting visuals
4. Success stories: 2-3 mini testimonial cards
5. CTA section: Book consultation prominent placement
6. Related conditions: Card grid linking to other disease pages

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility Features
- ARIA labels for all interactive elements
- Keyboard navigation support for sliders/carousels
- High contrast text-to-background ratios (4.5:1 minimum)
- Focus visible states for all interactive elements
- Semantic HTML throughout (header, nav, main, section, footer)