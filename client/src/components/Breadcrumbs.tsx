import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-4"
      data-testid="breadcrumb-navigation"
    >
      <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link href="/" data-testid="breadcrumb-home">
            <span className="hover:text-primary transition-colors">Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {item.path ? (
              <Link
                href={item.path}
                data-testid={`breadcrumb-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="hover:text-primary transition-colors">
                  {item.label}
                </span>
              </Link>
            ) : (
              <span
                className="text-foreground font-medium"
                data-testid={`breadcrumb-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
