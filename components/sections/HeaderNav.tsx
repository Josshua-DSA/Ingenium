import Link from 'next/link'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function HeaderNav() {
  return (
    <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="glass-nav rounded-full px-6 h-14 flex items-center justify-between shadow-2xl">
        {/* Brand */}
        <Link 
          href="/" 
          className="font-display font-extrabold text-lg tracking-tight text-white hover:text-violet-light transition-colors"
        >
          JF<span className="text-violet">.</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden sm:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-widest text-slate-400 hover:text-violet-light transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Status Badge */}
        <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-emerald-400">
            AVAILABLE
          </span>
        </div>
      </div>
    </header>
  )
}
