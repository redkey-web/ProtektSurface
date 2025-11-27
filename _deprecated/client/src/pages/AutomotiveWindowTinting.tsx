import { Check, Phone, MapPin, Wrench } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OurProcess } from "@/components/OurProcess";
import heroImage from "@assets/ppf wrap 1_1764071517320.webp";
import protektAutoLogo from "@assets/Protekt Logo_1761708306237_1763380244480.webp";
import featuredCarImage from "@assets/window tint_1764036010561.webp";
import galleryImg1 from "@assets/car Window tinting_1764072867159.jpg";
import galleryImg2 from "@assets/image_1764072903074.png";
import galleryImg3 from "@assets/image_1764072959295.png";
import galleryImg4 from "@assets/image_1764072998094.png";
import galleryImg5 from "@assets/image_1764073028217.png";
import galleryImg6 from "@assets/image_1764073133471.png";

export default function AutomotiveWindowTinting() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const galleryImages = [
    { src: galleryImg1, alt: "Black Ford Mustang with professional window tinting" },
    { src: galleryImg2, alt: "RAM truck with ceramic window tint in workshop" },
    { src: galleryImg3, alt: "White Tesla Model Y with tinted windows" },
    { src: galleryImg4, alt: "Protekt technician working on Volvo XC60" },
    { src: galleryImg5, alt: "White Toyota Camry Hybrid with window tinting" },
    { src: galleryImg6, alt: "Toyota Camry Hybrid rear view in workshop" },
  ];

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
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/85" style={{ mixBlendMode: 'multiply' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6 flex justify-center">
            <img 
              src={protektAutoLogo} 
              alt="Protekt Auto" 
              className="h-20 sm:h-26 md:h-32 w-auto"
              data-testid="img-protekt-auto-logo"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Professional Automotive
            <br />
            Window Tinting Sydney
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Premium car window tinting with professional installation and
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

          <div className="mb-12 sm:mb-16" data-testid="featured-car-image">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={featuredCarImage}
                alt="Premium automotive window tinting - sleek tinted vehicle showcase"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-8">
                <p className="text-white text-lg sm:text-xl font-semibold">
                  Premium Window Tinting for Every Vehicle
                </p>
                <p className="text-white/80 text-sm sm:text-base mt-1">
                  From luxury sedans to family SUVs - we deliver exceptional results
                </p>
              </div>
            </div>
          </div>

          <Card className="mb-12 p-6 sm:p-8 bg-muted border-primary/20" data-testid="workshop-notice">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  Workshop-Only Service
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  All automotive window tinting is performed exclusively at our dedicated workshop in <strong className="text-foreground">Clyde, Parramatta</strong>. We do not offer mobile tinting services for vehicles.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Our purpose-built facility is equipped with specialised tools and professional-grade equipment that simply cannot be replicated in a mobile setting. The controlled workshop environment ensures:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">Dust-free installation environment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">Optimal temperature and humidity control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">Professional lighting for precision work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">Specialised cutting and application tools</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  This commitment to quality is why we can confidently offer a lifetime warranty on all our automotive tinting work.
                </p>
              </div>
            </div>
          </Card>

          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Find Our Workshop
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Visit us at 24 George Street, Clyde NSW 2142 - conveniently located near Parramatta with easy access from the M4 motorway.
            </p>
            <div className="overflow-hidden rounded-xl" data-testid="workshop-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8842637!2d151.0119!3d-33.8327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31e8e8e8e8f%3A0x0!2s24%20George%20Street%2C%20Clyde%20NSW%202142!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="google-maps-automotive"
                title="Protekt Auto Workshop Location - Clyde, Parramatta"
              />
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg border border-border" data-testid="map-note-automotive">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> For residential and commercial enquiries, please call us or submit an enquiry to arrange an on-site inspection and meeting rather than visiting the workshop. Our team will come to you to assess your requirements.
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
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Our Work
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover-elevate active-elevate-2 transition-all duration-300"
                  onClick={() => setLightboxImage(image.src)}
                  data-testid={`gallery-image-${index}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <OurProcess showCTA={false} />

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
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

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox-overlay"
        >
          <img
            src={lightboxImage}
            alt="Gallery image enlarged"
            className="max-w-full max-h-full object-contain rounded-lg"
            data-testid="lightbox-image"
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
            data-testid="lightbox-close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
