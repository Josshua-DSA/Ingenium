'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

export function IntroSection() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section 
      id="about-intro" 
      className="w-full min-h-screen flex items-center justify-center py-24 relative z-10 overflow-hidden text-text-primary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Tag (Arctic Blue) */}
            <div className="inline-flex items-center space-x-2 backdrop-blur-[12px] bg-arctic-blue/10 border border-arctic-blue/30 text-arctic-blue px-4 py-1.5 rounded-full text-xs font-mono shadow-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-arctic-blue animate-pulse" />
              <span>Available for Full-Time Roles & Data Projects</span>
            </div>

            {/* Headline DM Serif Display Italic (Signature Moment per DESIGN.md) */}
            <h2 className="font-accent italic text-4xl sm:text-6xl text-text-primary tracking-tight leading-[1.1]">
              Hi, I&apos;m Joshua
            </h2>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {['Data Scientist', 'ML Engineer', 'Data Engineer', 'AI Engineer'].map((role) => (
                <span key={role} className="backdrop-blur-[12px] bg-white/50 border border-arctic-blue/20 text-arctic-blue px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold shadow-sm">
                  {role}
                </span>
              ))}
            </div>

            {/* Body Description (Montserrat 15px, line-height 1.65 per DESIGN.md) */}
            <p className="text-text-secondary text-base sm:text-lg font-display leading-[1.65] max-w-2xl pt-2">
              Data Scientist & Machine Learning Engineer passionate about building scalable data pipelines, predictive models, 
              and AI applications that drive actionable business intelligence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center space-x-2 bg-arctic-blue hover:bg-arctic-mid text-white px-7 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center space-x-2 backdrop-blur-[12px] bg-white/60 border border-white/80 border-t-white/95 text-text-primary hover:text-arctic-blue px-7 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-arctic-blue" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Framed Photo Stage Card (Apple Light Glass Card per DESIGN.md) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[340px] w-full">
              
              {/* Apple Glass Hero Card */}
              <div className="backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(255,255,255,0.50)] border border-white/75 border-t-white/95 p-4 rounded-3xl relative z-10 shadow-[0_4px_24px_rgba(46,109,173,0.10),inset_0_1px_0_rgba(255,255,255,0.85)]">
                
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-arctic-pale mb-3 border border-white/80">
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-white via-arctic-pale to-bg-base text-text-primary">
                      <Sparkles className="w-10 h-10 text-arctic-blue mb-3 animate-spin" />
                      <span className="font-display text-xl font-black text-text-primary">JOSHUA</span>
                      <span className="text-xs font-mono text-arctic-blue mt-1 font-semibold">DATA SCIENTIST & ML ENGINEER</span>
                      <span className="text-[10px] font-mono text-text-muted mt-4 italic">
                        Put profile.jpg in public/docs/ to show photo
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center px-2 py-1">
                  <div className="font-display font-bold text-sm text-text-primary">
                    Joshua — Data Scientist & ML Engineer
                  </div>
                  <div className="text-[10px] font-mono text-arctic-blue font-semibold mt-0.5">
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
