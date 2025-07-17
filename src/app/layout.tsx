import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorBoundary from '../components/ErrorBoundary'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI4ALL Armenia - Empowering Future with AI Education',
  description: 'AI4ALL Armenia democratizes AI education by empowering youth (15-29) and teachers across Armenia with essential AI skills. An initiative by EIF.',
  keywords: 'AI education, Armenia, youth empowerment, teacher training, artificial intelligence, EIF, technology education, digital skills',
  authors: [{ name: 'AI4ALL Armenia' }],
  creator: 'AI4ALL Armenia',
  publisher: 'AI4ALL Armenia',
  category: 'Education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai4all-armenia.org'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'hy-AM': '/hy',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'AI4ALL Armenia - Empowering Youth with AI Education',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI4ALL Armenia - Empowering Future with AI Education',
    description: 'AI4ALL Armenia democratizes AI education by empowering youth (15-29) and teachers across Armenia with essential AI skills.',
    images: ['/logo.jpg'],
    creator: '@ai4all_armenia',
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI4ALL Armenia" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.warn('Theme initialization failed:', e);
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <ThemeProvider>
            <LanguageProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
                  {children}
                </main>
                <Footer />
              </div>
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
