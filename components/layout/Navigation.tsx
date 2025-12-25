'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenuPremium } from "@/components/MobileMenuPremium";

interface NavItem {
  name: string;
  path: string;
}

interface DropdownSection {
  title: string;
  items: NavItem[];
}

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [headerProgress, setHeaderProgress] = useState(0);

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  const logoTranslateY = 0;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="absolute inset-0 border-b border-white/10 transition-all duration-300 bg-stone-900/75"
        style={{
          opacity: Math.min(headerProgress, 0.9)
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" data-testid="link-home" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/protekt-logo-light.png"
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
                    className="px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 text-white hover:text-primary transition-colors duration-200"
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
                  pathname === "/contact" ? "text-primary" : "text-white hover:text-primary"
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
              className="transition-all duration-300"
              style={{
                opacity: isHomePage ? headerProgress : 1,
                transform: isHomePage && headerProgress < 1 ? 'translateY(-8px)' : 'translateY(0)',
                pointerEvents: isHomePage && headerProgress < 0.5 ? 'none' : 'auto',
              }}
            >
              <Button size="sm">
                Get Quote
              </Button>
            </Link>

            <a
              href="tel:0286062842"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors duration-200"
              data-testid="link-phone-desktop"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">(02) 8606 2842</span>
            </a>
          </div>

          <MobileMenuPremium 
            isOpen={isMobileMenuOpen} 
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
        </div>
      </div>
    </nav>
  );
}
