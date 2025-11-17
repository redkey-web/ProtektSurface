import { Mail, MapPin, Phone } from "lucide-react";
import logoUrl from "@assets/Untitled+(500+x+210+px).png_1763361350526.webp";

export function Footer() {
  const services = [
    { name: "Residential Window Tint", path: "/residential-window-tint" },
    { name: "Commercial Window Tint", path: "/commercial-window-tint" },
    { name: "Decorative Frosted Film", path: "/decorative-frosted-film" },
    { name: "Marble Protection", path: "/marble-protection" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <img
              src={logoUrl}
              alt="Protekt Surface Solutions"
              className="h-12 w-auto mb-6"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sydney's premier surface protection specialists. We provide
              professional window tinting, decorative films, and surface
              protection for residential and commercial properties.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <a
                    href={service.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0286062842"
                  className="flex items-center gap-3 text-sm hover-elevate active-elevate-2 rounded-md p-2 -ml-2"
                  data-testid="link-phone-footer"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-primary font-medium">
                    (02) 8606 2842
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@protektsurfacesolutions.com.au"
                  className="flex items-center gap-3 text-sm hover-elevate active-elevate-2 rounded-md p-2 -ml-2"
                  data-testid="link-email-footer"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    info@protektsurfacesolutions.com.au
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm p-2 -ml-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    24 George Street
                    <br />
                    Clyde, NSW 2142
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Protekt Surface Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
