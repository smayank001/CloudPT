import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import AcuteChronic from "./pages/services/AcuteChronic";
import DryNeedling from "./pages/services/DryNeedling";
import BalanceVestibular from "./pages/services/BalanceVestibular";
import HeadacheNeck from "./pages/services/HeadacheNeck";
import OperativeRehab from "./pages/services/OperativeRehab";
import Geriatric from "./pages/services/Geriatric";
import SportsMedicine from "./pages/services/SportsMedicine";
import TMJTherapy from "./pages/services/TMJTherapy";
import ConcussionCare from "./pages/services/ConcussionCare";
import BackPain from "./pages/services/BackPain";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services/acute-chronic" element={<AcuteChronic />} />
          <Route path="/services/dry-needling" element={<DryNeedling />} />
          <Route
            path="/services/balance-vestibular"
            element={<BalanceVestibular />}
          />
          <Route path="/services/headache-neck" element={<HeadacheNeck />} />
          <Route
            path="/services/operative-rehab"
            element={<OperativeRehab />}
          />
          <Route path="/services/geriatric" element={<Geriatric />} />
          <Route
            path="/services/sports-medicine"
            element={<SportsMedicine />}
          />
          <Route path="/services/tmj-therapy" element={<TMJTherapy />} />
          <Route
            path="/services/concussion-care"
            element={<ConcussionCare />}
          />
          <Route path="/services/back-pain" element={<BackPain />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
