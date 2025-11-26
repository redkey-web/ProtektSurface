'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronLeft, DollarSign } from "lucide-react";

type ServiceType = "residential" | "commercial" | "automotive";
type FilmQuality = "standard" | "ceramic" | "premium";

export function InstantQuoteEstimator() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>("residential");
  const [filmQuality, setFilmQuality] = useState<FilmQuality>("ceramic");
  const [quantity, setQuantity] = useState("");

  const calculateEstimate = () => {
    const baseRates = {
      residential: { standard: 30, ceramic: 50, premium: 70 },
      commercial: { standard: 35, ceramic: 55, premium: 80 },
      automotive: { standard: 250, ceramic: 400, premium: 600 },
    };

    if (serviceType === "automotive") {
      return baseRates.automotive[filmQuality];
    }

    const sqm = parseFloat(quantity) || 0;
    const rate = baseRates[serviceType][filmQuality];
    return Math.round(sqm * rate);
  };

  const estimate = calculateEstimate();
  const range = {
    min: Math.round(estimate * 0.9),
    max: Math.round(estimate * 1.1),
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="p-6 sm:p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">Step {step} of 3</span>
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 w-12 rounded-full ${
                    s <= step ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6" data-testid="step-service-type">
            <h3 className="text-2xl font-bold text-foreground">
              What type of service do you need?
            </h3>
            <RadioGroup value={serviceType} onValueChange={(v) => setServiceType(v as ServiceType)}>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 rounded-lg border border-border hover-elevate cursor-pointer">
                  <RadioGroupItem value="residential" id="residential" />
                  <div className="flex-1">
                    <Label htmlFor="residential" className="cursor-pointer font-semibold">
                      Residential Window Tinting
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Home windows, doors, conservatories
                    </p>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-4 rounded-lg border border-border hover-elevate cursor-pointer">
                  <RadioGroupItem value="commercial" id="commercial" />
                  <div className="flex-1">
                    <Label htmlFor="commercial" className="cursor-pointer font-semibold">
                      Commercial Window Tinting
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Offices, retail spaces, buildings
                    </p>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-4 rounded-lg border border-border hover-elevate cursor-pointer">
                  <RadioGroupItem value="automotive" id="automotive" />
                  <div className="flex-1">
                    <Label htmlFor="automotive" className="cursor-pointer font-semibold">
                      Automotive Window Tinting
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Cars, trucks, SUVs, vans
                    </p>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6" data-testid="step-film-quality">
            <h3 className="text-2xl font-bold text-foreground">
              Choose your film quality
            </h3>
            <RadioGroup value={filmQuality} onValueChange={(v) => setFilmQuality(v as FilmQuality)}>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 rounded-lg border border-border hover-elevate cursor-pointer">
                  <RadioGroupItem value="standard" id="standard" />
                  <div className="flex-1">
                    <Label htmlFor="standard" className="cursor-pointer font-semibold">
                      Standard Film
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Good solar energy rejection, 5-year warranty
                    </p>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-4 rounded-lg border border-primary bg-primary/5 hover-elevate cursor-pointer">
                  <RadioGroupItem value="ceramic" id="ceramic" />
                  <div className="flex-1">
                    <Label htmlFor="ceramic" className="cursor-pointer font-semibold">
                      Ceramic Film (Recommended)
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Superior solar energy rejection, lifetime warranty
                    </p>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-4 rounded-lg border border-border hover-elevate cursor-pointer">
                  <RadioGroupItem value="premium" id="premium" />
                  <div className="flex-1">
                    <Label htmlFor="premium" className="cursor-pointer font-semibold">
                      Premium Film
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Maximum performance, lifetime warranty
                    </p>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 3 && serviceType !== "automotive" && (
          <div className="space-y-6" data-testid="step-quantity">
            <h3 className="text-2xl font-bold text-foreground">
              How many square meters?
            </h3>
            <p className="text-sm text-muted-foreground">
              Enter the approximate area you need tinted. Don&apos;t worry if you&apos;re not
              sure - we can measure for you.
            </p>
            <div>
              <Label htmlFor="quantity">Area (square meters)</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="e.g., 20"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-2"
                data-testid="input-quantity"
              />
            </div>
          </div>
        )}

        {step === 3 && serviceType === "automotive" && (
          <div className="space-y-6" data-testid="step-result-automotive">
            <h3 className="text-2xl font-bold text-foreground text-center">
              Your Estimated Quote
            </h3>
            <div className="bg-primary/10 rounded-xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-primary mb-2">
                ${estimate}
              </div>
              <p className="text-sm text-muted-foreground">
                Estimated cost for {filmQuality} film
              </p>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              This is an indicative price for standard vehicles. Final price may vary
              based on vehicle type, number of windows, and specific requirements.
            </p>
          </div>
        )}

        {step === 3 && serviceType !== "automotive" && quantity && parseFloat(quantity) > 0 && (
          <div className="mt-8 space-y-6" data-testid="step-result">
            <h3 className="text-2xl font-bold text-foreground text-center">
              Your Estimated Quote
            </h3>
            <div className="bg-primary/10 rounded-xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-5xl font-bold text-primary mb-2">
                ${range.min} - ${range.max}
              </div>
              <p className="text-sm text-muted-foreground">
                Estimated cost for {quantity}m² of {filmQuality} film
              </p>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              This is an indicative price range. Final quote will depend on window
              accessibility, complexity, and exact measurements.
            </p>
          </div>
        )}

        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="flex-1"
              data-testid="button-back"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          {step < 3 && (
            <Button
              onClick={() => setStep(step + 1)}
              className="flex-1"
              data-testid="button-next"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          {step === 3 && (
            <Button
              onClick={() => router.push("/get-quote")}
              className="flex-1"
              data-testid="button-get-quote"
            >
              Get Accurate Quote
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
