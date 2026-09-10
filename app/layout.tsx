import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DakhaBrakha Discovery Gacha',
  description: 'Pull a random DakhaBrakha song by mood and discover your next rite.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#141414]"><body>{children}</body></html>
}
