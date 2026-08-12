import Link from 'next/link'
import { ProjectMeta } from '@/lib/types'
import { Sparkles } from 'lucide-react'

interface ProjectsSectionProps {
  projects: ProjectMeta[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-sky block mb-2 font-semibold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 inline" />
              <span>CASE STUDIES</span>
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              Featured Engineering.
            </h2>
          </div>
        </div>

        <div className="grid gap-10">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="glass-card-fio p-8 lg:p-12 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400 animate-pulse" />
                  <span className="uppercase tracking-wider text-emerald-400 font-semibold">
                    {project.status}
                  </span>
                </div>
                <span className="text-slate-400 font-mono">{project.year}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white group-hover:text-sky-300 transition-colors mb-4">
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>

              <p className="text-slate-300 mb-8 text-base sm:text-xl font-body leading-relaxed max-w-3xl">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-950/70 border border-white/10 text-slate-300 font-mono text-xs px-3.5 py-1 rounded-full shadow-inner"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center space-x-2 text-sm font-mono font-medium text-accent-sky hover:text-sky-300 transition-colors group/link"
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
