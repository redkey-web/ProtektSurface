import { useState } from "react";

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  description: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
}

export function BeforeAfterGallery({ images }: BeforeAfterGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {images.map((image, index) => (
        <BeforeAfterCard key={index} {...image} index={index} />
      ))}
    </div>
  );
}

function BeforeAfterCard({ before, after, title, description, index }: BeforeAfterImage & { index: number }) {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-border bg-card hover-elevate active-elevate-2 cursor-pointer"
      onClick={() => setIsAfter(!isAfter)}
      data-testid={`before-after-${index}`}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={isAfter ? after : before}
          alt={`${title} - ${isAfter ? 'After' : 'Before'}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md">
          <span className="text-sm font-semibold text-foreground">
            {isAfter ? "After" : "Before"}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/20 backdrop-blur-sm">
          <span className="text-sm font-medium text-foreground bg-primary px-4 py-2 rounded-md">
            Click to {isAfter ? "see before" : "see after"}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
