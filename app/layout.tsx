import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '手机扭蛋器',
  description: 'Created with https://github.com/sxyseo/phone-case-generator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
