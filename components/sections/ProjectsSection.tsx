import Link from 'next/link'
import { ProjectMeta } from '@/lib/types'
import { Sparkles, ArrowRight } from 'lucide-react'

interface ProjectsSectionProps {
  projects: ProjectMeta[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="w-full min-h-screen flex items-center justify-center py-24 relative z-10 text-text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-arctic-blue block mb-2 font-bold flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECTS</span>
          </span>
          <h2 className="font-accent italic text-3xl sm:text-5xl text-text-primary tracking-tight">
            Projects & Case Studies
          </h2>
          <p className="text-slate-700 text-base mt-3 font-display font-medium max-w-xl">
            Every case study reflects actual work — the problem, the approach, and what was learned.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-8 sm:p-10 rounded-3xl relative overflow-hidden group shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Header Meta */}
              <div className="flex items-center justify-between text-xs font-mono mb-5">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm animate-pulse" />
                  <span className="uppercase tracking-wider text-emerald-700 font-bold">
                    {project.status}
                  </span>
                </div>
                <span className="text-text-muted font-semibold">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-arctic-blue transition-colors mb-3">
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>

              {/* Tagline */}
              <p className="text-slate-700 mb-6 text-sm sm:text-base font-display font-medium leading-relaxed max-w-3xl">
                {project.tagline}
              </p>

              {/* Integrated Skill Tags (replaces standalone Skills Section) */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="backdrop-blur-[12px] bg-arctic-blue/10 border border-arctic-blue/20 text-arctic-blue text-xs font-mono font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center space-x-2 text-sm font-mono font-bold text-arctic-blue hover:text-arctic-mid transition-colors group/link"
              >
                <span>Read full technical breakdown</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
