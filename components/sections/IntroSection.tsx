'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

export function IntroSection() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section id="about" className="py-20 relative z-10 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 bg-fio-dark text-white px-4 py-1.5 rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full-Time Roles & Quant Projects</span>
            </div>

            {/* Headline Italic Serif (Fio Style) */}
            <h2 className="font-display italic text-4xl sm:text-6xl font-extrabold text-fio-dark tracking-tight leading-[1.1]">
              Hi, I&apos;m Joshua
            </h2>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="bg-fio-dark text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium">
                Quant Developer
              </span>
              <span className="bg-fio-dark text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium">
                Data Science & ML
              </span>
              <span className="bg-fio-dark text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-medium">
                IDX Equities Researcher
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-700 text-base sm:text-lg font-body leading-relaxed max-w-2xl pt-2">
              Quantitative developer & data scientist specializing in systematic equity research, machine learning signal pipelines, 
              and walk-forward validation engines. Transforming raw tick data into high-integrity statistical edge.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center space-x-2 bg-fio-dark hover:bg-fio-purple text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-xl shadow-fio-dark/20 hover:-translate-y-0.5"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center space-x-2 bg-white border border-purple-300 text-fio-dark hover:bg-purple-50 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
              >
                <Download className="w-4 h-4 text-fio-purple" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Framed Photo Stage Card (Fio Stage Style) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[340px] w-full">
              {/* Cyan Glow Halo Behind Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/40 via-purple-500/30 to-pink-500/40 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              <div className="bg-white p-4 rounded-3xl relative z-10 border-2 border-purple-200/80 shadow-2xl">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-purple-950 mb-3 border border-purple-100">
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-fio-dark via-purple-950 to-slate-900 text-white">
                      <Sparkles className="w-10 h-10 text-fio-cyan mb-3 animate-spin" />
                      <span className="font-display text-xl font-bold text-white">JOSHUA</span>
                      <span className="text-xs font-mono text-purple-300 mt-1">QUANT & DATA SCIENTIST</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-4 italic">
                        Put profile.jpg in public/docs/ to show photo
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center px-2 py-1">
                  <div className="font-display font-extrabold text-sm text-fio-dark">
                    Joshua — Quant & ML Engineer
                  </div>
                  <div className="text-[10px] font-mono text-purple-600 font-semibold mt-0.5">
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
