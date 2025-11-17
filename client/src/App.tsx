import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import ResidentialWindowTint from "@/pages/ResidentialWindowTint";
import CommercialWindowTint from "@/pages/CommercialWindowTint";
import DecorativeFrostedFilm from "@/pages/DecorativeFrostedFilm";
import MarbleProtection from "@/pages/MarbleProtection";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/residential-window-tint" component={ResidentialWindowTint} />
        <Route path="/commercial-window-tint" component={CommercialWindowTint} />
        <Route path="/decorative-frosted-film" component={DecorativeFrostedFilm} />
        <Route path="/marble-protection" component={MarbleProtection} />
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
