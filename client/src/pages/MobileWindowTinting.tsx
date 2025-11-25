import { Check, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import heroImage from "@assets/generated_images/Mobile_window_tinting_service_9438ee71.png";

export default function MobileWindowTinting() {
  const benefits = [
    "Convenient on-site service at your location",
    "No need to travel or wait at a shop",
    "Professional equipment brought to you",
    "Same premium films as in-shop service",
    "Flexible scheduling to fit your timeline",
    "Residential and commercial appointments",
    "Expert installation guaranteed",
    "Serving Sydney and surrounding areas",
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Services" }, { label: "Mobile Window Tinting" }]} />
      </div>

      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Mobile Window Tinting
            <br />
            Service
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional window tinting that comes to you. Convenient, reliable,
            and expert installation
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Convenience Meets Professional Quality
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Our mobile window tinting service brings professional installation
              directly to your home or business. We carry the same premium films
              and use the same expert techniques as our shop-based services, but
              with the added convenience of coming to your location.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Perfect for busy professionals, large properties, or multi-vehicle
              projects. Our fully equipped mobile units ensure the same high
              standards of quality and finish you'd expect from our main
              facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                We Come To You
              </h3>
              <p className="text-muted-foreground text-sm">
                Service at your home, office, or any convenient location
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Flexible Timing
              </h3>
              <p className="text-muted-foreground text-sm">
                Schedule appointments that work with your busy calendar
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Check className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Same Quality
              </h3>
              <p className="text-muted-foreground text-sm">
                Premium films and professional installation guaranteed
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
              Book your mobile tinting service
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Call us today to schedule a convenient time for our mobile team to
              visit your location. We'll bring everything needed for professional
              installation.
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
