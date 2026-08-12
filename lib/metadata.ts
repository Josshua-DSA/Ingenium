import type { Metadata } from 'next'

export function buildMetadata(options: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://portfolio.vercel.app'
  const title = `${options.title} | Portfolio`

  return {
    title,
    description: options.description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description: options.description,
      url: `${baseUrl}${options.path}`,
      siteName: 'Quant & ML Portfolio',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: options.image || '/og-image.png',
          width: 1200,
          height: 630,
          alt: options.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: options.description,
      images: [options.image || '/og-image.png'],
    },
  }
}
