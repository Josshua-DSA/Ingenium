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
        arctic: {
          abyss: '#0A0F1E',
          blue: '#2E6DAD',
          mist: '#EAF4FB',
        },
        ocean: {
          deep: '#0D1B2E',
        },
        navy: {
          dark: '#112240',
          mid: '#1A3354',
        },
        frost: {
          mid: '#5BA4CF',
          light: '#A8D4F0',
          pale: '#D4EBF9',
          cyan: '#00F2FE',
        },
        status: {
          emerald: '#34D399',
        },
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
