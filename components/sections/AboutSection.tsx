import { Cpu, Database, Award, Code2, MapPin, CheckCircle2 } from 'lucide-react'

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
        </div>

        {/* 2-Column Layout: 4 Stat Cards (Left) + 2 Q&A Blocks (Right) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: 4 Specific Stat Cards (2x2 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Solidus-Folium — unique flagship project */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-2 text-arctic-blue mb-3">
                <Award className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">FLAGSHIP</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">Solidus-Folium</div>
              <div className="text-xs font-mono text-slate-700 mt-1.5 font-medium leading-relaxed">6-layer quantitative research engine for IDX equities with walk-forward validation.</div>
            </div>

            {/* Card 2: ML Pipeline Architecture — concrete skill */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-2 text-emerald-600 mb-3">
                <Cpu className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">ML PIPELINE</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">PyTorch + LightGBM</div>
              <div className="text-xs font-mono text-slate-700 mt-1.5 font-medium leading-relaxed">End-to-end training pipelines with purged cross-validation and triple barrier labeling.</div>
            </div>

            {/* Card 3: Data Infrastructure — concrete stack */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-2 text-arctic-blue mb-3">
                <Database className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">DATA INFRA</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">SQL + Docker</div>
              <div className="text-xs font-mono text-slate-700 mt-1.5 font-medium leading-relaxed">SQLite & PostgreSQL datastores, containerized ETL pipelines, CLI-first tooling.</div>
            </div>

            {/* Card 4: Web Engineering — concrete output */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-2 text-arctic-blue mb-3">
                <Code2 className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">WEB + VIZ</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">Next.js + Python</div>
              <div className="text-xs font-mono text-slate-700 mt-1.5 font-medium leading-relaxed">Full-stack portfolio, data dashboards, and interactive visual interfaces.</div>
            </div>

          </div>

          {/* RIGHT: 2 Compact Q&A Blocks + Status Bar */}
          <div className="lg:col-span-7 space-y-6">
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-8 rounded-3xl space-y-6 shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="h-0.5 w-4 bg-arctic-blue rounded-full" />
                  <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold">WHO I AM & WHAT DRIVES ME</span>
                </div>
                <p className="text-slate-800 text-sm leading-[1.8] font-display font-medium">
                  Data Scientist and ML Engineer who builds end-to-end research pipelines — from raw data ingestion to model deployment. 
                  I care about reproducibility, zero data leakage, and systems that produce trustworthy predictions under real-world conditions. 
                  My work on Solidus-Folium taught me that the gap between a working notebook and a production engine is where most value gets lost.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="h-0.5 w-4 bg-arctic-blue rounded-full" />
                  <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold">WHERE I&apos;M HEADING</span>
                </div>
                <p className="text-slate-800 text-sm leading-[1.8] font-display font-medium">
                  Looking for Data Science, ML Engineering, or Data Engineering roles where I can apply quantitative rigor 
                  to real business problems. I want to work on teams that value clean architecture, measurable outcomes, 
                  and honest evaluation over inflated metrics.
                </p>
              </div>

            </div>

            {/* Bottom Status Bar */}
            <div className="backdrop-blur-[20px] bg-white/80 border border-white/90 border-t-white p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-700 shadow-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-arctic-blue" />
                <span className="font-bold text-slate-900">Indonesia · Open to Remote & Onsite</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Available for Roles & Projects</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
