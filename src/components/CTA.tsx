
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
          Ready to build your online presence?
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          Join millions of individuals and businesses who trust Squarespace to build their online presence.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300">
            Get Started
          </button>
          <button className="border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
            <span>Take a tour</span>
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
