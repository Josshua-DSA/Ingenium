export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-sky block mb-2 font-semibold">
            TECHNICAL ECOSYSTEM
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Tech Skills & Tools.
          </h2>
          <p className="text-slate-400 text-lg mt-2">
            Tools, frameworks, and languages I utilize to ingest, model, validate, and deploy quantitative software.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Languages */}
          <div className="glass-card-fio p-6 rounded-3xl">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-sky mb-4 font-bold">
              ● Languages
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['Python', 'SQL', 'TypeScript', 'Bash', 'R'].map((s) => (
                <span key={s} className="bg-slate-900/80 border border-white/10 text-slate-200 px-3 py-1.5 rounded-xl">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ML & Quant */}
          <div className="glass-card-fio p-6 rounded-3xl">
            <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-4 font-bold">
              ● Quant & Machine Learning
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['PyTorch', 'LightGBM', 'XGBoost', 'scikit-learn', 'Pandas', 'NumPy', 'Triple Barrier', 'Walk-Forward'].map((s) => (
                <span key={s} className="bg-slate-900/80 border border-white/10 text-slate-200 px-3 py-1.5 rounded-xl">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Data & Systems */}
          <div className="glass-card-fio p-6 rounded-3xl">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-cyan mb-4 font-bold">
              ● Data & Systems
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {['SQLite3', 'PostgreSQL', 'Docker', 'Git', 'Linux Mint', 'Typer', 'Rich', 'Next.js 15'].map((s) => (
                <span key={s} className="bg-slate-900/80 border border-white/10 text-slate-200 px-3 py-1.5 rounded-xl">
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
