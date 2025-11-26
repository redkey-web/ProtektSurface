'use client';

import Link from "next/link";
import { Phone, MapPin, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface FeaturedLink {
  title: string;
  path: string;
  description: string;
}

interface ServiceAreaPageProps {
  suburb: string;
  postcode: string;
  description: string;
  localInfo: string;
  services: string[];
  featuredLinks: FeaturedLink[];
}

export function ServiceAreaPage({
  suburb,
  postcode,
  description,
  localInfo,
  services,
  featuredLinks
}: ServiceAreaPageProps) {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Service Areas" }, { label: suburb }]} />
      </div>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 text-primary mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg font-medium">{suburb}, NSW {postcode}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Window Tinting {suburb}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Professional Window Tinting Services in {suburb}
            </h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              {localInfo}
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Our experienced team serves {suburb} residents with mobile and
              in-shop services, ensuring convenient professional installation at
              your location or ours. All installations come with our comprehensive
              warranty and are completed using premium ceramic and carbon films.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Our Services in {suburb}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-md bg-card border border-border hover-elevate"
                  data-testid={`service-${index}`}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {featuredLinks.map((link, index) => (
              <Link key={index} href={link.path} className="block">
                <div className="p-6 bg-card rounded-lg border border-border hover-elevate cursor-pointer h-full">
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {link.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to get started in {suburb}?
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Call us today for a free quote. We service {suburb} and all
              surrounding suburbs with professional window tinting and surface
              protection solutions.
            </p>
            <a
              href="tel:0286062842"
              className={buttonVariants({ size: "lg", variant: "outline", className: "bg-primary-foreground text-primary border-primary-foreground" })}
              data-testid="button-call-cta"
            >
              <Phone className="mr-2 w-5 h-5" />
              (02) 8606 2842
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
