# Design Guidelines: Neha Kumari Professional Portfolio

## Design Approach
**Reference-Based:** Drawing inspiration from modern portfolio sites like Behance, Dribbble personal portfolios, and platforms like Linear for clean typography. The design balances professional authority (academic/technical credibility) with approachable personality (early-career enthusiasm).

**Key Principles:**
- Clean hierarchy with generous whitespace
- Professional credibility through structured layouts
- Subtle sophistication through restrained animation
- Content-first approach highlighting achievements

## Typography System

**Headings:** Times New Roman
- H1: 3.5rem (56px) - Hero headline
- H2: 2.5rem (40px) - Page titles
- H3: 1.75rem (28px) - Section headings
- Font-weight: 700 for H1/H2, 600 for H3

**Body Text:** Roboto or Lato (sans-serif)
- Body: 1.125rem (18px), line-height 1.7
- Small text: 0.875rem (14px) - captions, metadata
- Font-weight: 400 regular, 500 medium for emphasis

**Accent Color:** Navy Blue (#0A2A43) for links, buttons, key highlights

## Layout System

**Spacing Units:** Tailwind scale focused on 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Content max-width: max-w-6xl for main content, max-w-4xl for text-heavy sections

**Grid Strategy:**
- Hero: Full-width single column
- About: Two-column (40/60 split) on desktop, stack on mobile
- Achievements: Three-column grid on desktop, single column mobile
- Blog: Three-column card grid
- Contact: Two-column (form + info) on desktop

## Page-Specific Components

### 1. Home/Hero Section (Full viewport height)
- Professional headshot or abstract tech-themed background image
- Centered content: "Hello, I'm Neha Kumari"
- Subtitle: "BCA Student & Aspiring Web Developer specializing in Front-End Development"
- Two CTA buttons: "View My Achievements" (primary navy) and "Contact Me" (outline navy) with backdrop blur effect
- Gentle down arrow scroll indicator at bottom

### 2. About Me Section
**Left Column (40%):** Professional headshot in rounded container with subtle shadow

**Right Column (60%):**
- "My Story" heading
- Bio paragraph: Academic background (VGU, 9.14 CGPA), passion for web development, career aspirations
- "Technical Expertise" subsection with skill tags in navy accent (HTML, CSS, JavaScript, Java, C, Linux, MS Office)
- "Soft Skills" subsection with bullet points (problem-solving, communication, teamwork)

### 3. Achievements Section
**Project Cards (3-column grid):**
- Each card: project thumbnail placeholder, title, brief description, tech stack tags, "View Details" link
- Projects: Personal Portfolio Website, Student Registration Form
- Include role badges and timeline

**Certifications Grid (2-column):**
- Certificate cards with institution logos (Coursera, EXIN/BCS)
- Titles: Business Model Canvas (UVA), AI Essentials, Hackathon Certificate
- Date badges

### 4. Blog Section
- 3-column grid of blog post cards
- Each card: featured image placeholder, title, date, excerpt (150 chars), "Read More" link
- Placeholder content for 3-6 sample posts about web development, learning journey

### 5. Contact Page
**Left Column:** Contact form with fields (Name, Email, Subject, Message), navy submit button

**Right Column:** 
- Contact information card with email (jhaneha65955@gmail.com), phone (8340412169)
- "Let's Connect" heading with LinkedIn link prominently displayed
- Response time note: "I typically respond within 24 hours"

### Navigation
Sticky header with logo/name on left, nav links (About, Achievements, Blog, Contact) on right, smooth scroll behavior

### Footer
- Background: Light grey (#F9F9F9)
- Three-column layout: Brief bio snippet | Quick links | Social media icons (LinkedIn prominent, GitHub)
- Copyright: "© 2025 Neha Kumari. Built with passion."

## Animations
- Page load: 0.6s fade-in
- Scroll reveals: Sections slide-up with 0.5s ease on viewport entry
- Buttons: 0.3s color transition on hover, subtle lift effect
- Cards: 0.2s scale (1.02) and shadow enhancement on hover

## Images Required

1. **Hero Background:** Professional headshot (full-bleed) or abstract geometric/tech pattern in muted tones - 1920x1080px
2. **About Me Headshot:** Professional portrait photo - 400x400px, rounded
3. **Project Thumbnails:** Screenshots or mockups of Portfolio Website and Registration Form - 600x400px each
4. **Blog Featured Images:** Placeholder tech/development themed images - 800x450px each
5. **Certification Logos:** Coursera, EXIN, BCS badges - 150x150px

**Note:** All images should maintain professional quality with consistent treatment (subtle vignette, slight desaturation for cohesion)