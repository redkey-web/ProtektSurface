import { Check, Phone, Eye, Shield, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import heroImage from "@assets/generated_images/Privacy_window_film_office_3493ebe2.png";
import bathroomImage from "@assets/generated_images/bathroom_frosted_privacy_window.png";
import conferenceImage from "@assets/generated_images/office_conference_room_privacy.png";
import livingRoomImage from "@assets/generated_images/street-facing_privacy_window_living.png";
import textureImage from "@assets/generated_images/frosted_film_texture_detail.png";

export default function PrivacyWindowFilm() {
  const benefits = [
    "Maintain privacy without blocking natural light",
    "Elegant frosted or decorative glass appearance",
    "Reduce visual distractions in office environments",
    "Enhance security and confidentiality",
    "Cost-effective alternative to frosted glass",
    "Easy to install and remove when needed",
    "Wide range of patterns and opacity levels",
    "Perfect for homes, offices, and commercial spaces",
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Film Types" }, { label: "Privacy Window Film" }]} />
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
            Privacy Window Film
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Create privacy and style with elegant frosted and decorative window films
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Privacy Without Sacrificing Light
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Privacy window film provides an elegant solution for creating private spaces
              while maintaining natural light. Our frosted and decorative films offer the
              sophisticated look of etched glass at a fraction of the cost, perfect for
              offices, bathrooms, conference rooms, and street-facing windows.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Available in a wide range of patterns, textures, and opacity levels, privacy
              films can be customized to match your aesthetic while providing the perfect
              balance of openness and discretion. They're also removable, making them ideal
              for rental properties or temporary applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Enhanced Privacy
              </h3>
              <p className="text-muted-foreground text-sm">
                Block unwanted views while maintaining natural light flow
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Security Boost
              </h3>
              <p className="text-muted-foreground text-sm">
                Deter potential intruders and enhance safety
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-md hover-elevate">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Elegant Aesthetics
              </h3>
              <p className="text-muted-foreground text-sm">
                Beautiful frosted appearance enhances any space
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
              Privacy Film Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="overflow-hidden group" data-testid="card-bathroom-privacy">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={bathroomImage} 
                    alt="Bathroom with elegant frosted privacy window film" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Bathroom Privacy</h4>
                  <p className="text-sm text-muted-foreground">Elegant frosted film for complete privacy while maintaining natural light</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="card-conference-privacy">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={conferenceImage} 
                    alt="Office conference room with decorative privacy film on glass partitions" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Office & Conference Rooms</h4>
                  <p className="text-sm text-muted-foreground">Professional privacy solutions for meeting spaces and glass partitions</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="card-living-privacy">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={livingRoomImage} 
                    alt="Living room with street-facing privacy window film" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Street-Facing Windows</h4>
                  <p className="text-sm text-muted-foreground">Block outside views while enjoying bright, natural light indoors</p>
                </div>
              </Card>
              
              <Card className="overflow-hidden group" data-testid="card-texture-detail">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={textureImage} 
                    alt="Close-up of elegant frosted window film texture" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">Premium Film Quality</h4>
                  <p className="text-sm text-muted-foreground">Sophisticated etched glass appearance with premium materials</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to add privacy to your space?
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and quote. We'll help you choose the
              perfect privacy film for your needs.
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
