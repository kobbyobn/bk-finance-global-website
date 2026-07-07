import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Testimonials from "./pages/Testimonials";
import Reviews from "./pages/Reviews";
import Partnerships from "./pages/Partnerships";
import Academy from "./pages/Academy";
import Masterclasses from "./pages/Masterclasses";
import Contact from "./pages/Contact";
import About from "./pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/booking" component={Booking} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/partnerships" component={Partnerships} />
      <Route path="/academy" component={Academy} />
      <Route path="/masterclasses" component={Masterclasses} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
