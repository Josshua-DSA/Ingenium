import { BarChart3, Database, Code, Cpu } from 'lucide-react'

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden pt-28 pb-12 bg-slate-950 text-white"
    >
      {/* 1. Subtle Architectural Grid Coordinates Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.12]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(168, 212, 240, 0.4)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* 2. Deep Radial Spotlight & Breathing Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(46,109,173,0.3),rgba(255,255,255,0))] animate-pulse" style={{ animationDuration: '6s' }} />

      {/* 3. Floating Ambient Micro Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-frost-cyan/60 blur-[1px] animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-arctic-blue/80 blur-[1px] animate-ping" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-frost-light/50 blur-[1px] animate-ping" style={{ animationDuration: '6s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto">
        
        {/* Organic Asymmetrical Perimeter Chips (Randomized distances & rotations filling space) */}
        <div className="hidden lg:block relative w-full h-0 z-20">
          {/* Top Left Chip - Far Top Left Angle */}
          <div className="entry entry-d1 absolute -top-28 -left-8 bg-slate-900/70 backdrop-blur-2xl px-4 py-2 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="p-1.5 rounded-lg bg-arctic-blue text-white">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-slate-400 font-semibold">DATA ENGINEERING</div>
              <div className="text-xs font-mono font-bold text-white">ETL & SQL Pipelines</div>
            </div>
          </div>

          {/* Top Right Chip - Higher Top Right Angle */}
          <div className="entry entry-d1 absolute -top-32 right-12 bg-slate-900/70 backdrop-blur-2xl px-4 py-2 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-3 transform rotate-4 hover:rotate-0 transition-transform duration-300">
            <div className="p-1.5 rounded-lg bg-slate-800 text-frost-cyan">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase font-bold text-slate-400">DATA SCIENCE</div>
              <div className="text-xs font-mono font-extrabold text-frost-cyan">Predictive Analytics ↗</div>
            </div>
          </div>

          {/* Lower Left Chip - Outer Left Low Angle */}
          <div className="entry entry-d2 absolute top-56 -left-20 bg-slate-900/70 backdrop-blur-2xl px-4 py-2 rounded-full shadow-2xl border border-white/10 flex items-center space-x-2.5 font-mono text-xs font-bold text-frost-cyan transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Code className="w-4 h-4 text-frost-cyan" />
            <span>PyTorch & LightGBM</span>
          </div>

          {/* Lower Right Chip - Outer Lower Right Angle */}
          <div className="entry entry-d2 absolute top-64 -right-16 bg-slate-900/70 backdrop-blur-2xl px-4 py-2 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-2.5 transform rotate-5 hover:rotate-0 transition-transform duration-300">
            <Cpu className="w-4 h-4 text-frost-mid" />
            <span className="font-mono text-xs font-bold text-white">Machine Learning Pipelines</span>
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="w-full flex flex-col items-center text-center space-y-10">
          
          {/* ULTRA macOS GLASS CONTAINER (NO CORNER HANDLES, ULTRA TRANSPARENT) */}
          <div className="entry entry-d2 w-full max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-3xl border border-white/15 p-8 sm:p-12 rounded-3xl relative shadow-[0_30px_90px_rgba(0,0,0,0.7)] transition-all duration-300">
            
            {/* Main Headline Text */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-normal text-white leading-none select-none text-center drop-shadow-2xl">
              MY PORTFOLIO
            </h1>

          </div>

          {/* Roles & Focus Horizontal Capsule Bar */}
          <div className="entry entry-d3 w-full max-w-4xl mx-auto flex flex-col items-center space-y-4 z-20">
            
            <div className="text-[11px] font-mono uppercase text-frost-light font-bold tracking-widest">
              ROLES & TECHNICAL FOCUS
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              <span className="bg-slate-900/80 backdrop-blur-xl border border-frost-cyan/50 text-frost-cyan px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-bold shadow-lg flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-frost-cyan animate-pulse" />
                <span>Data Scientist</span>
              </span>
              <span className="bg-slate-900/80 backdrop-blur-xl border border-white/10 text-slate-200 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-semibold shadow-md">
                ML Engineer
              </span>
              <span className="bg-slate-900/80 backdrop-blur-xl border border-white/10 text-slate-200 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-semibold shadow-md">
                Data Engineer
              </span>
              <span className="bg-slate-900/80 backdrop-blur-xl border border-white/10 text-slate-200 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-semibold shadow-md">
                Data Analyst
              </span>
              <span className="bg-slate-900/80 backdrop-blur-xl border border-white/10 text-slate-200 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-semibold shadow-md">
                AI Engineer
              </span>
            </div>

          </div>

          {/* Presented By Capsule */}
          <div className="entry entry-d4 pt-2 z-20">
            <div className="inline-flex items-center space-x-2.5 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-6 py-2.5 rounded-full shadow-2xl text-xs sm:text-sm font-mono text-slate-200">
              <span>Presented by</span>
              <strong className="font-bold text-frost-cyan">Joshua — Data Scientist & ML Engineer</strong>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="entry entry-d4 relative z-20 flex flex-col items-center space-y-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest pt-4">
        <span>Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-700 flex justify-center p-1">
          <div className="w-1 h-2 bg-frost-cyan rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
