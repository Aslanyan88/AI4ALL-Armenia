import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI4ALL Armenia - Empowering Future with AI Education',
  description: 'AI4ALL Armenia democratizes AI education by empowering youth (15-29) and teachers across Armenia with essential AI skills. An initiative by EIF.',
  keywords: 'AI education, Armenia, youth empowerment, teacher training, artificial intelligence, EIF',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'AI4ALL Armenia - Empowering Future with AI Education',
    description: 'AI4ALL Armenia democratizes AI education by empowering youth (15-29) and teachers across Armenia with essential AI skills.',
    url: 'https://ai4all-armenia.org',
    siteName: 'AI4ALL Armenia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI4ALL Armenia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI4ALL Armenia - Empowering Future with AI Education',
    description: 'AI4ALL Armenia democratizes AI education by empowering youth (15-29) and teachers across Armenia with essential AI skills.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
