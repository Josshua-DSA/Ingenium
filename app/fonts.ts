import { Montserrat, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700', '800'],
  display: 'swap',
})

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400'],
  style: ['italic'],
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})
