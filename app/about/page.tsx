import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Protekt Surface Solutions - Sydney\'s premier window tinting and surface protection specialists with over 15 years of experience.',
  alternates: {
    canonical: 'https://protektsurface.com.au/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Who We Are
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              Protekt Surface Solutions is proud to be the sister company of{" "}
              <span className="font-semibold text-primary">Protekt Auto</span>,
              bringing our commitment to premium protection from vehicles into the
              world of elevated residential and commercial spaces. Backed by{" "}
              <span className="font-semibold">
                over 15 years of experience in protective and solar control films
              </span>
              , we offer sophisticated surface protection solutions designed to
              preserve the integrity and appearance of your most valued
              environments.
            </p>

            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              Our tailored services are ideal for those looking to protect elegant
              surfaces such as marble, natural stone, glass, and custom
              countertops. We use advanced protective and solar film technologies
              that offer discreet yet durable protection—enhancing longevity while
              maintaining the natural beauty of your interiors.
            </p>

            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              Whether you&apos;re a homeowner, architect, designer, or property manager,
              our approach is rooted in craftsmanship, technical expertise, and a
              deep understanding of refined spaces. We prioritize precision,
              minimal disruption, and seamless integration to meet the expectations
              of discerning clients.
            </p>

            <div className="bg-card border border-border rounded-xl p-8 my-12 text-center">
              <p className="text-xl sm:text-2xl font-semibold text-foreground italic">
                At Protekt Surface Solutions, we believe every surface deserves
                lasting protection—delivered with care, detail, and sophistication.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Our Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-lg border border-border hover-elevate">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    15+ Years Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Over a decade and a half of expertise in protective and solar
                    control films for premium applications.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border hover-elevate">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Advanced Technology
                  </h3>
                  <p className="text-muted-foreground">
                    State-of-the-art protective film solutions that preserve
                    beauty while providing lasting protection.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border hover-elevate">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Precision Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Meticulous attention to detail with minimal disruption to
                    your space and schedule.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border hover-elevate">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Premium Service
                  </h3>
                  <p className="text-muted-foreground">
                    Tailored solutions for homeowners, architects, designers, and
                    property managers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center mt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Want to know more about our services?
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your surface protection needs
              and discover how we can help preserve your valued spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary border-primary-foreground hover-elevate active-elevate-2 px-8"
                  data-testid="button-contact-us"
                >
                  Contact Us
                </Button>
              </Link>
              <a href="tel:0286062842">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary border-primary-foreground hover-elevate active-elevate-2 px-8"
                  data-testid="button-call-us"
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
