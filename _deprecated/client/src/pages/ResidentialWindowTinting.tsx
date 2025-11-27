import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OurProcess } from "@/components/OurProcess";
import heroImage from "@assets/generated_images/Residential_window_tinting_service_4f42a2a0.png";
import livingRoomImage from "@assets/generated_images/living_room_tinted_windows.png";
import bedroomImage from "@assets/generated_images/bedroom_privacy_window_film.png";
import exteriorImage from "@assets/generated_images/home_exterior_tinted_windows.png";
import installationImage from "@assets/generated_images/window_tinting_installation_process.png";

export default function ResidentialWindowTint() {
  const benefits = [
    "Reduce solar energy and cooling costs with up to 70% rejection",
    "Block 99% of harmful UV rays",
    "Enhance privacy without losing natural light",
    "Reduce glare for comfortable living spaces",
    "Protect furniture and flooring from fading",
    "Improve home security and safety",
    "Professional installation guaranteed",
    "Wide range of tint options and shades",
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Services" }, { label: "Residential Window Tinting" }]} />
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
            Residential Flat Glass
            <br />
            Window Tint
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Enhance your home's comfort, energy efficiency, and privacy with
            premium residential window films
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Transform Your Home Environment
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Our residential window tinting solutions are designed to reduce
              heat, glare, and UV exposure without compromising natural light or
              views. Whether you're looking to improve comfort, reduce energy
              bills, or enhance privacy, we have the perfect film for your home.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Using premium-quality films and professional installation
              techniques, we ensure a flawless finish that will protect your
              home for years to come.
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

          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Our Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden group" data-testid="gallery-living-room">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={livingRoomImage}
                    alt="Living room with tinted windows showing natural light"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Living Spaces</h4>
                  <p className="text-sm text-muted-foreground">Natural light without the harsh glare or heat</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="gallery-bedroom">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={bedroomImage}
                    alt="Bedroom with privacy window film"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Privacy Solutions</h4>
                  <p className="text-sm text-muted-foreground">Soft diffused light with complete privacy</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="gallery-exterior">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={exteriorImage}
                    alt="Home exterior with tinted windows"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Exterior Appeal</h4>
                  <p className="text-sm text-muted-foreground">Enhance your home's curb appeal and efficiency</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="gallery-installation">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={installationImage}
                    alt="Professional window tinting installation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Professional Installation</h4>
                  <p className="text-sm text-muted-foreground">Expert craftsmanship for a flawless finish</p>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </section>

      <OurProcess showCTA={false} />

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to enhance your home?
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our team will
              help you choose the perfect window film solution for your home.
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
