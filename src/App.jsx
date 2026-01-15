import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TrustBanner from './sections/TrustBanner';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import Privacy from './sections/Privacy';
import Personas from './sections/Personas';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Testimonials from './sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-off-white font-sans text-gray-900 selection:bg-brand-red/20">
      <Header />
      <Hero />
      <TrustBanner />
      <HowItWorks />
      <Personas />
      <Features />
      <Privacy />
      <FAQ />
      <CTA />
      <Testimonials />
    </div>
  );
}

export default App;
