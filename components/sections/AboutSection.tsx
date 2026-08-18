import { GraduationCap, Award, Code2, ShieldCheck, MapPin, CheckCircle2, Cpu, LineChart, BookOpen, Layers } from 'lucide-react'

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

        {/* Fio-style 2-Column Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 8 Stat & Competency Cards (2x4 Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Specialization */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              <div className="flex items-center space-x-2 text-arctic-blue mb-2">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase text-arctic-blue tracking-wider">SPECIALIZATION</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">Data Science</div>
              <div className="text-xs font-mono text-slate-700 mt-1 font-medium">Predictive Analytics & Modeling</div>
            </div>

            {/* Card 2: ML Engineering */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              <div className="flex items-center space-x-2 text-emerald-600 mb-2">
                <Cpu className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 tracking-wider">ENGINEERING</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">ML Pipelines</div>
              <div className="text-xs font-mono text-slate-700 mt-1 font-medium">PyTorch · LightGBM · Scikit-Learn</div>
            </div>

            {/* Card 3: Data Engineering */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              <div className="flex items-center space-x-2 text-arctic-blue mb-2">
                <Layers className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase text-arctic-blue tracking-wider">INFRASTRUCTURE</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">ETL & SQL</div>
              <div className="text-xs font-mono text-slate-700 mt-1 font-medium">SQLite · PostgreSQL · Docker</div>
            </div>

            {/* Card 4: Projects */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              <div className="flex items-center space-x-2 text-arctic-blue mb-2">
                <Award className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase text-arctic-blue tracking-wider">FEATURED</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">Solidus-Folium</div>
              <div className="text-xs font-mono text-slate-700 mt-1 font-medium">6-Layer Architecture CLI Engine</div>
            </div>

            {/* Card 5: Core Tech Stack */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              <div className="flex items-center space-x-2 text-arctic-blue mb-2">
                <Code2 className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase text-arctic-blue tracking-wider">CORE TECH</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">Python & SQL</div>
              <div className="text-xs font-mono text-slate-700 mt-1 font-medium">Pandas · NumPy · TypeScript</div>
            </div>

            {/* Card 6: Methodology */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              <div className="flex items-center space-x-2 text-arctic-blue mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase text-arctic-blue tracking-wider">METHODOLOGY</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">Rigorous CV</div>
              <div className="text-xs font-mono text-slate-700 mt-1 font-medium">Data Validation · Zero Leakage</div>
            </div>

            {/* Card 7: Analytics */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              <div className="flex items-center space-x-2 text-arctic-blue mb-2">
                <LineChart className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase text-arctic-blue tracking-wider">ANALYTICS</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">Data Analytics</div>
              <div className="text-xs font-mono text-slate-700 mt-1 font-medium">Exploratory & Feature Engineering</div>
            </div>

            {/* Card 8: Growth */}
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              <div className="flex items-center space-x-2 text-arctic-blue mb-2">
                <BookOpen className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase text-arctic-blue tracking-wider">GROWTH</span>
              </div>
              <div className="text-lg font-display font-extrabold text-slate-900">Continuous</div>
              <div className="text-xs font-mono text-slate-700 mt-1 font-medium">Production Architecture & ML</div>
            </div>

          </div>

          {/* RIGHT COLUMN: 4 Narrative Q&A Blocks (Fio-style Stack) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.75)] border border-white/90 border-t-white p-7 rounded-3xl space-y-6 shadow-[0_4px_20px_rgba(46,109,173,0.08)]">
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="h-0.5 w-4 bg-arctic-blue rounded-full" />
                  <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold">WHO I AM</span>
                </div>
                <p className="text-slate-800 text-sm leading-[1.75] font-display font-medium">
                  I am a Data Scientist and Machine Learning Engineer focused on predictive analytics, data pipelines, and AI systems. 
                  I build end-to-end research models and engineering pipelines with high reproducibility and statistical discipline.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="h-0.5 w-4 bg-arctic-blue rounded-full" />
                  <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold">WHAT MOTIVATES ME</span>
                </div>
                <p className="text-slate-800 text-sm leading-[1.75] font-display font-medium">
                  I am driven by bridging the gap between raw data and actionable decision-making. 
                  Extracting meaningful patterns from complex datasets requires technical rigor and clear structural architecture.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="h-0.5 w-4 bg-arctic-blue rounded-full" />
                  <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold">WHAT I ENJOY BUILDING</span>
                </div>
                <p className="text-slate-800 text-sm leading-[1.75] font-display font-medium">
                  Production-grade data pipelines, predictive ML classification models, computer vision classifiers, 
                  and web applications that translate complex quantitative outputs into clear visual interfaces.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="h-0.5 w-4 bg-arctic-blue rounded-full" />
                  <span className="font-mono text-xs uppercase text-arctic-blue tracking-wider font-extrabold">WHERE I&apos;M HEADING</span>
                </div>
                <p className="text-slate-800 text-sm leading-[1.75] font-display font-medium">
                  Targeting Data Science, Machine Learning Engineering, Data Engineering, or AI Engineering roles where software quality, 
                  analytical discipline, and collaborative problem-solving deliver measurable business impact.
                </p>
              </div>

            </div>

            {/* Bottom Status Bar */}
            <div className="backdrop-blur-[20px] bg-white/80 border border-white/90 border-t-white p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-700 shadow-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-arctic-blue" />
                <span className="font-bold text-slate-900">Indonesia · Open to Remote & Onsite Roles</span>
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
