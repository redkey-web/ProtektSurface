import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

interface InteractiveTintSliderProps {
  demoImage: string;
  title?: string;
  description?: string;
}

export function InteractiveTintSlider({ 
  demoImage, 
  title = "Adjust Tint Darkness",
  description = "Move the slider to see different tint levels" 
}: InteractiveTintSliderProps) {
  const [tintLevel, setTintLevel] = useState([35]);

  const getTintLabel = (level: number) => {
    if (level < 20) return "Light Tint";
    if (level < 40) return "Medium Tint";
    if (level < 60) return "Dark Tint";
    return "Maximum Tint";
  };

  return (
    <Card className="overflow-hidden" data-testid="card-interactive-tint-slider">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>

        <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
          <img
            src={demoImage}
            alt="Window tinting demonstration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 transition-opacity duration-300"
            style={{ opacity: tintLevel[0] / 100 }}
            data-testid="tint-overlay"
          />
          
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-md">
            <p className="text-sm font-medium text-foreground">
              {tintLevel[0]}% Tint
            </p>
            <p className="text-xs text-muted-foreground">
              {getTintLabel(tintLevel[0])}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Light</span>
            <span className="text-muted-foreground">Dark</span>
          </div>
          <Slider
            value={tintLevel}
            onValueChange={setTintLevel}
            min={5}
            max={85}
            step={5}
            className="w-full"
            data-testid="slider-tint-level"
          />
          <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground text-center">
            <div>5%</div>
            <div>25%</div>
            <div>50%</div>
            <div>85%</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
