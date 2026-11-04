import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ModalProvider } from "./components/modals/ModalContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import Mundayne from "./pages/Mundayne";
import JonzeeWorld from "./pages/JonzeeWorld";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

// Addresses from the previous site, sent to their closest page on the new one.
const redirects = {
  "/portfolio": "/work",
  "/our-services": "/services",
  "/consultation": "/contact",
  "/cookie": "/cookie-policy",
  "/privacy": "/privacy-policy",
  "/services/web-design": "/services/websites",
  "/services/ui-ux-design": "/services/brand-design",
  "/services/brand-identity": "/services/brand-design",
  "/services/mobile-apps": "/services/websites",
  "/services/digital-marketing": "/services/social-media",
  "/services/consulting": "/services",
  "/services/ai-agent-building": "/services/ai-automation",
};

export default function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/mundayne" element={<Mundayne />} />
          <Route path="/jonzee-world" element={<JonzeeWorld />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<Legal doc="privacy" />} />
          <Route path="/terms-of-service" element={<Legal doc="terms" />} />
          <Route path="/cookie-policy" element={<Legal doc="cookies" />} />
          {Object.entries(redirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ModalProvider>
  );
}
