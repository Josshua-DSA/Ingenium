export function OrbitalSpotlight() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Arctic Blue Orbital Glowing Orb */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-arctic-bright via-arctic-blue to-arctic-light opacity-30 blur-[130px] animate-orbital-glow"
      />
    </div>
  )
}
