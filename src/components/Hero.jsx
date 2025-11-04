import React from 'react';
import { Rocket, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-950"></div>
        <div id="stars-container" className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
            PENSÉ POUR <br />
            <span className="text-gold font-bold tracking-wider scale-y-110 inline-block transform">PERFORMER</span>
            <br />
            CONSTRUIT POUR <br />
            <span className="text-gold font-bold tracking-wider scale-y-110 inline-block transform">DURER</span>
          </h1>

          <p className="mt-6 text-gray-300 text-2xl md:text-3xl max-w-2xl font-light">
            Pas de promesses. Juste des résultats.
          </p>

          <div className="mt-12">
            <a
              href="https://t.me/+your-telegram-group"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold hover:bg-gold/90 text-navy-950 font-medium px-8 py-4 rounded-sm transition-all duration-300 text-xl"
            >
              Rejoindre la communauté gratuitement
              <Rocket className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-8 w-8 text-gold opacity-80" />
      </div>
    </div>
  );
};

export default Hero;
