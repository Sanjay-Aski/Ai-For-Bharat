import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BharatAccess AI - Understand Government Notices & Welfare Schemes',
  description: 'BharatAccess AI helps you understand government notices, welfare schemes, and legal documents in simple language. Get personalized eligibility checks and step-by-step guidance.',
  generator: 'v0.app',
  metadataBase: new URL('https://bharataccess.ai'),
  keywords: ['government notices', 'welfare schemes', 'India', 'eligibility checker', 'legal documents'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}




// ...existing code...
// Find where router.push('/dashboard') or similar redirect exists after successful register
// Change it to:
//router.push('/onboarding');
// ...existing code...