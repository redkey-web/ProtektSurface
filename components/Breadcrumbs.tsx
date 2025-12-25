'use client';

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'default' | 'overlay';
}

export function Breadcrumbs({ items, variant = 'overlay' }: BreadcrumbsProps) {
  const isOverlay = variant === 'overlay';
  
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3"
      data-testid="breadcrumb-navigation"
    >
      <ol className={`flex items-center gap-2 text-sm flex-wrap ${
        isOverlay ? 'text-white/60' : 'text-muted-foreground'
      }`}>
        <li>
          <Link 
            href="/" 
            data-testid="breadcrumb-home" 
            className={`transition-colors ${
              isOverlay ? 'hover:text-white' : 'hover:text-primary'
            }`}
          >
            Home
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {item.path ? (
              <Link
                href={item.path}
                data-testid={`breadcrumb-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`transition-colors ${
                  isOverlay ? 'hover:text-white' : 'hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-medium ${
                  isOverlay ? 'text-white/90' : 'text-foreground'
                }`}
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
