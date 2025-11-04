import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy-900 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-950"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">CONTACT</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-xl lg:text-2xl font-light">
            Prêt à{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white">transformer</span>
            </span>{' '}
            votre approche du trading ?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://t.me/+RsGeIAug_BPSV8Hw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-800/50 p-8 rounded-sm border border-navy-700 hover:border-gold/30 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <MessageSquare className="h-16 w-16 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-serif text-2xl mb-4">Telegram</h3>
              <p className="text-gray-400 mb-6">Rejoignez notre communauté sur Telegram</p>
              <span className="text-gold font-medium">Rejoindre →</span>
            </a>

            <a
              href="mailto:contact@rockettrading.com"
              className="bg-navy-800/50 p-8 rounded-sm border border-navy-700 hover:border-gold/30 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <Mail className="h-16 w-16 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-serif text-2xl mb-4">Email</h3>
              <p className="text-gray-400 mb-6">Contactez-nous par email</p>
              <span className="text-gold font-medium">Écrire →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
