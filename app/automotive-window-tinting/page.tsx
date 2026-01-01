import { Metadata } from 'next';
import AutomotiveWindowTintingClient from './AutomotiveWindowTintingClient';
import { generateServiceSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Automotive Window Tinting Sydney | Protekt Auto',
  description: 'Professional car window tinting in Sydney by Protekt Auto. Premium ceramic and carbon films with lifetime warranty. Reduce heat, block UV rays.',
  alternates: {
    canonical: 'https://protektsurface.com.au/automotive-window-tinting',
  },
  openGraph: {
    title: 'Automotive Window Tinting Sydney | Protekt Auto',
    description: 'Professional car window tinting in Sydney by Protekt Auto. Premium ceramic and carbon films with lifetime warranty.',
    url: 'https://protektsurface.com.au/automotive-window-tinting',
    images: ['/images/automotive/car-window-tinting.png'],
  },
};

const serviceSchema = generateServiceSchema({
  name: 'Automotive Window Tinting',
  description: 'Professional car window tinting in Sydney by Protekt Auto. Premium ceramic and carbon films with lifetime warranty. Reduce heat, block UV rays.',
  slug: 'automotive-window-tinting',
  serviceType: 'Automotive Window Tinting Service',
  image: 'https://protektsurface.com.au/images/automotive/car-window-tinting.png',
});

export default function AutomotiveWindowTintingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <AutomotiveWindowTintingClient />
    </>
  );
}
