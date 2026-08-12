import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: { DEFAULT: '#0f0a1e', surface: '#1a1430', elevated: '#241d3a' },
        violet: { DEFAULT: '#7c3aed', light: '#a78bfa', dim: '#4c1d95' },
        cyan: { DEFAULT: '#22d3ee', light: '#67e8f9' },
        emerald: { DEFAULT: '#22c55e' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
