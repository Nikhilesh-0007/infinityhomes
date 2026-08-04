# Infinity Homes — Antigravity Build Brief

## 0. How to use this with Antigravity

- Save this whole file as `PROJECT_BRIEF.md` in your repo root before you open Antigravity. Don't paste the full thing into chat — point the agent at the file instead. It has codebase access and will re-read it as it works.
- This build is too big for one shot. Dispatch it as a sequence of Manager-view tasks (Section 12 gives you the phase list), not one mega-prompt. You'll get an Implementation Plan artifact to review before each phase writes code, and a walkthrough with screenshots at the end of each — that's your checkpoint to catch drift early instead of after 6 pages are built wrong.
- Ask explicitly for browser verification at both desktop and mobile viewport widths before you approve a page. Antigravity's browser subagent can do this automatically if you say so — it won't unless asked.
- Use Plan Mode, not Fast Mode, for every phase below. Fast Mode is for one-line fixes, not a 6-page site.

## 1. Kickoff prompt (paste this as your first Manager task)

```
Read PROJECT_BRIEF.md in this repo before doing anything else — it's the full
spec for a project called Infinity Homes, a luxury real estate website.

Start with Phase 0 only (Section 12 of the brief): scaffold the Vite + React +
TypeScript + Tailwind project, install the exact dependency list in Section 3,
set up the folder structure and routing skeleton for all 6 pages, and implement
the design tokens in Section 4. Do not build any page content yet.

Show me the Implementation Plan before writing code, and give me a browser
screenshot of the empty shell (nav + footer + blank routes) before you consider
this phase done.
```

## 2. Objective & hard constraints

**Objective:** A premium, frontend-only real estate marketing site for Infinity Homes, a Hyderabad property brand covering plots, villas, apartments, farm lands, and commercial listings. Visual bar: Lodha / Prestige / Sobha / DLF / Emaar-level polish, with its own identity built from the brand's black/charcoal/red logo palette — not a clone of any of them.

**Hard constraints (the agent should treat these as non-negotiable):**
- Frontend-only. No backend, no auth, no database, no CMS, no real API calls.
- All content (properties, blogs, testimonials, FAQs, services, team, stats) comes from a typed mock data layer — see Section 6.
- **Exactly 6 routes**, no more: `/`, `/about`, `/properties`, `/services`, `/blogs`, `/contact`. "View Details" / "Read More" interactions must be modals, drawers, or in-page expansion — not new routes. (The original spec implied detail pages via "View Details" buttons without saying so; this resolves that conflict in favor of the stated 6-page limit.)
- Every CTA must do something real: smooth-scroll, open a modal, trigger a `tel:`/`https://wa.me/` link, or navigate to one of the 6 routes. No dead buttons.
- No Lorem Ipsum anywhere — mock copy should read like real Hyderabad real-estate content (see Section 6 for tone).

## 3. Tech stack

Two redundancies in the original list are worth cutting before the agent scaffolds — two carousel libraries and two icon libraries just means inconsistent UI and dead weight:

```
Vite + React 18.3/19 + TypeScript
Tailwind CSS
React Router DOM
Framer Motion        — page transitions, scroll reveals, hover states
GSAP + ScrollTrigger  — timeline animation, parallax, pinned sections
Shadcn UI             — accordion, dialog, sheet (mobile drawer), form primitives
Lucide React          — the ONLY icon set (Shadcn is built on it already)
React Hook Form        — contact form + newsletter form
Embla Carousel         — the ONLY carousel/slider lib (property sliders, testimonial slider, blog carousel). Drop Swiper.js — Embla covers all of it and is what Shadcn's own carousel wraps.
CountUp.js              — stat counters
react-helmet-async     — per-route SEO title and meta
```

## 4. Design system / tokens

Implement as CSS variables + Tailwind theme extension, not hardcoded hex values in components.

```css
--color-charcoal: #1F1F1F;      /* primary */
--color-red: #E53935;            /* secondary */
--color-red-bright: #FF4D4F;     /* accent */
--color-bg: #FFFFFF;
--color-section-bg: #F8F9FA;
--color-card-bg: #FFFFFF;
--color-border: #E5E7EB;
--color-heading: #111827;
--color-body: #6B7280;
--color-success: #16A34A;
--color-footer: #111111;

--gradient-primary: linear-gradient(135deg, #E53935, #FF4D4F);

--font-heading: 'Manrope', sans-serif;
--font-body: 'Inter', sans-serif;

--radius-card: 18px;   /* 16–20px range */
--shadow-soft: 0 8px 30px rgba(0,0,0,0.06);
```

- Spacing: consistent scale (Tailwind default 4px base is fine — don't invent a custom one).
- Cards: rounded-2xl equivalent, soft shadow, hover lift (translateY + shadow increase).
- Respect `prefers-reduced-motion` globally — GSAP and Framer Motion timelines should degrade to simple fades, not skip content.

## 5. Information architecture

Routes: `/`, `/about`, `/properties`, `/services`, `/blogs`, `/contact`.

Nav: `Home · About · Properties · Services · Blogs · Contact`, plus a right-aligned "Book Site Visit" CTA button. Sticky nav — transparent/overlaid on the hero, solid white with shadow after scroll. Mobile: slide-in drawer (Shadcn `Sheet`), not a full-screen overlay reinvented from scratch.

## 6. Mock data layer

Put this under `src/data/` as typed JSON + a `src/types/` folder with interfaces. Every page pulls from here — nothing hardcoded per-page, so property counts, stats, and testimonials stay consistent across Home and Properties.

## 7. Pages — spec + acceptance criteria

Home, About, Properties, Services, Blogs, Contact.

## 8. Shared components

`Navbar`, `Footer`, `Button`, `Section`, `Container`, `PropertyCard`, `ServiceCard`, `TestimonialCard`, `BlogCard`, `StatCounter`, `FAQAccordion`, `FloatingActionButtons`, `LoadingScreen`.

## 9. Animation guidelines

Framer Motion, GSAP + ScrollTrigger, CountUp.js, reduced motion fallbacks.

## 10. Images & asset sourcing

Unsplash/Pexels URLs.

## 11. SEO, performance, accessibility

`react-helmet-async`, structured data, Lighthouse ≥ 90.

## 12. Suggested build sequence

1. Scaffold (Phase 0)
2. Shared components & data layer
3. Home page
4. Properties page
5. About + Services pages
6. Blogs + Contact pages
7. Animation pass
8. QA pass
