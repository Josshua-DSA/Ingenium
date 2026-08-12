# ARCHITECTURE — Portfolio Website

## Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15 (App Router) | RSC by default, file-based routing, Vercel-native |
| Styling | Tailwind CSS v4 | Utility-first, co-located styles, zero runtime |
| Content | MDX via `@next/mdx` | Rich project pages, no CMS needed |
| Fonts | `next/font/google` | Zero layout shift, self-hosted at build time |
| Images | `next/image` | Automatic WebP, lazy loading, size optimization |
| Deployment | Vercel | Git-integrated, preview URLs, Analytics built-in |
| Analytics | Vercel Analytics | Privacy-respecting, no cookie banner needed |

---

## Directory Structure

```
portfolio/
│
├── app/                          # Next.js App Router root
│   ├── layout.tsx                # Root layout: fonts, metadata, theme provider
│   ├── page.tsx                  # / — Hero page
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx              # /projects — index with filter
│   │   └── [slug]/
│   │       └── page.tsx          # /projects/:slug — MDX detail
│   ├── contact/
│   │   └── page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── ui/                       # Atom components
│   │   ├── Badge.tsx             # Tech tag pill
│   │   ├── Button.tsx
│   │   └── Divider.tsx
│   ├── layout/                   # Structural components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx           # Consistent section wrapper w/ padding
│   └── sections/                 # Page-level sections
│       ├── Hero.tsx
│       ├── ProjectCard.tsx
│       ├── ProjectGrid.tsx
│       ├── TechStack.tsx
│       ├── Timeline.tsx
│       └── ContactLinks.tsx
│
├── content/
│   └── projects/                 # One .mdx file per project
│       ├── solidus-folium.mdx
│       ├── waste-classifier.mdx
│       └── dss-supplier.mdx
│
├── lib/
│   ├── projects.ts               # MDX loader, frontmatter parser
│   ├── metadata.ts               # Shared metadata builder
│   └── types.ts                  # Shared TypeScript types
│
├── public/
│   ├── og-image.png
│   └── favicon.ico
│
├── context/                      # Governance docs (not served)
│   ├── PRD.md
│   ├── ARCHITECTURE.md           # This file
│   ├── DESIGN.md
│   ├── RULES.md
│   ├── SCHEMA.md
│   └── INDEX.md
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── vercel.json
```

---

## Rendering Strategy

```
Page              Strategy    Reason
─────────────────────────────────────────────────
/                 SSG         Static hero, no dynamic data
/about            SSG         Static content
/projects         SSG         Project list from local MDX files
/projects/[slug]  SSG         MDX files = static, generateStaticParams
/contact          SSG         Static links/form markup
```

All pages are statically generated at build time. No server-side rendering needed. If blog is added in v2, individual posts remain SSG; the index page may use ISR with a short revalidation window.

---

## Data Flow

```
content/projects/*.mdx
        │
        ▼
lib/projects.ts (gray-matter + next/mdx)
        │
        ├──▶ /projects/page.tsx     (list: frontmatter only)
        │
        └──▶ /projects/[slug]/page.tsx  (detail: full MDX body)
```

`lib/projects.ts` exports two functions:
- `getAllProjects()` — returns array of frontmatter objects, sorted by year desc
- `getProjectBySlug(slug)` — returns frontmatter + compiled MDX content

---

## Component Hierarchy

```
RootLayout
  ├── Navbar
  ├── <page>
  │     ├── Section
  │     │     └── [section component]
  │     └── ...
  └── Footer
```

`Section` is a thin wrapper that enforces consistent horizontal padding and max-width (`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`). All page sections use it — never raw `div` with ad-hoc padding.

---

## Vercel Integration

This project is designed to be fully Vercel-native. Every feature below uses the Vercel platform as the primary provider — no third-party equivalents.

### `vercel.json`

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### Vercel Features Used

| Feature | How used | Where to enable |
|---------|----------|----------------|
| **Git Integration** | Auto-deploy on push to `main`; preview URL for every branch/PR | Vercel dashboard → Import repo |
| **Vercel Analytics** | Page view tracking, no cookie banner needed | `next.config.ts` + `@vercel/analytics` |
| **Vercel Speed Insights** | Core Web Vitals monitoring per route | `@vercel/speed-insights` |
| **Vercel OG (`@vercel/og`)** | Dynamic Open Graph images per project page | `app/api/og/route.tsx` |
| **Vercel Blob** (v2, optional) | Store project screenshots/images without `public/` folder bloat | Vercel dashboard → Storage → Blob |
| **Environment Variables** | Secrets management (Resend API key etc.) | Vercel dashboard → Project → Settings → Env Vars |
| **Preview Deployments** | Auto URL for every PR — share designs for feedback before merge | Automatic, no config needed |
| **Custom Domain** | Point your domain to Vercel — SSL automatic | Vercel dashboard → Domains |

### `next.config.ts` (Vercel-integrated)

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Vercel Analytics + Speed Insights
  experimental: {
    instrumentationHook: true,
  },

  // Allow glassmorphism backdrop-filter in production build
  // (no special config needed — Tailwind handles it)

  // If using Vercel Blob for images in v2:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
```

### `instrumentation.ts` (Vercel Speed Insights)

```ts
// instrumentation.ts — root level, next to app/
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { registerOTel } = await import('@vercel/otel')
    registerOTel({ serviceName: 'portfolio' })
  }
}
```

### `app/layout.tsx` — Analytics setup

```tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### `app/api/og/route.tsx` — Dynamic OG Image

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Portfolio'
  const tagline = searchParams.get('tagline') ?? ''

  return new ImageResponse(
    (
      <div style={{
        background: '#060D18',
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px',
        fontFamily: 'Inter',
        border: '1px solid #1E3A5F',
      }}>
        <p style={{ color: '#4FA3E0', fontSize: 18, margin: 0, fontFamily: 'monospace' }}>
          portfolio.vercel.app
        </p>
        <h1 style={{ color: '#E8F1FB', fontSize: 56, fontWeight: 700, margin: '12px 0' }}>
          {title}
        </h1>
        <p style={{ color: '#9BB5D4', fontSize: 22, margin: 0 }}>{tagline}</p>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
```

Use in project pages:
```ts
// app/projects/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug)
  return {
    openGraph: {
      images: [`/api/og?title=${project.title}&tagline=${project.tagline}`],
    },
  }
}
```

### Deployment Workflow

```
Local dev
  │  git push origin main
  ▼
GitHub (main branch)
  │  webhook trigger
  ▼
Vercel Build
  │  next build → SSG all pages
  │  runs type-check + lint
  ▼
Vercel Edge Network
  │  serves static assets from CDN globally
  ▼
yourname.vercel.app (or custom domain)
```

**Branch workflow:**
```
feature/hero-section  →  push  →  preview URL auto-created
                                   (share for feedback)
       │
       └── PR merged to main  →  production auto-deploy
```

### Environment Variables Reference

Set these in Vercel dashboard → Project → Settings → Environment Variables:

| Variable | Used for | Required |
|----------|----------|----------|
| `RESEND_API_KEY` | Contact form email sending | v2 only |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob image storage | v2 only |

No environment variables are required for v1. Never commit `.env.local` to git.

---

## Performance Budget

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| JS bundle (initial) | < 100KB gzip |
| Lighthouse Performance | ≥ 90 |

Achieved by: SSG, no client-side data fetching on initial load, `next/font`, `next/image`, minimal JS in components (prefer RSC over `use client` where possible).
