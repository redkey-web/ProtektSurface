import { Metadata } from 'next';
import Image from "next/image";
import { TintSelectorQuiz } from "@/components/TintSelectorQuiz";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: 'Tint Selector Quiz | Find Your Perfect Window Film',
  description: 'Not sure which window film is right for you? Take our quick quiz and get a personalized recommendation for your home, office, or car.',
  alternates: {
    canonical: 'https://protektsurface.com.au/tint-selector',
  },
};

export default function TintSelectorPage() {
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

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Tint Darkness Guide
            </h2>
            <p className="text-center text-muted-foreground mb-6">
              Compare different tint percentages before you start
            </p>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/films/tint-percentages.png"
                alt="Window tint percentage comparison from 5% to 50%"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                data-testid="img-tint-percentages-guide"
              />
            </div>
          </div>

          <TintSelectorQuiz />
        </div>
      </section>
    </div>
  );
}
