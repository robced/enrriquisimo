import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: 'Enrriquisimo',
  description: 'Personal portfolio for Enrique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="bg-background" lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
