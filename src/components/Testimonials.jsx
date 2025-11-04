import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section id="testimonials" className="py-20 bg-navy-950 relative">
      <div className="absolute inset-0 z-0">
        <div id="stars-sparse" className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">TÉMOIGNAGES</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-xl lg:text-2xl font-light">
            Ce qu'en disent ceux qui ont{' '}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[-8px] h-2 bg-gold/70 transform skew-x-12 rounded-full"></span>
              <span className="relative text-white">réussi</span>
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-navy-900/50 rounded-sm border border-navy-800 hover:border-gold/30 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-square">
                {testimonial.video ? (
                  <>
                    {playingVideo === index ? (
                      <video
                        src={testimonial.video}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => setPlayingVideo(index)}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all">
                          <Play className="h-16 w-16 text-gold" />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-white font-serif text-xl mb-2">{testimonial.name}</h3>
                <p className="text-gold text-sm mb-4">{testimonial.role}</p>
                <p className="text-gray-400 text-sm italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
