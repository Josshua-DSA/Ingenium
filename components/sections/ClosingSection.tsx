import { Mail, Github, ArrowRight, MapPin } from 'lucide-react'

export function ClosingSection() {
  return (
    <section id="contact" className="w-full min-h-[60vh] flex items-center justify-center py-24 relative z-10 text-text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Section Header */}
        <span className="font-mono text-xs uppercase tracking-widest text-arctic-blue block mb-3 font-bold">
          LET&apos;S CONNECT
        </span>
        <h2 className="font-accent italic text-3xl sm:text-5xl text-text-primary tracking-tight mb-4">
          Open for Roles & Collaborations.
        </h2>
        <p className="text-slate-700 text-base sm:text-lg font-display font-medium max-w-2xl mx-auto mb-10">
          Looking for Data Science, ML Engineering, Data Engineering, or AI Engineering positions.
          If you have a role or project where quantitative rigor matters, let&apos;s talk.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center space-x-2 bg-arctic-blue hover:bg-arctic-mid text-white px-8 py-4 rounded-xl font-display font-semibold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/josjiez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 backdrop-blur-[12px] bg-white/70 border border-white/90 border-t-white text-text-primary hover:text-arctic-blue px-8 py-4 rounded-xl font-display font-semibold text-sm transition-all duration-200 shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Status Footer */}
        <div className="inline-flex items-center space-x-6 backdrop-blur-[20px] bg-white/80 border border-white/90 border-t-white px-6 py-3 rounded-full shadow-sm text-xs font-mono">
          <div className="flex items-center space-x-2 text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-arctic-blue" />
            <span className="font-bold">Indonesia · Remote & Onsite</span>
          </div>
          <div className="h-4 w-px bg-arctic-blue/20" />
          <div className="flex items-center space-x-2 text-emerald-800 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available Now</span>
          </div>
        </div>

      </div>
    </section>
  )
}
