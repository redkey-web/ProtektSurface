import { Metadata } from 'next';
import { Check, Phone, Shield, Zap, AlertTriangle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustTicker } from "@/components/TrustTicker";
import { generateProductSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Window Security Protection Film Sydney | 3M & XPEL',
  description: 'Premium security window film installation in Sydney. Protect against break-ins, storms, and impacts. 3M and XPEL certified installer. Free consultation.',
  alternates: {
    canonical: 'https://protektsurface.com.au/window-protection-film',
  },
  openGraph: {
    title: 'Window Security Protection Film Sydney | 3M & XPEL',
    description: 'Premium security window film installation in Sydney. Protect against break-ins, storms, and impacts.',
    url: 'https://protektsurface.com.au/window-protection-film',
    images: ['/images/films/security-texture.png'],
  },
};

const productSchema = generateProductSchema({
  name: 'Window Security Protection Film',
  description: 'Premium security window film installation in Sydney. Protect against break-ins, storms, and impacts. 3M and XPEL certified installer. Free consultation.',
  slug: 'window-protection-film',
  category: 'Security Window Film',
  image: 'https://protektsurface.com.au/images/films/security-texture.png',
});

const benefits = [
  "Protects against scratches, chips, and impact damage",
  "Holds shattered glass together for safety",
  "Blocks 99% of harmful UV rays",
  "Virtually invisible clear protection",
  "Self-healing technology on premium films",
  "Reduces risk of injury from broken glass",
  "Extends the life of your windows",
  "Ideal for storm protection and security",
];

export default function WindowProtectionFilmPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Film Types" }, { label: "Security Protection Film" }]} />
      </div>

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/films/protection-hero.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/50 to-gray-900/70" style={{ mixBlendMode: 'multiply' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Window Security
            <br />
            Protection Film
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Premium security film that strengthens and safeguards your windows against break-ins, storms, and impacts
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Professional Security Protection Film Installation
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Security protection film provides an invisible shield that dramatically
              increases the strength and safety of your glass windows. Whether you&apos;re
              concerned about storm damage, break-ins, or accidental impacts, our
              window protection films help hold glass together even when shattered, reducing
              the risk of injury and property damage.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              These security films are virtually invisible once installed, maintaining your views
              while providing robust protection. They also block 99% of UV rays, helping
              to protect your interiors from fading and sun damage. Perfect for homes,
              businesses, and high-risk areas requiring enhanced window security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Impact Resistance
              </h3>
              <p className="text-muted-foreground text-sm">
                Protects against impacts, scratches, and breakage
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <AlertTriangle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Safety First
              </h3>
              <p className="text-muted-foreground text-sm">
                Holds shattered glass together to prevent injuries
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Storm Protection
              </h3>
              <p className="text-muted-foreground text-sm">
                Shields windows from severe weather and flying debris
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

          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Premium Security Film Brands We Install
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer industry-leading security protection films from trusted manufacturers.
              Here&apos;s how our two premium options compare:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 sm:p-8 border-2 hover-elevate" data-testid="card-3m-security">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">3M Security Film</h4>
                    <p className="text-sm text-muted-foreground">Industry Standard</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Trusted brand with decades of proven performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Multiple thickness options (4mil to 14mil)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Excellent optical clarity with minimal distortion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Strong adhesive system for reliable glass retention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Comprehensive manufacturer warranty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">99% UV protection included</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Best for:</strong> Commercial buildings, storefronts, schools, and properties requiring proven, cost-effective security film solutions.
                  </p>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-2 border-primary hover-elevate relative overflow-visible" data-testid="card-xpel-security">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Premium Choice
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">XPEL Security Clear Series</h4>
                    <p className="text-sm text-muted-foreground">Advanced Protection</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Superior impact resistance with advanced polymer technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Self-healing top coat resists scratches and scuffs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Crystal-clear optical quality with no haze or yellowing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Enhanced tear resistance for forced-entry protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Premium 10-year manufacturer warranty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">99% UV protection with superior clarity retention</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Best for:</strong> High-end residential properties, luxury retail, museums, and applications demanding the highest level of protection and optical quality.
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-muted/50 p-6 text-center" data-testid="card-comparison-summary">
              <h4 className="text-lg font-semibold text-foreground mb-2">Not Sure Which Security Film Is Right for You?</h4>
              <p className="text-muted-foreground mb-4">
                Both 3M and XPEL security films provide excellent protection. Our team will assess your property
                and recommend the best window protection film solution based on your security needs, budget, and aesthetic preferences.
              </p>
              <a href="tel:0286062842">
                <Button variant="outline" data-testid="button-consultation">
                  <Phone className="mr-2 w-4 h-4" />
                  Get Expert Advice
                </Button>
              </a>
            </Card>
          </div>

          <TrustTicker />

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Protect your property today
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get a free consultation to learn how window protection film can
              safeguard your windows and enhance safety.
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
