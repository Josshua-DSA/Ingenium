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

      {/* 2. Traveling Orbital Background Spotlight (Merambat mengorbit 4 sudut layar: Top -> Right -> Bottom -> Left -> Top) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_70%_70%_at_var(--tw-gradient-stops),rgba(46,109,173,0.45),rgba(0,229,255,0.15),transparent_70%)] animate-spotlight-orbit" />

      {/* 3. Floating Ambient Micro Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-frost-cyan/60 blur-[1px] animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-arctic-blue/80 blur-[1px] animate-ping" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-frost-light/50 blur-[1px] animate-ping" style={{ animationDuration: '6s' }} />
      </div>

      {/* PERIMETER CHIPS AT EXTREME SCREEN EDGES (MENTOK KIRI & MENTOK KANAN VIEWPORT) */}
      <div className="hidden xl:block absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-30 px-6 lg:px-12">
        <div className="w-full flex items-center justify-between">
          
          {/* EXTREME LEFT FLANK CHIPS (MENTOK KIRI SCREEN) */}
          <div className="flex flex-col space-y-36 pointer-events-auto">
            {/* Top Left Mentok Kiri */}
            <div className="entry entry-d1 bg-slate-900/80 backdrop-blur-2xl px-4 py-2.5 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="p-1.5 rounded-lg bg-arctic-blue text-white">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] font-mono uppercase text-slate-400 font-semibold">DATA ENGINEERING</div>
                <div className="text-xs font-mono font-bold text-white">ETL & SQL Pipelines</div>
              </div>
            </div>

            {/* Bottom Left Mentok Kiri */}
            <div className="entry entry-d2 bg-slate-900/80 backdrop-blur-2xl px-4.5 py-2.5 rounded-full shadow-2xl border border-white/10 flex items-center space-x-2.5 font-mono text-xs font-bold text-frost-cyan transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Code className="w-4 h-4 text-frost-cyan" />
              <span>PyTorch & LightGBM</span>
            </div>
          </div>

          {/* EXTREME RIGHT FLANK CHIPS (MENTOK KANAN SCREEN) */}
          <div className="flex flex-col space-y-36 pointer-events-auto">
            {/* Top Right Mentok Kanan */}
            <div className="entry entry-d1 bg-slate-900/80 backdrop-blur-2xl px-4 py-2.5 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="p-1.5 rounded-lg bg-slate-800 text-frost-cyan">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] font-mono uppercase font-bold text-slate-400">DATA SCIENCE</div>
                <div className="text-xs font-mono font-extrabold text-frost-cyan">Predictive Analytics ↗</div>
              </div>
            </div>

            {/* Bottom Right Mentok Kanan */}
            <div className="entry entry-d2 bg-slate-900/80 backdrop-blur-2xl px-4 py-2.5 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-2.5 transform -rotate-4 hover:rotate-0 transition-transform duration-300">
              <Cpu className="w-4 h-4 text-frost-mid" />
              <span className="font-mono text-xs font-bold text-white">Machine Learning Pipelines</span>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Central Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto">
        <div className="w-full flex flex-col items-center text-center">
          
          {/* ULTRA macOS GLASS CONTAINER (CLEAN, CALM, SLEEK) */}
          <div className="entry entry-d2 relative w-full mx-auto">
            
            {/* Clean Glass Box */}
            <div className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/15 p-8 sm:p-14 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
              {/* Main Headline Text */}
              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-normal text-white leading-none select-none text-center drop-shadow-2xl">
                MY PORTFOLIO
              </h1>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Footer Row: Center Presented By + Bottom Right Scroll Indicator */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 flex items-center justify-between pt-6">
        
        {/* Empty Left Buffer for Symmetry */}
        <div className="w-24 hidden sm:block" />

        {/* Center: Presented by Joshua Remedial Syeba */}
        <div className="entry entry-d4 mx-auto">
          <div className="inline-flex items-center space-x-2.5 bg-slate-900/90 backdrop-blur-2xl border border-white/10 px-6 py-2.5 rounded-full shadow-2xl text-xs sm:text-sm font-mono text-slate-200">
            <span>Presented by</span>
            <strong className="font-bold text-frost-cyan">Joshua Remedial Syeba</strong>
          </div>
        </div>

        {/* Bottom Right Corner: Scroll to Explore + Arrow Bounce Icon */}
        <div className="entry entry-d4 flex items-center space-x-2 text-slate-400 font-mono text-[11px] uppercase tracking-widest bg-slate-900/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-lg">
          <span>Scroll to explore</span>
          <div className="w-4 h-4 rounded-full border border-frost-cyan flex items-center justify-center">
            <span className="text-frost-cyan text-[10px] animate-bounce">↓</span>
          </div>
        </div>

      </div>
    </section>
  )
}
