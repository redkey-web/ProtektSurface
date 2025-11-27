import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { serviceAreasData } from '@/lib/service-areas-data';

export const metadata: Metadata = {
  title: 'Service Areas | Window Tinting Sydney | All Suburbs We Cover',
  description: 'Professional window tinting services across Sydney. We cover Parramatta, Liverpool, Penrith, and surrounding suburbs. Find your local area for expert residential, commercial, and automotive tinting.',
  alternates: {
    canonical: 'https://protektsurface.com.au/service-areas',
  },
  openGraph: {
    title: 'Service Areas | Window Tinting Sydney',
    description: 'Professional window tinting services across Sydney and Western Sydney suburbs.',
    type: 'website',
    images: ['/images/og-image.png'],
  },
};

export default function AllServiceAreasPage() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Service Areas" }]} />
      </div>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Service Areas
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide professional window tinting services across Sydney and Western Sydney. 
              Find your suburb below to learn about our local services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreasData.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`}>
                <Card className="p-6 h-full hover-elevate active-elevate-2 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {area.suburb}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-2">
                        NSW {area.postcode}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {area.description.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Don&apos;t see your suburb?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We service all of Greater Sydney. Contact us for a free quote and we&apos;ll 
                arrange a convenient time to visit your location.
              </p>
              <Link href="/get-quote">
                <Button size="lg" data-testid="button-get-quote-service-areas">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
