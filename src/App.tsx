import { Navigate, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return <MotionConfig reducedMotion="user"><div className="App min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-primary)' }}>
    <a href="#main" className="skip-link">Vai al contenuto</a>
    <ScrollToTop /><Navbar />
    <main id="main" className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Navigate to="/contact" replace />} />
        <Route path="/reviews" element={<Navigate to="/portfolio" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Footer /><Analytics />
  </div></MotionConfig>
}
