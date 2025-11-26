'use client';

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const services = [
    { name: "Residential Window Tinting", path: "/residential-window-tinting" },
    { name: "Automotive Window Tinting", path: "/automotive-window-tinting" },
    { name: "Commercial Window Tinting", path: "/commercial-window-tinting" },
  ];

  const filmTypes = [
    { name: "Ceramic Window Tint", path: "/ceramic-window-tint" },
    { name: "Privacy Window Film", path: "/privacy-window-film" },
    { name: "UV Blocking Film", path: "/uv-blocking-film" },
    { name: "Window Protection Film", path: "/window-protection-film" },
    { name: "Frosted & Decorative Film", path: "/frosted-decorative-window-film" },
    { name: "Marble Protection Film", path: "/marble-protection-film" },
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceAreas = [
    { name: "Granville", path: "/service-areas/granville" },
    { name: "Auburn", path: "/service-areas/auburn" },
    { name: "Parramatta", path: "/service-areas/parramatta" },
    { name: "Silverwater", path: "/service-areas/silverwater" },
    { name: "Rosehill", path: "/service-areas/rosehill" },
    { name: "Camellia", path: "/service-areas/camellia" },
    { name: "Rydalmere", path: "/service-areas/rydalmere" },
    { name: "Ermington", path: "/service-areas/ermington" },
    { name: "Dundas", path: "/service-areas/dundas" },
    { name: "Telopea", path: "/service-areas/telopea" },
    { name: "Carlingford", path: "/service-areas/carlingford" },
    { name: "North Parramatta", path: "/service-areas/north-parramatta" },
    { name: "Harris Park", path: "/service-areas/harris-park" },
    { name: "Westmead", path: "/service-areas/westmead" },
    { name: "Merrylands", path: "/service-areas/merrylands" },
    { name: "Liverpool", path: "/service-areas/liverpool" },
    { name: "Penrith", path: "/service-areas/penrith" },
  ];

  const suppliers = [
    { name: "XPEL Certified Installer", logo: "/images/suppliers/xpel-certified.png" },
    { name: "Vision Window Film", logo: "/images/suppliers/vision-logo.webp" },
    { name: "Duraflex", logo: "/images/suppliers/duraflex.png" },
    { name: "XPEL Ultimate", logo: "/images/suppliers/xpel-ultimate.png" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.webp"
              alt="Protekt Surface Solutions"
              className="h-12 w-auto mb-6"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sydney&apos;s premier window tinting and surface protection specialists.
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
                  <Link
                    href={service.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {service.name}
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
                  <Link
                    href={film.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${film.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {film.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.path}>
                  <Link
                    href={area.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${area.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {area.name}
                  </Link>
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

      </div>

      <div className="relative bg-stone-500 py-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(/images/marble-tile.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-center text-lg font-semibold text-white mb-8">
            We Only Use Trusted Suppliers
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {suppliers.map((supplier) => {
              const isLarge = supplier.name === "XPEL Ultimate" || supplier.name === "Vision Window Film";
              const isUltimate = supplier.name === "XPEL Ultimate";
              return (
                <div
                  key={supplier.name}
                  className={`flex items-center justify-center ${isLarge ? "-my-4 sm:-my-6" : ""} ${isUltimate ? "ml-4 sm:ml-6" : ""}`}
                  data-testid={`supplier-logo-${supplier.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={supplier.logo}
                    alt={supplier.name}
                    className={isLarge ? "h-20 sm:h-28 w-auto object-contain" : "h-12 sm:h-16 w-auto object-contain"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border-t border-white/10 py-6">
        <p className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} Protekt Surface Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
