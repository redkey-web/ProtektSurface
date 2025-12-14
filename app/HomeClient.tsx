'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Sun, Eye, Sparkles, Lock, Gem, Phone, Check, Zap, Home, Heart, AlertTriangle, Wifi } from "lucide-react";
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
import { TrustedSuppliers } from "@/components/TrustedSuppliers";

export default function HomeClient() {
  const [currentTint, setCurrentTint] = useState(0);
  const [isMarqueeFixed, setIsMarqueeFixed] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const marqueePlaceholderRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (marqueePlaceholderRef.current) {
        const placeholderRect = marqueePlaceholderRef.current.getBoundingClientRect();
        const navHeight = window.innerWidth >= 640 ? 80 : 64;
        setIsMarqueeFixed(placeholderRect.top <= navHeight);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const tintVariants = [
    { name: "Light", color: "rgb(50, 50, 50)", opacity: 0.15, isDark: false },
    { name: "Medium", color: "rgb(40, 40, 40)", opacity: 0.35, isDark: true },
    { name: "Dark", color: "rgb(30, 30, 30)", opacity: 0.55, isDark: true },
    { name: "Limo", color: "rgb(20, 20, 20)", opacity: 0.75, isDark: true },
  ];

  const isCurrentTintDark = currentTint >= 2; // Only Dark and Limo (index 2 and 3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTint((prev) => (prev + 1) % tintVariants.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filmTypes = [
    { title: "Ceramic Window Tint", description: "Premium nano-ceramic technology for superior solar energy rejection.", icon: Gem, path: "/ceramic-window-tint" },
    { title: "Privacy Window Film", description: "One-way privacy solutions that maintain natural light.", icon: Eye, path: "/privacy-window-film" },
    { title: "UV Blocking Film", description: "Block 99% of harmful UV rays to protect interiors.", icon: Sun, path: "/uv-blocking-film" },
    { title: "Window Protection Film", description: "Invisible strength that holds glass together on impact.", icon: Shield, path: "/window-protection-film" },
    { title: "Frosted & Decorative", description: "Transform plain glass into elegant design features.", icon: Sparkles, path: "/frosted-decorative-window-film" },
    { title: "Stone Protection", description: "Protective films for marble, granite surfaces.", icon: Lock, path: "/marble-protection-film" },
  ];

  const faqs = [
    { question: "How long does window tinting installation take?", answer: "Most residential window tinting jobs are completed within 2-4 hours. Commercial projects may take 1-2 days depending on the size of the building. Automotive window tinting typically takes 1-3 hours depending on the vehicle type." },
    { question: "What is the difference between ceramic and carbon window tint?", answer: "Ceramic window tint uses advanced nano-ceramic particles that provide superior solar energy rejection (up to 70%) without interfering with electronic signals. Carbon tint is more affordable and offers good heat reduction and UV protection, but ceramic provides better overall performance and clarity." },
    { question: "How long does window tint last?", answer: "Quality window tint films installed by professionals typically last 15-25 years. Our premium ceramic and carbon films come with lifetime warranties, ensuring long-lasting performance and peace of mind." },
    { question: "Will window tinting make my home too dark?", answer: "Not at all! Modern window films come in various shades from nearly clear to darker tints. We'll help you choose a film that reduces heat and glare while maintaining your desired level of natural light." },
    { question: "Is window tinting legal for cars in NSW?", answer: "Yes, window tinting is legal in NSW with certain restrictions. The front windscreen must allow at least 75% of light through, front side windows must allow at least 35% light transmission, and there are no restrictions on rear windows." },
  ];

  const services = [
    { title: "Natural Stone Protection", description: "Invisible protective films for marble, granite, and engineered stone surfaces.", image: "/images/marble-tile.png", path: "/marble-protection-film", badge: "Premium" },
    { title: "Residential Window Tinting", description: "Enhance your home's comfort, energy efficiency, and privacy with premium films.", image: "/images/services/residential.png", path: "/residential-window-tinting", badge: "Popular" },
    { title: "Commercial Window Tinting", description: "High-performance window films engineered for business environments.", image: "/images/services/commercial.png", path: "/commercial-window-tinting", badge: null },
    { title: "Automotive Window Tinting", description: "Professional car window tinting by Protekt Auto with lifetime warranty.", image: "/images/services/automotive.webp", path: "/automotive-window-tinting", badge: "Workshop Only" },
  ];

  const benefits = [
    { label: "99% UV Protection", icon: Sun },
    { label: "Solar Energy Rejection", icon: Zap },
    { label: "Enhanced Privacy", icon: Eye },
    { label: "Impact Resistance", icon: Shield },
    { label: "Storm Protection", icon: Zap },
    { label: "Preserve Interiors", icon: Home },
    { label: "Health Protection", icon: Heart },
    { label: "No Signal Interference", icon: Wifi },
    { label: "Safety First", icon: AlertTriangle },
    { label: "Security Boost", icon: Lock },
    { label: "Elegant Aesthetics", icon: Sparkles },
    { label: "Glare Reduction", icon: Sun },
  ];

  // Structured Data for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Protekt Surface Solutions",
    "image": "https://protektsurface.com.au/images/logo.webp",
    "url": "https://protektsurface.com.au",
    "telephone": "(02) 8606 2842",
    "email": "info@protektsurfacesolutions.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "24 George Street",
      "addressLocality": "Clyde",
      "addressRegion": "NSW",
      "postalCode": "2142",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8367,
      "longitude": 151.0144
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Sydney"
    },
    "serviceType": ["Window Tinting", "Surface Protection", "Automotive Window Tinting", "Stone Protection"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Protekt Surface Solutions",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah Pantaleo" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Andy is fantastic at what he does! He's very friendly, professional, and always makes sure the job is done right. I've been so impressed with his attention to detail and the quality of his work. Highly recommend Protekt Surface Solutions if you want reliable service and great results!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Richard F-P." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "This Applicator has applied protective film to several cars in our fleet over the past few years, including our McLaren 650s spider, Audi R8 V10 plus, Porsche 981 spyder & most recently our Mercedes SL55AMG. His work is exemplary, his organisation skills are superb, his reliability impeccable & his charges are reasonable."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* HERO - Full width with asymmetric grid */}
      <section ref={heroRef} className="relative min-h-screen lg:min-h-[105vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover will-change-transform"
          style={{
            backgroundImage: `url(/images/hero/hero-background.png)`,
            backgroundPosition: 'calc(50% + 45px) 65%',
            y: backgroundY,
            scale: 1.1,
          }}
        >
          {tintVariants.map((tint, index) => (
            <div
              key={tint.name}
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                backgroundColor: tint.color,
                opacity: currentTint === index ? tint.opacity : 0,
              }}
            />
          ))}
        </motion.div>

        {/* Logo - Aligned with header position */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="pt-2 sm:pt-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src="/images/logo.webp"
                alt="Protekt Surface Solutions"
                width={322}
                height={136}
                className="h-[74px] sm:h-[92px] w-auto"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                priority
                data-testid="img-hero-logo"
              />
            </motion.div>
          </div>
        </div>

        {/* 12-Column Grid Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 lg:pt-36 lg:pb-24">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Content - 6 columns on desktop */}
            <motion.div 
              className="col-span-12 lg:col-span-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ y: contentY }}
            >
              <motion.h1 
                variants={itemVariants}
                className={`font-display font-bold text-display-lg lg:text-display-xl tracking-tight mb-6 lg:mb-8 transition-colors duration-500 ${isCurrentTintDark ? 'text-white' : 'text-foreground'}`}
                style={{ 
                  textShadow: '0 1px 0 rgba(255,255,255,0.4), 0 2px 0 rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2)'
                }}
              >
                Professional<br />
                <span className="italic font-semibold">Window Tinting</span><br />
                <span className={`transition-colors duration-500 ${isCurrentTintDark ? 'text-primary' : 'text-white'}`}>Sydney</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className={`text-lg lg:text-xl mb-8 max-w-lg leading-relaxed transition-colors duration-500 ${isCurrentTintDark ? 'text-white/90' : 'text-foreground/80'}`}
              >
                Premium films and protective solutions for homes, businesses and vehicles. Sydney&apos;s trusted surface protection specialists.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 items-center">
                <Link href="#services">
                  <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 font-semibold" data-testid="button-hero-services">
                    View Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <div className="flex gap-2 items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white/80 text-xs font-medium">Tint Level:</span>
                  <span className="text-white text-sm font-semibold min-w-[60px]">{tintVariants[currentTint].name}</span>
                  <div className="flex gap-1.5 ml-2">
                    {tintVariants.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTint(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTint === index ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                        data-testid={`tint-dot-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Quick Quote Form - 6 columns on desktop */}
            <motion.div 
              className="col-span-12 lg:col-span-6 mt-8 lg:mt-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div 
                className="backdrop-blur-xl bg-gray-900/60 border border-white/20 rounded-2xl p-6 lg:p-8"
                style={{ boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.15), 0 12px 32px rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.25)' }}
              >
                <h3 className="font-display text-2xl lg:text-3xl text-white mb-2">Get Your Quote</h3>
                <p className="text-white/60 text-sm mb-6">Free consultation and estimate</p>
                
                <form action="/get-quote" method="GET" className="flex flex-col gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-xl border border-black/30 bg-black/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(0,0,0,0.3)' }}
                    data-testid="input-hero-name"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-xl border border-black/30 bg-black/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(0,0,0,0.3)' }}
                    data-testid="input-hero-phone"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 rounded-xl border border-black/30 bg-black/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(0,0,0,0.3)' }}
                    data-testid="input-hero-email"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-black/30 bg-black/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none"
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(0,0,0,0.3)' }}
                    data-testid="textarea-hero-message"
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground font-semibold border border-primary-border" 
                    style={{ boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.25), 0 6px 16px rgba(0,0,0,0.3), 0 3px 6px rgba(0,0,0,0.2)' }}
                    data-testid="button-hero-submit"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
              
              {/* Trust Indicators - Below Form */}
              <div className="mt-6 flex flex-col gap-3">
                {["Warranties from 5-15 years", "Reduce heat, glare, and UV damage", "Premium ceramic and carbon films"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* BENEFITS MARQUEE - Placeholder to track original position */}
      <div ref={marqueePlaceholderRef} className="h-[36px]">
        {!isMarqueeFixed && (
          <section className="py-2 bg-muted/50 overflow-hidden border-b border-border/50 shadow-sm">
            <div className="relative">
              <div className="flex animate-marquee">
                {[...benefits, ...benefits].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 px-6 lg:px-8 flex-shrink-0"
                    data-testid={`benefit-${index}`}
                  >
                    <benefit.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" strokeWidth={1.5} />
                    <span className="text-xs lg:text-sm font-medium text-foreground whitespace-nowrap">{benefit.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      
      {/* Fixed marquee when scrolled */}
      {isMarqueeFixed && (
        <section className="fixed left-0 right-0 top-16 sm:top-20 z-[45] py-2 bg-muted/50 overflow-hidden border-b border-border/50 shadow-sm">
          <div className="relative">
            <div className="flex animate-marquee">
              {[...benefits, ...benefits].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-6 lg:px-8 flex-shrink-0"
                  data-testid={`benefit-fixed-${index}`}
                >
                  <benefit.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" strokeWidth={1.5} />
                  <span className="text-xs lg:text-sm font-medium text-foreground whitespace-nowrap">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SERVICES - Masonry-like Grid */}
      <section id="services" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4 lg:gap-8 mb-12 lg:mb-16">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-primary font-medium uppercase tracking-wider mb-2">Sydney&apos;s Surface Experts</p>
              <h2 className="font-display text-display-md lg:text-display-lg">
                Premium Window Films<br />
                <span className="italic text-muted-foreground">&amp; Surface Protection</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex items-end">
              <p className="text-muted-foreground leading-relaxed">
                From residential homes to commercial buildings, discover the perfect solution for your protection needs.
              </p>
            </div>
          </div>

          {/* Services Grid - Varied Sizes */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {services.map((service, index) => {
              const isLarge = index === 0 || index === 1;
              return (
                <Link 
                  key={service.path} 
                  href={service.path}
                  className={`${isLarge ? 'col-span-12 lg:col-span-6' : 'col-span-12 md:col-span-6 lg:col-span-6'}`}
                >
                  <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 group h-full" data-testid={`card-service-${index}`}>
                    <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/10]' : 'aspect-video'}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {service.badge && (
                        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {service.badge}
                        </span>
                      )}
                      {service.path === "/automotive-window-tinting" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image src="/images/brand/protekt-auto-logo.png" alt="Protekt Auto" width={200} height={80} style={{ width: '50%', maxWidth: '200px', height: 'auto' }} />
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-display text-xl lg:text-2xl text-white mb-2">{service.title}</h3>
                        <p className="text-white/80 text-sm line-clamp-2">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-primary font-medium uppercase tracking-wider mb-2">See Our Work</p>
            <h2 className="font-display text-display-md">Surface Protection in Action</h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full aspect-video object-cover"
              data-testid="video-featured"
            >
              <source src="/images/hero/protekt-video.mov" type="video/quicktime" />
              <source src="/images/hero/protekt-video.mov" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* FILM TYPES - Horizontal Scroll on Mobile */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-medium uppercase tracking-wider mb-2">Film Types</p>
              <h2 className="font-display text-display-md">Premium Window Films</h2>
            </div>
            <Link href="/ceramic-window-tint">
              <Button variant="outline" className="hidden lg:flex" data-testid="button-view-all-films">
                View All Films
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filmTypes.map((film, index) => (
              <Link key={film.path} href={film.path}>
                <Card className="p-6 h-full hover-elevate active-elevate-2 transition-all duration-300 group bg-background" data-testid={`card-film-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <film.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{film.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{film.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE TEXT STATEMENT */}
      <section className="py-20 lg:py-32 bg-foreground text-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display text-display-lg lg:text-display-xl leading-none">
                Protect what<br />
                <span className="italic text-primary">matters most</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="text-background/70 text-lg leading-relaxed mb-6">
                From your family&apos;s comfort to your property&apos;s value, our premium window films deliver lasting protection and peace of mind.
              </p>
              <Link href="/get-quote">
                <Button size="lg" className="bg-primary text-primary-foreground" data-testid="button-statement-cta">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <TrustedSuppliers />

      <OurProcess />

      {/* QUIZ SECTION */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-primary font-medium uppercase tracking-wider mb-2">Find Your Solution</p>
              <h2 className="font-display text-display-md">
                Not sure what<br />
                <span className="italic">you need?</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-end">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Take our quick quiz to discover the perfect window treatment for your needs.
              </p>
            </div>
          </div>
          <TintSelectorQuiz />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-primary font-medium uppercase tracking-wider mb-2">FAQ</p>
              <h2 className="font-display text-display-md mb-4">
                Common<br />
                <span className="italic">Questions</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Everything you need to know about our window tinting services.
              </p>
              <Link href="/contact">
                <Button variant="outline" data-testid="button-faq-contact">
                  Still have questions?
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} data-testid={`accordion-faq-${index}`}>
                    <AccordionTrigger className="text-left text-base lg:text-lg font-medium hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-32 bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(/images/marble-tile.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-display-md lg:text-display-lg mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our expert team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote">
              <Button size="lg" className="bg-primary text-primary-foreground px-8" data-testid="button-cta-quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:0286062842">
              <Button size="lg" variant="outline" className="px-8" data-testid="button-cta-call">
                <Phone className="mr-2 w-5 h-5" />
                (02) 8606 2842
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
