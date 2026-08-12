# RULES — Development Conventions

These rules exist to keep the codebase consistent, readable by AI agents, and low-maintenance. Follow them without exception unless there is a documented architectural reason to deviate (record it in ARCHITECTURE.md).

---

## General Principles

1. **Documentation first**: Before writing any component or page, confirm its purpose is described in PRD.md and its visual spec is in DESIGN.md. No undocumented features.
2. **Smallest footprint**: Prefer RSC (React Server Component) over `use client`. Add interactivity only where the UX demands it.
3. **No magic**: No auto-import plugins, no barrel files (`index.ts`) that obscure where things come from. Explicit imports only.
4. **Single source of truth**: Colors and spacing live in `tailwind.config.ts` and `globals.css`. Never hardcode hex values in JSX.

---

## File & Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Page files | lowercase, kebab via folder | `app/projects/[slug]/page.tsx` |
| Components | PascalCase, `.tsx` | `ProjectCard.tsx` |
| Utilities | camelCase, `.ts` | `lib/projects.ts` |
| MDX content | kebab-case slug | `content/projects/solidus-folium.mdx` |
| CSS classes | Tailwind utility only; no custom class names unless semantic | `.prose` for MDX body ok |
| Types | PascalCase interfaces, exported from `lib/types.ts` | `Project`, `ProjectMeta` |

---

## Component Rules

### Server vs Client
- **Default**: every component is a Server Component (no directive needed)
- **Add `'use client'`** only when you need: `useState`, `useEffect`, event handlers, browser APIs
- **Never `'use client'` a page** — keep interactivity isolated in leaf components

```
✅ app/projects/page.tsx          (RSC — fetches MDX list, no state)
✅ components/sections/ProjectGrid.tsx  (RSC — renders cards)
✅ components/ui/FilterBar.tsx    ('use client' — manages active tag state)
❌ app/projects/page.tsx with 'use client'  (entire page loses SSG benefit)
```

### Props & Types
- All component props must have an explicit TypeScript interface defined above the component
- No `any` type — use `unknown` and narrow explicitly if needed
- Optional props use `?` — never use `| undefined` on required fields

```tsx
// ✅ correct
interface ProjectCardProps {
  title: string
  tagline: string
  tags: string[]
  slug: string
  status: 'active' | 'completed' | 'archived'
}

// ❌ wrong
const ProjectCard = ({ title, tags, ...rest }: any) => { ... }
```

### Styling
- Use Tailwind utility classes exclusively in JSX — no inline `style={}` except for dynamic values that Tailwind can't express (e.g., CSS custom property injection)
- Class order: layout → flex/grid → spacing → sizing → color → typography → state → transition
- Use `cn()` (from `clsx` + `tailwind-merge`) for conditional classes — never string concatenation

```tsx
// ✅
className={cn('rounded-lg p-6 bg-bg-surface border border-border-subtle',
  isActive && 'border-blue-mid')}

// ❌
className={'rounded-lg p-6' + (isActive ? ' border-blue-mid' : '')}
```

---

## Content (MDX) Rules

### Frontmatter Schema
Every `.mdx` file in `content/projects/` **must** include all required fields (see SCHEMA.md). Missing fields cause build failure by design.

### Body Conventions
- First heading inside MDX body starts at `## ` (h2) — h1 is rendered by the page template from frontmatter `title`
- Code blocks must specify language: ` ```python `, ` ```bash `, ` ```ts ` etc.
- Images in MDX: use `next/image` via a custom `<MDXImage>` component, never raw `<img>`

---

## Git Conventions

```
Branch naming:
  feature/<thing>       new page or component
  content/<project>     adding/editing MDX content
  fix/<issue>           bug fix
  style/<element>       visual-only change

Commit message format:
  <type>(<scope>): <short description>

  Types: feat, fix, style, content, docs, chore
  Scope: hero, nav, projects, about, design, deps

Examples:
  feat(projects): add filter by tag on project index
  content(solidus-folium): add methodology section to MDX
  style(hero): tighten vertical rhythm on mobile
  fix(nav): correct aria-current on active route
```

---

## Performance Rules

- Never import a full icon library — use specific named imports or inline SVG
- Fonts: loaded via `next/font` only; `display: 'swap'` required
- Third-party scripts: none in v1. If added, use `next/script` with `strategy="lazyOnload"`
- `next/image`: always provide `width` and `height` for static images; use `fill` + sized container for responsive hero images

---

## Accessibility Rules

- Every interactive element (`<button>`, `<a>`) must be reachable and activatable via keyboard
- Focus styles: never `outline-none` without a replacement — use `focus-visible:ring-2 focus-visible:ring-blue-bright`
- Color: never convey information by color alone (pair with icon or label)
- ARIA: use landmark roles semantically; don't add ARIA where native HTML semantics suffice

---

## Glassmorphism Rules

Glassmorphism is permitted as a deliberate design system (Apple/macOS style), not as decoration. Follow these rules exactly:

```
✅ Navbar — always glass (glass-mid + blur-nav), this is the one permanent glass surface
✅ Project cards — glass activates on hover only, flat bg-surface at rest
✅ Featured callout in hero — glass-heavy with blur-heavy
✅ Always pair backdrop-blur with backdrop-saturate-[180%]
✅ Top border edge uses --glass-border-top (brighter) to simulate light hitting the surface
❌ Glass on glass — never stack two blurred surfaces directly
❌ Glass as the default/rest state for cards (hover only)
❌ backdrop-blur without a background color — needs rgba bg to work
❌ Glass on elements with no content behind them to blur
```

See `DESIGN.md` → Glassmorphism System for exact class strings and token values.

---

## Vercel Rules

This project is Vercel-native. Do not replace Vercel platform features with third-party equivalents.

```
✅ Vercel Analytics — use @vercel/analytics, not Plausible/Fathom/GA
✅ Vercel Speed Insights — use @vercel/speed-insights, not custom CWV tracking
✅ Vercel OG — use next/og for dynamic Open Graph images, not external services
✅ Deploy via GitHub push to main — never manual deploy from CLI to production
✅ Secrets in Vercel dashboard → Environment Variables
✅ Preview deployments — use them for design review before merging
❌ Don't add @vercel/analytics to pages individually — it's in root layout.tsx
❌ Don't hardcode base URL — use NEXT_PUBLIC_BASE_URL or metadataBase in metadata
❌ Don't commit .env.local
```

---

## What Not to Do

| Forbidden | Reason |
|-----------|--------|
| `import * as X from '...'` | Unclear what's used, hurts tree-shaking |
| Hardcoded hex colors in JSX | Breaks design token system |
| `useEffect` for data fetching | Use RSC async/await instead |
| `<img>` raw tags | Use `next/image` |
| `@import` Google Fonts in CSS | Use `next/font` |
| Deploying from a branch other than `main` | Vercel is configured for `main` only |
| Committing `.env.local` | Secrets in Vercel dashboard only |
| Glass on glass stacking | Double blur = muddy smear, not premium |
| `backdrop-blur` without `backdrop-saturate` | Looks muddy without saturation boost |
| Third-party analytics instead of Vercel Analytics | Breaks the Vercel-native stack |
