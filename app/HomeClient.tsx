'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Sun, Eye, Sparkles, Lock, Gem, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Testimonials } from "@/components/Testimonials";
import { OurProcess } from "@/components/OurProcess";
import { TintSelectorQuiz } from "@/components/TintSelectorQuiz";

export default function HomeClient() {
  const [currentTint, setCurrentTint] = useState(0);

  const tintVariants = [
    { name: "Clear", color: "transparent", opacity: 0, isDark: false },
    { name: "Light", color: "rgb(50, 50, 50)", opacity: 0.15, isDark: false },
    { name: "Medium", color: "rgb(40, 40, 40)", opacity: 0.35, isDark: true },
    { name: "Dark", color: "rgb(30, 30, 30)", opacity: 0.55, isDark: true },
    { name: "Limo", color: "rgb(20, 20, 20)", opacity: 0.75, isDark: true },
  ];

  const isCurrentTintDark = tintVariants[currentTint].isDark;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTint((prev) => (prev + 1) % tintVariants.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filmTypes = [
    {
      title: "Ceramic Window Tint",
      description: "Premium nano-ceramic technology for superior solar energy rejection without signal interference.",
      icon: Gem,
      path: "/ceramic-window-tint",
      texture: "/images/textures/ceramic.png",
    },
    {
      title: "Privacy Window Film",
      description: "Elegant one-way privacy solutions that maintain natural light while blocking outside views.",
      icon: Eye,
      path: "/privacy-window-film",
      texture: "/images/textures/privacy.png",
    },
    {
      title: "UV Blocking Film",
      description: "Block 99% of harmful UV rays to protect your skin, furniture, and flooring from sun damage.",
      icon: Sun,
      path: "/uv-blocking-film",
      texture: "/images/textures/uv.png",
    },
    {
      title: "Window Protection Film",
      description: "Invisible strength that holds glass together on impact, enhancing safety and security.",
      icon: Shield,
      path: "/window-protection-film",
      texture: "/images/textures/protection.png",
    },
    {
      title: "Frosted & Decorative Film",
      description: "Transform plain glass into elegant design features with etched glass and decorative patterns.",
      icon: Sparkles,
      path: "/frosted-decorative-window-film",
      texture: "/images/textures/frosted.png",
    },
    {
      title: "Natural Stone Protection",
      description: "Invisible protective films for natural stone surfaces, preventing stains and etching.",
      icon: Lock,
      path: "/marble-protection-film",
      texture: "/images/marble-tile.png",
    },
  ];

  const faqs = [
    {
      question: "How long does window tinting installation take?",
      answer: "Most residential window tinting jobs are completed within 2-4 hours. Commercial projects may take 1-2 days depending on the size of the building. Automotive window tinting typically takes 1-3 hours depending on the vehicle type.",
    },
    {
      question: "What is the difference between ceramic and carbon window tint?",
      answer: "Ceramic window tint uses advanced nano-ceramic particles that provide superior solar energy rejection (up to 70%) without interfering with electronic signals. Carbon tint is more affordable and offers good heat reduction and UV protection, but ceramic provides better overall performance and clarity.",
    },
    {
      question: "How long does window tint last?",
      answer: "Quality window tint films installed by professionals typically last 15-25 years. Our premium ceramic and carbon films come with lifetime warranties, ensuring long-lasting performance and peace of mind.",
    },
    {
      question: "Will window tinting make my home too dark?",
      answer: "Not at all! Modern window films come in various shades from nearly clear to darker tints. We'll help you choose a film that reduces heat and glare while maintaining your desired level of natural light. Many of our films reject heat without significantly darkening your windows.",
    },
    {
      question: "Is window tinting legal for cars in NSW?",
      answer: "Yes, window tinting is legal in NSW with certain restrictions. The front windscreen must allow at least 75% of light through, front side windows must allow at least 35% light transmission, and there are no restrictions on rear windows. We ensure all our automotive installations comply with NSW regulations.",
    },
    {
      question: "Do you offer warranties on your window tinting?",
      answer: "Yes! We offer comprehensive warranties on all our window tinting services. Our premium ceramic films come with lifetime warranties covering bubbling, peeling, cracking, and discoloration. We stand behind the quality of our work and materials.",
    },
  ];

  const services = [
    {
      title: "Natural Stone Protection",
      description:
        "Invisible protective films for marble, granite, and engineered stone surfaces. Prevent stains, etching, and damage while preserving the natural beauty of your stone.",
      image: "/images/marble-tile.png",
      path: "/natural-stone-protection",
    },
    {
      title: "Residential Window Tinting",
      description:
        "Enhance your home's comfort, energy efficiency, and privacy with premium residential window films—designed to reduce heat, glare, and UV damage.",
      image: "/images/services/residential.png",
      path: "/residential-window-tinting",
    },
    {
      title: "Commercial Window Tinting",
      description:
        "Boost energy efficiency, tenant comfort, and security in your commercial space with high-performance window films engineered for business environments.",
      image: "/images/services/commercial.png",
      path: "/commercial-window-tinting",
    },
    {
      title: "Automotive Window Tinting",
      description:
        "Professional car window tinting by Protekt Auto. Premium ceramic and carbon films with lifetime warranty. Reduce heat, block UV rays, and enhance your vehicle.",
      image: "/images/services/automotive.webp",
      path: "/automotive-window-tinting",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(/images/hero/hero-background.png)`,
            backgroundPosition: 'center 40%'
          }}
        >
          {tintVariants.map((tint, index) => (
            <div
              key={tint.name}
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                backgroundColor: tint.color,
                opacity: currentTint === index ? tint.opacity : 0,
                transform: currentTint === index ? 'translateX(0)' : currentTint > index ? 'translateX(-100%)' : 'translateX(100%)',
              }}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white/80 text-xs font-medium">Tint Level:</span>
            <span className="text-white text-sm font-semibold min-w-[60px]">{tintVariants[currentTint].name}</span>
            <div className="flex gap-1.5 ml-2">
              {tintVariants.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTint(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTint === index ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  data-testid={`tint-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-20">
          <div className="relative">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Image
                  src="/images/logo.webp"
                  alt="Protekt Surface Solutions"
                  width={500}
                  height={210}
                  className="h-[70px] sm:h-[90px] md:h-[110px] w-auto"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
                  }}
                  priority
                  data-testid="img-hero-logo"
                />
              </div>

              <h1 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight transition-colors duration-500 ${
                  isCurrentTintDark ? 'text-white' : 'text-black'
                }`}
              >
                Professional Window Tinting
                <br />
                <span className="text-primary">Sydney</span>
              </h1>

              <p 
                className={`text-lg sm:text-xl mb-6 max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
                  isCurrentTintDark ? 'text-white/90' : 'text-black/80'
                }`}
              >
                Sydney&apos;s premier window tinting & surface protection specialists. Premium films and protective solutions for homes, businesses and vehicles
              </p>

            {/* Quick Quote Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-2xl mx-auto mb-6 shadow-lg">
              <p className="text-sm font-semibold text-foreground mb-3">Get Your Free Quote</p>
              <form 
                action="/get-quote" 
                method="GET"
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="flex-1 px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  data-testid="input-hero-name"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="flex-1 px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  data-testid="input-hero-phone"
                />
                <select
                  name="service"
                  className="flex-1 px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  data-testid="select-hero-service"
                  defaultValue=""
                >
                  <option value="" disabled>Select Service</option>
                  <option value="residential">Residential Tinting</option>
                  <option value="commercial">Commercial Tinting</option>
                  <option value="automotive">Automotive Tinting</option>
                  <option value="stone">Natural Stone Protection</option>
                </select>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6"
                  data-testid="button-hero-quote"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-white px-8 backdrop-blur-md bg-gray-900/60 hover:bg-gray-900/30 hover:text-primary hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300"
                  data-testid="button-view-services"
                >
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:0286062842">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-white px-8 backdrop-blur-md bg-gray-900/60 hover:bg-gray-900/30 hover:text-primary hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300"
                  data-testid="button-contact-hero"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (02) 8606 2842
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From residential homes to commercial buildings, browse through our
              services and discover the perfect solution for your surface
              protection needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.path}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group h-full"
                data-testid={`card-service-${index}`}
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {service.path === "/automotive-window-tinting" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Image
                        src="/images/brand/protekt-auto-logo.png"
                        alt="Protekt Auto"
                        width={280}
                        height={120}
                        className="w-2/3 max-w-[280px] h-auto"
                      />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {service.path === "/automotive-window-tinting" && (
                    <a
                      href="https://protektauto.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-primary hover:underline mb-4"
                      data-testid="link-protekt-auto-website"
                    >
                      Visit protektauto.com.au
                    </a>
                  )}
                  <Link href={service.path}>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all cursor-pointer">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Our Film Types
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of premium window films to meet every need - from solar energy rejection to privacy, UV protection to decorative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmTypes.map((film, index) => (
              <Link key={film.path} href={film.path}>
                <Card
                  className="p-6 h-full hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group bg-muted relative overflow-hidden"
                  data-testid={`card-film-type-${index}`}
                >
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage: `url(${film.texture})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <film.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors group-hover:text-gray-600">
                        {film.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {film.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <OurProcess />

      {/* Quiz Section */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Take our short quiz to discover the perfect window treatment for your needs. We&apos;ll help you find the right solution in just a few clicks.
            </p>
          </div>
          <TintSelectorQuiz />
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: `url(/images/brand/pattern.png)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '1200px 1200px',
            backgroundPosition: '-50px -50px',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Got questions about window tinting? We&apos;ve got answers
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} data-testid={`accordion-faq-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(/images/marble-tile.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Protect Your Surfaces?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            Contact us today for a free consultation and quote. Our expert team
            is ready to help you choose the perfect protection solution.
          </p>
          <a href="tel:0286062842">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground px-8 transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] [&:hover]:text-white [&:hover_*]:drop-shadow-[0_0_8px_rgba(212,165,116,1)]"
              data-testid="button-get-quote-cta"
            >
              Get Your Free Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
