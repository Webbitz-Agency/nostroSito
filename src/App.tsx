import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { Analytics } from "@vercel/analytics/react";

/* Il vecchio indirizzo /lavori porta a /progetti, mantenendo filtri e progetto aperto */
function LavoriRedirect() {
  const { search } = useLocation();
  return <Navigate to={`/progetti${search}`} replace />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div
        className="App min-h-screen overflow-x-hidden"
        style={{ background: "var(--bg-primary)" }}
      >
        <a href="#main" className="skip-link">
          Vai al contenuto
        </a>
        <ScrollToTop />
        <Navbar />
        <main id="main" className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/progetti" element={<Portfolio />} />
            <Route path="/lavori" element={<LavoriRedirect />} />
            <Route
              path="/portfolio"
              element={<Navigate to="/progetti" replace />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<Navigate to="/contact" replace />} />
            <Route
              path="/reviews"
              element={<Navigate to="/progetti" replace />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </MotionConfig>
  );
}
