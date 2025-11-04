import React from 'react';
import { TrendingUp, BarChart3, DollarSign, Rocket } from 'lucide-react';

const Method = () => {
  const methods = [
    {
      icon: <TrendingUp className="h-12 w-12 text-gold" />,
      title: "Analyse Technique",
      description: "J'ai une vision globale du marché : le contexte actuel, sa tendance, ainsi que les niveaux importants à respecter. Cela me permet de toujours être en adéquation avec celui-ci, et de rentrer en position avec le meilleur timing."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-gold" />,
      title: "Modèles Quantitatifs",
      description: "J'utilise des outils de Traders professionnels, basés sur des fondements mathématiques de niveaux académiques, afin de maximiser mes probabilités de succès."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-gold" />,
      title: "Gestion du Risque",
      description: "J'opère un management du risque chirurgicale, ce qui me permet d'être en permanence en contrôle de la volatilité de mon portefeuille. Je m'assure d'avoir un avantage statistique sur le marché pour être irrémédiablement rentable."
    }
  ];

  return (
    <section id="method" className="py-20 bg-navy-900 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-950"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">MA MÉTHODE</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-xl lg:text-2xl font-light leading-relaxed">
            Ma méthode combine{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white font-medium">rigueur scientifique</span>
            </span>{' '}
            et{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white font-medium">compréhension approfondie</span>
            </span>{' '}
            des marchés financiers, pour des résultats exceptionnels et{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white font-medium">reproductibles dans le temps</span>
            </span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {methods.map((method, index) => (
            <div key={index} className="bg-navy-800/30 border border-navy-700 p-8 rounded-sm min-h-[400px] flex flex-col items-center hover:border-gold/30 transition-all duration-300">
              <div className="mb-8 inline-flex items-center justify-center">
                {method.icon}
              </div>
              <h3 className="text-white font-serif text-2xl mb-6 text-center">{method.title}</h3>
              <p className="text-gray-400 text-center text-lg leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-navy-700/50 flex items-center justify-center border-2 border-gold/30 mb-8">
            <Rocket className="h-12 w-12 text-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-12 text-center">
            La{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white font-medium">Science</span>
            </span>{' '}
            au service du{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white font-medium">Trading</span>
            </span>
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white text-xl leading-relaxed text-center italic">
              "Sur un nombre de trades suffisant, je sais que mon avantage statistique sur le marché me rend rentable et élimine l'aléatoire inhérent aux marchés financiers"
            </p>
          </div>

          <a
            href="https://t.me/+RsGeIAug_BPSV8Hw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold hover:bg-gold/90 text-navy-950 font-medium px-8 py-4 rounded-sm transition-all duration-300 text-xl"
          >
            <Rocket className="mr-3 h-6 w-6" />
            Rejoindre Rocket Trading sur Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Method;
