import { GraduationCap, Award, Code2, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-b border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-sky block mb-2 font-semibold">
            ABOUT ME
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            The person behind the data.
          </h2>
          <p className="text-slate-400 text-lg mt-2">
            Turning raw market data into reproducible quantitative research engines.
          </p>
        </div>

        {/* 4 Highlights Grid (Fio Stat Pillars) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-card-fio p-6 rounded-3xl">
            <GraduationCap className="w-6 h-6 text-accent-sky mb-3" />
            <div className="text-xl font-bold text-white font-mono">Quant & ML</div>
            <div className="text-sm font-semibold text-slate-300 mt-1">Specialization</div>
            <div className="text-xs text-slate-400 mt-2">IDX Equities · Signal Generation · Portfolio Optimization</div>
          </div>

          <div className="glass-card-fio p-6 rounded-3xl">
            <Award className="w-6 h-6 text-emerald-400 mb-3" />
            <div className="text-xl font-bold text-white font-mono">Solidus-Folium</div>
            <div className="text-sm font-semibold text-slate-300 mt-1">Featured Engine</div>
            <div className="text-xs text-slate-400 mt-2">6-Layer Architecture · SQLite · Walk-Forward Validation</div>
          </div>

          <div className="glass-card-fio p-6 rounded-3xl">
            <Code2 className="w-6 h-6 text-accent-cyan mb-3" />
            <div className="text-xl font-bold text-white font-mono">Python & SQL</div>
            <div className="text-sm font-semibold text-slate-300 mt-1">Core Tech Stack</div>
            <div className="text-xs text-slate-400 mt-2">PyTorch · LightGBM · Pandas · Next.js · Docker</div>
          </div>

          <div className="glass-card-fio p-6 rounded-3xl">
            <ShieldCheck className="w-6 h-6 text-purple-400 mb-3" />
            <div className="text-xl font-bold text-white font-mono">Rigorous</div>
            <div className="text-sm font-semibold text-slate-300 mt-1">Methodology</div>
            <div className="text-xs text-slate-400 mt-2">Purged CV · Triple Barrier Labeling · Zero Leakage</div>
          </div>
        </div>

        {/* Narrative Q&A Grid (Fio Style) */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card-fio p-8 rounded-3xl space-y-6">
            <div>
              <span className="font-mono text-xs uppercase text-accent-sky tracking-wider font-semibold block mb-1">
                WHO I AM
              </span>
              <p className="text-slate-300 text-base leading-relaxed">
                I am a Quantitative Developer and Data Scientist focused on quantitative trading systems and financial machine learning. 
                I build end-to-end research pipelines that eliminate survivorship bias and data leakage.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-accent-sky tracking-wider font-semibold block mb-1">
                WHAT MOTIVATES ME
              </span>
              <p className="text-slate-300 text-base leading-relaxed">
                I am driven by bridging the gap between complex raw market tick data and reproducible algorithmic decision-making. 
                Finding statistical edge in noisy financial datasets requires structural discipline.
              </p>
            </div>
          </div>

          <div className="glass-card-fio p-8 rounded-3xl space-y-6">
            <div>
              <span className="font-mono text-xs uppercase text-accent-sky tracking-wider font-semibold block mb-1">
                WHAT I ENJOY BUILDING
              </span>
              <p className="text-slate-300 text-base leading-relaxed">
                Production-grade CLI engines (`Solidus-Folium`), walk-forward validation suites, computer vision classification models, 
                and local-first datastores that operate with high performance.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-accent-sky tracking-wider font-semibold block mb-1">
                WHERE I&apos;M HEADING
              </span>
              <p className="text-slate-300 text-base leading-relaxed">
                Targeting Quantitative Research, Data Science, or ML Engineering roles where technical rigor, clean software architecture, 
                and clear communication meet real-world industry impact.
              </p>
            </div>
          </div>
        </div>

        {/* Location Status Bar */}
        <div className="mt-8 glass-card-fio p-4 rounded-2xl flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-accent-sky" />
            <span>Indonesia · Open to Remote & Onsite Roles</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Available for Full-time Roles & Projects</span>
          </div>
        </div>

      </div>
    </section>
  )
}
