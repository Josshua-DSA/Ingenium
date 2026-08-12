export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)]">
        <div>
          <span>JF</span> — <span>{new Date().getFullYear()}</span>
        </div>
        <div>
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-success)] mr-2 animate-pulse"></span>
          System Operational
        </div>
      </div>
    </footer>
  )
}
