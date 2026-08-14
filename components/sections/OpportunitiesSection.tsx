import { MapPin, Sparkles, Send } from 'lucide-react'

export function OpportunitiesSection() {
  return (
    <section className="py-20 relative z-10 border-t border-navy-mid/40 bg-ocean-deep/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-arctic p-8 sm:p-10 rounded-3xl border border-frost-mid/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-status-emerald font-semibold">
              <span className="w-2 h-2 rounded-full bg-status-emerald animate-ping" />
              <span>CAREER STATUS: OPEN FOR HIRING</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              Ready for Full-Time Roles & Quant Research.
            </h3>
            <p className="text-text-sub text-sm font-body max-w-xl">
              Open to Remote & Onsite positions in Quantitative Development, Data Science, and Machine Learning Engineering.
            </p>
          </div>

          <a
            href="mailto:contact@example.com"
            className="shrink-0 inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-arctic-blue to-frost-mid hover:from-frost-mid hover:to-frost-cyan text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-arctic-blue/30"
          >
            <Send className="w-4 h-4" />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  )
}
