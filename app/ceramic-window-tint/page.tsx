import { Metadata } from 'next';
import CeramicWindowTintClient from './CeramicWindowTintClient';
import { generateProductSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Ceramic Window Tint Sydney | Premium Heat Rejection',
  description: 'Advanced nano-ceramic window tinting with up to 70% solar energy rejection. Non-metallic, crystal-clear visibility. Professional installation in Sydney.',
  alternates: {
    canonical: 'https://protektsurface.com.au/ceramic-window-tint',
  },
  openGraph: {
    title: 'Ceramic Window Tint Sydney | Premium Heat Rejection',
    description: 'Advanced nano-ceramic window tinting with up to 70% solar energy rejection.',
    url: 'https://protektsurface.com.au/ceramic-window-tint',
    images: ['/images/films/ceramic-texture.png'],
  },
};

const productSchema = generateProductSchema({
  name: 'Ceramic Window Tint',
  description: 'Advanced nano-ceramic window tinting with up to 70% solar energy rejection. Non-metallic, crystal-clear visibility. Professional installation in Sydney.',
  slug: 'ceramic-window-tint',
  category: 'Window Tinting Film',
  image: 'https://protektsurface.com.au/images/films/ceramic-texture.png',
});

export default function CeramicWindowTintPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <CeramicWindowTintClient />
    </>
  );
}
