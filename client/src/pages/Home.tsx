import { Link } from "wouter";
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Sun, Eye, Sparkles, Lock, Gem } from "lucide-react";
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
import heroImage from "@assets/generated_images/Hero_background_residential_interior_2b09e675.png";
import residentialImage from "@assets/generated_images/Residential_window_tinting_service_4f42a2a0.png";
import commercialImage from "@assets/generated_images/Commercial_window_tinting_service_1caab67d.png";
import frostedImage from "@assets/generated_images/Decorative_frosted_film_service_185776ce.png";
import marbleImage from "@assets/generated_images/Marble_stone_protection_service_9d639889.png";
import automotiveImage from "@assets/generated_images/tinted_luxury_car_showcase.png";
import windowTintImage from "@assets/window tint_1764036010561.webp";
import logoUrl from "@assets/Untitled+(500+x+210+px).png_1763361350526.webp";
import patternImage from "@assets/protekt_icon_pattern_600_1764034694000.png";
import protektAutoLogo from "@assets/image_1764039173355.png";
import marbleTexture from "@assets/image_1764067045247.png";
import privacyTexture from "@assets/image_1764067265072.png";
import protectionTexture from "@assets/image_1764067354002.png";
import uvTexture from "@assets/image_1764067444238.png";
import frostedTexture from "@assets/image_1764067553522.png";
import ceramicTexture from "@assets/image_1764068739357.png";

export default function Home() {
  const [currentTint, setCurrentTint] = useState(0);
  
  const tintVariants = [
    { name: "Clear", color: "transparent", opacity: 0 },
    { name: "Light", color: "rgb(50, 50, 50)", opacity: 0.15 },
    { name: "Medium", color: "rgb(40, 40, 40)", opacity: 0.35 },
    { name: "Dark", color: "rgb(30, 30, 30)", opacity: 0.55 },
    { name: "Limo", color: "rgb(20, 20, 20)", opacity: 0.75 },
  ];

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
    },
    {
      title: "Privacy Window Film",
      description: "Elegant one-way privacy solutions that maintain natural light while blocking outside views.",
      icon: Eye,
      path: "/privacy-window-film",
    },
    {
      title: "UV Blocking Film",
      description: "Block 99% of harmful UV rays to protect your skin, furniture, and flooring from sun damage.",
      icon: Sun,
      path: "/uv-blocking-film",
    },
    {
      title: "Window Protection Film",
      description: "Invisible strength that holds glass together on impact, enhancing safety and security.",
      icon: Shield,
      path: "/window-protection-film",
    },
    {
      title: "Frosted & Decorative Film",
      description: "Transform plain glass into elegant design features with etched glass and decorative patterns.",
      icon: Sparkles,
      path: "/frosted-decorative-window-film",
    },
    {
      title: "Marble Protection Film",
      description: "Invisible protective films for natural stone surfaces, preventing stains and etching.",
      icon: Lock,
      path: "/marble-protection-film",
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
      title: "Residential Window Tinting",
      description:
        "Enhance your home's comfort, energy efficiency, and privacy with premium residential window films—designed to reduce heat, glare, and UV damage.",
      image: residentialImage,
      path: "/residential-window-tinting",
    },
    {
      title: "Commercial Window Tinting",
      description:
        "Boost energy efficiency, tenant comfort, and security in your commercial space with high-performance window films engineered for business environments.",
      image: commercialImage,
      path: "/commercial-window-tinting",
    },
    {
      title: "Automotive Window Tinting",
      description:
        "Professional car window tinting by Protekt Auto. Premium ceramic and carbon films with lifetime warranty. Reduce heat, block UV rays, and enhance your vehicle.",
      image: windowTintImage,
      path: "/automotive-window-tinting",
    },
    {
      title: "Ceramic Window Tint",
      description:
        "Advanced nano-ceramic technology for superior solar energy rejection and clarity. Non-metallic formula that won't interfere with electronics. The premium choice.",
      image: frostedImage,
      path: "/ceramic-window-tint",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gray-600/20" />
          
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
            <div className="absolute inset-0 -inset-x-[100vw] -top-6 -bottom-8 bg-white/40 backdrop-blur-[2px]" />
            
            <div className="relative">
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src={logoUrl}
                  alt="Protekt Surface Solutions"
                  className="h-[70px] sm:h-[90px] md:h-[110px] w-auto"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
                  }}
                  data-testid="img-hero-logo"
                />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Professional Window Tinting
                <br />
                <span className="text-primary">Sydney</span>
              </h1>

              <p className="text-lg sm:text-xl text-black/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Sydney's premier window tinting & surface protection specialists. Premium films and protective solutions for homes, businesses and vehicles
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#services">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary text-primary-foreground px-8 transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] [&:hover]:text-white [&:hover_*]:drop-shadow-[0_0_8px_rgba(212,165,116,1)]"
                    style={{ 
                      textShadow: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 10px rgba(212,165,116,0.9), 0 0 20px rgba(212,165,116,0.6), 0 0 30px rgba(212,165,116,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
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
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

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
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {service.path === "/automotive-window-tinting" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <img 
                        src={protektAutoLogo} 
                        alt="Protekt Auto" 
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
            {filmTypes.map((film, index) => {
              const isMarble = film.path === "/marble-protection-film";
              const isPrivacy = film.path === "/privacy-window-film";
              const isProtection = film.path === "/window-protection-film";
              const isUV = film.path === "/uv-blocking-film";
              const isFrosted = film.path === "/frosted-decorative-window-film";
              const isCeramic = film.path === "/ceramic-window-tint";
              const hasOverlay = isMarble || isPrivacy || isProtection || isUV || isFrosted || isCeramic;
              return (
                <Link key={film.path} href={film.path}>
                  <Card
                    className="p-6 h-full hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group bg-muted relative overflow-hidden"
                    data-testid={`card-film-type-${index}`}
                  >
                    {isCeramic && (
                      <div 
                        className="absolute inset-0 opacity-15 group-hover:opacity-30 pointer-events-none transition-opacity duration-300"
                        style={{ 
                          backgroundImage: `url(${ceramicTexture})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    )}
                    {isMarble && (
                      <div 
                        className="absolute inset-0 opacity-20 group-hover:opacity-40 pointer-events-none transition-opacity duration-300"
                        style={{ 
                          backgroundImage: `url(${marbleTexture})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    )}
                    {isPrivacy && (
                      <div 
                        className="absolute inset-0 opacity-30 group-hover:opacity-60 pointer-events-none transition-opacity duration-300"
                        style={{ 
                          backgroundImage: `url(${privacyTexture})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    )}
                    {isProtection && (
                      <div 
                        className="absolute inset-0 opacity-15 group-hover:opacity-30 pointer-events-none transition-opacity duration-300"
                        style={{ 
                          backgroundImage: `url(${protectionTexture})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    )}
                    {isUV && (
                      <div 
                        className="absolute inset-0 opacity-15 group-hover:opacity-30 pointer-events-none transition-opacity duration-300"
                        style={{ 
                          backgroundImage: `url(${uvTexture})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    )}
                    {isFrosted && (
                      <div 
                        className="absolute inset-0 opacity-20 group-hover:opacity-40 pointer-events-none transition-opacity duration-300"
                        style={{ 
                          backgroundImage: `url(${frostedTexture})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    )}
                    <div className="relative flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <film.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold text-foreground mb-2 transition-colors ${hasOverlay ? "group-hover:text-gray-600" : "group-hover:text-primary"}`}>
                          {film.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {film.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <OurProcess />

      <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{ 
            backgroundImage: `url(${patternImage})`,
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
              Got questions about window tinting? We've got answers
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
            backgroundImage: `url(${marbleTexture})`,
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
              style={{ 
                textShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = '0 0 10px rgba(212,165,116,0.9), 0 0 20px rgba(212,165,116,0.6), 0 0 30px rgba(212,165,116,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = 'none';
              }}
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
