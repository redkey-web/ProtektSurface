import { Metadata } from 'next';
import Link from 'next/link';
import { Check, Phone, Sun, Shield, Home, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustTicker } from "@/components/TrustTicker";
import { generateProductSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'UV Blocking Window Film Sydney | 99% UV Protection',
  description: 'Block 99% of harmful UV rays while keeping your space bright. Protect your health, furniture, and flooring from sun damage. Professional installation in Sydney.',
  alternates: {
    canonical: 'https://protektsurface.com.au/uv-blocking-film',
  },
  openGraph: {
    title: 'UV Blocking Window Film Sydney | 99% UV Protection',
    description: 'Block 99% of harmful UV rays while keeping your space bright.',
    url: 'https://protektsurface.com.au/uv-blocking-film',
    images: ['/images/films/uv-texture.png'],
  },
};

const productSchema = generateProductSchema({
  name: 'UV Blocking Window Film',
  description: 'Block 99% of harmful UV rays while keeping your space bright. Protect your health, furniture, and flooring from sun damage. Professional installation in Sydney.',
  slug: 'uv-blocking-film',
  category: 'UV Protection Film',
  image: 'https://protektsurface.com.au/images/films/uv-texture.png',
});

const benefits = [
  "Blocks 99% of harmful UVA and UVB rays",
  "Protects skin from sun damage indoors",
  "Prevents furniture and flooring from fading",
  "Reduces risk of skin cancer and premature aging",
  "Maintains natural light and views",
  "Helps regulate indoor temperature",
  "Extends the life of interior furnishings",
  "Ideal for homes, offices, and vehicles",
];

export default function UVBlockingFilmPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <div className="min-h-screen">
      <section className="relative h-[55vh] sm:h-[65vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/films/uv-hero.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/50 to-gray-900/80" />
        </div>

        {/* Breadcrumbs overlaid on hero */}
        <div className="absolute top-20 sm:top-24 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Film Types" }, { label: "UV Blocking Film" }]} />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            UV Blocking Window Film
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Block 99% of harmful UV rays while keeping your space bright and comfortable
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Powerful UV Protection for Your Health
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              UV blocking window film is your invisible shield against harmful ultraviolet
              radiation. While you enjoy the natural light streaming through your windows,
              our films block up to 99% of UVA and UVB rays that can damage your skin,
              eyes, and furnishings. This protection is especially important for those
              who spend long hours near windows at home or work.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Beyond protecting your health, UV blocking films prevent the fading and
              deterioration of valuable furniture, artwork, flooring, and fabrics. They
              help preserve the appearance and value of your interior investments while
              reducing cooling costs by rejecting solar heat.
            </p>
          </div>

          <Card className="bg-primary/10 border-primary/20 p-6 sm:p-8 mb-12" data-testid="card-film-comparison">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  All Our Films Block 99% UV Rays
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every window film we install provides the same exceptional 99% UV protection.
                  Where our films differ is in their <strong className="text-foreground">Solar Energy Rejection</strong> and{" "}
                  <strong className="text-foreground">Infrared Blocking</strong> capabilities—key factors
                  that determine how much heat enters your space.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Standard Films</span>
                      <p className="text-sm text-muted-foreground">99% UV blocking with good solar rejection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Ceramic Films</span>
                      <p className="text-sm text-muted-foreground">99% UV + best solar & infrared rejection</p>
                    </div>
                  </div>
                </div>
                <Link href="/ceramic-window-tint">
                  <Button variant="default" className="group" data-testid="button-ceramic-link">
                    Explore Ceramic Window Tint
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="border-primary bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8 mb-12" data-testid="card-ceramic-upgrade">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Want Maximum Heat Protection?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                While all our films block 99% of UV rays, our <strong className="text-foreground">Ceramic Window Tint</strong> offers
                the highest solar energy rejection (up to 70%) and superior infrared blocking. This means significantly
                cooler interiors and lower energy bills—without sacrificing visibility or clarity.
              </p>
              <Link href="/ceramic-window-tint">
                <Button size="lg" className="group" data-testid="button-upgrade-ceramic">
                  Discover Ceramic Technology
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Sun className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                99% UV Protection
              </h3>
              <p className="text-muted-foreground text-sm">
                Blocks harmful UVA and UVB rays effectively
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Health Protection
              </h3>
              <p className="text-muted-foreground text-sm">
                Reduces skin cancer risk and premature aging
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Preserve Interiors
              </h3>
              <p className="text-muted-foreground text-sm">
                Prevents fading of furniture, artwork, and flooring
              </p>
            </div>
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

          <TrustTicker />

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Protect your health and home today
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and learn how UV blocking film can
              safeguard your family and furnishings.
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
