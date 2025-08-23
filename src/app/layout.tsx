import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Technical & Engineering Solutions - Minimizing Downtime, Maximizing Uptime',
  description: 'Leading provider of comprehensive engineering diagnostics and condition-based monitoring solutions across Tanzania and beyond. We deliver cutting-edge technical expertise to keep your operations running at peak performance.',
  keywords: 'engineering diagnostics, condition monitoring, Tanzania, industrial maintenance, infrared thermography, vibration analysis, oil analysis, motor circuit analysis, electrical testing',
  authors: [{ name: 'Technical & Engineering Solutions' }],
  creator: 'Technical & Engineering Solutions',
  publisher: 'Technical & Engineering Solutions',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tes.co.tz',
    siteName: 'Technical & Engineering Solutions',
    title: 'Technical & Engineering Solutions - Engineering Excellence',
    description: 'Leading provider of comprehensive engineering diagnostics and condition-based monitoring solutions across Tanzania and beyond.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical & Engineering Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical & Engineering Solutions - Engineering Excellence',
    description: 'Leading provider of comprehensive engineering diagnostics and condition-based monitoring solutions.',
    images: ['/twitter-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2B4DA9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}