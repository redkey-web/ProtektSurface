import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for a free quote or consultation. We're
              here to help with all your window tinting and surface protection
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:0286062842"
                    className="text-primary hover:underline text-lg"
                    data-testid="link-phone"
                  >
                    (02) 8606 2842
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    Mon-Fri: 7:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@protektsurfacesolutions.com.au"
                    className="text-primary hover:underline break-all"
                    data-testid="link-email"
                  >
                    info@protektsurfacesolutions.com.au
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Address
                  </h3>
                  <p className="text-foreground">
                    24 George Street
                    <br />
                    Clyde, NSW 2142
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Sydney, Australia
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Business Hours
                  </h3>
                  <div className="text-foreground space-y-1">
                    <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p>Saturday: By appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-primary rounded-xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ready to get started?
            </h3>
            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Call us now for a free consultation and quote. Our expert team is
              ready to help you with professional window tinting and surface
              protection solutions.
            </p>
            <a href="tel:0286062842">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary border-primary-foreground hover-elevate active-elevate-2 px-8"
                data-testid="button-call-cta"
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
