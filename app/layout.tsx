import type { Metadata } from 'next'
import { montserrat, dmSerifDisplay, jetbrainsMono } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joshua — Data Scientist & ML Engineer Portfolio',
  description: 'Personal branding portfolio showcasing data science pipelines, predictive analytics models, and ML engineering.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
        ${montserrat.variable} 
        ${dmSerifDisplay.variable} 
        ${jetbrainsMono.variable} 
        font-display antialiased selection:bg-arctic-blue selection:text-white
      `}>
        {children}
      </body>
    </html>
  )
}
