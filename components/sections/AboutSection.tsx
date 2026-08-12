import { GraduationCap, Award, Code2, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="font-mono text-[11px] uppercase tracking-widest text-violet-light block mb-2 font-semibold">
            ABOUT ME
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            The person behind the data.
          </h2>
          <p className="text-slate-400 text-lg mt-2 font-body">
            Turning curiosity into data-driven solutions.
          </p>
        </div>

        {/* Fio-style 4x2 Stat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="glass-card p-5 rounded-2xl">
            <GraduationCap className="w-5 h-5 text-violet-light mb-2" />
            <div className="text-xl font-bold text-white font-mono">Quant & ML</div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Specialization</div>
            <div className="text-[11px] text-slate-500 mt-2 font-mono">IDX Equities · Signal Generation · Portfolio Optimization</div>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <Award className="w-5 h-5 text-emerald mb-2" />
            <div className="text-xl font-bold text-white font-mono">Solidus-Folium</div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Featured Engine</div>
            <div className="text-[11px] text-slate-500 mt-2 font-mono">6-Layer Architecture · SQLite · Walk-Forward</div>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <Code2 className="w-5 h-5 text-cyan mb-2" />
            <div className="text-xl font-bold text-white font-mono">Python & SQL</div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Core Tech Stack</div>
            <div className="text-[11px] text-slate-500 mt-2 font-mono">PyTorch · LightGBM · Pandas · Next.js · Docker</div>
          </div>

          <div className="glass-card p-5 rounded-2xl">
            <ShieldCheck className="w-5 h-5 text-violet-light mb-2" />
            <div className="text-xl font-bold text-white font-mono">Rigorous</div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Methodology</div>
            <div className="text-[11px] text-slate-500 mt-2 font-mono">Purged CV · Triple Barrier · Zero Leakage</div>
          </div>
        </div>

        {/* Fio-style Narrative Q&A Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card p-7 rounded-3xl space-y-5">
            <div>
              <span className="font-mono text-[11px] uppercase text-violet-light tracking-wider font-semibold block mb-1">WHO I AM</span>
              <p className="text-slate-300 text-sm leading-relaxed font-body">
                I am a Quantitative Developer and Data Scientist focused on quantitative trading systems and financial machine learning. 
                I build end-to-end research pipelines that eliminate survivorship bias and data leakage.
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase text-violet-light tracking-wider font-semibold block mb-1">WHAT MOTIVATES ME</span>
              <p className="text-slate-300 text-sm leading-relaxed font-body">
                I am driven by bridging the gap between complex raw market tick data and reproducible algorithmic decision-making. 
                Finding statistical edge in noisy financial datasets requires structural discipline.
              </p>
            </div>
          </div>

          <div className="glass-card p-7 rounded-3xl space-y-5">
            <div>
              <span className="font-mono text-[11px] uppercase text-violet-light tracking-wider font-semibold block mb-1">WHAT I ENJOY BUILDING</span>
              <p className="text-slate-300 text-sm leading-relaxed font-body">
                Production-grade CLI engines (Solidus-Folium), walk-forward validation suites, computer vision classification models, 
                and local-first datastores that operate with high performance.
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase text-violet-light tracking-wider font-semibold block mb-1">WHERE I&apos;M HEADING</span>
              <p className="text-slate-300 text-sm leading-relaxed font-body">
                Targeting Quantitative Research, Data Science, or ML Engineering roles where technical rigor, clean software architecture, 
                and clear communication meet real-world industry impact.
              </p>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-6 glass-card p-4 rounded-2xl flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-violet-light" />
            <span>Indonesia · Open to Remote & Onsite Roles</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Available for Full-time Roles & Projects</span>
          </div>
        </div>

      </div>
    </section>
  )
}
