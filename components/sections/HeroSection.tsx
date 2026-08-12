import { HangingLanyard } from '@/components/ui/HangingLanyard'
import { DotMatrixWave } from '@/components/ui/DotMatrixWave'
import { MousePointer, BarChart3, Database, Code, TrendingUp, Cpu } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative pt-6 pb-16 overflow-hidden min-h-[580px] flex items-center justify-center">
      {/* 3D Wave Canvas Particle Animation Background */}
      <DotMatrixWave />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Floating Skill Chips (Fio exact placement, Arctic theme) */}
        <div className="hidden md:block relative h-0 z-20">
          {/* Top Right Chip */}
          <div className="absolute top-[-30px] right-20 bg-ocean-deep/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-frost-mid/30 flex items-center space-x-3 transform rotate-2 hover:rotate-0 transition-transform">
            <div className="p-1.5 rounded-lg bg-navy-mid text-frost-cyan">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase font-bold text-text-sub">QUANT RESEARCH</div>
              <div className="text-xs font-mono font-extrabold text-frost-cyan">IDX Signals ↗</div>
            </div>
          </div>

          {/* Model Acc Chip */}
          <div className="absolute top-12 right-0 bg-ocean-deep/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-frost-mid/30 flex items-center space-x-2 font-mono text-xs font-bold text-frost-light">
            <TrendingUp className="w-4 h-4 text-status-emerald" />
            <span>Model Acc: 98.4%</span>
          </div>

          {/* Mid Right Chip */}
          <div className="absolute top-44 right-12 bg-ocean-deep/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-frost-mid/30 flex items-center space-x-2.5 transform -rotate-2 hover:rotate-0 transition-transform">
            <Cpu className="w-4 h-4 text-frost-mid" />
            <span className="font-mono text-xs font-bold text-text-primary">Walk-Forward CV</span>
          </div>

          {/* Left Mid Chip */}
          <div className="absolute top-28 left-4 bg-ocean-deep/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-frost-mid/30 flex items-center space-x-2.5 transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="p-1.5 rounded-lg bg-arctic-blue text-white">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase text-text-sub font-semibold">ENGINEERING</div>
              <div className="text-xs font-mono font-bold text-text-primary">SQLite & Big Data</div>
            </div>
          </div>

          {/* Left Lower Chip */}
          <div className="absolute top-52 left-24 bg-ocean-deep/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-frost-mid/30 flex items-center space-x-2 font-mono text-xs font-bold text-text-primary">
            <Code className="w-4 h-4 text-frost-cyan" />
            <span>PyTorch & LightGBM</span>
          </div>
        </div>

        {/* Hero Central Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center pt-8">
          
          {/* Hanging Lanyard (3D Left Side) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end pr-4">
            <HangingLanyard />
          </div>

          {/* Central Figma Selection Frame Title */}
          <div className="lg:col-span-8 relative">
            
            {/* FIGMA SELECTION CANVAS BOX */}
            <div className="figma-selection-box p-8 sm:p-12 rounded-3xl relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              
              {/* Figma Resize Handles */}
              <div className="figma-handle -top-1.5 -left-1.5" />
              <div className="figma-handle -top-1.5 -right-1.5" />
              <div className="figma-handle -bottom-1.5 -left-1.5" />
              <div className="figma-handle -bottom-1.5 -right-1.5" />

              {/* Mouse Cursor Arrow */}
              <div className="absolute -bottom-6 -left-4 z-20 flex items-center space-x-1 animate-bounce">
                <MousePointer className="w-6 h-6 text-frost-cyan fill-frost-cyan" />
                <span className="bg-arctic-blue text-white text-[10px] font-mono px-2 py-0.5 rounded-md shadow-md font-bold">
                  Joshua
                </span>
              </div>

              {/* Main Headline Text */}
              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] select-none text-center lg:text-left drop-shadow-xl">
                MY PORTFOLIO
              </h1>

              {/* Floating Role Menu Card (Fio Right Side Menu) */}
              <div className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 bg-ocean-deep/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-frost-mid/30 text-left min-w-[200px] z-20 transform rotate-2">
                <div className="text-[10px] font-mono uppercase text-frost-light font-bold mb-2">ROLES & FOCUS</div>
                <div className="space-y-1.5 text-xs font-mono text-text-primary font-semibold">
                  <div className="flex items-center space-x-2 text-frost-cyan bg-navy-mid/60 px-2 py-1 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-frost-cyan" />
                    <span>Quant Developer</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>Data Scientist</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>ML Engineer</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>IDX Researcher</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Presented By Capsule */}
            <div className="mt-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-navy-dark/90 border border-frost-mid/30 px-5 py-2 rounded-full shadow-md text-xs font-mono text-text-primary">
                <span>Presented by</span>
                <strong className="font-bold text-frost-cyan">Joshua — Quantitative Developer & Data Scientist</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
