'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Award } from 'lucide-react'

export function ProfilePhoto() {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-slate-900 mb-4 border border-white/10">
      {!hasError ? (
        <Image
          src="/docs/profile.jpg"
          alt="Joshua Profile"
          fill
          className="object-cover"
          priority
          onError={() => setHasError(true)}
        />
      ) : null}
      
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-dark via-dark/60 to-transparent">
          <div className="w-16 h-16 rounded-full bg-violet/20 border border-violet-light/30 flex items-center justify-center mb-3">
            <Award className="w-8 h-8 text-violet-light" />
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-cyan font-bold">
            Joshua
          </span>
          <span className="text-[11px] font-mono text-slate-400 mt-1">
            Quant & ML Engineer
          </span>
          <span className="text-[10px] font-mono text-slate-500 mt-3 italic">
            Save photo as /docs/profile.jpg
          </span>
        </div>
      )}
    </div>
  )
}
