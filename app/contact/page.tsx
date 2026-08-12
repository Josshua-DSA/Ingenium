import { Section } from '@/components/layout/Section'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch for quantitative research roles, collaborations, or technical inquiries.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          Contact
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-10 font-body">
          Open to quantitative research roles, machine learning engineering opportunities, and technical collaborations.
        </p>

        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg p-6 sm:p-8 space-y-6 font-mono text-sm">
          <div>
            <span className="text-[var(--color-text-muted)] block text-xs mb-1 uppercase tracking-wider">
              Email
            </span>
            <a
              href="mailto:contact@example.com"
              className="text-[var(--color-text-primary)] hover:text-[var(--color-blue-bright)] transition-colors text-base font-semibold"
            >
              contact@example.com
            </a>
          </div>

          <div className="border-t border-[var(--color-border-subtle)] pt-6 flex flex-wrap gap-6 text-sm">
            <div>
              <span className="text-[var(--color-text-muted)] block text-xs mb-1 uppercase tracking-wider">
                GitHub
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-blue-bright)] hover:underline"
              >
                github.com
              </a>
            </div>

            <div>
              <span className="text-[var(--color-text-muted)] block text-xs mb-1 uppercase tracking-wider">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-blue-bright)] hover:underline"
              >
                linkedin.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
