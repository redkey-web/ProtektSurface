'use client';

import { Sun, Zap, Eye, Shield, Home, Heart, AlertTriangle, Wifi, Lock, Sparkles } from "lucide-react";

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

export function TrustTicker() {
  return (
    <section className="py-2 overflow-hidden border-y border-white/10" style={{ backgroundColor: '#20222C' }}>
      <div className="relative">
        <div className="flex animate-marquee">
          {[...benefits, ...benefits].map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-6 lg:px-8 flex-shrink-0"
            >
              <benefit.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" strokeWidth={1.5} />
              <span className="text-xs lg:text-sm font-medium text-white whitespace-nowrap">{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
