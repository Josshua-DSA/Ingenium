import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { DepthGrid } from '@/components/sections/DepthGrid'
import { getFeaturedProjects } from '@/lib/projects'

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects()

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden border-b border-[var(--color-border-subtle)]">
        <DepthGrid />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] px-3 py-1 rounded-full text-xs font-mono text-[var(--color-blue-bright)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-blue-bright)] animate-pulse" />
            <span>quant-research-engine // idx-equities</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] max-w-3xl leading-[1.1]">
            I build systematic research engines for IDX equities.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl font-body leading-relaxed">
            Data scientist and developer specializing in quantitative trading models, 
            machine learning pipelines, and technical tooling.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--color-blue-mid)] hover:bg-[var(--color-blue-bright)] text-white font-medium text-sm transition-colors"
            >
              Explore Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] text-[var(--color-text-primary)] font-medium text-sm transition-colors"
            >
              About & Stack
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Showcase */}
      {featuredProjects.length > 0 && (
        <Section className="bg-[var(--color-bg-base)]">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
              Featured Work
            </h2>
            <Link 
              href="/projects" 
              className="font-mono text-sm text-[var(--color-blue-bright)] hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="backdrop-blur-[40px] backdrop-saturate-[180%] bg-[rgba(6,13,24,0.85)] border border-t-[rgba(78,163,224,0.22)] border-x-[rgba(30,58,95,0.4)] border-b-[rgba(30,58,95,0.4)] rounded-lg p-6 lg:p-8"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-3">
                  <span className="uppercase tracking-wider text-[var(--color-success)]">
                    ● {project.status}
                  </span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  <Link href={`/projects/${project.slug}`} className="hover:text-[var(--color-blue-bright)] transition-colors">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 text-base max-w-3xl">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-mono text-xs px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-mono text-[var(--color-blue-bright)] hover:underline"
                >
                  Read technical breakdown →
                </Link>
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}
