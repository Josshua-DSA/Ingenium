export function OrbitalSpotlight() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary Cyan Orbital Glowing Orb */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-frost-cyan via-arctic-blue to-frost-mid opacity-40 blur-[120px] animate-orbital-glow"
      />
      {/* Secondary Ambient Backdrop Layer */}
      <div className="absolute inset-0 bg-slate-950/40" />
    </div>
  )
}
