import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-dark-surface py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link href="/" className="text-white font-display font-bold hover:text-violet-light transition-colors">
              JF<span className="text-violet">.</span>
            </Link>
            <span>—</span>
            <span>Quant Developer & Data Scientist</span>
          </div>

          {/* Center */}
          <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-600">
            <span className="uppercase tracking-wider">BUILT WITH</span>
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'].map((tech) => (
              <span key={tech} className="skill-pill px-2 py-0.5 rounded-full text-slate-400">
                {tech}
              </span>
            ))}
          </div>

          {/* Right */}
          <div className="text-[10px] font-mono text-slate-600 text-center">
            <span>Made with ♡ in Indonesia · {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
