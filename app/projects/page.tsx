import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { getAllProjects } from '@/lib/projects'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Projects & Engineering Work',
  description: 'Quantitative research engines, ML pipelines, and technical tooling built for IDX equities.',
  path: '/projects',
})

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <Section>
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          Work
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl font-body">
          A selection of quantitative engines, machine learning models, and system utilities. 
          Each project includes a technical breakdown of architecture and outcomes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group transition-all duration-300 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] hover:bg-[rgba(14,30,54,0.55)] hover:backdrop-blur-[20px] hover:backdrop-saturate-[180%] hover:border-t-[rgba(78,163,224,0.18)] hover:border-x-[rgba(30,58,95,0.35)] hover:border-b-[rgba(30,58,95,0.35)] rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-3">
                <span className="uppercase tracking-wider text-[var(--color-success)]">
                  {project.status}
                </span>
                <span>{project.year}</span>
              </div>
              <h2 className="font-display text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-blue-bright)] transition-colors mb-2">
                {project.title}
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm mb-6 line-clamp-3">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-mono text-xs px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
