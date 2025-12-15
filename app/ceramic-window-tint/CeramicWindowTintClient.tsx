'use client';

import { Check, Phone, Zap, Shield, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { HeatMapVisualization } from "@/components/HeatMapVisualization";
import { TrustTicker } from "@/components/TrustTicker";

const benefits = [
  "Superior solar energy rejection up to 70%",
  "Non-metallic, won't interfere with electronics",
  "Blocks 99% of harmful UV rays",
  "Exceptional clarity and color stability",
  "Reduces glare without dark appearance",
  "Long-lasting durability and fade resistance",
  "Perfect for modern vehicles and homes",
  "Lifetime warranty on premium ceramic films",
];

export default function CeramicWindowTintClient() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Film Types" }, { label: "Ceramic Window Tint" }]} />
      </div>

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/films/ceramic-hero.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/50 to-gray-900/70" style={{ mixBlendMode: 'multiply' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ceramic Window Tint
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Advanced nano-ceramic technology for superior solar energy rejection and
            clarity
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              The Ultimate Window Tint Technology
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Ceramic window tint represents the pinnacle of window film
              technology. Using advanced nano-ceramic particles, these films
              deliver exceptional solar energy rejection and UV protection without the
              drawbacks of metallic films. The result is superior performance
              with crystal-clear visibility.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Unlike traditional dyed or metallic films, ceramic tint won&apos;t fade,
              won&apos;t interfere with GPS, mobile phones, or radio signals, and
              maintains its performance year after year. It&apos;s the premium choice
              for both automotive and architectural applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Solar Energy Rejection
              </h3>
              <p className="text-muted-foreground text-sm">
                Block up to 70% of solar energy for maximum comfort
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No Interference
              </h3>
              <p className="text-muted-foreground text-sm">
                Non-metallic formula works with all electronic devices
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Sun className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                UV Protection
              </h3>
              <p className="text-muted-foreground text-sm">
                99% UV ray blockage protects skin and prevents fading
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
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Experience the Clarity
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Drag the slider to see the dramatic difference ceramic tint makes
            </p>
            <BeforeAfterSlider
              beforeImage="/images/films/ceramic-before.png"
              afterImage="/images/films/ceramic-after.png"
              beforeLabel="Without Ceramic Tint"
              afterLabel="With Ceramic Tint"
            />
          </div>

          <div className="mb-12 sm:mb-16">
            <HeatMapVisualization />
          </div>

          <TrustTicker />

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Upgrade to ceramic tint today
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Experience the difference of premium ceramic window tint. Contact
              us for a free consultation and quote.
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
  );
}
