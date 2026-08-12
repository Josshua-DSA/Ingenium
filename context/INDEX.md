# INDEX — Context Folder Quick Reference

This folder (`context/`) is the single source of truth for all architectural, design, and engineering decisions in this project. Read this file first. It tells you where to find what.

---

## Files in This Folder

| File | Purpose | Read when... |
|------|---------|-------------|
| `PRD.md` | Product requirements, goals, target audience, page list | You need to understand *what* to build and *why* |
| `ARCHITECTURE.md` | Directory structure, rendering strategy, data flow, Vercel config | You need to understand *how* the system is structured |
| `DESIGN.md` | Color palette, typography, spacing, component tokens, motion | You need to understand *how it looks* |
| `RULES.md` | Coding conventions, naming, Git workflow, forbidden patterns | You need to understand *how to write code* |
| `SCHEMA.md` | MDX frontmatter schema, TypeScript types, MDX loader API | You need to understand *what shape data takes* |
| `INDEX.md` | This file — master navigation | Start here |

---

## Quick Answers

**What colors do I use?**
→ See `DESIGN.md` → Color Palette. Never hardcode hex. Use `var(--color-*)` or Tailwind tokens.

**Where does project content live?**
→ `content/projects/*.mdx` — one file per project. Frontmatter schema in `SCHEMA.md`.

**How do I add a new page?**
→ Create `app/<page-name>/page.tsx`. Add metadata via `lib/metadata.ts`. Wrap sections in `<Section>` component. Register in Navbar.

**How do I add a new project?**
→ Create `content/projects/<slug>.mdx` with all required frontmatter fields (see `SCHEMA.md`). No other changes needed — it auto-appears in the project list.

**What font do I use for code/tech elements?**
→ `JetBrains Mono` via `--font-mono` CSS variable. Apply with `font-mono` Tailwind class.

**What's the max content width?**
→ `max-w-5xl mx-auto` with `px-4 sm:px-6 lg:px-8`. Always via the `<Section>` wrapper component.

**Can I use glassmorphism?**
→ Yes — but only as an Apple/macOS-style material system, not randomly. Navbar is always glass (`glass-mid + blur-nav`). Cards go glass on hover only. Featured callout uses `glass-heavy`. Never stack two glass surfaces. See `DESIGN.md` → Glassmorphism System.

**What are the glass CSS tokens?**
→ `--glass-light`, `--glass-mid`, `--glass-heavy` for backgrounds. `--glass-border-top` (brighter) + `--glass-border-rest` for borders. `--blur-glass / --blur-nav / --blur-heavy` for backdrop-filter. All in `globals.css`.

**How does deployment work?**
→ Push to `main` branch on GitHub → Vercel auto-deploys. Any branch/PR gets a preview URL automatically — no config needed.

**What Vercel features are used?**
→ Vercel Analytics + Speed Insights (in `app/layout.tsx`), dynamic OG images via `app/api/og/route.tsx`, and `vercel.json` for security headers + font cache. See `ARCHITECTURE.md` → Vercel Integration for full setup code.

**Where do I put secret keys (Resend, Blob)?**
→ Vercel dashboard → Project → Settings → Environment Variables. Never in `.env.local` committed to git.

**Can I add `use client` to a page file?**
→ No. See `RULES.md` → Server vs Client. Isolate interactivity in leaf components.

**What's the signature visual element?**
→ Subtle depth grid (SVG pattern, `opacity-[0.04]`) in the hero section only. See `DESIGN.md` → Signature Element.

---

## Project Status

```
v1 Scope (current)
─────────────────────────────────
[x] Context docs authored
[ ] Next.js project scaffolded
[ ] Tailwind design tokens configured
[ ] Layout components (Navbar, Footer, Section)
[ ] Hero section
[ ] Projects index + filter
[ ] Project detail (MDX)
[ ] About page
[ ] Contact page
[ ] Deploy to Vercel

v2 Ideas (backlog)
─────────────────────────────────
[ ] /blog or /notes section
[ ] Dynamic OG images via @vercel/og
[ ] Light mode toggle
[ ] RSS feed
```

---

## Key Decisions Log

| Decision | Rationale | Date |
|----------|-----------|------|
| App Router over Pages Router | Future-proof, RSC support, better data fetching patterns | project start |
| MDX via `@next/mdx` over Contentlayer | Contentlayer is unmaintained; `@next/mdx` is official | project start |
| No CMS | Overkill for a portfolio; MDX in repo is sufficient and co-located | project start |
| Blue palette — deep ocean direction | Domain: data science + quant. Avoids generic dark-hacker green; avoids warm-cream AI tell. Blue signals depth, precision, focus | project start |
| Space Grotesk for display | More distinctive than Inter for headlines; technical without being sci-fi; complements JetBrains Mono well | project start |
| SSG for all pages | No dynamic data needed in v1; fastest possible loading, zero server costs | project start |
