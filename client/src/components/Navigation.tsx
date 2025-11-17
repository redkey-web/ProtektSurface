import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/Untitled+(500+x+210+px).png_1763361350526.webp";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Residential Window Tint", path: "/residential-window-tint" },
    { name: "Commercial Window Tint", path: "/commercial-window-tint" },
    { name: "Decorative Frosted Film", path: "/decorative-frosted-film" },
    { name: "Marble Protection", path: "/marble-protection" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" data-testid="link-home">
            <img
              src={logoUrl}
              alt="Protekt Surface Solutions"
              className="h-16 sm:h-20 w-auto hover-elevate active-elevate-2 rounded-sm -my-4 sm:-my-6"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover-elevate active-elevate-2 rounded-md"
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
        className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-background border-l border-border transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors hover-elevate active-elevate-2 ${
                    location === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
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
