'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Award, Trophy, Star } from 'lucide-react'

const highlights = [
  {
    id: 1,
    title: 'Solidus-Folium CLI Engine Launch',
    subtitle: 'Quantitative Equity Research for IDX',
    description: 'Engineered a 6-layer Python CLI architecture with walk-forward validation and purged cross-validation for 700+ IDX tickers.',
    year: "'25",
    icon: Trophy,
    color: 'from-frost-cyan/20 to-arctic-blue/20',
  },
  {
    id: 2,
    title: '1st Runner-Up Data Analysis Competition',
    subtitle: 'Financial Signal Analytics',
    description: 'Developed an interpretable portfolio risk-parity allocation model with zero data leakage on intraday market data.',
    year: "'24",
    icon: Award,
    color: 'from-status-emerald/20 to-frost-mid/20',
  },
  {
    id: 3,
    title: 'Waste Classifier Deep Learning Model',
    subtitle: 'ConvNeXt & PyTorch Vision Architecture',
    description: 'Built a multi-class image classification model with stratified cross-validation achieving 98.4% validation accuracy.',
    year: "'24",
    icon: Star,
    color: 'from-purple-500/20 to-frost-cyan/20',
  },
]

export function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoTour, setIsAutoTour] = useState(true)

  useEffect(() => {
    if (!isAutoTour) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoTour])

  const current = highlights[currentIndex]
  const Icon = current.icon

  return (
    <section id="tour" className="w-full min-h-screen flex items-center justify-center py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header (Fio Style Pill Container) */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-navy-mid/60 border border-frost-mid/30 px-4 py-1.5 rounded-full text-xs font-mono text-frost-light mb-3">
            <span className="uppercase tracking-widest font-semibold">FEATURED HIGHLIGHTS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary">
            Milestones & Achievements
          </h2>
        </div>

        {/* 3D Stacked Carousel Card Area */}
        <div className="relative max-w-3xl mx-auto min-h-[320px] flex items-center justify-center">
          
          {/* Background Card Effect (Fio Stack Effect) */}
          <div className="absolute inset-0 bg-navy-mid/40 rounded-3xl transform scale-95 translate-y-4 border border-navy-mid blur-sm pointer-events-none" />
          
          {/* Main Active 3D Card */}
          <div className="glass-card-arctic p-8 sm:p-10 rounded-3xl relative z-10 w-full border-2 border-frost-mid/40 shadow-2xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-arctic-blue/30 border border-frost-mid/40 text-frost-cyan">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary">
                    {current.title}
                  </h3>
                  <p className="font-mono text-xs text-frost-mid font-medium">
                    {current.subtitle}
                  </p>
                </div>
              </div>
              <span className="bg-navy-mid/80 border border-frost-mid/30 px-3 py-1 rounded-full font-mono text-xs text-frost-light font-bold">
                {current.year}
              </span>
            </div>

            <p className="text-slate-300 text-base leading-relaxed font-body mb-6">
              {current.description}
            </p>

            <div className="flex items-center justify-between text-xs font-mono text-text-sub pt-4 border-t border-navy-mid">
              <span>MILESTONE {currentIndex + 1} OF {highlights.length}</span>
              <span className="text-status-emerald font-semibold">● VERIFIED RECORD</span>
            </div>
          </div>

        </div>

        {/* Carousel Bottom Control Bar (Fio Pill Control Bar) */}
        <div className="mt-8 flex items-center justify-center">
          <div className="glass-card-arctic px-6 py-3 rounded-full flex items-center space-x-6 border border-frost-mid/30 shadow-xl">
            {/* Prev Button */}
            <button
              onClick={() => {
                setIsAutoTour(false)
                setCurrentIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1))
              }}
              className="p-1.5 rounded-full hover:bg-navy-mid text-text-primary hover:text-frost-cyan transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Name Display */}
            <span className="font-mono text-xs text-text-primary font-bold min-w-[180px] text-center truncate">
              {current.title}
            </span>

            {/* Auto Tour Toggle Button */}
            <button
              onClick={() => setIsAutoTour(!isAutoTour)}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full font-mono text-xs font-bold transition-all ${
                isAutoTour
                  ? 'bg-arctic-blue text-white shadow-md'
                  : 'bg-navy-mid text-slate-300 hover:text-white'
              }`}
            >
              {isAutoTour ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>AUTO TOUR</span>
            </button>

            {/* Next Button */}
            <button
              onClick={() => {
                setIsAutoTour(false)
                setCurrentIndex((prev) => (prev + 1) % highlights.length)
              }}
              className="p-1.5 rounded-full hover:bg-navy-mid text-text-primary hover:text-frost-cyan transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
