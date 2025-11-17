import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Marble_stone_protection_service_9d639889.png";

export default function MarbleProtection() {
  const benefits = [
    "Invisible protection maintains natural beauty",
    "Self-healing technology repairs minor scratches",
    "Prevents staining from oils, acids, and liquids",
    "Blocks 99% of UV rays to prevent discoloration",
    "Enhances surface durability without changing feel",
    "Easy to clean and maintain",
    "Long-lasting protection for years",
    "Preserves property value and aesthetics",
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Marble & Natural Stone
            <br />
            Protection Film
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protect and preserve the beauty of your natural stone surfaces
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Invisible Protection for Luxury Surfaces
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Our marble and natural stone protection films provide an invisible
              shield that guards against stains, scratches, and UV damage
              without altering the look or feel of your precious surfaces.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Perfect for kitchen countertops, bathroom vanities, flooring, and
              any natural stone surface you want to protect. Our self-healing
              technology ensures your surfaces maintain their pristine
              appearance for years to come.
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
              Protect your investment
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get a free consultation to learn how our stone protection films
              can preserve the beauty and value of your natural stone surfaces.
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
