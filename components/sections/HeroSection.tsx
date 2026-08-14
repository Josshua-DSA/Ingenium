import { DotMatrixWave } from '@/components/ui/DotMatrixWave'
import { BarChart3, Database, Code, Cpu } from 'lucide-react'

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden pt-28 pb-12 bg-slate-950 text-white"
    >
      {/* 3D Dot-Matrix Particle Wave Background */}
      <DotMatrixWave />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto">
        
        {/* Floating Skill Chips (Organized symmetrically around perimeter, high contrast) */}
        <div className="hidden lg:block relative w-full h-0 z-20">
          {/* Top Left Chip */}
          <div className="absolute -top-16 left-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-slate-700/60 flex items-center space-x-3 transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="p-1.5 rounded-lg bg-arctic-blue text-white">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-slate-400 font-semibold">DATA ENGINEERING</div>
              <div className="text-xs font-mono font-bold text-white">ETL & SQL Pipelines</div>
            </div>
          </div>

          {/* Top Right Chip */}
          <div className="absolute -top-16 right-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-slate-700/60 flex items-center space-x-3 transform rotate-2 hover:rotate-0 transition-transform">
            <div className="p-1.5 rounded-lg bg-slate-800 text-frost-cyan">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase font-bold text-slate-400">DATA SCIENCE</div>
              <div className="text-xs font-mono font-extrabold text-frost-cyan">Predictive Analytics ↗</div>
            </div>
          </div>

          {/* Mid Left Chip */}
          <div className="absolute top-44 left-10 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl border border-slate-700/60 flex items-center space-x-2 font-mono text-xs font-bold text-frost-cyan">
            <Code className="w-4 h-4 text-frost-cyan" />
            <span>PyTorch & LightGBM</span>
          </div>

          {/* Mid Right Chip */}
          <div className="absolute top-44 right-10 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-slate-700/60 flex items-center space-x-2.5 transform -rotate-2 hover:rotate-0 transition-transform">
            <Cpu className="w-4 h-4 text-frost-mid" />
            <span className="font-mono text-xs font-bold text-white">Machine Learning Pipelines</span>
          </div>
        </div>

        {/* Hero Central Content (Centered Single-Line Title & Figma Box) */}
        <div className="w-full flex flex-col items-center text-center space-y-10">
          
          {/* FIGMA SELECTION CANVAS BOX (CENTERED FULL WIDTH) */}
          <div className="w-full max-w-4xl mx-auto figma-selection-box p-6 sm:p-10 rounded-3xl relative shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-300">
            
            {/* Figma Corner Handles */}
            <div className="figma-handle -top-1.5 -left-1.5" />
            <div className="figma-handle -top-1.5 -right-1.5" />
            <div className="figma-handle -bottom-1.5 -left-1.5" />
            <div className="figma-handle -bottom-1.5 -right-1.5" />

            {/* Main Headline Text (FULL SINGLE LINE, RESPONSIVE FIT) */}
            <h1 className="font-display font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none select-none text-center drop-shadow-2xl">
              MY PORTFOLIO
            </h1>

          </div>

          {/* Roles & Focus Horizontal Capsule Bar (Centered Below Title, No Overlap) */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-4 z-20">
            
            <div className="text-[11px] font-mono uppercase text-frost-light font-bold tracking-widest">
              ROLES & TECHNICAL FOCUS
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              <span className="bg-slate-900/90 border border-frost-cyan/50 text-frost-cyan px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-bold shadow-lg flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-frost-cyan animate-pulse" />
                <span>Data Scientist</span>
              </span>
              <span className="bg-slate-900/90 border border-slate-700 text-slate-200 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-semibold shadow-md">
                ML Engineer
              </span>
              <span className="bg-slate-900/90 border border-slate-700 text-slate-200 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-semibold shadow-md">
                Data Engineer
              </span>
              <span className="bg-slate-900/90 border border-slate-700 text-slate-200 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-semibold shadow-md">
                Data Analyst
              </span>
              <span className="bg-slate-900/90 border border-slate-700 text-slate-200 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-semibold shadow-md">
                AI Engineer
              </span>
            </div>

          </div>

          {/* Presented By Capsule */}
          <div className="pt-2 z-20">
            <div className="inline-flex items-center space-x-2.5 bg-slate-900/90 border border-slate-700/80 px-6 py-2.5 rounded-full shadow-2xl text-xs sm:text-sm font-mono text-slate-200">
              <span>Presented by</span>
              <strong className="font-bold text-frost-cyan">Joshua — Data Scientist & ML Engineer</strong>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-20 flex flex-col items-center space-y-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest pt-4">
        <span>Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-700 flex justify-center p-1">
          <div className="w-1 h-2 bg-frost-cyan rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
