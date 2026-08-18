'use client'

import { useState } from 'react'
import { ChevronRight, Calendar, Rocket, FlaskConical, Code2, Trophy } from 'lucide-react'

const timelineEvents = [
  {
    date: 'Early 2025',
    title: 'First ML Models & Python Foundations',
    description: 'Started building classification and regression models with scikit-learn. Learned data cleaning, feature engineering, and evaluation metrics from scratch.',
    icon: FlaskConical,
    tags: ['Python', 'scikit-learn', 'Pandas'],
  },
  {
    date: 'Mid 2025',
    title: 'Deep Learning & Computer Vision',
    description: 'Built CNN-based waste classification models using PyTorch. Explored transfer learning and data augmentation for low-resource datasets.',
    icon: Code2,
    tags: ['PyTorch', 'CNN', 'Computer Vision'],
  },
  {
    date: 'Late 2025',
    title: 'Solidus-Folium Research Engine Begins',
    description: 'Designed 6-layer quantitative research architecture for IDX equities. Implemented walk-forward validation, purged cross-validation, and triple barrier labeling.',
    icon: Rocket,
    tags: ['LightGBM', 'SQLite', 'CLI', 'Typer'],
  },
  {
    date: 'Early 2026',
    title: 'Data Engineering & ETL Pipelines',
    description: 'Built containerized ETL pipelines with Docker and PostgreSQL. Focused on data validation, schema enforcement, and reproducible data workflows.',
    icon: Calendar,
    tags: ['Docker', 'PostgreSQL', 'ETL'],
  },
  {
    date: '2026',
    title: 'Portfolio & Full-Stack Development',
    description: 'Designed and built this portfolio using Next.js 15, TypeScript, and Tailwind CSS with a custom Arctic Frost design system. Deployed on Vercel.',
    icon: Trophy,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
]

export function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = timelineEvents[activeIndex]
  const ActiveIcon = active.icon

  return (
    <section id="journey" className="w-full min-h-screen flex items-center justify-center py-24 relative z-10 text-text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-arctic-blue block mb-2 font-bold">
            JOURNEY
          </span>
          <h2 className="font-accent italic text-3xl sm:text-5xl text-text-primary tracking-tight">
            How I got here.
          </h2>
          <p className="text-slate-700 text-base mt-3 font-display font-medium max-w-xl">
            A chronological path through the projects, tools, and problems that shaped my approach.
          </p>
        </div>

        {/* Timeline Layout: Left Dots + Right Detail Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Vertical Timeline Navigation */}
          <div className="lg:col-span-4 relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-arctic-blue/15 rounded-full" />

            <div className="space-y-2">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon
                const isActive = index === activeIndex
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full flex items-start space-x-4 pl-0 pr-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                      isActive 
                        ? 'bg-arctic-blue/10 border border-arctic-blue/20' 
                        : 'hover:bg-white/60'
                    }`}
                  >
                    {/* Dot Indicator */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isActive 
                        ? 'bg-arctic-blue text-white shadow-md' 
                        : 'bg-white/80 text-arctic-blue border border-arctic-blue/20'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? 'text-arctic-blue' : 'text-text-muted'}`}>
                        {event.date}
                      </div>
                      <div className={`text-sm font-display font-bold truncate ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {event.title}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-2 transition-all duration-200 ${
                      isActive ? 'text-arctic-blue opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                    }`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT: Active Event Detail Card */}
          <div className="lg:col-span-8">
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-8 sm:p-10 rounded-3xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] transition-all duration-300">
              
              {/* Date + Icon Badge */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-arctic-blue text-white flex items-center justify-center shadow-md">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-arctic-blue">{active.date}</div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">{active.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-800 text-sm sm:text-base leading-[1.8] font-display font-medium mb-6">
                {active.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span key={tag} className="backdrop-blur-[12px] bg-arctic-blue/10 border border-arctic-blue/20 text-arctic-blue px-3 py-1 rounded-full text-xs font-mono font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
