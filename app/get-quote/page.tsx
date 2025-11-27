import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OurProcess } from "@/components/OurProcess";
import { generateLocalBusinessSchema, JsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Window Tinting Sydney',
  description: 'Get a free quote for professional window tinting in Sydney. Residential, commercial, and automotive services. Response within 24 hours.',
  alternates: {
    canonical: 'https://protektsurface.com.au/get-quote',
  },
};

export default function GetQuotePage() {
  const localBusinessSchema = generateLocalBusinessSchema('https://protektsurface.com.au/get-quote');
  
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <div className="min-h-screen pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: "Get Quote" }]} />
        </div>

        <section className="py-12 sm:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get in touch with our team for a free quote or consultation. We&apos;re
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
                      We&apos;ll respond within 24 hours
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

            <QuoteRequestForm />

            <div className="mt-12 mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
                Find Us
              </h2>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8842637!2d151.0119!3d-33.8327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31e8e8e8e8f%3A0x0!2s24%20George%20Street%2C%20Clyde%20NSW%202142!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="google-maps"
                  title="Protekt Surface Solutions Location"
                />
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg border border-border" data-testid="map-note">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> For residential and commercial enquiries, please call us or submit an enquiry to arrange an on-site inspection and meeting. Our team will come to you to assess your requirements and provide an accurate quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <OurProcess compact showCTA={false} />
        </div>
      </div>
    </>
  );
}
