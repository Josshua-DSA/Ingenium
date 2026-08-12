import { Mail, Github } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card-fio p-10 sm:p-14 rounded-3xl border border-sky-400/20 shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-sky block mb-3 font-semibold">
            LET&apos;S CONNECT
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6">
            Open for Quantitative Roles & Collaborations.
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto font-body mb-8">
            Whether you are recruiting for quantitative research positions, data science roles, or looking to collaborate on algorithmic engineering projects — let&apos;s talk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-sky-500/30"
            >
              <Mail className="w-4 h-4" />
              <span>contact@example.com</span>
            </a>
            <a
              href="https://github.com/josjiez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full glass-card-fio text-slate-200 hover:text-white font-medium text-sm transition-all duration-300"
            >
              <Github className="w-4 h-4 text-accent-sky" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
