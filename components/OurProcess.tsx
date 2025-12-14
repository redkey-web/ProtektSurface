'use client';

import { Phone, ClipboardCheck, FileText, MessageSquare, Users, CheckCircle, HeadphonesIcon, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  customerBenefit: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Get in Touch",
    description: "Call us or send an enquiry through our website. We're here to answer your questions and understand your needs.",
    icon: Phone,
    customerBenefit: "Quick response within 24 hours",
  },
  {
    number: 2,
    title: "Free On-Site Consultation",
    description: "We visit your property to take precise measurements and discuss the best film options for your specific requirements.",
    icon: ClipboardCheck,
    customerBenefit: "Expert advice tailored to your space",
  },
  {
    number: 3,
    title: "Detailed Quote",
    description: "Receive a comprehensive formal quote with transparent pricing—no hidden fees, no surprises.",
    icon: FileText,
    customerBenefit: "Clear pricing with no obligations",
  },
  {
    number: 4,
    title: "Refine & Confirm",
    description: "We welcome your feedback and can adjust the quote to match your preferences before you commit.",
    icon: MessageSquare,
    customerBenefit: "Flexible options that suit your budget",
  },
  {
    number: 5,
    title: "Professional Installation",
    description: "Our skilled team arrives fully equipped to complete the installation efficiently and to the highest standard.",
    icon: Users,
    customerBenefit: "Minimal disruption to your day",
  },
  {
    number: 6,
    title: "Walkthrough & Handover",
    description: "We walk you through the completed work, explain aftercare instructions, and ensure complete site cleanup.",
    icon: CheckCircle,
    customerBenefit: "Leave your space spotless",
  },
  {
    number: 7,
    title: "Ongoing Support",
    description: "Enjoy comprehensive after-sales service and manufacturer-backed warranties for your peace of mind.",
    icon: HeadphonesIcon,
    customerBenefit: "Warranties from 5-15 years depending on film",
  },
];

interface OurProcessProps {
  showCTA?: boolean;
  compact?: boolean;
}

export function OurProcess({ showCTA = true, compact = false }: OurProcessProps) {
  if (compact) {
    return (
      <div className="py-12 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Our Simple Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From first contact to completed installation, we make it easy
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="text-center p-4 rounded-lg hover-elevate"
              data-testid={`process-step-compact-${step.number}`}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs font-medium text-primary mb-1">Step {step.number}</div>
              <h4 className="text-sm font-semibold text-foreground leading-tight mb-1">{step.title}</h4>
              <p className="text-xs text-muted-foreground leading-tight">{step.customerBenefit}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-foreground/5 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url(/images/patterns/logo-pattern.png)`,
          backgroundSize: '60px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We Work With You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A smooth, transparent process from your first enquiry to completed installation—and beyond
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-testid={`process-step-${step.number}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <Card className="p-6 hover-elevate w-full">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                      <div className="flex-shrink-0">
                        <div 
                          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border border-primary-border"
                          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)' }}
                        >
                          <step.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-primary mb-1">Step {step.number}</div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          <Sparkles className="w-4 h-4" />
                          {step.customerBenefit}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="hidden lg:flex items-center justify-center w-12 relative z-10">
                  <div 
                    className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg border border-primary-border"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {showCTA && (
          <div className="text-center mt-12 sm:mt-16">
            <Card className="inline-block p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-md">
                Contact us today for your free on-site consultation and quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0286062842">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white backdrop-blur-md bg-gray-900/60 hover:bg-gray-900/30 hover:text-primary transition-all duration-300"
                    data-testid="button-process-call"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    (02) 8606 2842
                  </Button>
                </a>
                <Link href="/get-quote">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white backdrop-blur-md bg-gray-900/60 hover:bg-gray-900/30 hover:text-primary transition-all duration-300"
                    data-testid="button-process-quote"
                  >
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
