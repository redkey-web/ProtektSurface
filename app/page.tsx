import { Metadata } from 'next';
import HomeClient from './HomeClient';
import { generateLocalBusinessSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Professional Window Tinting Sydney | ProtektSurface',
  description: "Sydney's premier window tinting & surface protection specialists. Premium ceramic films for homes, businesses and vehicles. Professional installation with lifetime warranty.",
  alternates: {
    canonical: 'https://protektsurface.com.au',
  },
  openGraph: {
    title: 'Professional Window Tinting Sydney | ProtektSurface',
    description: "Sydney's premier window tinting & surface protection specialists.",
    url: 'https://protektsurface.com.au',
    images: ['/images/hero/hero-background.png'],
  },
};

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema('https://protektsurface.com.au');

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <HomeClient />
    </>
  );
}
