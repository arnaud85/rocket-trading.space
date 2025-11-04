import React from 'react';
import { Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy-900 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-950"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">QUI SUIS-JE ?</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-800/50 p-12 rounded-sm border border-navy-700">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 rounded-full bg-navy-700 flex items-center justify-center border-2 border-gold/30">
                <img src="/medias/Arnaud_1.jpg" alt="Arnaud" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>

            <h3 className="text-white font-serif text-3xl mb-6 text-center">Arnaud</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
              Trader professionnel et expert en analyse quantitative, je me spécialise dans les stratégies à faible risque et haute performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-navy-900/50 p-6 rounded-sm border border-navy-700 text-center">
                <Award className="h-8 w-8 text-gold mx-auto mb-4" />
                <div className="text-white font-serif text-2xl mb-2">10+</div>
                <div className="text-gray-400">Années d'expérience</div>
              </div>
              <div className="bg-navy-900/50 p-6 rounded-sm border border-navy-700 text-center">
                <Award className="h-8 w-8 text-gold mx-auto mb-4" />
                <div className="text-white font-serif text-2xl mb-2">1000+</div>
                <div className="text-gray-400">Trades réussis</div>
              </div>
              <div className="bg-navy-900/50 p-6 rounded-sm border border-navy-700 text-center">
                <Award className="h-8 w-8 text-gold mx-auto mb-4" />
                <div className="text-white font-serif text-2xl mb-2">100+</div>
                <div className="text-gray-400">Élèves formés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
