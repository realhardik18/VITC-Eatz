import './globals.css'
import { Metadata } from 'next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'VITC Eatz',
  description: 'Food Directory for the students of VIT-C',
}

