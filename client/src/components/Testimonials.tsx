import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import tintTexture from "@assets/image_1764073523731.png";

interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  // Add reviews directly from Google Business profile for Protekt Surface Solutions (Sydney) here
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from satisfied customers across Sydney
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const tintOpacities = [0.08, 0.15, 0.22, 0.30, 0.40, 0.50];
            const opacity = tintOpacities[index % tintOpacities.length];
            
            const getTransform = () => {
              if (index === 0) return 'scaleX(-1) scaleY(-1)';
              if (index === 1) return 'rotate(90deg) scale(2) scaleY(-1)';
              if (index === 2) return 'scaleY(-1)';
              if (index === 3) return 'scaleX(-1)';
              if (index === 4) return 'rotate(90deg) scale(2)';
              return 'none';
            };
            
            return (
              <Card
                key={index}
                className="p-6 hover-elevate relative overflow-hidden"
                data-testid={`testimonial-${index}`}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    backgroundImage: `url(${tintTexture})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: opacity,
                    transform: getTransform(),
                  }}
                />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location} • {testimonial.service}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
