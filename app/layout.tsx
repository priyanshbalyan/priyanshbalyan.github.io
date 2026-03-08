import type { Metadata } from 'next'
import '../public/css/style.css'

export const metadata: Metadata = {
  title: 'Priyansh Balyan',
  description: 'Senior Frontend Engineer',
}

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
