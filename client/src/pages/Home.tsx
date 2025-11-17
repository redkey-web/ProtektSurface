import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Hero_background_residential_interior_2b09e675.png";
import residentialImage from "@assets/generated_images/Residential_window_tinting_service_4f42a2a0.png";
import commercialImage from "@assets/generated_images/Commercial_window_tinting_service_1caab67d.png";
import frostedImage from "@assets/generated_images/Decorative_frosted_film_service_185776ce.png";
import marbleImage from "@assets/generated_images/Marble_stone_protection_service_9d639889.png";
import logoUrl from "@assets/Untitled+(500+x+210+px).png_1763361350526.webp";

export default function Home() {
  const services = [
    {
      title: "Residential Window Tinting",
      description:
        "Enhance your home's comfort, energy efficiency, and privacy with premium residential window films—designed to reduce heat, glare, and UV damage.",
      image: residentialImage,
      path: "/services/residential-window-tinting",
    },
    {
      title: "Commercial Window Tinting",
      description:
        "Boost energy efficiency, tenant comfort, and security in your commercial space with high-performance window films engineered for business environments.",
      image: commercialImage,
      path: "/services/commercial-window-tinting",
    },
    {
      title: "Automotive Window Tinting",
      description:
        "Professional car window tinting by Protekt Auto. Premium ceramic and carbon films with lifetime warranty. Reduce heat, block UV rays, and enhance your vehicle.",
      image: residentialImage,
      path: "/services/automotive-window-tinting",
    },
    {
      title: "Ceramic Window Tint",
      description:
        "Advanced nano-ceramic technology for superior heat rejection and clarity. Non-metallic formula that won't interfere with electronics. The premium choice.",
      image: frostedImage,
      path: "/film-types/ceramic-window-tint",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
          <img
            src={logoUrl}
            alt="Protekt Surface Solutions"
            className="h-16 sm:h-24 w-auto mx-auto mb-8"
            data-testid="img-hero-logo"
          />

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Professional Window Tinting
            <br />
            <span className="text-primary">Sydney</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Residential, commercial & automotive window tinting. Premium ceramic
            films, privacy solutions & decorative frosted glass
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#services">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover-elevate active-elevate-2 px-8"
                data-testid="button-view-services"
              >
                View Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:0286062842">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover-elevate active-elevate-2 px-8 backdrop-blur-md bg-background/50"
                data-testid="button-contact-hero"
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From residential homes to commercial buildings, browse through our
              services and discover the perfect solution for your surface
              protection needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={service.path} href={service.path}>
                <Card
                  className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group h-full"
                  data-testid={`card-service-${index}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Protect Your Surfaces?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact us today for a free consultation and quote. Our expert team
            is ready to help you choose the perfect protection solution.
          </p>
          <a href="tel:0286062842">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover-elevate active-elevate-2 px-8"
              data-testid="button-get-quote-cta"
            >
              Get Your Free Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
