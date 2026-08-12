import Link from 'next/link'
import { ProjectMeta } from '@/lib/types'
import { Sparkles } from 'lucide-react'

interface ProjectsSectionProps {
  projects: ProjectMeta[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-violet-light block mb-2 font-semibold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 inline" />
              <span>PROJECTS</span>
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              My Projects & Case Studies
            </h2>
            <p className="text-slate-400 text-lg mt-2 font-body">
              Every case study below reflects actual work — the problem, the approach, and what was learned.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="glass-card p-7 lg:p-10 rounded-3xl relative overflow-hidden group"
            >
              {/* Header Meta */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-5">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald shadow-sm shadow-emerald animate-pulse" />
                  <span className="uppercase tracking-wider text-emerald font-semibold">
                    {project.status}
                  </span>
                </div>
                <span>{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-violet-light transition-colors mb-3">
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>

              {/* Tagline */}
              <p className="text-slate-300 mb-6 text-sm sm:text-base font-body leading-relaxed max-w-3xl">
                {project.tagline}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-pill text-[11px] font-mono px-3 py-1 rounded-full text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center space-x-2 text-sm font-mono font-medium text-violet-light hover:text-white transition-colors group/link"
              >
                <span>Read full technical breakdown</span>
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
