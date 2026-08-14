import './globals.css'
import { syne, jakarta, jetbrainsMono } from './fonts'
import { HeaderNav } from '@/components/sections/HeaderNav'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  title: 'Joshua — Data Scientist & ML Engineer Portfolio',
  description: 'Personal branding portfolio showcasing data science, machine learning models, and data pipelines.',
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
      <body className="bg-dark text-slate-100 font-body antialiased flex flex-col min-h-screen">
        <HeaderNav />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
