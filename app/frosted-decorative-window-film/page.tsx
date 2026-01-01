import { Metadata } from 'next';
import { Check, Phone, Palette, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustTicker } from "@/components/TrustTicker";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { generateProductSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Frosted & Decorative Window Film Sydney | Privacy Solutions',
  description: 'Elegant frosted and decorative window films for privacy without blocking light. Custom designs and business logos available. Professional installation in Sydney.',
  alternates: {
    canonical: 'https://protektsurface.com.au/frosted-decorative-window-film',
  },
  openGraph: {
    title: 'Frosted & Decorative Window Film Sydney',
    description: 'Elegant frosted and decorative window films for privacy without blocking light.',
    url: 'https://protektsurface.com.au/frosted-decorative-window-film',
    images: ['/images/films/frosted-texture.png'],
  },
};

const productSchema = generateProductSchema({
  name: 'Frosted & Decorative Window Film',
  description: 'Elegant frosted and decorative window films for privacy without blocking light. Custom designs and business logos available. Professional installation in Sydney.',
  slug: 'frosted-decorative-window-film',
  category: 'Decorative Window Film',
  image: 'https://protektsurface.com.au/images/films/frosted-texture.png',
});

const benefits = [
  "Elegant etched glass appearance",
  "Instant privacy without blocking light",
  "Cost-effective alternative to etched glass",
  "Variety of patterns and designs available",
  "Easy to remove or replace",
  "Perfect for offices, bathrooms, and partitions",
  "Customizable to match your decor",
  "Professional installation guaranteed",
];

export default function FrostedDecorativeWindowFilmPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <div className="min-h-screen">
      <section className="relative h-[55vh] sm:h-[65vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/films/frosted-hero.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/50 to-gray-900/80" />
        </div>

        {/* Breadcrumbs overlaid on hero */}
        <div className="absolute top-20 sm:top-24 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Film Types" }, { label: "Frosted & Decorative Film" }]} />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Decorative Frosted
            <br />
            Window Film
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Add stylish privacy to any space with the elegant look of etched
            glass
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Elegant Privacy Solutions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Our decorative frosted window films offer the sophisticated
              appearance of etched or sandblasted glass at a fraction of the
              cost. These films provide privacy while still allowing natural
              light to brighten your space.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Perfect for office partitions, bathroom windows, shower doors, and
              any glass surface where you want to add privacy without losing
              light. Choose from a variety of patterns and designs to complement
              your interior design.
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

          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 p-6 sm:p-8 mb-12 sm:mb-16" data-testid="card-custom-signwriting">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-primary/20 rounded-lg inline-block">
                  <Palette className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Custom Designs & Business Logos
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  We work with specialist signwriters to create custom frosted film designs tailored
                  to your exact specifications. Whether you need your business logo on office glass,
                  bespoke patterns for privacy screens, or unique decorative elements for your space,
                  we can bring your vision to life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-md">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">Business Logos</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-md">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">Custom Patterns</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-md">
                    <Palette className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">Bespoke Designs</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <TrustTicker />

          <SocialProofBanner variant="compact" />

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Transform your glass surfaces
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation. We&apos;ll help you select the
              perfect frosted film design for your space.
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
