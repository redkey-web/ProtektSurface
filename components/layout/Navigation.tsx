'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Home, Layers, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const pathname = usePathname();
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [headerProgress, setHeaderProgress] = useState(0);

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setHeaderProgress(1);
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const revealPoint = heroHeight * 0.5;
      const progress = Math.min(scrollY / revealPoint, 1);
      setHeaderProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const servicesItems: NavItem[] = [
    { name: "Residential Window Tinting", path: "/residential-window-tinting" },
    { name: "Automotive Window Tinting", path: "/automotive-window-tinting" },
    { name: "Commercial Window Tinting", path: "/commercial-window-tinting" },
    { name: "Natural Stone Protection", path: "/marble-protection-film" },
  ];

  const filmTypesItems: NavItem[] = [
    { name: "Ceramic Window Tint", path: "/ceramic-window-tint" },
    { name: "Privacy Window Film", path: "/privacy-window-film" },
    { name: "UV Blocking Film", path: "/uv-blocking-film" },
    { name: "Window Protection Film", path: "/window-protection-film" },
    { name: "Frosted & Decorative Film", path: "/frosted-decorative-window-film" },
    { name: "Marble Protection Film", path: "/marble-protection-film" },
  ];

  const moreItems: NavItem[] = [
    { name: "About Us", path: "/about" },
    { name: "Tint Selector Quiz", path: "/tint-selector" },
    { name: "Blog", path: "/blog" },
  ];

  const dropdowns: DropdownSection[] = [
    { title: "Services", items: servicesItems },
    { title: "Film Types", items: filmTypesItems },
    { title: "More", items: moreItems },
  ];

  const toggleMobileDropdown = (title: string) => {
    setOpenMobileDropdown(openMobileDropdown === title ? null : title);
  };

  const logoTranslateY = (1 - headerProgress) * -150;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="absolute inset-0 border-b border-border transition-all duration-300 bg-background"
        style={{
          opacity: Math.min(headerProgress, 0.7)
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" data-testid="link-home" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.webp"
              alt="Protekt Surface Solutions"
              className="h-16 sm:h-20 w-auto hover-elevate active-elevate-2 rounded-sm -my-3"
              style={{ transform: `translateY(${logoTranslateY}%)` }}
            />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1">
              {dropdowns.map((dropdown) => (
                <div
                  key={dropdown.title}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopDropdown(dropdown.title)}
                  onMouseLeave={() => setOpenDesktopDropdown(null)}
                >
                  <button
                    className="px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 text-black/90 hover:text-primary transition-colors duration-200"
                    data-testid={`button-desktop-dropdown-${dropdown.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {dropdown.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {openDesktopDropdown === dropdown.title && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-md shadow-lg py-2">
                        {dropdown.items.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            data-testid={`link-desktop-dropdown-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              pathname === item.path
                                ? "text-primary"
                                : "text-white/80 hover:text-primary hover:bg-white/5"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/contact"
                data-testid="link-desktop-contact"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === "/contact" ? "text-primary" : "text-black/90 hover:text-primary"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <Link 
              href="/get-quote" 
              data-testid="button-quote-desktop"
            >
              <Button size="sm">
                Get Quote
              </Button>
            </Link>

            <a
              href="tel:0286062842"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-black/90 hover:text-primary transition-colors duration-200"
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
        className={`md:hidden fixed inset-y-0 right-0 w-full sm:w-96 bg-background border-l border-border transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <span className="text-lg font-semibold text-foreground">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover-elevate active-elevate-2"
              aria-label="Close menu"
              data-testid="button-close-mobile-menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              {dropdowns.map((dropdown, dropdownIndex) => (
                <div key={dropdown.title}>
                  <button
                    onClick={() => toggleMobileDropdown(dropdown.title)}
                    className="w-full px-4 py-4 rounded-lg text-base font-semibold flex items-center justify-between hover-elevate active-elevate-2 text-foreground"
                    data-testid={`button-mobile-dropdown-${dropdown.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="flex items-center gap-3">
                      {dropdown.title === "Services" && <Home className="w-5 h-5 text-primary" />}
                      {dropdown.title === "Film Types" && <Layers className="w-5 h-5 text-primary" />}
                      {dropdown.title === "More" && <FileText className="w-5 h-5 text-primary" />}
                      {dropdown.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                        openMobileDropdown === dropdown.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      openMobileDropdown === dropdown.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-8 mr-2 py-2 flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          data-testid={`link-mobile-dropdown-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block px-3 py-3 rounded-md text-base transition-colors duration-150 ${
                            pathname === item.path
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {dropdownIndex < dropdowns.length - 1 && (
                    <div className="mx-4 my-1 border-b border-border/50" />
                  )}
                </div>
              ))}

              <div className="mx-4 my-1 border-b border-border/50" />

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                data-testid="link-mobile-contact"
                className={`px-4 py-4 rounded-lg text-base font-semibold flex items-center gap-3 hover-elevate active-elevate-2 ${
                  pathname === "/contact" ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                <MessageSquare className="w-5 h-5 text-primary" />
                Contact
              </Link>
            </div>
          </div>

          {/* Footer with CTAs */}
          <div className="px-4 py-4 border-t border-border bg-muted/30 space-y-3">
            <Link href="/get-quote" onClick={() => setIsOpen(false)}>
              <Button
                className="w-full bg-primary text-primary-foreground"
                size="lg"
                data-testid="button-mobile-get-quote"
              >
                Get a Free Quote
              </Button>
            </Link>
            <a
              href="tel:0286062842"
              className="block"
              data-testid="button-call-nav"
            >
              <Button
                variant="outline"
                className="w-full border-primary/30 text-foreground"
                size="lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                (02) 8606 2842
              </Button>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          data-testid="overlay-menu-close"
        />
      )}
    </nav>
  );
}
