import { HangingLanyard } from '@/components/ui/HangingLanyard'
import { DotMatrixWave } from '@/components/ui/DotMatrixWave'
import { MousePointer, BarChart3, Database, Code, Cpu } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden min-h-[620px] flex items-center justify-center">
      {/* 3D Dot-Matrix Wave Canvas Background */}
      <DotMatrixWave />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Floating Skill Chips (Organized around perimeter with high contrast) */}
        <div className="hidden lg:block relative h-0 z-20">
          {/* Top Right Chip */}
          <div className="absolute -top-12 right-24 bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-slate-700/60 flex items-center space-x-3 transform rotate-2 hover:rotate-0 transition-transform">
            <div className="p-1.5 rounded-lg bg-slate-800 text-frost-cyan">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase font-bold text-slate-400">DATA SCIENCE</div>
              <div className="text-xs font-mono font-extrabold text-frost-cyan">Predictive Models ↗</div>
            </div>
          </div>

          {/* Model Acc Chip */}
          <div className="absolute top-8 right-2 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl border border-slate-700/60 flex items-center space-x-2 font-mono text-xs font-bold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Model Acc: 98.4%</span>
          </div>

          {/* Mid Right Chip */}
          <div className="absolute top-44 right-10 bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-slate-700/60 flex items-center space-x-2.5 transform -rotate-2 hover:rotate-0 transition-transform">
            <Cpu className="w-4 h-4 text-frost-mid" />
            <span className="font-mono text-xs font-bold text-white">ML Pipelines</span>
          </div>

          {/* Left Mid Chip */}
          <div className="absolute top-36 left-4 bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-slate-700/60 flex items-center space-x-2.5 transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="p-1.5 rounded-lg bg-arctic-blue text-white">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-slate-400 font-semibold">DATA ENGINEERING</div>
              <div className="text-xs font-mono font-bold text-white">ETL & SQL Pipelines</div>
            </div>
          </div>

          {/* Left Lower Chip */}
          <div className="absolute top-60 left-28 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl border border-slate-700/60 flex items-center space-x-2 font-mono text-xs font-bold text-frost-cyan">
            <Code className="w-4 h-4 text-frost-cyan" />
            <span>PyTorch & LightGBM</span>
          </div>
        </div>

        {/* Hero Central Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center pt-4">
          
          {/* Hanging Lanyard (3D Left Column) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end pr-2 pt-6">
            <HangingLanyard />
          </div>

          {/* Central Figma Selection Frame Title (Right Column) */}
          <div className="lg:col-span-8 relative">
            
            {/* FIGMA SELECTION CANVAS BOX */}
            <div className="figma-selection-box p-8 sm:p-12 rounded-3xl relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              
              {/* Figma Corner Handles */}
              <div className="figma-handle -top-1.5 -left-1.5" />
              <div className="figma-handle -top-1.5 -right-1.5" />
              <div className="figma-handle -bottom-1.5 -left-1.5" />
              <div className="figma-handle -bottom-1.5 -right-1.5" />

              {/* Mouse Cursor Arrow */}
              <div className="absolute -bottom-5 -left-3 z-20 flex items-center space-x-1.5 animate-bounce">
                <MousePointer className="w-5 h-5 text-frost-cyan fill-frost-cyan" />
                <span className="bg-arctic-blue text-white text-[10px] font-mono px-2 py-0.5 rounded-md shadow-lg font-bold">
                  Joshua
                </span>
              </div>

              {/* Main Headline Text */}
              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] select-none text-center lg:text-left drop-shadow-2xl">
                MY PORTFOLIO
              </h1>

              {/* Floating Role Dropdown Menu Card */}
              <div className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 bg-slate-950/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-slate-700/80 text-left min-w-[210px] z-20 transform rotate-2">
                <div className="text-[10px] font-mono uppercase text-frost-light font-bold mb-2 tracking-wider">ROLES & FOCUS</div>
                <div className="space-y-1.5 text-xs font-mono font-semibold">
                  <div className="flex items-center space-x-2 text-frost-cyan bg-slate-800/80 px-2.5 py-1 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-frost-cyan" />
                    <span>Data Scientist</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2.5 py-1 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span>ML Engineer</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2.5 py-1 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span>Data Engineer</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2.5 py-1 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span>Data Analyst</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2.5 py-1 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span>AI Engineer</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Presented By Capsule */}
            <div className="mt-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-slate-950/90 border border-slate-700/80 px-5 py-2 rounded-full shadow-xl text-xs font-mono text-slate-200">
                <span>Presented by</span>
                <strong className="font-bold text-frost-cyan">Joshua — Data Scientist & ML Engineer</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
