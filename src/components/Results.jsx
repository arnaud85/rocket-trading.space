import React from 'react';
import { TrendingUp, DollarSign, LineChart, Wallet } from 'lucide-react';

const Results = () => {
  return (
    <section id="results" className="py-20 bg-navy-950 relative">
      <div className="absolute inset-0 z-0">
        <div id="stars-sparse" className="absolute inset-0"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">MES RÉSULTATS</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-xl lg:text-2xl font-light">
            Des performances <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white">exceptionnelles</span>
            </span> basées sur une approche <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white">scientifique</span>
            </span> et <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white">rigoureuse</span>
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-12">
            <div className="bg-navy-900/50 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-gold mr-4" />
                  <h3 className="text-white font-serif text-5xl">10x</h3>
                </div>
                <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">
                  #Croissance
                </span>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
                <img
                  src="/medias/10x.png"
                  alt="Performance pendant le Bull Run"
                  className="relative w-full h-auto object-contain rounded-sm"
                />
              </div>
            </div>

            <div className="bg-navy-900/50 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-gold mr-4" />
                  <h3 className="text-white font-serif text-5xl">+500K$</h3>
                </div>
                <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">
                  #Croissance
                </span>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
                <img
                  src="/medias/eth.png"
                  alt="Portfolio Performance"
                  className="relative w-full h-auto object-contain rounded-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-navy-900/50 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <LineChart className="h-8 w-8 text-gold mr-4" />
                <h3 className="text-white font-serif text-5xl">+1M$</h3>
              </div>
              <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">
                #Croissance
              </span>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/1M$.PNG"
                alt="Performance sur Ethereum"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-navy-900/50 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-gold mr-4" />
              <div className="flex items-center space-x-4">
                <h3 className="text-white font-serif text-5xl">2025</h3>
                <div className="bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                  <span className="text-gold text-lg font-medium">+2.4% / mois</span>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">
              #Stabilité
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Jan2025.png"
                alt="Performance Janvier 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Fev2025.png"
                alt="Performance Février 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Mar2025.png"
                alt="Performance Mars 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Apr2025.png"
                alt="Performance Avril 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/May2025.png"
                alt="Performance Mai 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Jun2025.png"
                alt="Performance Juin 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Jul2025.png"
                alt="Performance Juillet 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Aug2025.png"
                alt="Performance Août 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Sep2025.png"
                alt="Performance Septembre 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Oct2025.png"
                alt="Performance Octobre 2025"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-navy-900/50 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-gold mr-4" />
              <div className="flex items-center space-x-4">
                <h3 className="text-white font-serif text-5xl">2024</h3>
                <div className="bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                  <span className="text-gold text-lg font-medium">+2.1% / mois</span>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">
              #Stabilité
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Jan2024.png"
                alt="Performance Janvier 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Fev2024.png"
                alt="Performance Février 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Mar2024.png"
                alt="Performance Mars 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Apr2024.png"
                alt="Performance Avril 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/May2024.png"
                alt="Performance Mai 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Jun2024.png"
                alt="Performance Juin 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Jul2024.png"
                alt="Performance Juillet 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Aug2024.png"
                alt="Performance Août 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Sep2024.png"
                alt="Performance Septembre 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Oct2024.png"
                alt="Performance Octobre 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Nov2024.png"
                alt="Performance Novembre 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img
                src="/medias/Dec2024.png"
                alt="Performance Décembre 2024"
                className="relative w-full h-auto object-contain rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
