import { Phone, Mail, Clock } from "lucide-react";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function GetQuote() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Get Quote" }]} />
      </div>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Fill out the form below and we'll provide you with a detailed quote
              within 24 hours. Or call us now for immediate assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a
                href="tel:0286062842"
                className="text-primary hover:underline text-sm"
                data-testid="link-phone"
              >
                (02) 8606 2842
              </a>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a
                href="mailto:info@protektsurfacesolutions.com.au"
                className="text-primary hover:underline text-sm break-all"
                data-testid="link-email"
              >
                info@protektsurfacesolutions.com.au
              </a>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">Within 24 hours</p>
            </div>
          </div>

          <QuoteRequestForm />
        </div>
      </section>
    </div>
  );
}
