import Link from 'next/link'
import { Home, User, Sparkles, FolderGit2, Briefcase, Mail } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#journey', label: 'Journey', icon: Sparkles },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Mail },
]

export function HeaderNav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="w-full h-16 rounded-full backdrop-blur-[28px] backdrop-saturate-[200%] bg-white/80 border border-white/90 border-t-white shadow-[0_4px_24px_rgba(46,109,173,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] px-6 sm:px-8 flex items-center justify-between pointer-events-auto">
        
        {/* Far Left Logo */}
        <Link href="#home" className="font-display font-black text-xl tracking-tight text-text-primary flex items-center space-x-1.5 hover:text-arctic-blue transition-colors">
          <span>JOSHUA</span>
          <span className="w-2.5 h-2.5 rounded-full bg-arctic-blue inline-block" />
        </Link>

        {/* Center Nav Link Button Capsules */}
        <nav aria-label="main navigation" className="hidden lg:flex items-center space-x-2 font-mono text-sm font-semibold">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/50 hover:bg-arctic-blue hover:text-white border border-arctic-blue/15 hover:border-arctic-blue text-text-primary transition-all duration-200 shadow-sm"
              >
                <IconComponent className="w-4 h-4 text-arctic-blue group-hover:text-white" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Far Right Status Pill */}
        <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-300 px-4 py-2 rounded-full font-mono text-xs font-bold text-emerald-800 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>AVAILABLE</span>
        </div>

      </div>
    </header>
  )
}
