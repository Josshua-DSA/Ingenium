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
    <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div className="glass-pill-nav rounded-full px-6 h-14 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="font-display font-extrabold text-lg tracking-tight text-white hover:text-accent-sky transition-colors flex items-center space-x-1"
        >
          <span>JF</span>
          <span className="text-accent-sky font-black">.</span>
        </Link>

        {/* Menu Links */}
        <nav aria-label="main navigation" className="hidden sm:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-slate-300 hover:text-accent-sky transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Status Badge (Fio Style) */}
        <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wider uppercase">AVAILABLE</span>
        </div>
      </div>
    </header>
  )
}
