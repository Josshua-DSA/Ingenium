import Link from 'next/link'
import { Home, User, Sparkles, Code, FolderGit2, Briefcase, Mail } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about-intro', label: 'About', icon: User },
  { href: '#tour', label: '3D Tour', icon: Sparkles },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Mail },
]

export function HeaderNav() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-2xl border border-slate-700/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] rounded-full px-6 sm:px-8 h-16 flex items-center justify-between text-white">
        
        {/* Left Block: Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 font-display font-black text-lg tracking-tight hover:text-frost-cyan transition-colors shrink-0"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-frost-light bg-clip-text text-transparent">
            JOSHUA
          </span>
          <span className="w-2 h-2 rounded-full bg-frost-cyan animate-pulse" />
        </Link>

        {/* Center Block: Wide Spaced Navigation Items */}
        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-full font-mono text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5 text-frost-cyan" />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Right Block: Available Status Badge */}
        <div className="flex items-center space-x-2 bg-emerald-950/70 border border-emerald-500/50 px-4 py-1.5 rounded-full text-xs font-mono text-emerald-400 font-bold tracking-wider shrink-0 shadow-lg shadow-emerald-950/50">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>AVAILABLE</span>
        </div>

      </div>
    </header>
  )
}
