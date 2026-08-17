import Link from 'next/link'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about-intro', label: 'About' },
  { href: '#tour', label: '3D Tour' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function HeaderNav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="w-full h-16 rounded-full backdrop-blur-[28px] backdrop-saturate-[200%] bg-white/60 border border-white/80 border-t-white/95 shadow-[0_2px_20px_rgba(46,109,173,0.08),inset_0_1px_0_rgba(255,255,255,0.90)] px-6 sm:px-8 flex items-center justify-between pointer-events-auto">
        
        {/* Far Left Logo */}
        <Link href="#home" className="font-display font-black text-lg tracking-tight text-text-primary flex items-center space-x-1 hover:text-arctic-blue transition-colors">
          <span>JOSHUA</span>
          <span className="w-2 h-2 rounded-full bg-arctic-bright inline-block" />
        </Link>

        {/* Center Nav Links */}
        <nav aria-label="main navigation" className="hidden md:flex items-center space-x-6 font-mono text-xs font-medium text-text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-arctic-blue transition-colors tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Far Right Status Pill */}
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full font-mono text-[11px] font-semibold text-emerald-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>AVAILABLE</span>
        </div>

      </div>
    </header>
  )
}
