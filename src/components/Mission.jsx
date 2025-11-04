import React from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

const Mission = () => {
  const missions = [
    {
      icon: <TrendingUp className="h-12 w-12 text-gold" />,
      title: (
        <>
          Votre potentiel de <span className="text-gold">CROISSANCE</span>
        </>
      ),
      description: (
        <>
          Capitalisez sur les meilleures <span className="text-white">opportunités</span> en étant toujours placés sur les bons <span className="text-gold">narratifs</span>, les <span className="text-gold">sociétés</span> les plus innovantes et les <span className="text-gold">cryptos</span> les plus explosives
        </>
      ),
      objective: (
        <>
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
            <span className="relative text-white font-medium text-4xl">
              <span className="text-2xl">x</span>10
            </span>
          </span>{' '}
          <span className="text-2xl">sur votre capital</span>
        </>
      )
    },
    {
      icon: <DollarSign className="h-12 w-12 text-gold" />,
      title: (
        <>
          Votre <span className="text-gold">STABILITÉ</span> financière
        </>
      ),
      description: (
        <>
          Générez des <span className="text-gold">revenus mensuels</span> grace à mes stratégies de positionnement. Vous pouvez vous en servir comme <span className="text-white">cash-flow</span> pour vos dépenses personnelles ou bien les ré-investir à l'infini.
        </>
      ),
      objective: (
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
          <span className="relative text-white font-medium text-4xl">2% / mois</span>
        </span>
      )
    }
  ];

  return (
    <section id="offer" className="py-20 bg-navy-950 relative">
      <div className="absolute inset-0 z-0">
        <div id="stars-sparse" className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">MA MISSION</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-xl lg:text-2xl font-light leading-[3] relative">
            Je vous montre comment créer un{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white font-medium">Business rentable</span>
            </span>{' '}
            sur les marchés financiers et atteindre{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform -skew-x-12 rounded-full"></span>
              <span className="relative text-white font-medium">l'indépendance financière</span>
            </span>
            <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent top-16 -left-8 transform -rotate-45"></div>
            <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent top-16 -right-8 transform rotate-45"></div>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          {missions.map((mission, index) => (
            <div key={index} className="bg-navy-900 p-8 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300 group flex flex-col items-center min-h-[400px]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {mission.icon}
              </div>
              <h3 className="text-white font-serif text-2xl mb-6 text-center">{mission.title}</h3>
              <p className="text-gray-400 text-lg text-left mb-8 leading-normal">{mission.description}</p>
              <div className="mt-auto w-full">
                <div className="bg-navy-800 rounded-sm p-6">
                  <div className="text-gold font-medium mb-2 uppercase tracking-wider text-sm">Objectif</div>
                  <div className="text-3xl font-serif text-white">{mission.objective}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
