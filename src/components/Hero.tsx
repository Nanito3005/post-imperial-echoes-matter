
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-navy text-white min-h-[80vh] flex flex-col justify-center relative px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto z-10 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl">
          Post-Imperialism in the UK <span className="text-burgundy">&</span> Its Connection to Black Lives Matter
        </h1>
        
        <h2 className="font-sans text-xl md:text-2xl font-light max-w-3xl mb-8 leading-relaxed">
          Exploring how Britain's imperial past shapes present-day racial justice movements and societal structures
        </h2>
        
        <a 
          href="#introduction"
          className="inline-flex items-center bg-burgundy hover:bg-opacity-80 text-white py-3 px-6 rounded-md transition-all"
        >
          Begin Exploring
          <ArrowDownCircle className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
