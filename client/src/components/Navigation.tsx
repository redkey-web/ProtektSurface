import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/Untitled+(500+x+210+px).png_1763361350526.webp";

interface NavItem {
  name: string;
  path: string;
}

interface DropdownSection {
  title: string;
  items: NavItem[];
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const servicesItems: NavItem[] = [
    { name: "Residential Window Tinting", path: "/residential-window-tinting" },
    { name: "Automotive Window Tinting", path: "/automotive-window-tinting" },
    { name: "Commercial Window Tinting", path: "/commercial-window-tinting" },
    { name: "Mobile Window Tinting", path: "/mobile-window-tinting" },
  ];

  const filmTypesItems: NavItem[] = [
    { name: "Ceramic Window Tint", path: "/ceramic-window-tint" },
    { name: "Privacy Window Film", path: "/privacy-window-film" },
    { name: "UV Blocking Film", path: "/uv-blocking-film" },
    { name: "Window Protection Film", path: "/window-protection-film" },
    { name: "Frosted & Decorative Film", path: "/frosted-decorative-window-film" },
    { name: "Marble Protection Film", path: "/marble-protection-film" },
  ];

  const dropdowns: DropdownSection[] = [
    { title: "Services", items: servicesItems },
    { title: "Film Types", items: filmTypesItems },
  ];

  const toggleMobileDropdown = (title: string) => {
    setOpenMobileDropdown(openMobileDropdown === title ? null : title);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" data-testid="link-home">
            <img
              src={logoUrl}
              alt="Protekt Surface Solutions"
              className="h-16 sm:h-20 w-auto hover-elevate active-elevate-2 rounded-sm -my-3"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {dropdowns.map((dropdown) => (
              <div
                key={dropdown.title}
                className="relative"
                onMouseEnter={() => setOpenDesktopDropdown(dropdown.title)}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <button
                  className="px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 text-white/90 hover:text-primary transition-colors duration-200"
                  data-testid={`button-desktop-dropdown-${dropdown.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {dropdown.title}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDesktopDropdown === dropdown.title && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-md shadow-lg py-2">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        data-testid={`link-desktop-dropdown-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div
                          className={`px-4 py-2 text-sm transition-colors duration-200 ${
                            location === item.path
                              ? "text-primary"
                              : "text-white/80 hover:text-primary hover:bg-white/5"
                          }`}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/about" data-testid="link-desktop-about">
              <div
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location === "/about" ? "text-primary" : "text-white/90 hover:text-primary"
                }`}
              >
                About
              </div>
            </Link>

            <Link href="/contact" data-testid="link-desktop-contact">
              <div
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location === "/contact" ? "text-primary" : "text-white/90 hover:text-primary"
                }`}
              >
                Contact
              </div>
            </Link>

            <Link href="/tint-selector" data-testid="link-desktop-quiz">
              <div
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location === "/tint-selector" ? "text-primary" : "text-white/90 hover:text-primary"
                }`}
              >
                Quiz
              </div>
            </Link>

            <Link href="/get-quote" className="ml-2" data-testid="button-quote-desktop">
              <Button
                className="bg-primary text-primary-foreground hover-elevate active-elevate-2"
                size="sm"
              >
                Get Quote
              </Button>
            </Link>

            <a 
              href="tel:0286062842" 
              className="ml-3 flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-primary hover-elevate active-elevate-2"
              data-testid="link-phone-desktop"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">(02) 8606 2842</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            aria-label="Toggle menu"
            data-testid="button-menu-toggle"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-background border-l border-border transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {dropdowns.map((dropdown) => (
              <div key={dropdown.title}>
                <button
                  onClick={() => toggleMobileDropdown(dropdown.title)}
                  className="w-full px-4 py-3 rounded-md text-base font-medium flex items-center justify-between hover-elevate active-elevate-2"
                  data-testid={`button-mobile-dropdown-${dropdown.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {dropdown.title}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openMobileDropdown === dropdown.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMobileDropdown === dropdown.title && (
                  <div className="mt-1 ml-4 flex flex-col gap-1">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        data-testid={`link-mobile-dropdown-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div
                          className={`px-4 py-2 rounded-md text-sm hover-elevate active-elevate-2 ${
                            location === item.path
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/80"
                          }`}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              data-testid="link-mobile-about"
            >
              <div
                className={`px-4 py-3 rounded-md text-base font-medium hover-elevate active-elevate-2 ${
                  location === "/about" ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                About
              </div>
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              data-testid="link-mobile-contact"
            >
              <div
                className={`px-4 py-3 rounded-md text-base font-medium hover-elevate active-elevate-2 ${
                  location === "/contact" ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                Contact
              </div>
            </Link>
          </div>

          <div className="mt-auto pt-8">
            <a
              href="tel:0286062842"
              className="block"
              data-testid="button-call-nav"
            >
              <Button
                className="w-full bg-primary text-primary-foreground hover-elevate active-elevate-2"
                size="lg"
              >
                (02) 8606 2842
              </Button>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          data-testid="overlay-menu-close"
        />
      )}
    </nav>
  );
}
