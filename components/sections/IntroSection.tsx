'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

export function IntroSection() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section id="about-intro" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 bg-navy-mid border border-frost-mid/30 text-frost-light px-4 py-1.5 rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-status-emerald animate-ping" />
              <span>Available for Full-Time Roles & Quant Projects</span>
            </div>

            {/* Headline Italic Serif (Fio Style) */}
            <h2 className="font-display italic text-4xl sm:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1]">
              Hi, I&apos;m Joshua
            </h2>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="bg-navy-mid/80 border border-frost-mid/30 text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium">
                Quant Developer
              </span>
              <span className="bg-navy-mid/80 border border-frost-mid/30 text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium">
                Data Science & ML
              </span>
              <span className="bg-navy-mid/80 border border-frost-mid/30 text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium">
                IDX Equities Researcher
              </span>
            </div>

            {/* Description */}
            <p className="text-text-sub text-base sm:text-lg font-body leading-relaxed max-w-2xl pt-2">
              Quantitative developer & data scientist specializing in systematic equity research, machine learning signal pipelines, 
              and walk-forward validation engines. Transforming raw tick data into high-integrity statistical edge.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-arctic-blue to-frost-mid hover:from-frost-mid hover:to-frost-cyan text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-xl shadow-arctic-blue/25 hover:-translate-y-0.5"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center space-x-2 glass-card-arctic text-text-primary hover:text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
              >
                <Download className="w-4 h-4 text-frost-light" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Framed Photo Stage Card (Fio Stage Style) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[340px] w-full">
              {/* Blue Glow Halo Behind Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-frost-cyan/30 via-arctic-blue/30 to-frost-mid/30 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              <div className="glass-card-arctic p-4 rounded-3xl relative z-10 border-2 border-frost-mid/40 shadow-2xl">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-ocean-deep mb-3 border border-navy-mid">
                  {!photoError ? (
                    <Image
                      src="/docs/profile.jpg"
                      alt="Joshua Stage Photo"
                      fill
                      className="object-cover"
                      onError={() => setPhotoError(true)}
                    />
                  ) : null}

                  {photoError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-arctic-abyss via-ocean-deep to-navy-dark text-white">
                      <Sparkles className="w-10 h-10 text-frost-cyan mb-3 animate-spin" />
                      <span className="font-display text-xl font-bold text-white">JOSHUA</span>
                      <span className="text-xs font-mono text-frost-mid mt-1">QUANT & DATA SCIENTIST</span>
                      <span className="text-[10px] font-mono text-text-sub mt-4 italic">
                        Put profile.jpg in public/docs/ to show photo
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center px-2 py-1">
                  <div className="font-display font-extrabold text-sm text-text-primary">
                    Joshua — Quant & ML Engineer
                  </div>
                  <div className="text-[10px] font-mono text-frost-mid font-semibold mt-0.5">
                    IDX Equities · Walk-Forward Validation
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
