import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutPage from './pages/About';
import Services from "./components/Services";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Cookie from './pages/Cookie';
import Privacy from './pages/Privacy';
import TermsOfService from './pages/TermsOfService';

// Service Detail Pages
import UIDesign from "./pages/serviceDetails/UIDesign";
import WebDesign from "./pages/serviceDetails/WebDesign";
import MobileAppDesign from "./pages/serviceDetails/MobileAppDesign";
import BrandIdentity from "./pages/serviceDetails/BrandIdentity";
import DigitalMarketingDesign from "./pages/serviceDetails/DigitalMarketingDesign";
import Consulting from "./pages/serviceDetails/Consulting";
import AiAgentBuilding from "./pages/serviceDetails/AiAgentBuilding";


// Portfolio & Consultation
import Portfolio from "./pages/Portfolio";
import Consultation from "./pages/Consultation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
+       <Route path="/" element={<Home />} />
+     </Routes>
      <Layout>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          
          {/* Service Detail Routes */}
          <Route path="/services/ui-ux-design" element={<UIDesign />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/mobile-apps" element={<MobileAppDesign />} />
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingDesign />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/ai-agent-building" element={<AiAgentBuilding />} />

          
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
