import { Check, Phone, Sun, Shield, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import heroImage from "@assets/generated_images/UV_blocking_window_film_025b3425.png";

export default function UVBlockingFilm() {
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

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Film Types" }, { label: "UV Blocking Film" }]} />
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

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center">
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
  );
}
