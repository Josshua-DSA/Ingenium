import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        arctic: {
          blue:    'var(--arctic-blue)',
          mid:     'var(--arctic-mid)',
          bright:  'var(--arctic-bright)',
          light:   'var(--arctic-light)',
          pale:    'var(--arctic-pale)',
        },
        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted:     'var(--text-muted)',
          faint:     'var(--text-faint)',
        },
        status: {
          active:   'var(--status-active)',
          wip:      'var(--status-wip)',
          archived: 'var(--status-archived)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        accent:  ['var(--font-accent)', 'Georgia', 'serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
