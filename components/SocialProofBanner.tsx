'use client';

import { Star, Quote } from "lucide-react";

interface SocialProofBannerProps {
  variant?: 'default' | 'compact';
}

const testimonials = [
  {
    name: "Sarah P.",
    text: "Andy is fantastic at what he does! Very friendly, professional, and always makes sure the job is done right.",
    rating: 5,
  },
  {
    name: "Richard F-P.",
    text: "His work is exemplary, his organisation skills are superb, his reliability impeccable & his charges are reasonable.",
    rating: 5,
  },
];

export function SocialProofBanner({ variant = 'default' }: SocialProofBannerProps) {
  if (variant === 'compact') {
    return (
      <section className="py-8 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              <span className="font-semibold text-foreground">5-star rated</span> by Sydney homeowners and businesses
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by Sydney homeowners and businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border relative"
              data-testid={`social-proof-${index}`}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-3 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="text-xs font-semibold text-muted-foreground">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
