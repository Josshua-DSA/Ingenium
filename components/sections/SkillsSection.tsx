export function SkillsSection() {
  const languages = ['Python', 'SQL', 'TypeScript', 'Bash', 'R']
  const mlSkills = ['PyTorch', 'LightGBM', 'XGBoost', 'scikit-learn', 'Pandas', 'NumPy', 'Triple Barrier', 'Walk-Forward']
  const dataSystems = ['SQLite3', 'PostgreSQL', 'Docker', 'Git', 'Linux Mint', 'Typer', 'Rich', 'Next.js 15']

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="font-mono text-[11px] uppercase tracking-widest text-violet-light block mb-2 font-semibold">
            TECH SKILLS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Tech Skills.
          </h2>
          <p className="text-slate-400 text-lg mt-2 font-body">
            Tools, languages, and ecosystems that I use to gather, model, and visualize data.
          </p>
        </div>

        {/* Fio-style Pill Container */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-3xl">
            <h3 className="font-mono text-xs uppercase tracking-wider text-violet-light mb-3 font-semibold">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((s) => (
                <span key={s} className="skill-pill px-4 py-2 rounded-full text-xs font-mono text-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl">
            <h3 className="font-mono text-xs uppercase tracking-wider text-emerald mb-3 font-semibold">
              Quant & Machine Learning
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {mlSkills.map((s) => (
                <span key={s} className="skill-pill px-4 py-2 rounded-full text-xs font-mono text-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl">
            <h3 className="font-mono text-xs uppercase tracking-wider text-cyan mb-3 font-semibold">
              Data & Systems Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {dataSystems.map((s) => (
                <span key={s} className="skill-pill px-4 py-2 rounded-full text-xs font-mono text-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
