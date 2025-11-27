import { useState, useEffect } from "react";
import { Shield, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";

interface UVRayAnimationProps {
  title?: string;
  description?: string;
}

export function UVRayAnimation({ 
  title = "UV Protection in Action",
  description = "Watch how our window tint blocks 99% of harmful UV rays" 
}: UVRayAnimationProps) {
  const [isProtected, setIsProtected] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsProtected(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden" data-testid="card-uv-animation">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {title}
        </h3>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>

        <div className="relative bg-gradient-to-b from-sky-200 to-sky-100 rounded-lg overflow-hidden h-64">
          <div className="absolute top-4 right-4">
            <Sun className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-8 right-8 w-1 bg-yellow-300/60 origin-top-right transition-all duration-1000"
              style={{
                height: isProtected ? '0%' : '100%',
                transform: `rotate(${-45 + i * 12}deg)`,
                left: `${60 - i * 8}%`,
                opacity: isProtected ? 0 : 0.7,
                animationDelay: `${i * 0.1}s`
              }}
              data-testid={`uv-ray-${i}`}
            />
          ))}

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background/80" />
          
          <div
            className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-800/60 transition-opacity duration-1000"
            style={{ opacity: isProtected ? 1 : 0 }}
            data-testid="tint-protection-overlay"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 ${
              isProtected 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-background/90 text-foreground'
            }`}>
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                {isProtected ? "99% UV Blocked" : "No Protection"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="text-center p-3 rounded-md bg-muted">
            <p className="font-semibold text-foreground">Without Tint</p>
            <p className="text-xs text-muted-foreground">Harmful UV exposure</p>
          </div>
          <div className="text-center p-3 rounded-md bg-primary/10">
            <p className="font-semibold text-primary">With Tint</p>
            <p className="text-xs text-muted-foreground">99% UV protection</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
