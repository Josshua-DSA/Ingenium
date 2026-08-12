const tickerRow1 = [
  'MACHINE LEARNING', 'QUANTITATIVE FINANCE', 'WALK-FORWARD VALIDATION',
  'TRIPLE BARRIER LABELING', 'PYTHON', 'SQL', 'LIGHTGBM',
  'IDX EQUITIES ENGINE', 'PORTFOLIO OPTIMIZATION', 'SURVIVORSHIP-BIAS FREE',
  'PURGED TIME-SERIES CV', 'CONTINUOUS LEARNING', 'DATA SCIENCE',
]

const tickerRow2 = [
  'PYTORCH', 'XGBOOST', 'SQLITE', 'RISK-PARITY ALLOCATION',
  'SHARPE & SORTINO OPTIMIZATION', 'TYPER & RICH CLI', 'DOCKER',
  'NEXT.JS', 'TYPESCRIPT', 'PANDAS', 'NUMPY', 'GIT', 'LINUX',
]

function MarqueeRow({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden whitespace-nowrap py-3">
      <div className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}>
        <div className="inline-flex items-center space-x-6">
          {doubled.map((item, idx) => (
            <span key={idx} className="flex items-center space-x-6">
              <span className="hover:text-violet-light transition-colors cursor-default">{item}</span>
              <span className="text-slate-700">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MarqueeTicker() {
  return (
    <div className="w-full border-y border-white/5 bg-dark-surface/50 backdrop-blur-sm select-none text-[11px] font-mono tracking-widest text-slate-500 uppercase relative z-10">
      <MarqueeRow items={tickerRow1} direction="left" />
      <div className="border-t border-white/5" />
      <MarqueeRow items={tickerRow2} direction="right" />
    </div>
  )
}
