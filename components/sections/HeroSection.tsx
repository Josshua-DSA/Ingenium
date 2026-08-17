import { BarChart3, Database, Code, Cpu } from 'lucide-react'
import { OrbitalSpotlight } from '@/components/ui/OrbitalSpotlight'

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden pt-32 pb-12 text-text-primary"
    >
      {/* Physical 4-Corner Traveling Orbital Spotlight */}
      <OrbitalSpotlight />

      {/* PERIMETER CHIPS AT EXTREME VIEWPORT BOUNDARIES (MENTOK KIRI & MENTOK KANAN SCREEN) */}
      <div className="hidden xl:block absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-30 px-6 lg:px-12">
        <div className="w-full flex items-center justify-between">
          
          {/* EXTREME LEFT FLANK CHIPS */}
          <div className="flex flex-col space-y-36 pointer-events-auto">
            <div className="entry entry-d1 backdrop-blur-[12px] backdrop-saturate-[160%] bg-white/40 border border-white/80 border-t-white/95 px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.10)] flex items-center space-x-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="p-1.5 rounded-lg bg-arctic-blue text-white">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] font-mono uppercase text-text-muted font-semibold">DATA ENGINEERING</div>
                <div className="text-xs font-mono font-bold text-text-primary">ETL & SQL Pipelines</div>
              </div>
            </div>

            <div className="entry entry-d2 backdrop-blur-[12px] backdrop-saturate-[160%] bg-white/40 border border-white/80 border-t-white/95 px-4.5 py-2.5 rounded-full shadow-[0_4px_20px_rgba(46,109,173,0.10)] flex items-center space-x-2.5 font-mono text-xs font-bold text-arctic-blue transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Code className="w-4 h-4 text-arctic-blue" />
              <span>PyTorch & LightGBM</span>
            </div>
          </div>

          {/* EXTREME RIGHT FLANK CHIPS */}
          <div className="flex flex-col space-y-36 pointer-events-auto">
            <div className="entry entry-d1 backdrop-blur-[12px] backdrop-saturate-[160%] bg-white/40 border border-white/80 border-t-white/95 px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.10)] flex items-center space-x-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="p-1.5 rounded-lg bg-arctic-bright text-white">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] font-mono uppercase font-bold text-text-muted">DATA SCIENCE</div>
                <div className="text-xs font-mono font-extrabold text-arctic-blue">Predictive Analytics ↗</div>
              </div>
            </div>

            <div className="entry entry-d2 backdrop-blur-[12px] backdrop-saturate-[160%] bg-white/40 border border-white/80 border-t-white/95 px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(46,109,173,0.10)] flex items-center space-x-2.5 transform -rotate-4 hover:rotate-0 transition-transform duration-300">
              <Cpu className="w-4 h-4 text-arctic-blue" />
              <span className="font-mono text-xs font-bold text-text-primary">Machine Learning Pipelines</span>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Central Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto">
        <div className="w-full flex flex-col items-center text-center">
          
          {/* ARCTIC FROST HERO CARD (DESIGN.md Layer 2 Glass) */}
          <div className="entry entry-d2 relative w-full mx-auto backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.50)] border border-white/75 border-t-white/95 rounded-3xl p-8 sm:p-14 shadow-[0_4px_24px_rgba(46,109,173,0.10),inset_0_1px_0_rgba(255,255,255,0.85)]">
            
            {/* Nautical Depth Grid 40x40px */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(46,109,173,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(46,109,173,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Main Headline Text */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-text-primary leading-none select-none text-center relative z-10">
              MY PORTFOLIO
            </h1>

            {/* Signature Tagline (DM Serif Display Italic - Single Editorial Moment) */}
            <p className="font-accent italic text-lg sm:text-xl text-text-secondary mt-6 relative z-10 max-w-xl mx-auto">
              I build engines that turn complex data into structured intelligence.
            </p>

          </div>

        </div>
      </div>

      {/* Bottom Footer Row: Center Presented By + Bottom Right Scroll Indicator */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 flex items-center justify-between pt-6">
        
        {/* Empty Left Buffer for Symmetry */}
        <div className="w-24 hidden sm:block" />

        {/* Center: Presented by Joshua Remedial Syeba */}
        <div className="entry entry-d4 mx-auto">
          <div className="inline-flex items-center space-x-2.5 backdrop-blur-[12px] bg-white/60 border border-white/80 border-t-white/95 px-6 py-2.5 rounded-full shadow-[0_2px_12px_rgba(46,109,173,0.08)] text-xs sm:text-sm font-mono text-text-secondary">
            <span>Presented by</span>
            <strong className="font-bold text-arctic-blue">Joshua Remedial Syeba</strong>
          </div>
        </div>

        {/* Bottom Right Corner: Scroll to Explore + Arrow Bounce Icon */}
        <div className="entry entry-d4 flex items-center space-x-2 text-text-muted font-mono text-[11px] uppercase tracking-widest backdrop-blur-[12px] bg-white/60 border border-white/80 border-t-white/95 px-4 py-2 rounded-full shadow-[0_2px_12px_rgba(46,109,173,0.08)]">
          <span>Scroll to explore</span>
          <div className="w-4 h-4 rounded-full border border-arctic-blue flex items-center justify-center">
            <span className="text-arctic-blue text-[10px] animate-bounce">↓</span>
          </div>
        </div>

      </div>
    </section>
  )
}
