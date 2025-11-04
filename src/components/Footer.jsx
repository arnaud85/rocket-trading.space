import React from 'react';
import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-6">
            <Rocket className="h-8 w-8 text-gold" />
            <div className="flex flex-col">
              <span className="text-gold font-serif text-xl uppercase tracking-wide font-bold">Rocket Trading</span>
              <span className="text-gold/80 text-xs uppercase tracking-wider">Fast Gains. Low Risk</span>
            </div>
          </div>

          <div className="flex space-x-8 mb-6">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">Accueil</a>
            <a href="#offer" className="text-gray-400 hover:text-gold transition-colors">Ma Mission</a>
            <a href="#method" className="text-gray-400 hover:text-gold transition-colors">Ma Méthode</a>
            <a href="#results" className="text-gray-400 hover:text-gold transition-colors">Mes Résultats</a>
            <a href="#about" className="text-gray-400 hover:text-gold transition-colors">Qui suis-je</a>
            <a href="#testimonials" className="text-gray-400 hover:text-gold transition-colors">Témoignages</a>
          </div>

          <div className="text-gray-500 text-sm">
            © 2025 Rocket Trading. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
