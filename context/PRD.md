# PRD — Personal Portfolio Website

## Overview

A personal portfolio website for a developer and data scientist specializing in quantitative trading systems, machine learning, and CLI tooling. Built with Next.js 15, Tailwind CSS v4, deployed on Vercel. The site functions as a professional showcase and technical blog — targeting recruiters, collaborators, and fellow engineers who want to understand the depth of the work, not just the titles.

---

## Goals

| # | Goal | Success Metric |
|---|------|----------------|
| 1 | Communicate technical identity clearly | Visitor understands what you build within 10 seconds of landing |
| 2 | Showcase projects with depth | Each project page answers: what problem, what approach, what outcome |
| 3 | Establish credibility for academic & industry contexts | Portfolio usable as Tugas Akhir supplementary asset and job application link |
| 4 | Fast & accessible | Lighthouse score ≥ 90 on all axes |
| 5 | Low maintenance burden | Content editable via MDX, no CMS dependency |

---

## Target Audience

**Primary**: Technical recruiters and engineering hiring managers in Indonesian tech (Tokopedia, GoTo, Stockbit, etc.) and regional quant shops.

**Secondary**: Academic supervisors reviewing Tugas Akhir outputs; open-source collaborators discovering the work via GitHub.

**Tertiary**: Fellow developers who find the blog via search.

---

## Pages & Features

### Required (v1)

- `/` — Hero with identity statement, featured project highlight, CTA
- `/projects` — Filterable project index with tag system
- `/projects/[slug]` — MDX-powered project detail pages
- `/about` — Professional narrative + tech stack + education timeline
- `/contact` — Links + optional contact form

### Nice to Have (v2)

- `/blog` or `/notes` — Short technical writeups
- Dark/light toggle (default: dark)
- RSS feed for blog
- Dynamic OG images via `@vercel/og`

### Out of Scope

- CMS dashboard
- E-commerce / payments
- User authentication
- Real-time data (market feeds, etc.)

---

## Content Structure

### Project Entry Fields

```ts
type Project = {
  slug: string
  title: string
  tagline: string          // One sentence max
  tags: string[]           // e.g. ["ML", "Quant", "Python", "CLI"]
  status: "active" | "completed" | "archived"
  year: number
  github?: string
  demo?: string
  featured: boolean
  body: MDXContent
}
```

### MDX Project Body Sections (recommended)
1. Problem — what needed solving
2. Approach — architecture/methodology decisions
3. Key challenges & how resolved
4. Outcome / results
5. Tech stack breakdown

---

## Non-Functional Requirements

- **Performance**: Static generation (SSG) for all pages; ISR only if blog is added
- **SEO**: `next/metadata` for every route; structured data (JSON-LD) for projects
- **Accessibility**: WCAG AA contrast ratios; keyboard navigable; `prefers-reduced-motion` respected
- **Mobile**: Fully responsive, tested at 375px, 768px, 1280px, 1920px breakpoints
- **Deployment**: Vercel, connected to GitHub main branch; preview deploys on every PR

---

## Constraints

- No paid third-party services except Vercel Hobby (free tier)
- Contact form: use Resend free tier or mailto fallback
- Fonts: `next/font` only (no external font CDN calls at runtime)
- Images: `next/image` for all raster assets; SVG inline where possible
