import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import ResidentialWindowTinting from "@/pages/ResidentialWindowTinting";
import AutomotiveWindowTinting from "@/pages/AutomotiveWindowTinting";
import CommercialWindowTinting from "@/pages/CommercialWindowTinting";
import MobileWindowTinting from "@/pages/MobileWindowTinting";
import CeramicWindowTint from "@/pages/CeramicWindowTint";
import FrostedDecorativeWindowFilm from "@/pages/FrostedDecorativeWindowFilm";
import MarbleProtectionFilm from "@/pages/MarbleProtectionFilm";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Services Routes */}
        <Route path="/services/residential-window-tinting" component={ResidentialWindowTinting} />
        <Route path="/services/automotive-window-tinting" component={AutomotiveWindowTinting} />
        <Route path="/services/commercial-window-tinting" component={CommercialWindowTinting} />
        <Route path="/services/mobile-window-tinting" component={MobileWindowTinting} />
        
        {/* Film Types Routes */}
        <Route path="/film-types/ceramic-window-tint" component={CeramicWindowTint} />
        <Route path="/film-types/frosted-decorative-window-film" component={FrostedDecorativeWindowFilm} />
        <Route path="/film-types/marble-protection-film" component={MarbleProtectionFilm} />
        
        {/* Info Pages */}
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        
        {/* Legacy redirects - old URLs still work */}
        <Route path="/residential-window-tint" component={ResidentialWindowTinting} />
        <Route path="/commercial-window-tint" component={CommercialWindowTinting} />
        <Route path="/decorative-frosted-film" component={FrostedDecorativeWindowFilm} />
        <Route path="/marble-protection" component={MarbleProtectionFilm} />
        
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
