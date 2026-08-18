import { Calendar, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    role: 'Quantitative Lead & Developer',
    organization: 'Solidus-Folium Engine',
    period: '2024 — Present',
    type: 'Core Engineering',
    highlights: [
      'Architected 6-layer modular CLI engine in Python with Typer & Rich.',
      'Implemented Purged Group Time-Series Cross Validation eliminating data leakage.',
      'Ingested 700+ IDX stock tickers into local SQLite datastore for zero-latency backtesting.',
    ],
  },
  {
    role: 'Machine Learning Research Engineer',
    organization: 'Computer Vision & AI Lab',
    period: '2024',
    type: 'Academic Research',
    highlights: [
      'Trained ConvNeXt CNN model on multi-class waste image dataset.',
      'Achieved 98.4% validation accuracy using stratified cross-validation.',
      'Exported lightweight ONNX weights for edge device deployment.',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full min-h-screen flex items-center justify-center py-24 relative z-10 text-text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-arctic-blue block mb-2 font-bold">
            EXPERIENCE
          </span>
          <h2 className="font-accent italic text-3xl sm:text-5xl text-text-primary tracking-tight">
            Experience & Activities.
          </h2>
          <p className="text-slate-700 text-base mt-3 font-display font-medium max-w-xl">
            Engineering positions, research work, and quantitative projects.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm text-arctic-blue font-bold mt-0.5">
                    {exp.organization}
                  </div>
                </div>
                <div className="flex items-center space-x-3 font-mono text-xs">
                  <span className="bg-arctic-blue/10 border border-arctic-blue/20 px-3 py-1 rounded-full text-arctic-blue font-bold">
                    {exp.type}
                  </span>
                  <div className="flex items-center space-x-1.5 bg-white/60 border border-white/90 px-3 py-1 rounded-full text-slate-700 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-arctic-blue" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-arctic-blue/10 text-slate-800 text-sm font-display font-medium">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
