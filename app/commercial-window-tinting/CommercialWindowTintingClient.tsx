'use client';

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/commercial/gallery-1.jpg", alt: "Modern office building with glass facade" },
  { src: "/images/commercial/tinted-windows-1.png", alt: "Commercial building with professional window tinting" },
  { src: "/images/commercial/gallery-3.jpg", alt: "Retail storefront with window tinting" },
  { src: "/images/commercial/before-after-tint.png", alt: "Before and after commercial window tinting" },
  { src: "/images/commercial/tinted-windows-2.png", alt: "Office windows with reflective tint film" },
  { src: "/images/commercial/gallery-6.jpg", alt: "Workspace with large tinted windows" },
];

export function CommercialGalleryCarousel() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-6 sm:py-8 bg-muted/30 overflow-hidden border-b border-border/50">
        <div className="mb-4 px-4 sm:px-6 max-w-7xl mx-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground">Commercial Projects</h2>
        </div>
        <div className="relative isolate">
          <div className="flex animate-marquee-slow gap-4" style={{ width: 'max-content' }}>
            {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 sm:w-80 aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group isolate bg-muted"
                onClick={() => setLightboxImage(image.src)}
                data-testid={`carousel-image-${index}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox-overlay"
        >
          <div className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3]">
            <Image
              src={lightboxImage}
              alt="Gallery image enlarged"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
            data-testid="button-close-lightbox"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
