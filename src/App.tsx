import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LiveRates from './components/LiveRates';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HowItWorks />
            <LiveRates />
            <WhyChooseUs />
            <Testimonials />
            <About/>
            <CallToAction />
          </>
        } />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
