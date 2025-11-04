import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Rocket className="h-10 w-10 text-gold" />
            <div className="flex flex-col">
              <span className="text-gold font-serif text-2xl uppercase tracking-wide font-bold">Rocket Trading</span>
              <span className="text-gold/80 text-xs uppercase tracking-wider">Fast Gains. Low Risk</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300 font-light">Accueil</a>
              <a href="#offer" className="text-gray-300 hover:text-gold transition-colors duration-300 font-light">Ma Mission</a>
              <a href="#method" className="text-gray-300 hover:text-gold transition-colors duration-300 font-light">Ma Méthode</a>
              <a href="#results" className="text-gray-300 hover:text-gold transition-colors duration-300 font-light">Mes Résultats</a>
              <a href="#about" className="text-gray-300 hover:text-gold transition-colors duration-300 font-light">Qui suis-je</a>
              <a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors duration-300 font-light">Témoignages</a>
              <a href="#contact" className="bg-transparent hover:bg-gold/10 text-gold border border-gold px-5 py-2 rounded-sm transition-all duration-300">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
