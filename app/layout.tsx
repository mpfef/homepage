import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "L'Instant Hypnose",
    template: "%s | L'Instant Hypnose",
  },
  description:
    "Marianne Pfefferle, praticienne en hypnose ericksonienne, vous accompagne dans la gestion du stress, l'arrêt du tabac, la confiance en soi et le développement personnel.",
  keywords: [
    'Marianne Pfefferle',
    'praticienne hypnose',
    'hypnose ericksonienne',
    'hypnothérapie',
    'hypnose',
    'gestion du stress',
    'arrêt du tabac',
    'confiance en soi',
    'développement personnel',
  ],
  authors: [{ name: "L'Instant Hypnose" }],
  creator: "L'Instant Hypnose",
  metadataBase: new URL('https://www.instanthypnose.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.instanthypnose.com',
    siteName: "L'Instant Hypnose",
    title: "L'Instant Hypnose",
    description:
      "Marianne Pfefferle, praticienne en hypnose ericksonienne, vous accompagne dans la gestion du stress, l'arrêt du tabac, la confiance en soi et le développement personnel.",
    images: [
      {
        url: '../images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Marianne Pfefferle',
      },
    ],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
