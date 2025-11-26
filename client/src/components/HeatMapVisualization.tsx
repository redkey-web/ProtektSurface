import { Sun } from "lucide-react";
import { Card } from "@/components/ui/card";

interface HeatMapVisualizationProps {
  title?: string;
  description?: string;
}

export function HeatMapVisualization({ 
  title = "Solar Energy Rejection",
  description = "See how ceramic tint blocks solar energy from entering your space" 
}: HeatMapVisualizationProps) {
  return (
    <Card className="overflow-hidden" data-testid="card-heat-map">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Sun className="w-6 h-6 text-primary" />
          {title}
        </h3>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect width="200" height="200" fill="url(#hotGradient)" />
                <defs>
                  <radialGradient id="hotGradient">
                    <stop offset="0%" stopColor="#FF4444" />
                    <stop offset="40%" stopColor="#FF8844" />
                    <stop offset="70%" stopColor="#FFAA44" />
                    <stop offset="100%" stopColor="#FFCC88" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-md text-center">
                <p className="text-2xl font-bold text-red-500">0%</p>
                <p className="text-xs text-muted-foreground">Without Tint</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect width="200" height="200" fill="url(#coolGradient)" />
                <defs>
                  <radialGradient id="coolGradient">
                    <stop offset="0%" stopColor="#4488FF" />
                    <stop offset="40%" stopColor="#6699FF" />
                    <stop offset="70%" stopColor="#88BBFF" />
                    <stop offset="100%" stopColor="#AACCFF" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-md text-center">
                <p className="text-2xl font-bold text-blue-500">70%</p>
                <p className="text-xs text-muted-foreground">With Ceramic Tint</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-md bg-muted">
            <span className="text-sm font-medium text-foreground">Solar Energy Rejection</span>
            <span className="text-sm font-bold text-primary">Up to 70%</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-md bg-muted">
            <span className="text-sm font-medium text-foreground">UV Protection</span>
            <span className="text-sm font-bold text-primary">Up to 99%</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-md bg-muted">
            <span className="text-sm font-medium text-foreground">Energy Savings</span>
            <span className="text-sm font-bold text-primary">30-50%</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
