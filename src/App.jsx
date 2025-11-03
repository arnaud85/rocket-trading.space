import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Method from './components/Method';
import Results from './components/Results';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './stars.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offer />
      <Method />
      <Results />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
