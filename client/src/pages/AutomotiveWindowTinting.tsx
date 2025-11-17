import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import heroImage from "@assets/generated_images/Automotive_window_tinting_service_32a1f23d.png";

export default function AutomotiveWindowTinting() {
  const benefits = [
    "Reduce cabin heat by up to 60%",
    "Block 99% of harmful UV rays",
    "Enhance privacy and security",
    "Reduce glare while driving",
    "Protect interior from fading",
    "Improve vehicle appearance and resale value",
    "Professional Protekt Auto installation",
    "Lifetime warranty on premium films",
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Services" }, { label: "Automotive Window Tinting" }]} />
      </div>

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Automotive Window Tinting
            <br />
            <span className="text-primary">by Protekt Auto</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium car window tinting in Sydney. Professional installation with
            lifetime warranty
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Expert Car Window Tinting Sydney
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Protekt Auto specializes in premium automotive window tinting using
              the highest quality ceramic and carbon films. Our expert
              technicians ensure a flawless, bubble-free installation that
              enhances your vehicle's comfort, appearance, and protection.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Whether you drive a luxury sedan, SUV, or sports car, we have the
              perfect tint solution to reduce heat, block UV rays, and give your
              vehicle that sleek, professional look. All installations come with
              our comprehensive lifetime warranty for your peace of mind.
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

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Get professional car window tinting today
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact Protekt Auto for a free quote. We'll help you choose the
              perfect tint shade and film type for your vehicle.
            </p>
            <a href="tel:0286062842">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary border-primary-foreground hover-elevate active-elevate-2 px-8"
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
