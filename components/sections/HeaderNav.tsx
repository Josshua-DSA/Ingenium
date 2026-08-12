import Link from 'next/link'
import { Home, User, Sparkles, Code, FolderGit2, Mail } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#contact', label: 'Contact', icon: Mail },
]

export function HeaderNav() {
  return (
    <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="fio-nav-glass rounded-full px-6 h-14 flex items-center justify-between shadow-2xl text-white">
        
        {/* Brand */}
        <Link 
          href="/" 
          className="font-display font-black text-lg tracking-tight text-white hover:text-fio-cyan transition-colors flex items-center space-x-1"
        >
          <span>JOSHUA</span>
          <span className="text-fio-cyan font-black">.</span>
        </Link>

        {/* Navigation Items */}
        <nav className="hidden sm:flex items-center space-x-5">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1.5 font-mono text-xs text-slate-300 hover:text-fio-cyan transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Right Available Status Pill */}
        <div className="flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 rounded-full text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wider uppercase">AVAILABLE</span>
        </div>

      </div>
    </header>
  )
}
