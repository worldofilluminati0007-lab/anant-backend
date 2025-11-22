# अनंत आरोग्य सदन (Anant Arogya Sadan) - Homoeopathy Online Consultancy

## Overview

A modern, bilingual (English/Hindi) homoeopathy consultation platform designed for "अनंत आरोग्य सदन". The application provides an online presence for a homoeopathic clinic, featuring service information, online booking, disease-specific treatment pages, and patient testimonials. The platform emphasizes natural healing, trust, and cultural resonance through clean design and accessible interfaces.

**Core Purpose**: Enable patients to learn about homoeopathic treatments and book online consultations via WhatsApp integration while showcasing the clinic's expertise in treating conditions like diabetes, arthritis, cold/flu, and skin issues.

## Recent Changes

**November 22, 2025** - Complete MVP Implementation
- ✅ **Frontend**: Built all React components including Header, HeroSlider, AboutSection, BookingForm, ServicesSection, TestimonialCarousel, and Footer
- ✅ **Pages**: Created Home, Services, and 4 disease-specific pages (Diabetes, Arthritis, Cold & Flu, Skin Issues) with comprehensive content
- ✅ **Images**: Generated 11 AI-powered images optimized for SEO with descriptive alt text and filenames
- ✅ **Design System**: Configured Poppins and Noto Sans Devanagari fonts, implemented responsive layouts following design_guidelines.md
- ✅ **Backend**: Implemented consultation booking API with validation, WhatsApp integration, and in-memory storage
- ✅ **SEO**: Added unique meta tags and Open Graph descriptions to all pages, semantic HTML throughout
- ✅ **Testing**: Comprehensive end-to-end tests passed for navigation, booking flow, carousel, and responsive design
- ✅ **Integration**: BookingForm now persists consultations to backend before opening WhatsApp with prefilled message
- ✅ **UX Polish**: Smooth scroll navigation, loading states, toast notifications, form validation, and mobile responsiveness

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**:
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (no heavy frameworks)
- **TailwindCSS** for utility-first styling with custom design system
- **shadcn/ui** component library (New York style) for consistent UI components

**Design System**:
- Custom Tailwind configuration with HSL-based color scheme supporting light/dark modes
- Typography: Poppins (primary), Noto Sans Devanagari (Hindi text)
- Spacing system based on 4px increments (4, 6, 8, 12, 16, 20, 24, 32 units)
- Component library includes 30+ Radix UI primitives (buttons, forms, dialogs, carousels, etc.)
- Accessibility-first approach with ARIA labels and semantic HTML

**Page Structure**:
- Single-page application (SPA) with hash-based section navigation on homepage
- Dedicated treatment pages for specific conditions (Diabetes, Arthritis, Cold/Flu, Skin Issues)
- Responsive layout (mobile-first) with breakpoints at 768px (md)

**Key Components**:
- `HeroSlider`: Auto-playing image carousel with 3 slides, 5-second intervals
- `BookingForm`: React Hook Form with Zod validation, WhatsApp API integration
- `TestimonialCarousel`: Patient success story showcase
- `Header`: Sticky navigation with smooth scroll-to-section functionality
- Treatment pages: SEO-optimized with dynamic meta tags

### Backend Architecture

**Technology Stack**:
- **Express.js** server with TypeScript
- **Drizzle ORM** for database operations
- Development and production server configurations separated (`index-dev.ts`, `index-prod.ts`)

**API Structure**:
- RESTful endpoints under `/api` prefix
- `POST /api/consultations` - Creates new consultation booking
- `GET /api/consultations` - Retrieves all consultation records
- Request validation using Zod schemas from shared schema definitions

**Session & State Management**:
- In-memory storage (`MemStorage`) for development
- Prepared for PostgreSQL integration via Drizzle ORM
- Session management with `connect-pg-simple` (configured but not yet implemented)

**Development Environment**:
- Hot Module Replacement (HMR) via Vite middleware in development
- Custom logging middleware tracking API response times
- Error handling with runtime error overlay (Replit plugin)

### Data Storage Solutions

**Database Schema** (Drizzle ORM):
```typescript
consultations {
  id: uuid (primary key)
  patientName: text
  contactNumber: text
  email: text
  preferredTime: text
  healthConcern: text
  createdAt: timestamp
}

users {
  id: uuid (primary key)
  username: text (unique)
  password: text
}
```

**Database Configuration**:
- Dialect: PostgreSQL
- Connection: Via `DATABASE_URL` environment variable
- Migrations: Stored in `/migrations` directory
- ORM: Drizzle with Neon serverless driver (`@neondatabase/serverless`)

**Current State**: Application uses in-memory storage for immediate development. Database is configured but awaits provisioning (connection string required).

**Validation Layer**:
- Shared Zod schemas ensure type safety between client and server
- Phone validation: 10-digit Indian mobile format (^[6-9]\d{9}$)
- Email, name length, and health concern minimum character requirements

### Authentication & Authorization

**Current Implementation**: 
- User schema exists but authentication not yet implemented
- Prepared for session-based authentication with `express-session` and PostgreSQL session store

**Future Considerations**:
- Admin dashboard for viewing consultation bookings
- Protected routes for clinic staff
- Session management using `connect-pg-simple` with PostgreSQL

### External Dependencies

**Third-Party Services**:
- **WhatsApp Business API**: Form submissions redirect to WhatsApp with pre-filled message containing patient details
- **Google Fonts**: Poppins and Noto Sans Devanagari served via CDN
- **Asset Management**: Images stored in `/attached_assets` directory (includes AI-generated placeholder images)

**UI Libraries**:
- Radix UI primitives (30+ components): Accessible, unstyled foundation
- `class-variance-authority`: Type-safe component variant management
- `react-hook-form` + `@hookform/resolvers`: Form state and validation
- `@tanstack/react-query`: Server state management and caching
- `embla-carousel-react`: Touch-friendly carousel implementation

**Development Tools**:
- Replit-specific plugins: Cartographer (navigation), dev banner, runtime error modal
- `tsx`: TypeScript execution for Node.js
- `esbuild`: Production bundling

**SEO Optimization**:
- Dynamic meta tag updates on page navigation (title, description, og:tags)
- Semantic HTML structure with proper heading hierarchy
- Image alt text following SEO-friendly naming conventions
- Lazy loading preparation for performance optimization

**Design Reference**:
- Modern healthcare platforms (Headspace, Practo)
- Wellness aesthetics (Calm, Ayurvedic wellness sites)
- Futuristic minimalism with subtle gradients and animations