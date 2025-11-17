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
import GetQuote from "@/pages/GetQuote";
import QuoteEstimator from "@/pages/QuoteEstimator";
import TintSelector from "@/pages/TintSelector";
import Granville from "@/pages/ServiceAreas/Granville";
import Auburn from "@/pages/ServiceAreas/Auburn";
import Parramatta from "@/pages/ServiceAreas/Parramatta";
import Silverwater from "@/pages/ServiceAreas/Silverwater";
import Rosehill from "@/pages/ServiceAreas/Rosehill";
import Camellia from "@/pages/ServiceAreas/Camellia";
import Rydalmere from "@/pages/ServiceAreas/Rydalmere";
import Ermington from "@/pages/ServiceAreas/Ermington";
import Dundas from "@/pages/ServiceAreas/Dundas";
import Telopea from "@/pages/ServiceAreas/Telopea";
import Carlingford from "@/pages/ServiceAreas/Carlingford";
import NorthParramatta from "@/pages/ServiceAreas/NorthParramatta";
import HarrisPark from "@/pages/ServiceAreas/HarrisPark";
import Westmead from "@/pages/ServiceAreas/Westmead";
import Merrylands from "@/pages/ServiceAreas/Merrylands";
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
        
        {/* Interactive Tools & Quote Pages */}
        <Route path="/get-quote" component={GetQuote} />
        <Route path="/quote-estimator" component={QuoteEstimator} />
        <Route path="/tint-selector" component={TintSelector} />
        
        {/* Service Area Pages */}
        <Route path="/service-areas/granville" component={Granville} />
        <Route path="/service-areas/auburn" component={Auburn} />
        <Route path="/service-areas/parramatta" component={Parramatta} />
        <Route path="/service-areas/silverwater" component={Silverwater} />
        <Route path="/service-areas/rosehill" component={Rosehill} />
        <Route path="/service-areas/camellia" component={Camellia} />
        <Route path="/service-areas/rydalmere" component={Rydalmere} />
        <Route path="/service-areas/ermington" component={Ermington} />
        <Route path="/service-areas/dundas" component={Dundas} />
        <Route path="/service-areas/telopea" component={Telopea} />
        <Route path="/service-areas/carlingford" component={Carlingford} />
        <Route path="/service-areas/north-parramatta" component={NorthParramatta} />
        <Route path="/service-areas/harris-park" component={HarrisPark} />
        <Route path="/service-areas/westmead" component={Westmead} />
        <Route path="/service-areas/merrylands" component={Merrylands} />
        
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
