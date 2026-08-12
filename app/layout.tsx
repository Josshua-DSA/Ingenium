import './globals.css'
import { syne, jakarta, jetbrainsMono } from './fonts'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  title: 'Joshua — Quant Developer & Data Scientist Portfolio',
  description: 'Building systematic equity research engines, ML pipelines, and technical tooling.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${syne.variable} ${jakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-bg-canvas text-slate-100 font-body antialiased flex flex-col min-h-screen selection:bg-sky-500 selection:text-white">
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
