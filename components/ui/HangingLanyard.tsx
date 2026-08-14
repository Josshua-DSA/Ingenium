'use client'

import Image from 'next/image'
import { useState } from 'react'

export function HangingLanyard() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <div className="relative inline-block z-30 transform hover:rotate-1 transition-transform duration-500">
      {/* Black Strap / Lanyard Ribbon */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-4 h-24 bg-gradient-to-b from-slate-900 via-slate-800 to-black rounded-sm shadow-md border-x border-slate-700/50 flex flex-col items-center justify-between py-1">
        <div className="w-2 h-2 rounded-full bg-slate-400 border border-slate-600" />
        <div className="w-3 h-1 bg-amber-400/80 rounded-full" />
      </div>

      {/* Metal Clip / Hook */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-md shadow-lg border border-white/40 flex items-center justify-center z-10">
        <div className="w-3 h-2 border-2 border-slate-700 rounded-sm" />
      </div>

      {/* ID Badge Card */}
      <div className="w-64 bg-white rounded-2xl overflow-hidden border border-purple-200/80 lanyard-card-shadow mt-2 relative">
        {/* Top University/Brand Header */}
        <div className="bg-fio-dark text-white px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-fio-cyan animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-wider">PORTFOLIO ID</span>
          </div>
          <span className="text-[9px] font-mono text-purple-300">SURABAYA / IDX</span>
        </div>

        {/* Card Body */}
        <div className="p-4 flex space-x-3 bg-gradient-to-br from-white via-purple-50/30 to-purple-100/40 relative">
          {/* Rotated Vertical Text Accent */}
          <div className="w-6 flex items-center justify-center">
            <span className="transform -rotate-90 whitespace-nowrap font-mono text-[9px] font-bold text-fio-purple tracking-widest uppercase">
              QUANT & DATA SCIENCE
            </span>
          </div>

          {/* Photo & Bio */}
          <div className="flex-1">
            <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-purple-900/10 border border-purple-200 shadow-inner mb-3">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-purple-950 text-white">
                  <span className="font-mono text-[10px] font-bold text-fio-cyan">JOSHUA</span>
                  <span className="text-[8px] font-mono text-purple-300 mt-1">DATA SCIENTIST & ML</span>
                </div>
              )}
            </div>

            {/* Name & Contact */}
            <div className="text-left">
              <div className="font-display font-extrabold text-sm text-fio-dark leading-tight">
                JOSHUA
              </div>
              <div className="text-[10px] font-mono text-purple-700 font-medium mt-0.5 truncate">
                josjiez@github.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-slate-100 border-t border-purple-100 px-4 py-1.5 flex items-center justify-between text-[9px] font-mono text-slate-500">
          <span>STATUS: VERIFIED</span>
          <span className="text-emerald-600 font-bold">● ACTIVE</span>
        </div>
      </div>
    </div>
  )
}
