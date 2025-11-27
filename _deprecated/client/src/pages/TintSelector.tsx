import { TintSelectorQuiz } from "@/components/TintSelectorQuiz";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Lightbulb } from "lucide-react";

export default function TintSelector() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Tint Selector Quiz" }]} />
      </div>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Find Your Perfect Tint
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Not sure which window film is right for you? Take our quick 5-question
              quiz and get a personalized recommendation!
            </p>
          </div>

          <TintSelectorQuiz />
        </div>
      </section>
    </div>
  );
}
