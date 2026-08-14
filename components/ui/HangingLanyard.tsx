'use client'

import Image from 'next/image'
import { useState } from 'react'

export function HangingLanyard() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <div className="relative inline-block z-30 group">
      
      {/* Black Physical Lanyard Strap (Extends all the way up to screen top) */}
      <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-3.5 h-[175px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-850 shadow-2xl border-x border-slate-700/60 flex flex-col items-center justify-between py-2 z-0">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600" />
        <div className="w-2.5 h-1 bg-amber-400/80 rounded-full" />
      </div>

      {/* Metal Clip & Ring Holder */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-6 h-5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 rounded-md shadow-lg border border-white/80 flex items-center justify-center z-20">
        <div className="w-3 h-2 border-2 border-slate-700 rounded-sm" />
      </div>

      {/* Stark White Crisp ID Card (Fio Contrast Style) */}
      <div className="w-60 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:rotate-1 transition-transform duration-500 relative z-10">
        
        {/* Top Card Header */}
        <div className="bg-slate-950 text-white px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-frost-cyan animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-wider text-slate-200">PORTFOLIO ID</span>
          </div>
          <span className="text-[9px] font-mono text-frost-light font-semibold">SURABAYA / ID</span>
        </div>

        {/* Card Main Body */}
        <div className="p-3.5 flex space-x-3 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 relative">
          
          {/* Rotated Vertical Title Accent */}
          <div className="w-5 flex items-center justify-center">
            <span className="transform -rotate-90 whitespace-nowrap font-mono text-[9px] font-extrabold text-arctic-blue tracking-widest uppercase">
              DATA SCIENCE & ML
            </span>
          </div>

          {/* Photo & Profile Data */}
          <div className="flex-1">
            <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner mb-2.5">
              {!photoError ? (
                <Image
                  src="/docs/profile.jpg"
                  alt="Joshua Profile"
                  fill
                  className="object-cover"
                  onError={() => setPhotoError(true)}
                />
              ) : null}

              {photoError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-slate-950 text-white">
                  <span className="font-mono text-[11px] font-black text-frost-cyan">JOSHUA</span>
                  <span className="text-[8px] font-mono text-slate-300 mt-1">DATA SCIENTIST</span>
                </div>
              )}
            </div>

            {/* Name & Handle */}
            <div className="text-left">
              <div className="font-display font-black text-sm text-slate-950 leading-tight">
                JOSHUA
              </div>
              <div className="text-[9.5px] font-mono text-slate-600 font-semibold mt-0.5 truncate">
                josjiez@github.com
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Verification Status Bar */}
        <div className="bg-slate-100 border-t border-slate-200 px-3.5 py-1.5 flex items-center justify-between text-[9px] font-mono text-slate-600 font-medium">
          <span>STATUS: VERIFIED</span>
          <span className="text-emerald-600 font-extrabold flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>ACTIVE</span>
          </span>
        </div>

      </div>

    </div>
  )
}
