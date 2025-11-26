import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import heroImage from "@assets/generated_images/Commercial_window_tinting_service_1caab67d.png";
import officeInteriorImage from "@assets/generated_images/office_interior_tinted_windows.png";
import buildingExteriorImage from "@assets/generated_images/commercial_building_exterior_tinted.png";
import retailImage from "@assets/generated_images/retail_storefront_window_tinting.png";
import conferenceImage from "@assets/generated_images/conference_room_tinted_windows.png";

export default function CommercialWindowTint() {
  const benefits = [
    "Reduce energy costs and HVAC strain",
    "Improve tenant comfort and productivity",
    "Enhance building security and safety",
    "Protect interior furnishings from UV damage",
    "Minimize glare on computer screens",
    "Maintain consistent building aesthetics",
    "Meet building code and energy requirements",
    "Professional installation with minimal disruption",
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Services" }, { label: "Commercial Window Tinting" }]} />
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
            Commercial Flat Glass
            <br />
            Window Tint
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Boost energy efficiency, tenant comfort, and security with
            high-performance commercial window films
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Professional Solutions for Business
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Our commercial window tinting solutions are engineered to reduce
              heat, glare, and UV exposure while maintaining natural light and
              views. Perfect for office buildings, retail spaces, and commercial
              properties of all sizes.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We work with building managers, architects, and business owners to
              deliver cost-effective solutions that improve comfort, reduce
              energy consumption, and enhance the value of your commercial
              property.
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
              Commercial Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden group" data-testid="gallery-office">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={officeInteriorImage}
                    alt="Modern office with tinted windows reducing glare"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Office Spaces</h4>
                  <p className="text-sm text-muted-foreground">Reduce glare on screens and improve employee comfort</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="gallery-building">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={buildingExteriorImage}
                    alt="Commercial building with professional window tinting"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Building Exteriors</h4>
                  <p className="text-sm text-muted-foreground">Enhance aesthetics and energy efficiency</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="gallery-retail">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={retailImage}
                    alt="Retail storefront with window tinting"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Retail Storefronts</h4>
                  <p className="text-sm text-muted-foreground">Protect merchandise while maintaining visibility</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="gallery-conference">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={conferenceImage}
                    alt="Conference room with tinted windows"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Meeting Rooms</h4>
                  <p className="text-sm text-muted-foreground">Privacy and comfort for productive meetings</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Upgrade your commercial space
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your commercial property.
              We'll assess your needs and recommend the best window film
              solution.
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
