'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Sun, Eye, Sparkles, Lock, Gem, Check, Zap } from "lucide-react";
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
import { TrustTicker } from "@/components/TrustTicker";

export default function HomeClient() {
  const [currentTint, setCurrentTint] = useState(3);
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);

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

  const mobileStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const tintVariants = [
    { name: "Light", color: "rgb(50, 50, 50)", opacity: 0.30 },
    { name: "Medium", color: "rgb(40, 40, 40)", opacity: 0.50 },
    { name: "Dark", color: "rgb(30, 30, 30)", opacity: 0.70 },
    { name: "Limo", color: "rgb(20, 20, 20)", opacity: 0.85 },
  ];

  const isCurrentTintDark = currentTint >= 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTint((prev) => (prev + 1) % tintVariants.length);
    }, 6000);
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
    { 
      title: "Residential Window Tinting", 
      description: "Enhance your home's comfort, energy efficiency, and privacy with premium films. Our residential solutions reduce heat by up to 70% while maintaining natural light.", 
      image: "/images/services/living-room.png", 
      path: "/residential-window-tinting", 
      badge: null,
      features: ["Heat Reduction", "UV Protection", "Privacy"]
    },
    { 
      title: "Commercial Window Tinting", 
      description: "High-performance window films engineered for business environments. Reduce energy costs and create comfortable workspaces.", 
      image: "/images/services/commercial-office.png", 
      path: "/commercial-window-tinting", 
      badge: null,
      features: ["Energy Savings", "Glare Reduction", "Professional Look"]
    },
    { 
      title: "Automotive Window Tinting", 
      description: "Professional car window tinting by Protekt Auto with lifetime warranty. Premium ceramic and carbon films for ultimate protection.", 
      image: "/images/services/automotive.webp", 
      path: "/automotive-window-tinting", 
      badge: "Workshop Only",
      features: ["Ceramic Films", "Lifetime Warranty", "Legal Compliance"]
    },
    { 
      title: "Natural Stone Protection", 
      description: "Invisible protective films for marble, granite, and engineered stone surfaces. Preserve the beauty of your investment.", 
      image: "/images/films/marble-hero.png", 
      path: "/marble-protection-film", 
      badge: "Premium",
      features: ["Invisible Protection", "Stain Resistant", "Easy Maintenance"]
    },
  ];


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
    <div className="min-h-screen overflow-x-hidden">
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

      {/* MOBILE HERO - Bold Modern Luxury */}
      <section className="lg:hidden relative min-h-[100dvh] flex flex-col overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-background.png"
            alt="Luxury interior with window tinting"
            fill
            priority
            className="object-cover object-center scale-110"
            sizes="100vw"
          />
          {/* Cinematic gradient - darker at top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95" />
        </div>

        {/* Mobile Content */}
        <motion.div 
          className="relative z-10 flex-1 flex flex-col px-5 pt-20 pb-6"
          variants={mobileStaggerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Text - Centered and Bold */}
          <div className="flex-1 flex flex-col justify-center items-center text-center py-8">
            <motion.div 
              variants={mobileItemVariants}
              className="mb-3"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#D4A574]/20 border border-[#D4A574]/30 rounded-full">
                <Gem className="w-3.5 h-3.5 text-[#D4A574]" />
                <span className="text-[#D4A574] text-xs font-semibold uppercase tracking-wider">Natural Stone Protection Film</span>
              </span>
            </motion.div>

            <motion.h1 
              variants={mobileItemVariants}
              className="font-sans font-black text-[2.75rem] leading-[1.05] text-white mb-4 tracking-tight"
            >
              Window<br />
              <span className="text-[#D4A574]">Tinting</span><br />
              <span className="text-white/90">Sydney</span>
            </motion.h1>

            <motion.p 
              variants={mobileItemVariants}
              className="text-neutral-300 text-base leading-relaxed max-w-xs"
            >
              Expert window tinting & surface protection for homes, businesses & vehicles across Sydney.
            </motion.p>

            {/* Service Pills */}
            <motion.div 
              variants={mobileItemVariants}
              className="flex flex-wrap justify-center gap-2 mt-4"
            >
              <Link href="#services" className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full">
                <Eye className="w-3.5 h-3.5 text-[#D4A574]" />
                <span className="text-white/90 text-xs font-medium">Window Films</span>
              </Link>
              <Link href="/marble-protection-film" className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full">
                <Gem className="w-3.5 h-3.5 text-[#D4A574]" />
                <span className="text-white/90 text-xs font-medium">Stone Protection</span>
              </Link>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div 
              variants={mobileItemVariants}
              className="flex gap-3 mt-5"
            >
              <a href="tel:0286062842" className="flex items-center gap-2 px-5 py-3 bg-white text-neutral-950 font-bold text-sm rounded-full">
                <Shield className="w-4 h-4" />
                Call Now
              </a>
              <Link href="/get-quote" className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm rounded-full">
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Compact Quote Form Card */}
          <motion.div 
            variants={mobileItemVariants}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-sans font-bold text-lg text-white">Get a Free Quote</h3>
                <p className="text-neutral-400 text-xs">Quick response guaranteed</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#D4A574]/20 rounded-full">
                <Zap className="w-3.5 h-3.5 text-[#D4A574]" />
                <span className="text-[#D4A574] text-xs font-semibold">Fast</span>
              </div>
            </div>
            
            <form action="/get-quote" method="GET" className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full h-12 px-4 text-sm rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/50 focus:border-[#D4A574]/50 transition-all"
                  data-testid="input-mobile-name"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full h-12 px-4 text-sm rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/50 focus:border-[#D4A574]/50 transition-all"
                  data-testid="input-mobile-phone"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-[#D4A574] hover:bg-[#C49A6C] text-neutral-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-[#D4A574]/20" 
                data-testid="button-mobile-submit"
              >
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Trust Bar - Compact Horizontal */}
          <motion.div 
            variants={mobileItemVariants}
            className="mt-5 flex items-center justify-between px-2"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D4A574]" />
              <span className="text-[11px] text-neutral-400 font-medium">15yr Warranty</span>
            </div>
            <div className="w-px h-4 bg-neutral-700" />
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#D4A574]" />
              <span className="text-[11px] text-neutral-400 font-medium">99% UV Block</span>
            </div>
            <div className="w-px h-4 bg-neutral-700" />
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D4A574]" />
              <span className="text-[11px] text-neutral-400 font-medium">5-Star Rated</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* DESKTOP HERO - Full width with asymmetric grid */}
      <section className="hidden lg:flex relative min-h-screen lg:min-h-[105vh] items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover will-change-transform"
          style={{
            backgroundImage: `url(/images/hero/hero-background.png)`,
            backgroundPosition: 'calc(50% + 65px) 65%',
            y: backgroundY,
            scale: 1.1,
          }}
        >
          {tintVariants.map((tint, index) => (
            <div
              key={tint.name}
              className="absolute inset-0 transition-all duration-[2000ms] ease-in-out"
              style={{
                backgroundColor: tint.color,
                opacity: currentTint === index ? tint.opacity : 0,
              }}
            />
          ))}
        </motion.div>

        {/* 12-Column Grid Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 lg:pt-36 lg:pb-24">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Content - 8 columns on desktop */}
            <motion.div 
              className="col-span-12 lg:col-span-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ y: contentY }}
            >
              <motion.h1 
                variants={itemVariants}
                className="font-display font-bold text-display-lg lg:text-display-xl tracking-tight mb-6 lg:mb-8 transition-all duration-1000"
                style={{ 
                  color: isCurrentTintDark ? '#ffffff' : '#1F1F24',
                  ...(currentTint >= 2 ? { textShadow: '0 1px 0 rgba(255,255,255,0.4), 0 2px 0 rgba(255,255,255,0.2), 0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2)' } : {})
                }}
              >
                <span 
                  className={`transition-opacity duration-1000 inline-block ${currentTint === 3 ? 'opacity-80' : currentTint === 2 ? 'opacity-60' : 'opacity-100'} ${currentTint >= 2 ? 'text-sunglasses-effect-1' : 'text-sunglasses-shadow-1'}`}
                >Professional</span><br />
                <span 
                  className={`italic font-semibold transition-opacity duration-1000 inline-block ${currentTint === 3 ? 'opacity-80' : currentTint === 2 ? 'opacity-60' : 'opacity-100'} ${currentTint >= 2 ? 'text-sunglasses-effect-2' : 'text-sunglasses-shadow-2'}`}
                >Window Tinting</span><br />
                <span className={`transition-all duration-1000 ${isCurrentTintDark ? 'text-primary opacity-100' : 'text-white opacity-60'}`}>Sydney</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg lg:text-xl mb-8 max-w-lg leading-relaxed text-white/90 text-sunglasses-effect-1"
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

            {/* Right Content - Quick Quote Form - 4 columns on desktop */}
            <motion.div 
              className="col-span-12 lg:col-span-4 mt-8 lg:mt-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div 
                className="backdrop-blur-xl bg-gray-900/60 border border-white/20 rounded-xl p-4 lg:p-5 box-sunglasses-effect"
              >
                <h3 className="font-display text-xl lg:text-2xl text-white mb-1 opacity-60 text-sunglasses-effect-1">Get Your Quote</h3>
                <p className="text-white/60 text-xs mb-4">Free consultation and estimate</p>
                
                <form action="/get-quote" method="GET" className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-black/30 bg-black/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60 box-sunglasses-inset"
                    data-testid="input-hero-name"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-black/30 bg-black/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60 box-sunglasses-inset"
                    data-testid="input-hero-phone"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-black/30 bg-black/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60 box-sunglasses-inset"
                    data-testid="input-hero-email"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={2}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-black/30 bg-black/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none box-sunglasses-inset"
                    data-testid="textarea-hero-message"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground font-semibold border border-primary-border button-sunglasses-effect" 
                    data-testid="button-hero-submit"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
              
              {/* Trust Indicators - Below Form */}
              <div className="mt-4 flex flex-col gap-2">
                {["Warranties from 5-15 years", "Reduce heat, glare, and UV damage", "Premium ceramic and carbon films"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/80">
                    <Check className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* SERVICES - Redesigned Horizontal Cards */}
      <section id="services" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-primary font-medium uppercase tracking-wider mb-2">Sydney&apos;s Surface Experts</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Premium Window Films<br />
              <span className="text-muted-foreground">&amp; Surface Protection</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From residential homes to commercial buildings, discover the perfect solution for your protection needs.
            </p>
          </div>

          {/* Services - Alternating Horizontal Layout */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {services.map((service, index) => {
              const isReversed = index % 2 === 1;
              return (
                <Link key={service.path} href={service.path}>
                  <Card 
                    className="overflow-visible hover-elevate active-elevate-2 transition-all duration-300 group" 
                    data-testid={`card-service-${index}`}
                  >
                    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                      {/* Image Section */}
                      <div className="relative lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden rounded-t-md lg:rounded-t-none lg:rounded-l-md">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                        {service.badge && (
                          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                            {service.badge}
                          </span>
                        )}
                        {service.path === "/automotive-window-tinting" && (
                          <div className="absolute bottom-4 left-4">
                            <Image 
                              src="/images/brand/protekt-auto-logo-white.webp" 
                              alt="Protekt Auto" 
                              width={120} 
                              height={48} 
                              className="opacity-90"
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Content Section */}
                      <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                        <h3 className="font-display text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((feature) => (
                            <span 
                              key={feature} 
                              className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      <TrustTicker />

      {/* WHY CHOOSE US - Visual Features */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <Image
                    src="/images/services/installation.png"
                    alt="Professional installation"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/films/ceramic-hero.png"
                    alt="Ceramic film technology"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/services/home-exterior.png"
                    alt="Home exterior tinting"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <Image
                    src="/images/automotive/hero.webp"
                    alt="Automotive tinting"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-primary font-medium uppercase tracking-wider mb-2">Why Choose Us</p>
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
                Sydney&apos;s Trusted<br />
                <span className="text-muted-foreground">Surface Protection Experts</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience, we deliver premium window tinting and surface protection solutions that stand the test of time.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Shield, title: "15+ Year Warranties", description: "Industry-leading warranties on all our premium film installations." },
                  { icon: Gem, title: "Premium Materials", description: "We use only top-tier ceramic and carbon films from trusted suppliers." },
                  { icon: Zap, title: "Expert Installation", description: "Factory-trained technicians ensure flawless, bubble-free results." },
                  { icon: Check, title: "100% Satisfaction", description: "We stand behind our work with a complete satisfaction guarantee." },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" size="lg" data-testid="button-learn-more">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILM TYPES - Horizontal Scroll on Mobile */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-medium uppercase tracking-wider mb-2">Film Types</p>
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground">Premium Window Films</h2>
            </div>
            <Link href="/ceramic-window-tint">
              <Button variant="outline" className="hidden lg:flex" data-testid="button-view-all-films">
                View All Films
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Film Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filmTypes.map((film, index) => (
              <Link key={film.path} href={film.path}>
                <Card className="p-6 hover-elevate active-elevate-2 transition-all duration-300 group h-full" data-testid={`card-film-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <film.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{film.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{film.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <OurProcess />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* TINT SELECTOR QUIZ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-wider mb-2">Find Your Perfect Film</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Window Film Selector
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Answer a few quick questions and we&apos;ll recommend the best window film for your needs.
            </p>
          </div>
          <TintSelectorQuiz />
        </div>
      </section>

      {/* TRUSTED SUPPLIERS */}
      <TrustedSuppliers />

      {/* FAQ SECTION */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left" data-testid={`accordion-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your window tinting or surface protection project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 font-semibold" data-testid="button-cta-quote">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
