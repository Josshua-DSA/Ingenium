'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-[28px] backdrop-saturate-[180%] bg-[rgba(10,22,40,0.70)] border-b border-[rgba(30,58,95,0.35)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-display font-bold text-lg tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-blue-bright)] transition-colors"
        >
          JF<span className="text-[var(--color-blue-bright)]">.</span>
        </Link>
        <nav aria-label="main navigation" className="flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`font-mono text-sm transition-colors ${
                  isActive
                    ? 'text-[var(--color-blue-bright)] font-medium'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
