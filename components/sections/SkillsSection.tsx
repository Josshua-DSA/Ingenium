export function SkillsSection() {
  const languages = ['Python', 'SQL', 'TypeScript', 'Bash', 'R']
  const mlSkills = ['PyTorch', 'LightGBM', 'XGBoost', 'scikit-learn', 'Pandas', 'NumPy', 'Triple Barrier', 'Walk-Forward']
  const infraSkills = ['SQLite3', 'PostgreSQL', 'Docker', 'Git', 'Linux Mint', 'Typer', 'Rich', 'Next.js 15']

  return (
    <section id="skills" className="w-full min-h-screen flex items-center justify-center py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10">
          <span className="font-mono text-[11px] uppercase tracking-widest text-frost-mid block mb-2 font-semibold">
            TECH SKILLS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary">
            Tech Skills.
          </h2>
          <p className="text-text-sub text-lg mt-2 font-body">
            Tools, languages, and ecosystems that I use to gather, model, and visualize data.
          </p>
        </div>

        <div className="glass-card-arctic p-8 rounded-3xl space-y-8">
          <div>
            <h3 className="font-mono text-xs text-text-sub uppercase mb-3 font-semibold">LANGUAGES</h3>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((s) => (
                <span key={s} className="skill-pill-arctic px-4 py-2 rounded-full font-mono text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-text-sub uppercase mb-3 font-semibold font-mono">QUANT & MACHINE LEARNING</h3>
            <div className="flex flex-wrap gap-2.5">
              {mlSkills.map((s) => (
                <span key={s} className="skill-pill-arctic px-4 py-2 rounded-full font-mono text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-text-sub uppercase mb-3 font-semibold">DATA & SYSTEMS INFRASTRUCTURE</h3>
            <div className="flex flex-wrap gap-2.5">
              {infraSkills.map((s) => (
                <span key={s} className="skill-pill-arctic px-4 py-2 rounded-full font-mono text-xs font-medium">
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
