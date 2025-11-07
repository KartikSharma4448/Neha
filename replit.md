# Neha Kumari Professional Portfolio

## Overview

This is a professional portfolio website for Neha Kumari, a BCA student and aspiring web developer specializing in front-end development. The site showcases academic achievements, technical skills, projects, certifications, and blog content. Built as a full-stack application with a modern React frontend and Express backend, it follows a clean, professional design inspired by contemporary portfolio platforms like Behance and Linear.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for client-side routing instead of React Router, offering a lightweight alternative
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** components following the "New York" style variant
- **Radix UI** primitives for accessible, unstyled component foundation
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom CSS variables for theming (light mode focused) with support for dark mode
- Component structure organized as presentational components with reusable UI elements

**Design System**
- Typography hierarchy using Times New Roman for headings (professional/authoritative) and Roboto for body text (readability)
- Navy blue accent color (#0A2A43) for CTAs and key highlights
- Spacing system based on Tailwind's scale (4, 6, 8, 12, 16, 20, 24, 32)
- Subtle animations using intersection observers for scroll-triggered fade-in effects
- Mobile-first responsive design with breakpoint-specific layouts

**Page Structure**
- **Home**: Full-viewport hero section with background image, headline, CTA buttons
- **About**: Two-column layout (40/60 split) featuring profile image, bio, technical skills, and soft skills displayed as badges
- **Achievements**: Three-column grid showcasing projects (with images) and certifications
- **Blog**: Three-column card grid for blog posts with featured images
- **Contact**: Two-column layout with contact form and information
- Shared Header (sticky navigation) and Footer components across all pages

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript for type safety
- Modular route registration pattern separating concerns
- Custom middleware for request logging with response time tracking
- JSON body parsing with raw body buffer access for webhook compatibility

**API Design**
- RESTful endpoints under `/api` namespace
- Contact form submission: `POST /api/contact`
- Contact message retrieval: `GET /api/contact/messages`
- Zod schema validation on incoming requests with friendly error messages via `zod-validation-error`
- Consistent error handling with appropriate HTTP status codes (400 for validation, 500 for server errors)

**Storage Layer**
- **Abstraction Pattern**: IStorage interface defining data access methods
- **In-Memory Implementation**: MemStorage class using Map structures for development/testing
- **Database-Ready**: Drizzle ORM configured for PostgreSQL via Neon serverless driver
- Schema defined using Drizzle with automatic TypeScript type inference
- Database credentials loaded from environment variables (`DATABASE_URL`)

### Data Storage

**Database Technology**
- **Drizzle ORM** for type-safe database queries and schema management
- **PostgreSQL** (via Neon serverless) for production data persistence
- Schema migrations stored in `/migrations` directory
- Dialect: PostgreSQL with Drizzle Kit for schema management

**Data Models**
- **Users Table**: id (UUID), username (unique), password (hashed)
- **Contact Messages Table**: id (UUID), name, email, subject, message, createdAt timestamp
- Zod schemas for runtime validation matching database schemas
- Insert schemas that omit auto-generated fields (id, timestamps)

**Storage Patterns**
- Current implementation uses in-memory storage for rapid development
- Production-ready database schema already defined via Drizzle
- Storage interface allows seamless swap from memory to database implementation
- UUID generation for unique identifiers

### External Dependencies

**UI & Component Libraries**
- **Radix UI** (v1.x): Complete suite of accessible component primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- **shadcn/ui**: Pre-configured component system built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component for keyboard-driven interfaces
- **Embla Carousel React**: Carousel/slider functionality
- **class-variance-authority**: Type-safe variant styling for components
- **clsx + tailwind-merge**: Utility for conditional CSS class merging

**Form & Data Management**
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod
- **Zod**: Runtime type validation and schema definition
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

**Database & Backend**
- **Drizzle ORM** (v0.39.x): Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **Drizzle Kit**: CLI tool for migrations and schema management
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

**Development Tools**
- **Vite**: Build tool and dev server with HMR
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit
- **@replit/vite-plugin-dev-banner**: Development environment indicator
- **PostCSS** with **Autoprefixer**: CSS processing
- **Tailwind CSS**: Utility-first CSS framework

**Utilities**
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **wouter**: Lightweight client-side routing

**Build & Runtime**
- **TypeScript**: Static type checking across frontend and backend
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production backend builds
- **Node.js**: Runtime environment (ES modules)