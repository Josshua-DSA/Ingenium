# DESIGN — Visual Design System

## Design Direction

**Identity**: A quant developer and data scientist who thinks in systems. The visual language should read like deep ocean water at night — composed, precise, with depth you can only partially see. Not a designer's portfolio (no gradients-on-everything, no big emoji). Not a dark hacker terminal (no acid green). Something in between: a serious engineer who has taste.

**Aesthetic reference**: Nautical charts meets modern SaaS dashboard. Grid-disciplined, typographically confident, color-restrained.

---

## Color Palette

All colors defined as CSS custom properties in `globals.css` and referenced via Tailwind config.

```css
:root {
  /* Backgrounds — deep ocean */
  --color-bg-base:    #060D18;   /* near-black with blue undertone */
  --color-bg-surface: #0C1A2E;   /* card / section background */
  --color-bg-elevated:#112240;   /* hover states, code blocks */

  /* Primary blue — bioluminescent mid-ocean */
  --color-blue-dim:   #1E3A5F;   /* subtle borders, dividers */
  --color-blue-mid:   #2E6DAD;   /* secondary actions, badges */
  --color-blue-bright:#4FA3E0;   /* primary accent — links, highlights */
  --color-blue-glow:  #7EC8F5;   /* hover states, focus rings */

  /* Text */
  --color-text-primary:  #E8F1FB;  /* headings */
  --color-text-secondary:#9BB5D4;  /* body, descriptions */
  --color-text-muted:    #4A6580;  /* timestamps, labels, placeholder */

  /* Semantic */
  --color-success: #34D399;   /* emerald — active/completed status */
  --color-warning: #FBBF24;   /* amber — in-progress status */
  --color-danger:  #F87171;   /* red — archived/error */

  /* Border */
  --color-border:        #1E3A5F;
  --color-border-subtle: #112240;
}
```

### Tailwind Mapping (`tailwind.config.ts`)

```ts
colors: {
  bg: {
    base:    'var(--color-bg-base)',
    surface: 'var(--color-bg-surface)',
    elevated:'var(--color-bg-elevated)',
  },
  blue: {
    dim:    'var(--color-blue-dim)',
    mid:    'var(--color-blue-mid)',
    bright: 'var(--color-blue-bright)',
    glow:   'var(--color-blue-glow)',
  },
  text: {
    primary:   'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    muted:     'var(--color-text-muted)',
  },
  border: {
    DEFAULT: 'var(--color-border)',
    subtle:  'var(--color-border-subtle)',
  }
}
```

---

## Typography

### Typefaces

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display | `Space Grotesk` | 700 | Headlines, hero name |
| Body | `Inter` | 400, 500 | Paragraphs, nav |
| Mono | `JetBrains Mono` | 400, 500 | Code, tech tags, terminal element |

Load via `next/font/google`. Never use `@import` from Google CDN.

```ts
// app/fonts.ts
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700'],
})
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
})
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})
```

### Type Scale

```
text-xs    12px   -- timestamps, status labels        font-mono
text-sm    14px   -- badge tags, captions             font-body
text-base  16px   -- body copy                        font-body
text-lg    18px   -- card titles                      font-body 500
text-2xl   24px   -- section headings                 font-display 700
text-4xl   36px   -- page headings                    font-display 700
text-6xl   60px   -- hero name                        font-display 700
```

---

## Spacing & Layout

- **Max content width**: `max-w-5xl` (1024px) centered, `px-4 sm:px-6 lg:px-8`
- **Section vertical rhythm**: `py-20 lg:py-28` — generous, not cramped
- **Card padding**: `p-6`
- **Grid**: 1 col mobile → 2 col tablet → 3 col desktop for project grid
- **Border radius**: `rounded-lg` (8px) for cards; `rounded-full` for badges only

---

## Signature Element

A subtle **depth grid** — an SVG grid pattern with very low opacity (`opacity-[0.04]`) on `bg-base`, giving the impression of graph paper underwater. Used only on the hero section background. It evokes: coordinate systems, data grids, nautical charts. It disappears on close inspection (intentionally). Everything else is clean.

```tsx
// components/sections/DepthGrid.tsx
// SVG <pattern> with 40px squares, stroke var(--color-blue-bright), opacity 0.04
// Positioned absolute, inset-0, pointer-events-none, z-0
```

---

## Component Design Tokens

### Badge / Tech Tag
```
bg: bg-elevated
text: text-secondary  (font-mono, text-xs)
border: border border-subtle
border-radius: rounded-full
padding: px-2.5 py-0.5
hover: border-blue-mid text-blue-bright
```

### Project Card
```
bg: bg-surface
border: border border-subtle
border-radius: rounded-lg
padding: p-6
hover: border-blue-dim (transition-colors duration-200)
```

### Primary Button / CTA
```
bg: blue-mid → blue-bright (hover)
text: text-primary font-body font-500
border-radius: rounded-lg
padding: px-5 py-2.5
transition: background 200ms ease
```

### Nav Link
```
text: text-muted → text-primary (hover/active)
font: font-mono text-sm
active: text-blue-bright
transition: color 150ms ease
```

---

## Motion

**Principle**: One deliberate animation (hero typing sequence), everything else is `transition-*` only.

| Element | Animation | Duration |
|---------|-----------|----------|
| Hero tagline | Typewriter reveal (CSS `@keyframes`) | 1.8s total |
| Cards | `opacity-0 → opacity-100` on scroll (Intersection Observer) | 400ms, stagger 100ms |
| Nav links | `color` transition | 150ms |
| Card hover | `border-color` transition | 200ms |

Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## Accessibility

- All interactive elements have visible `:focus-visible` ring: `ring-2 ring-blue-bright ring-offset-2 ring-offset-bg-base`
- Color contrast: `text-primary` on `bg-base` = 13.2:1 ✓, `text-secondary` on `bg-base` = 5.8:1 ✓
- All images have meaningful `alt` text; decorative SVGs have `aria-hidden="true"`
- Nav: `<nav aria-label="main navigation">`; active link has `aria-current="page"`

---

## Anti-AI-Slop Guide

AI-generated portfolios cluster around predictable patterns that immediately read as generic — even to non-technical visitors. This section exists to name them explicitly so they can be avoided.

### Telltale AI-Slop Patterns (Banned)

| Pattern | Why it reads as AI | What to do instead |
|---------|--------------------|--------------------|
| Hero with floating glassmorphism card *with no hierarchy or purpose* | AI prompt default — blur for blur's sake | Glassmorphism is allowed **only** as a deliberate Apple/macOS-style system (see Glassmorphism section below) |
| "I'm a Passionate Developer 🚀" headline | Filler adjective + rocket emoji | Write a specific claim: *"I build quantitative research engines for IDX equities."* |
| Skill bar percentages (Python 90%, SQL 75%) | Meaningless and condescending | List tech grouped by category, let projects prove proficiency |
| Animated counter numbers on scroll (500+ commits, 20+ projects) | Inflated vanity metrics | Show 3 real projects with real outcomes |
| Gradient blob backgrounds / aurora mesh | Every AI design tool defaults here | Use the depth grid — subtle, structural, distinctive |
| Section titles: "About Me", "My Skills", "My Projects", "Contact Me" | The same 4 words on every AI portfolio | Use: "Work", "Stack", "Writing", or just skip the label if context is clear |
| Icon + label card grid for tech stack | Template pattern; tells nothing | Prose description of how you use the tech, or grouped flat list |
| Footer with "Made with ❤️ using Next.js" | Cliché filler | Leave the footer minimal — name + year + links, nothing else |
| Testimonials carousel with stock avatars | Instantly fake-looking | Only include if real and attributable; otherwise skip entirely |
| "Let's work together!" CTA section with gradient button | High-energy, low-substance | Specific call: "Open to quant research roles and freelance data projects." |

---

### What Makes It Look Fresh

These are deliberate choices that create visual distinctiveness — each one is a small bet against the template default.

#### 1. Typography does the heavy lifting

Most AI portfolios treat type as neutral delivery. This portfolio's type is a design element:

- **Space Grotesk at large scale** has idiosyncratic letterforms (the `a`, `g`, `Q`) that don't disappear into generic sans territory
- **JetBrains Mono for tech elements** signals domain fluency to developers without looking try-hard to non-technical visitors
- **No all-caps section labels** — they're a lazy way to add weight; use size and spacing instead
- **Tight tracking on hero (`-0.02em`)** feels intentional, not default

#### 2. One thing is unusual per section

Each section should have one element that makes a visitor pause — not because it's flashy, but because it's specific:

- **Hero**: the depth grid + a real CLI command in mono as the tagline, not a generic phrase
- **Project cards**: status indicator (active · 2025) in mono feels like a terminal readout, not a badge
- **About**: no skills list — a paragraph written like a person, not a recruitment pitch
- **Footer**: just initials + `—` + year. Nothing else.

#### 3. Negative space is intentional

AI portfolios fill every pixel. This one breathes. Sections have `py-20 lg:py-28` — generous and consistent. Empty space communicates confidence, not incompleteness.

#### 4. Specificity over scope

Write about *what you actually built*, not what you "worked on". Bad: *"Built a full-stack application using modern technologies."* Good: *"Walk-forward validation engine that retrains ensemble classifiers on rolling 6-month windows across LQ45 universe."* Specificity reads as credibility to both tech and non-tech audiences — the non-tech visitor doesn't understand the words but understands that the person knows exactly what they did.

#### 5. The project detail page is the differentiator

Most portfolios show a card with a screenshot and a GitHub link. A project detail page with real narrative — the problem, the bad first approach, the pivot, the result — is rare and memorable. For Solidus-Folium especially, the story of the architecture decisions is itself the proof of competence. Write it.

---

---

### Glassmorphism System (Apple/macOS Direction)

Glassmorphism is **not banned** — it's just banned when used randomly. Apple uses it as a *material language*: every frosted surface implies a layer, a depth level, a hierarchy. That's the bar. If a glass surface doesn't tell the visitor something about where they are in the page structure, it shouldn't be glass.

#### The Apple Material Principle

macOS uses blur + transparency to say: *"this panel floats above the content behind it."* The blur is load-bearing — it reveals depth. In this portfolio, glass is used on elements that genuinely float above the page layer: navbar, modal-like cards on hover, project feature callouts.

```
Layer 0 — bg-base (#060D18)         ← page canvas, no glass
Layer 1 — bg-surface + glass        ← cards, sections
Layer 2 — glass elevated            ← navbar, sticky elements, hover states
Layer 3 — glass spotlight           ← featured project, active selection
```

#### Glass Token Definitions

Add these to `globals.css`:

```css
:root {
  /* Glass — backdrop-filter based, requires hardware acceleration */
  --glass-light:  rgba(14, 30, 54, 0.55);   /* card background */
  --glass-mid:    rgba(10, 22, 40, 0.70);   /* navbar, sticky */
  --glass-heavy:  rgba(6, 13, 24, 0.85);    /* modal overlays */

  /* Glass borders — the key to making it look Apple, not cheap */
  --glass-border-top:    rgba(78, 163, 224, 0.18);  /* top highlight */
  --glass-border-rest:   rgba(30, 58, 95, 0.35);    /* sides + bottom */

  /* Blur amounts */
  --blur-glass:   blur(20px);    /* standard card glass */
  --blur-nav:     blur(28px);    /* navbar — needs more blur to anchor */
  --blur-heavy:   blur(40px);    /* spotlight / featured */

  /* Saturation boost — the Apple trick that makes blur look premium */
  --glass-saturate: saturate(180%);
}
```

#### Tailwind Utilities (add to `tailwind.config.ts`)

```ts
backdropBlur: {
  glass: '20px',
  nav:   '28px',
  heavy: '40px',
},
```

#### Usage Rules

**Navbar** — always glass. This is the one element that must feel elevated above everything:
```tsx
// Sticky nav: glass-mid + blur-nav + border-bottom glass-border-rest
className="sticky top-0 z-50 backdrop-blur-nav backdrop-saturate-[180%]
           bg-[rgba(10,22,40,0.70)] border-b border-[rgba(30,58,95,0.35)]"
```

**Project Cards** — glass-light on hover, flat bg-surface at rest. The glass activates when the visitor focuses on a card:
```tsx
// Rest state: bg-surface, solid border
// Hover state: glass-light + top highlight border
className="transition-all duration-300
           bg-bg-surface border border-border-subtle
           hover:bg-[rgba(14,30,54,0.55)]
           hover:backdrop-blur-glass hover:backdrop-saturate-[180%]
           hover:border-t-[rgba(78,163,224,0.18)]
           hover:border-x-[rgba(30,58,95,0.35)]
           hover:border-b-[rgba(30,58,95,0.35)]"
```

**Featured / Hero Callout** — glass-heavy with blur-heavy. Used for the single featured project highlight in the hero section only:
```tsx
className="backdrop-blur-heavy backdrop-saturate-[180%]
           bg-[rgba(6,13,24,0.85)]
           border border-t-[rgba(78,163,224,0.22)] border-x-[rgba(30,58,95,0.4)]"
```

#### The Apple Details That Separate Good from Cheap

| Detail | Why it matters |
|--------|---------------|
| **Top border brighter than sides** | Light hits the top edge of a floating panel — this is what macOS does on every sheet and popover. Without it, glass looks like a transparent div, not a material |
| **Saturate(180%)** | Apple always pairs blur with saturation boost — it intensifies the colors behind the glass and makes it feel vivid, not muddy |
| **Never blur a solid bg** | Glass only works if there's content behind it to blur. On the hero, the depth grid + bg-base gradient gives the blur something to work with |
| **Text must still pass contrast** | `text-primary` (#E8F1FB) on `glass-light` background — check contrast at the darkest point. If blur lightens the bg too much, increase `--glass-heavy` opacity |
| **No glass on glass** | Never stack two glass surfaces directly — the double blur creates a muddy smear. Always have a solid layer between them |
| **Transition in, not out** | Glass activates on hover/focus `transition-all duration-300`. It should *appear* when relevant, not be the permanent default for everything |

#### What This Looks Like in Practice

```
┌─────────────────────────────────────────────┐
│  [NAV — glass-mid, blur-nav, always active] │ ← Layer 2
├─────────────────────────────────────────────┤
│                                             │
│  [depth grid + bg-base gradient]            │ ← Layer 0
│                                             │
│  ┌──────────────────────────────────────┐  │
│  │ FEATURED PROJECT — glass-heavy       │  │ ← Layer 3
│  │ backdrop-blur-heavy, bright top edge │  │
│  └──────────────────────────────────────┘  │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │ card     │  │ card     │  │ card     │ │ ← Layer 1 (glass on hover)
│  │ [hover]  │  │ [rest]   │  │ [rest]   │ │
│  └──────────┘  └──────────┘  └──────────┘ │
└─────────────────────────────────────────────┘
```

---

### Checklist Before Deploying

Run through this before the site goes live:

- [ ] No adjectives in the hero that anyone could apply to themselves ("passionate", "creative", "driven")
- [ ] No percentage-based skill bars
- [ ] No gradient blob or aurora mesh background
- [ ] No animated vanity counters
- [ ] Section labels are specific or absent — not "My Projects", "My Skills"
- [ ] Every project card links to a page with at least 300 words of real content
- [ ] The footer has no filler text
- [ ] At least one element per section is specific to *this person's work*, not a placeholder
- [ ] The hero headline could not appear on someone else's portfolio without changing the meaning
