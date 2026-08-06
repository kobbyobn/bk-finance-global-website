import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import CookieConsentBanner from "./components/CookieConsentBanner";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Booking from "./pages/Booking";
import Testimonials from "./pages/Testimonials";
import Partnerships from "./pages/Partnerships";
import Academy from "./pages/Academy";
import Masterclasses from "./pages/Masterclasses";
import News from "./pages/News";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/booking" component={Booking} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/partnerships" component={Partnerships} />
      <Route path="/academy" component={Academy} />
      <Route path="/masterclasses" component={Masterclasses} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/terms-of-service" component={Terms} />
      <Route path="/cookie-policy" component={Cookies} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CookieConsentProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <CookieConsentBanner />
          </TooltipProvider>
        </CookieConsentProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
