import type { Metadata } from 'next';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://protektsurface.com.au'),
  title: {
    default: 'ProtektSurface | Professional Window Tinting Sydney',
    template: '%s | ProtektSurface',
  },
  description: 'Sydney\'s premier window tinting and surface protection specialists. Premium ceramic films for homes, businesses and vehicles. Professional installation with lifetime warranty.',
  keywords: ['window tinting', 'Sydney', 'ceramic window tint', 'residential window tinting', 'commercial window tinting', 'automotive window tinting', 'UV protection', 'privacy film'],
  authors: [{ name: 'ProtektSurface' }],
  creator: 'ProtektSurface',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://protektsurface.com.au',
    siteName: 'ProtektSurface',
    title: 'ProtektSurface | Professional Window Tinting Sydney',
    description: 'Sydney\'s premier window tinting and surface protection specialists.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ProtektSurface - Professional Window Tinting Sydney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProtektSurface | Professional Window Tinting Sydney',
    description: 'Sydney\'s premier window tinting and surface protection specialists.',
    images: ['/images/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
