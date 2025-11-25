import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import heroImage from "@assets/generated_images/Marble_stone_protection_service_9d639889.png";
import marbleTexture from "@assets/generated_images/White_marble_texture_background_644270aa.png";
import marbleTile from "@assets/image_1764066353591.png";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Film Types" }, { label: "Marble Protection Film" }]} />
      </div>

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/50 to-gray-900/70" style={{ mixBlendMode: 'multiply' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Marble & Natural Stone
            <br />
            Protection Film
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Protect and preserve the beauty of your natural stone surfaces
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${marbleTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
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

          <div className="relative bg-primary rounded-xl p-8 sm:p-12 text-center overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{ 
                backgroundImage: `url(${marbleTile})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10">
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
                  className="border-white/30 text-white px-8 backdrop-blur-md bg-gray-900/60 hover:bg-gray-900/30 hover:text-primary transition-all duration-300"
                  data-testid="button-get-quote"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (02) 8606 2842
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
