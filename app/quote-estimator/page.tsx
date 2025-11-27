import { Metadata } from 'next';
import Link from 'next/link';
import { InstantQuoteEstimator } from "@/components/InstantQuoteEstimator";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: 'Instant Quote Estimator | Window Tinting Sydney',
  description: 'Get an instant price estimate for window tinting. Quick and easy calculator for residential, commercial, and automotive projects.',
  alternates: {
    canonical: 'https://protektsurface.com.au/quote-estimator',
  },
};

export default function QuoteEstimatorPage() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Quote Estimator" }]} />
      </div>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Instant Quote Estimator
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Get an instant price estimate for your window tinting project. Takes
              less than a minute!
            </p>
          </div>

          <InstantQuoteEstimator />

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Want a more accurate quote?{" "}
              <Link href="/get-quote" className="text-primary hover:underline">
                Fill out our detailed quote form
              </Link>{" "}
              or{" "}
              <a href="tel:0286062842" className="text-primary hover:underline">
                call us on (02) 8606 2842
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
