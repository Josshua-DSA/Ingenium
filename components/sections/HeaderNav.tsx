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
    <header className="fixed top-4 left-0 right-0 z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-2xl border border-slate-700/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-full px-5 h-13 flex items-center justify-between text-white">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 font-display font-extrabold text-base tracking-tight hover:text-frost-cyan transition-colors"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-frost-light bg-clip-text text-transparent">
            JOSHUA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-frost-cyan animate-pulse" />
        </Link>

        {/* Desktop Navigation Items */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full font-mono text-[11px] font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-frost-mid" />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Available Status Badge */}
        <div className="flex items-center space-x-2 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400 font-bold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>AVAILABLE</span>
        </div>

      </div>
    </header>
  )
}
