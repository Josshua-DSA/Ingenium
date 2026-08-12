import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Download, Github, Linkedin, TrendingUp, Cpu, Database, Award } from 'lucide-react'
import { ProfilePhoto } from '@/components/ui/ProfilePhoto'

export function HeroSection() {
  return (
    <section id="home" className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-violet pointer-events-none z-0" />
      <div className="absolute top-[200px] right-[-100px] w-[500px] h-[500px] glow-cyan pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating 3D Chips (Exact Fio positioning) */}
        <div className="hidden lg:block relative h-0 z-20">
          <div className="absolute top-0 -left-12 float-chip px-4 py-2 rounded-2xl flex items-center space-x-3 -rotate-3">
            <TrendingUp className="w-4 h-4 text-cyan" />
            <div>
              <div className="text-[9px] font-mono uppercase text-slate-400">Sharpe Ratio</div>
              <div className="text-xs font-mono font-bold text-cyan-light">2.14 Backtested</div>
            </div>
          </div>

          <div className="absolute top-4 -right-10 float-chip px-4 py-2 rounded-2xl flex items-center space-x-3 rotate-3">
            <Cpu className="w-4 h-4 text-emerald" />
            <div>
              <div className="text-[9px] font-mono uppercase text-slate-400">Walk-Forward CV</div>
              <div className="text-xs font-mono font-bold text-emerald">Purged Split</div>
            </div>
          </div>

          <div className="absolute top-48 -right-16 float-chip px-4 py-2 rounded-2xl flex items-center space-x-3 -rotate-2">
            <Database className="w-4 h-4 text-violet-light" />
            <div>
              <div className="text-[9px] font-mono uppercase text-slate-400">IDX Equities</div>
              <div className="text-xs font-mono font-bold text-violet-light">700+ Tickers</div>
            </div>
          </div>
        </div>

        {/* Slanted 3D Banner Title */}
        <div className="mb-8 text-center lg:text-left">
          <div className="inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="glass-card px-6 py-2 rounded-2xl border border-violet/30 bg-violet-dim/20 shadow-2xl inline-flex items-center space-x-3 mb-6">
              <Award className="w-4 h-4 text-violet-light animate-spin" />
              <span className="font-mono text-xs uppercase tracking-widest text-violet-light font-bold">
                QUANT & DATA SCIENCE PORTFOLIO
              </span>
            </div>
          </div>

          {/* Main Grid: Left Narrative + Right Photo Frame */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light via-cyan to-white">Joshua</span>
              </h1>
              <p className="font-display text-xl sm:text-3xl text-slate-300 font-bold mt-3">
                Quantitative Developer & Data Scientist
              </p>
              <p className="mt-6 text-base sm:text-lg text-slate-300 font-body leading-relaxed max-w-2xl">
                Specializing in systematic equity research for IDX equities, machine learning signal pipelines, 
                and walk-forward validation engines. Turning raw market noise into actionable statistical edge.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#projects"
                  className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet to-violet-dim hover:from-violet-light hover:to-violet text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-violet/25 hover:-translate-y-0.5"
                >
                  <span>View Work</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full glass-card text-slate-200 hover:text-white font-medium text-sm transition-all duration-300"
                >
                  <Download className="w-4 h-4 text-violet-light" />
                  <span>Download CV</span>
                </a>

                <div className="flex items-center space-x-2 ml-1">
                  <a 
                    href="https://github.com/josjiez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card text-slate-300 hover:text-violet-light transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card text-slate-300 hover:text-violet-light transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Photo Frame (Fio Style Polaroid Glass Card) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[280px] sm:max-w-[320px]">
                {/* Dots background mesh effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet/30 to-cyan/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />
                
                <div className="glass-card p-4 rounded-3xl relative z-10 border border-white/15 shadow-2xl">
                  <ProfilePhoto />
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                    <span>INFORMATICS</span>
                    <span className="text-emerald font-semibold">● ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
