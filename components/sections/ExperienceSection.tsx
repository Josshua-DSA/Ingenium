import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

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
    <section id="experience" className="w-full min-h-screen flex items-center justify-center py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-frost-mid block mb-2 font-semibold">
            BACKGROUND & MILESTONES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary">
            Experience & Activities.
          </h2>
          <p className="text-text-sub text-lg mt-2 font-body">
            My engineering journey, research positions, and quantitative projects.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-card-arctic p-8 rounded-3xl relative">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-text-primary">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm text-frost-mid font-semibold mt-0.5">
                    {exp.organization}
                  </div>
                </div>
                <div className="flex items-center space-x-3 font-mono text-xs text-text-sub">
                  <span className="bg-navy-mid border border-frost-mid/30 px-3 py-1 rounded-full text-frost-light">
                    {exp.type}
                  </span>
                  <div className="flex items-center space-x-1.5 bg-navy-dark px-3 py-1 rounded-full border border-navy-mid">
                    <Calendar className="w-3.5 h-3.5 text-frost-mid" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-navy-mid/60 text-slate-300 text-sm font-body">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-status-emerald shrink-0 mt-0.5" />
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
