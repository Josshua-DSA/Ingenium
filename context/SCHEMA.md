# SCHEMA — Content & Data Types

All TypeScript types live in `lib/types.ts`. MDX frontmatter must conform to the schemas below — the MDX loader validates required fields at build time and throws if any are missing.

---

## Project (MDX Frontmatter)

```yaml
# content/projects/solidus-folium.mdx
---
title: "Solidus-Folium"
tagline: "A CLI-based quantitative research engine for Indonesian Stock Exchange equities."
tags: ["Python", "ML", "Quant", "CLI", "SQLite"]
status: "active"           # "active" | "completed" | "archived"
year: 2025
featured: true             # shown in hero section
github: "https://github.com/yourusername/solidus-folium"
demo: ""                   # empty string if no live demo
---
```

### Required Fields

| Field | Type | Validation |
|-------|------|------------|
| `title` | `string` | Non-empty |
| `tagline` | `string` | Max 120 chars, one sentence |
| `tags` | `string[]` | Min 1, max 8 items |
| `status` | `"active" \| "completed" \| "archived"` | Enum |
| `year` | `number` | 4-digit year, ≥ 2020 |
| `featured` | `boolean` | — |

### Optional Fields

| Field | Type | Default |
|-------|------|---------|
| `github` | `string` (URL) | `""` |
| `demo` | `string` (URL) | `""` |
| `image` | `string` (path from `/public`) | `""` |

---

## TypeScript Types (`lib/types.ts`)

```ts
export type ProjectStatus = 'active' | 'completed' | 'archived'

export interface ProjectMeta {
  slug: string              // derived from filename
  title: string
  tagline: string
  tags: string[]
  status: ProjectStatus
  year: number
  featured: boolean
  github?: string
  demo?: string
  image?: string
}

export interface Project extends ProjectMeta {
  content: React.ReactElement  // compiled MDX
}

// Used in /projects page for filter state
export type TagFilter = string | 'all'

// Used in Timeline component
export interface TimelineItem {
  year: string
  label: string
  description: string
  type: 'education' | 'project' | 'work'
}

// Used in TechStack component
export interface TechCategory {
  category: string           // e.g. "Languages", "ML / Data"
  items: string[]            // e.g. ["Python", "TypeScript"]
}
```

---

## MDX Loader API (`lib/projects.ts`)

```ts
// Returns all projects sorted by year descending
// Only frontmatter — no compiled MDX body (for list pages)
export async function getAllProjects(): Promise<ProjectMeta[]>

// Returns single project with compiled MDX content
// Throws notFound() if slug doesn't match any file
export async function getProjectBySlug(slug: string): Promise<Project>

// Returns only featured projects (featured: true)
// Used in Hero section
export async function getFeaturedProjects(): Promise<ProjectMeta[]>
```

---

## Metadata Schema (`lib/metadata.ts`)

```ts
// Generates Next.js Metadata object for a given page
export function buildMetadata(options: {
  title: string
  description: string
  path: string        // e.g. "/projects/solidus-folium"
  image?: string      // defaults to /og-image.png
}): Metadata
```

Base metadata (shared across all pages):
```ts
{
  metadataBase: new URL('https://yourname.vercel.app'),
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Your Name — Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle'
  }
}
```

---

## File-to-Slug Mapping

Slug is derived from the MDX filename — no explicit field needed:

```
content/projects/solidus-folium.mdx   →  slug: "solidus-folium"
content/projects/waste-classifier.mdx →  slug: "waste-classifier"
content/projects/dss-supplier.mdx     →  slug: "dss-supplier"
```

Route: `/projects/[slug]` maps directly to this slug.

---

## Sample Project Files

### `content/projects/solidus-folium.mdx`
```mdx
---
title: "Solidus-Folium"
tagline: "CLI-based quantitative research engine for IDX equities with ML signal generation and portfolio optimization."
tags: ["Python", "ML", "Quant", "CLI", "SQLite", "Rich", "Typer"]
status: "active"
year: 2025
featured: true
github: "https://github.com/yourusername/solidus-folium"
---

## Problem

Indonesian retail investors lack accessible tooling for systematic, data-driven equity research on IDX. Most quant methods are locked behind Bloomberg terminals or proprietary platforms.

## Approach

Built a 6-layer CLI system using Typer and Rich for the interface, SQLite3 for local storage, and an ML pipeline based on Triple Barrier Labeling with ensemble classifiers (RandomForest, XGBoost, LightGBM).

## Architecture

[describe the 6-layer architecture here]

## Key Results

- Walk-forward validation with Confidence-Weighted Allocation
- LQ45 / Kompas100 universe management
- Rich terminal dashboard with live portfolio metrics
```

### `content/projects/waste-classifier.mdx`
```mdx
---
title: "Waste Image Classifier"
tagline: "CNN-based waste sorting model trained on 3-class dataset with 5-fold stratified cross-validation."
tags: ["Python", "Deep Learning", "Computer Vision", "ConvNeXt"]
status: "completed"
year: 2024
featured: false
github: ""
---

## Problem

[content here]
```
