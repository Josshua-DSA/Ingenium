import { Section } from '@/components/layout/Section'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'About',
  description: 'Background, core domains, and technical execution principles.',
  path: '/about',
})

const techStack = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'SQL', 'Bash'] },
  { category: 'Quant & ML', items: ['PyTorch', 'scikit-learn', 'LightGBM', 'XGBoost', 'pandas', 'NumPy'] },
  { category: 'Systems & Web', items: ['Next.js', 'Tailwind CSS', 'SQLite', 'Docker', 'Git', 'Linux'] },
]

export default function AboutPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-[var(--color-text-primary)] mb-6">
          About
        </h1>

        <div className="space-y-6 text-lg text-[var(--color-text-secondary)] leading-relaxed font-body">
          <p>
            I focus on building systematic equity research engines, quantitative signal pipelines, 
            and developer tooling. My work sits at the intersection of machine learning, financial market structure (specifically IDX equities), and clean software architecture.
          </p>
          <p>
            Rather than relying on abstract metrics or off-the-shelf black boxes, I build research workflows from the ground up: starting from raw order/tick data processing, walk-forward validation windows, to triple barrier labeling and risk-adjusted allocation models.
          </p>
        </div>

        {/* Stack section */}
        <div className="mt-16 border-t border-[var(--color-border-subtle)] pt-10">
          <h2 className="font-display text-2xl font-bold text-[var(--color-text-primary)] mb-8">
            Technical Stack
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {techStack.map((group) => (
              <div key={group.category} className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg p-5">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-blue-bright)] mb-4 font-semibold">
                  {group.category}
                </h3>
                <ul className="space-y-2 font-mono text-sm text-[var(--color-text-secondary)]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="text-[var(--color-text-muted)] mr-2">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
