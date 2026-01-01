import { Metadata } from 'next';
import Image from 'next/image';
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OurProcess } from "@/components/OurProcess";
import { TrustTicker } from "@/components/TrustTicker";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { generateServiceSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Residential Window Tinting Sydney',
  description: 'Professional residential window tinting in Sydney. Reduce heat, block UV rays, enhance privacy. Premium films with lifetime warranty.',
  alternates: {
    canonical: 'https://protektsurface.com.au/residential-window-tinting',
  },
  openGraph: {
    title: 'Residential Window Tinting Sydney | ProtektSurface',
    description: 'Professional residential window tinting in Sydney. Reduce heat, block UV rays, enhance privacy.',
    url: 'https://protektsurface.com.au/residential-window-tinting',
    images: ['/images/services/residential.png'],
  },
};

const serviceSchema = generateServiceSchema({
  name: 'Residential Window Tinting',
  description: 'Professional residential window tinting in Sydney. Reduce heat, block UV rays, enhance privacy. Premium films with lifetime warranty.',
  slug: 'residential-window-tinting',
  serviceType: 'Window Tinting Service',
  image: 'https://protektsurface.com.au/images/services/residential.png',
});

const benefits = [
  "Reduce solar energy and cooling costs with up to 70% rejection",
  "Block 99% of harmful UV rays",
  "Enhance privacy without losing natural light",
  "Reduce glare for comfortable living spaces",
  "Protect furniture and flooring from fading",
  "Improve home security and safety",
  "Professional installation guaranteed",
  "Wide range of tint options and shades",
];

export default function ResidentialWindowTintingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <div className="min-h-screen">
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/services/residential.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/50 to-gray-900/70" style={{ mixBlendMode: 'multiply' }} />
        </div>

        <div className="absolute top-20 sm:top-24 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: "Services" }, { label: "Residential Window Tinting" }]} variant="overlay" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Residential Flat Glass
            <br />
            Window Tint
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Enhance your home&apos;s comfort, energy efficiency, and privacy with
            premium residential window films
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Transform Your Home Environment
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Our residential window tinting solutions are designed to reduce
              heat, glare, and UV exposure without compromising natural light or
              views. Whether you&apos;re looking to improve comfort, reduce energy
              bills, or enhance privacy, we have the perfect film for your home.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Using premium-quality films and professional installation
              techniques, we ensure a flawless finish that will protect your
              home for years to come.
            </p>
          </div>

          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-md hover-elevate"
                  data-testid={`benefit-${index}`}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Our Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden group isolate" data-testid="gallery-example-1">
                <div className="aspect-video overflow-hidden relative isolate bg-muted">
                  <Image
                    src="/images/services/residential/example-1.png"
                    alt="Residential window tinting example - living space with tinted windows"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Living Spaces</h4>
                  <p className="text-sm text-muted-foreground">Natural light without the harsh glare or heat</p>
                </div>
              </Card>

              <Card className="overflow-hidden group isolate" data-testid="gallery-example-2">
                <div className="aspect-video overflow-hidden relative isolate bg-muted">
                  <Image
                    src="/images/services/residential/example-2.png"
                    alt="Residential window tinting example - privacy window film"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Privacy Solutions</h4>
                  <p className="text-sm text-muted-foreground">Soft diffused light with complete privacy</p>
                </div>
              </Card>

              <Card className="overflow-hidden group isolate" data-testid="gallery-example-3">
                <div className="aspect-video overflow-hidden relative isolate bg-muted">
                  <Image
                    src="/images/services/residential/example-3.png"
                    alt="Residential window tinting example - home exterior with tinted windows"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Exterior Appeal</h4>
                  <p className="text-sm text-muted-foreground">Enhance your home&apos;s curb appeal and efficiency</p>
                </div>
              </Card>

              <Card className="overflow-hidden group isolate" data-testid="gallery-example-4">
                <div className="aspect-video overflow-hidden relative isolate bg-muted">
                  <Image
                    src="/images/services/residential/example-4.png"
                    alt="Residential window tinting example - professional installation"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Professional Installation</h4>
                  <p className="text-sm text-muted-foreground">Expert craftsmanship for a flawless finish</p>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </section>

      <OurProcess showCTA={false} />

      <TrustTicker />

      <SocialProofBanner />

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to enhance your home?
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our team will
              help you choose the perfect window film solution for your home.
            </p>
            <a href="tel:0286062842">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white px-8 backdrop-blur-md bg-gray-900/60 hover:bg-gray-900/30 hover:text-primary transition-all duration-300"
                data-testid="button-get-quote"
              >
                <Phone className="mr-2 w-5 h-5" />
                (02) 8606 2842
              </Button>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
