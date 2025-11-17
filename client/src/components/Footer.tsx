import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import logoUrl from "@assets/Untitled+(500+x+210+px).png_1763361350526.webp";

export function Footer() {
  const services = [
    { name: "Residential Window Tinting", path: "/services/residential-window-tinting" },
    { name: "Automotive Window Tinting", path: "/services/automotive-window-tinting" },
    { name: "Commercial Window Tinting", path: "/services/commercial-window-tinting" },
    { name: "Mobile Window Tinting", path: "/services/mobile-window-tinting" },
  ];

  const filmTypes = [
    { name: "Ceramic Window Tint", path: "/film-types/ceramic-window-tint" },
    { name: "Frosted & Decorative Film", path: "/film-types/frosted-decorative-window-film" },
    { name: "Marble Protection Film", path: "/film-types/marble-protection-film" },
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <img
              src={logoUrl}
              alt="Protekt Surface Solutions"
              className="h-12 w-auto mb-6"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sydney's premier window tinting and surface protection specialists.
              Professional solutions for residential, commercial, and automotive
              applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link href={service.path}>
                    <a
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {service.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Film Types
            </h3>
            <ul className="space-y-3">
              {filmTypes.map((film) => (
                <li key={film.path}>
                  <Link href={film.path}>
                    <a
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${film.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {film.name}
                    </a>
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path}>
                        <a
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
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
                  <span className="text-muted-foreground break-all">
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
