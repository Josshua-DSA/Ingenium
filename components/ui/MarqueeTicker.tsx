const tickerItems = [
  'IDX EQUITIES ENGINE',
  'TRIPLE BARRIER LABELING',
  'WALK-FORWARD VALIDATION',
  'PURGED TIME-SERIES CV',
  'LIGHTGBM & XGBOOST',
  'SQLITE LOCAL DATASTORE',
  'RISK-PARITY ALLOCATION',
  'TYPER & RICH CLI',
  'SHARPE & SORTINO OPTIMIZATION',
  'SURVIVORSHIP-BIAS FREE',
]

export function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap border-y border-white/10 bg-slate-950/60 py-3 backdrop-blur-md select-none relative z-10">
      <div className="inline-flex animate-marquee space-x-8 text-xs font-mono tracking-widest text-accent-sky/80 uppercase">
        {tickerItems.concat(tickerItems).map((item, idx) => (
          <span key={idx} className="flex items-center space-x-8">
            <span className="hover:text-sky-300 transition-colors">{item}</span>
            <span className="text-slate-700">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
