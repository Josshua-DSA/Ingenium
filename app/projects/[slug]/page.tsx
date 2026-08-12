import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import { buildMetadata } from '@/lib/metadata'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return {}

  return buildMetadata({
    title: project.title,
    description: project.tagline,
    path: `/projects/${slug}`,
  })
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <Section>
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="font-mono text-xs text-[var(--color-blue-bright)] hover:underline inline-flex items-center mb-6"
        >
          ← Back to work
        </Link>
        <div className="flex items-center space-x-3 text-xs font-mono text-[var(--color-text-muted)] mb-3">
          <span className="uppercase tracking-wider text-[var(--color-success)] font-semibold">
            {project.status}
          </span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl font-body leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-mono text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--color-border-subtle)] pt-10 mt-10">
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-code:font-mono prose-code:text-[var(--color-blue-bright)] prose-pre:bg-[var(--color-bg-elevated)] prose-pre:border prose-pre:border-[var(--color-border-subtle)]">
          {/* Simple plain render for MDX body */}
          <div className="whitespace-pre-wrap font-body text-[var(--color-text-secondary)]">
            {project.content}
          </div>
        </div>
      </div>
    </Section>
  )
}
