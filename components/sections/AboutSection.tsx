import { GraduationCap, Award, Code2, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center py-24 relative z-10 text-text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-arctic-blue block mb-2 font-bold">
            ABOUT ME
          </span>
          <h2 className="font-accent italic text-3xl sm:text-5xl text-text-primary tracking-tight">
            The person behind the data.
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3 font-display max-w-xl font-medium">
            Turning curiosity into scalable data-driven solutions.
          </p>
        </div>

        {/* 4 Pillar Stat Cards (Apple Light Glass with Dark Contrast Text) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          
          <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-arctic-blue/10 flex items-center justify-center text-arctic-blue mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-xl font-display font-extrabold text-slate-900">Data & ML</div>
            <div className="text-xs font-mono font-bold text-arctic-blue mt-1">Specialization</div>
            <div className="text-xs font-mono text-slate-700 mt-2.5 leading-relaxed font-semibold">Predictive Analytics · Model Training · AI Engineering</div>
          </div>

          <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-xl font-display font-extrabold text-slate-900">Solidus-Folium</div>
            <div className="text-xs font-mono font-bold text-emerald-700 mt-1">Featured Engine</div>
            <div className="text-xs font-mono text-slate-700 mt-2.5 leading-relaxed font-semibold">6-Layer Architecture · SQLite · Walk-Forward</div>
          </div>

          <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-arctic-bright/10 flex items-center justify-center text-arctic-blue mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-xl font-display font-extrabold text-slate-900">Python & SQL</div>
            <div className="text-xs font-mono font-bold text-arctic-blue mt-1">Core Tech Stack</div>
            <div className="text-xs font-mono text-slate-700 mt-2.5 leading-relaxed font-semibold">PyTorch · LightGBM · Pandas · Next.js · Docker</div>
          </div>

          <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-arctic-blue/10 flex items-center justify-center text-arctic-blue mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xl font-display font-extrabold text-slate-900">Rigorous</div>
            <div className="text-xs font-mono font-bold text-arctic-blue mt-1">Methodology</div>
            <div className="text-xs font-mono text-slate-700 mt-2.5 leading-relaxed font-semibold">Cross-Validation · Data Validation · Zero Leakage</div>
          </div>

        </div>

        {/* Narrative Q&A Cards (Deep Slate High Contrast Text #0F172A / #334155) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          
          <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-8 rounded-3xl space-y-6 shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
            <div>
              <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold block mb-2">WHO I AM</span>
              <p className="text-slate-800 text-sm leading-[1.75] font-display font-medium">
                I am a Data Scientist and Machine Learning Engineer focused on predictive analytics, data pipelines, and AI systems. 
                I build end-to-end research models and engineering pipelines with high reproducibility and statistical discipline.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold block mb-2">WHAT MOTIVATES ME</span>
              <p className="text-slate-800 text-sm leading-[1.75] font-display font-medium">
                I am driven by bridging the gap between raw data and actionable decision-making. 
                Extracting meaningful patterns from complex datasets requires technical rigor and clear structural architecture.
              </p>
            </div>
          </div>

          <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-8 rounded-3xl space-y-6 shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
            <div>
              <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold block mb-2">WHAT I ENJOY BUILDING</span>
              <p className="text-slate-800 text-sm leading-[1.75] font-display font-medium">
                Production-grade data pipelines, predictive ML classification models, computer vision classifiers, 
                and web applications that translate complex quantitative outputs into clear visual interfaces.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-bold block mb-2">WHERE I&apos;M HEADING</span>
              <p className="text-slate-800 text-sm leading-[1.75] font-display font-medium">
                Targeting Data Science, Machine Learning Engineering, Data Engineering, or AI Engineering roles where software quality, 
                analytical discipline, and collaborative problem-solving deliver measurable business impact.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Status Bar */}
        <div className="backdrop-blur-[20px] bg-white/80 border border-white/90 border-t-white p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-700 shadow-sm">
          <div className="flex items-center space-x-2.5">
            <MapPin className="w-4 h-4 text-arctic-blue" />
            <span className="font-bold text-slate-900">Indonesia · Open to Remote & Onsite Roles</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-800 bg-emerald-50 border border-emerald-300 px-3.5 py-1.5 rounded-full font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Available for Full-time Roles & Projects</span>
          </div>
        </div>

      </div>
    </section>
  )
}
