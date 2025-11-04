import React from 'react';
import { TrendingUp, DollarSign, Award, Wallet } from 'lucide-react';
import { performance2024, performance2025, monthlyAverage2024, monthlyAverage2025 } from '../data/performanceData';

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
            Des performances{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white">exceptionnelles</span>
            </span>{' '}
            basées sur une approche{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white">scientifique</span>
            </span>{' '}
            et{' '}
            <span className="relative inline-block">
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
                <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">#Croissance</span>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
                <img src="/medias/10x.png" alt="Performance pendant le Bull Run" className="relative w-full h-auto object-contain rounded-sm" />
              </div>
            </div>

            <div className="bg-navy-900/50 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-gold mr-4" />
                  <h3 className="text-white font-serif text-5xl">+500K$</h3>
                </div>
                <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">#Croissance</span>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
                <img src="/medias/eth.png" alt="Portfolio Performance" className="relative w-full h-auto object-contain rounded-sm" />
              </div>
            </div>
          </div>

          <div className="bg-navy-900/50 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-gold mr-4" />
                <h3 className="text-white font-serif text-5xl">+1M$</h3>
              </div>
              <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">#Croissance</span>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
              <img src="/medias/1M$.PNG" alt="Performance sur Ethereum" className="relative w-full h-auto object-contain rounded-sm" />
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
                  <span className="text-gold text-lg font-medium">{monthlyAverage2025} / mois</span>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">#Stabilité</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {performance2025.map((perf, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
                <img src={perf.image} alt={`Performance ${perf.month} 2025`} className="relative w-full h-auto object-contain rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy-900/50 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-gold mr-4" />
              <div className="flex items-center space-x-4">
                <h3 className="text-white font-serif text-5xl">2024</h3>
                <div className="bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                  <span className="text-gold text-lg font-medium">{monthlyAverage2024} / mois</span>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full border border-gold/20">#Stabilité</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {performance2024.map((perf, index) => (
              <div key={index} className="relative">
                <div className="absolute -inset-1 bg-gold/20 rounded-sm blur-md"></div>
                <img src={perf.image} alt={`Performance ${perf.month} 2024`} className="relative w-full h-auto object-contain rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
