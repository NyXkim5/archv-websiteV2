import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Investors from './pages/Investors';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/:category" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
