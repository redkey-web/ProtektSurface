'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MenuItem {
  label: string;
  href: string;
}

const serviceLinks: MenuItem[] = [
  { label: 'Residential Window Tinting', href: '/residential-window-tinting' },
  { label: 'Automotive Window Tinting', href: '/automotive-window-tinting' },
  { label: 'Commercial Window Tinting', href: '/commercial-window-tinting' },
  { label: 'Natural Stone Protection', href: '/marble-protection-film' },
];

const navLinks: MenuItem[] = [
  { label: 'Film Types', href: '/ceramic-window-tint' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get Quote', href: '/get-quote' },
];

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
const COIN_CHARS = '$¢€£¥₿◉●○◐◑◒◓◔◕';

function useScrambleText(text: string, isActive: boolean, delay: number = 0) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      setIsScrambling(false);
      return;
    }

    let intervalId: NodeJS.Timeout | null = null;
    
    const timeout = setTimeout(() => {
      setIsScrambling(true);
      let iteration = 0;
      const maxIterations = text.length * 1.5;

      intervalId = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration / 1.5) return text[index];
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join('')
        );

        iteration++;

        if (iteration > maxIterations) {
          if (intervalId) clearInterval(intervalId);
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, 20);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, isActive, delay]);

  return { displayText, isScrambling };
}

function useSpinningCoin(isActive: boolean, duration: number = 4000) {
  const [currentChar, setCurrentChar] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setCurrentChar('');
      setIsSpinning(false);
      return;
    }

    setIsSpinning(true);
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= duration) {
        clearInterval(interval);
        setCurrentChar('');
        setIsSpinning(false);
        return;
      }

      const speed = Math.max(50, 50 + (elapsed / duration) * 150);
      setCurrentChar(COIN_CHARS[Math.floor(Math.random() * COIN_CHARS.length)]);
    }, 80);

    return () => clearInterval(interval);
  }, [isActive, duration]);

  return { currentChar, isSpinning };
}

interface ScrambleLinkProps {
  item: MenuItem;
  isMenuOpen: boolean;
  index: number;
  baseDelay: number;
  onClose: () => void;
  isLastItem?: boolean;
}

function ScrambleLink({ item, isMenuOpen, index, baseDelay, onClose, isLastItem }: ScrambleLinkProps) {
  const pathname = usePathname();
  const delay = baseDelay + index * 350;
  const { displayText } = useScrambleText(item.label, isMenuOpen, delay);
  const { currentChar, isSpinning } = useSpinningCoin(isMenuOpen && !!isLastItem, 4000);

  const isActive = pathname === item.href;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{
        duration: 0.4,
        delay: delay / 1000,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Link
        href={item.href}
        onClick={onClose}
        className={`block text-xl font-medium py-3 transition-colors duration-200 ${
          isActive ? 'text-primary' : 'text-white hover:text-primary'
        }`}
        data-testid={`link-premium-menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {isLastItem && isSpinning ? (
          <>
            {displayText.slice(0, -1)}
            <span className="inline-block w-4 text-primary animate-pulse">
              {currentChar}
            </span>
          </>
        ) : (
          displayText
        )}
      </Link>
    </motion.div>
  );
}

interface MobileMenuPremiumProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuPremium({ isOpen, onToggle }: MobileMenuPremiumProps) {
  const panelVariants = {
    closed: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        delay: serviceLinks.length * 0.35 + 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden relative h-6 overflow-hidden z-[60]"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        data-testid="button-premium-menu-toggle"
        style={{
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        <div className="relative h-6 w-14 overflow-hidden">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ y: 24 }}
                animate={{ y: 0 }}
                exit={{ y: -24 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-wide"
                style={{
                  color: '#D4A574',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Close
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ y: -24 }}
                animate={{ y: 0 }}
                exit={{ y: 24 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-wide"
                style={{
                  color: '#D4A574',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Menu
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onToggle}
              data-testid="overlay-premium-menu"
            />

            <motion.div
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 right-0 z-50 pt-20"
              style={{
                background: 'linear-gradient(180deg, rgba(20, 20, 25, 0.97) 0%, rgba(15, 15, 20, 0.98) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                borderBottomLeftRadius: '24px',
                borderBottomRightRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
              data-testid="panel-premium-menu"
            >
              <div className="px-6 pb-8 pt-4">
                <div className="mb-2">
                  <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                    Services
                  </span>
                </div>
                <div className="space-y-1">
                  {serviceLinks.map((item, index) => (
                    <ScrambleLink
                      key={item.href}
                      item={item}
                      isMenuOpen={isOpen}
                      index={index}
                      baseDelay={400}
                      onClose={onToggle}
                    />
                  ))}
                </div>

                <motion.div
                  variants={dividerVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent my-6"
                />

                <div className="mb-2">
                  <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                    Navigation
                  </span>
                </div>
                <div className="space-y-1">
                  {navLinks.map((item, index) => (
                    <ScrambleLink
                      key={item.href}
                      item={item}
                      isMenuOpen={isOpen}
                      index={index}
                      baseDelay={400 + serviceLinks.length * 350 + 600}
                      onClose={onToggle}
                      isLastItem={index === navLinks.length - 1}
                    />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (serviceLinks.length + navLinks.length) * 0.35 + 1.2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="mt-8"
                >
                  <a href="tel:0286062842" data-testid="button-premium-menu-phone">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-white/20 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                      style={{
                        borderRadius: '12px',
                      }}
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      (02) 8606 2842
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return <MobileMenuPremium isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
}
