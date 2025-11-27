import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceAreasData, getServiceAreaBySlug } from '@/lib/service-areas-data';
import { ServiceAreaPage } from '@/components/ServiceAreaPage';
import { generateServiceAreaSchema, JsonLd } from '@/lib/schema';

type Props = {
  params: Promise<{ suburb: string }>;
};

export async function generateStaticParams() {
  return serviceAreasData.map((area) => ({
    suburb: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb } = await params;
  const data = getServiceAreaBySlug(suburb);

  if (!data) {
    return {};
  }

  return {
    title: `Window Tinting ${data.suburb} | Professional Services NSW ${data.postcode}`,
    description: data.description,
    alternates: {
      canonical: `https://protektsurface.com.au/service-areas/${suburb}`,
    },
    openGraph: {
      title: `Window Tinting ${data.suburb}`,
      description: data.description,
      type: 'website',
      images: ['/images/og-image.png'],
    },
  };
}

export default async function ServiceAreaDynamicPage({ params }: Props) {
  const { suburb } = await params;
  const data = getServiceAreaBySlug(suburb);

  if (!data) {
    notFound();
  }

  const serviceAreaSchema = generateServiceAreaSchema({
    suburb: data.suburb,
    postcode: data.postcode,
    services: data.services,
  });

  return (
    <>
      <JsonLd data={serviceAreaSchema} />
      <ServiceAreaPage
        suburb={data.suburb}
        postcode={data.postcode}
        description={data.description}
        localInfo={data.localInfo}
        services={data.services}
        featuredLinks={data.featuredLinks}
      />
    </>
  );
}
