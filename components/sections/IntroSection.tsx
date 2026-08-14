'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { DotMatrixWave } from '@/components/ui/DotMatrixWave'

export function IntroSection() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section 
      id="about-intro" 
      className="w-full min-h-screen flex items-center justify-center py-24 relative z-10 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-100 border-t border-frost-mid/20"
    >
      {/* Frost Shimmer Horizon Divider Line at Boundary */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-frost-cyan/50 to-transparent pointer-events-none z-20" />

      {/* 3D Dot-Matrix Particle Wave Background */}
      <DotMatrixWave />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 bg-slate-900/90 backdrop-blur-2xl border border-frost-cyan/40 text-frost-cyan px-4 py-1.5 rounded-full text-xs font-mono shadow-xl">
              <span className="w-2 h-2 rounded-full bg-status-emerald animate-ping" />
              <span>Available for Full-Time Roles & Data Projects</span>
            </div>

            {/* Headline Italic Serif */}
            <h2 className="font-display italic text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-lg">
              Hi, I&apos;m Joshua
            </h2>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="bg-slate-900/90 backdrop-blur-2xl border border-white/15 text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shadow-md">
                Data Scientist
              </span>
              <span className="bg-slate-900/90 backdrop-blur-2xl border border-white/15 text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shadow-md">
                ML Engineer
              </span>
              <span className="bg-slate-900/90 backdrop-blur-2xl border border-white/15 text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shadow-md">
                Data Engineer
              </span>
              <span className="bg-slate-900/90 backdrop-blur-2xl border border-white/15 text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shadow-md">
                AI Engineer
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg font-body leading-relaxed max-w-2xl pt-2">
              Data Scientist & Machine Learning Engineer passionate about building scalable data pipelines, predictive models, 
              and AI applications that drive actionable business intelligence.
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
                className="inline-flex items-center space-x-2 bg-slate-900/80 backdrop-blur-xl border border-white/15 text-slate-200 hover:text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
              >
                <Download className="w-4 h-4 text-frost-cyan" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Framed Photo Stage Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[340px] w-full">
              {/* Blue Glow Halo Behind Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-frost-cyan/40 via-arctic-blue/40 to-frost-mid/40 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

              <div className="bg-slate-900/90 backdrop-blur-2xl p-4 rounded-3xl relative z-10 border border-white/20 shadow-2xl">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-slate-950 mb-3 border border-slate-800">
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-navy-dark text-white">
                      <Sparkles className="w-10 h-10 text-frost-cyan mb-3 animate-spin" />
                      <span className="font-display text-xl font-bold text-white">JOSHUA</span>
                      <span className="text-xs font-mono text-frost-cyan mt-1 font-semibold">DATA SCIENTIST & ML ENGINEER</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-4 italic">
                        Put profile.jpg in public/docs/ to show photo
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center px-2 py-1">
                  <div className="font-display font-extrabold text-sm text-white">
                    Joshua — Data Scientist & ML Engineer
                  </div>
                  <div className="text-[10px] font-mono text-frost-cyan font-semibold mt-0.5">
                    Data Analytics · Machine Learning · AI Systems
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
