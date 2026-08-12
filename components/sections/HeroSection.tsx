import Link from 'next/link'
import { ArrowUpRight, Download, Github, Linkedin, Sparkles, TrendingUp, Cpu, Database } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative pt-8 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Ambient Spotlight */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial from-sky-500/20 via-blue-600/10 to-transparent blur-[160px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Stat Badges (Fio 3D Style) */}
        <div className="hidden lg:block relative h-0 z-20">
          <div className="absolute top-2 -left-10 glass-card-fio px-4 py-2 text-xs font-mono border border-white/10 shadow-2xl flex items-center space-x-2.5 -rotate-3 hover:rotate-0 transition-transform">
            <TrendingUp className="w-4 h-4 text-accent-sky" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Sharpe Ratio</div>
              <div className="font-bold text-sky-300">2.14 Backtested</div>
            </div>
          </div>

          <div className="absolute top-8 -right-6 glass-card-fio px-4 py-2 text-xs font-mono border border-white/10 shadow-2xl flex items-center space-x-2.5 rotate-3 hover:rotate-0 transition-transform">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Walk-Forward CV</div>
              <div className="font-bold text-emerald-400">Purged Split</div>
            </div>
          </div>

          <div className="absolute top-52 -right-14 glass-card-fio px-4 py-2 text-xs font-mono border border-white/10 shadow-2xl flex items-center space-x-2.5 -rotate-2 hover:rotate-0 transition-transform">
            <Database className="w-4 h-4 text-accent-cyan" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase">IDX Equities</div>
              <div className="font-bold text-cyan-300">700+ Tickers</div>
            </div>
          </div>
        </div>

        {/* 3D Rotated Title Banner (Fio Style) */}
        <div className="mb-10 text-center lg:text-left">
          <div className="inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="glass-card-fio px-6 py-2 border border-sky-400/30 bg-sky-950/40 shadow-2xl rounded-2xl inline-flex items-center space-x-3 mb-6">
              <Sparkles className="w-4 h-4 text-accent-sky animate-spin" />
              <span className="font-mono text-xs uppercase tracking-widest text-sky-300 font-bold">
                QUANT & DATA SCIENCE PORTFOLIO
              </span>
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-white">Joshua</span>
          </h1>
          <p className="font-display text-2xl sm:text-4xl text-slate-300 font-bold mt-2">
            Quantitative Developer & Data Scientist
          </p>
        </div>

        {/* Bio Paragraph */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl font-body leading-relaxed mb-10 text-center lg:text-left">
          Specializing in systematic equity research for IDX equities, machine learning signal pipelines, 
          and walk-forward validation engines. Turning raw market noise into high-integrity, actionable quantitative strategies.
        </p>

        {/* Action CTAs & Social Links */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <Link
            href="#projects"
            className="group inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-2xl shadow-sky-500/35 hover:shadow-sky-400/50 hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full glass-card-fio text-slate-200 hover:text-white font-medium text-sm transition-all duration-300"
          >
            <Download className="w-4 h-4 text-accent-sky" />
            <span>Download CV</span>
          </a>

          <div className="flex items-center space-x-3 ml-2">
            <a 
              href="https://github.com/josjiez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glass-card-fio text-slate-300 hover:text-accent-sky transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glass-card-fio text-slate-300 hover:text-accent-sky transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
