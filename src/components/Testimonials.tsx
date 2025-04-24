
import React from 'react';

const logos = [
  { name: "Netflix", width: "w-32" },
  { name: "Airbnb", width: "w-28" },
  { name: "Spotify", width: "w-24" },
  { name: "Google", width: "w-24" },
  { name: "Amazon", width: "w-28" },
  { name: "Microsoft", width: "w-32" },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Millions of businesses trust Squarespace</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the leading brands and businesses that use Squarespace to create their online presence.
          </p>
        </div>
        
        {/* Client logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20">
          {logos.map((logo, index) => (
            <div key={index} className={`${logo.width} h-8 bg-gray-200 rounded flex items-center justify-center`}>
              <span className="text-gray-500 font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="bg-gray-50 p-8 md:p-16 rounded-xl">
          <blockquote className="text-2xl md:text-3xl font-serif mb-8 max-w-3xl">
            "Squarespace helped us build a beautiful website quickly and easily. Our online business has grown significantly since we launched."
          </blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
            <div>
              <p className="font-bold">Sarah Johnson</p>
              <p className="text-gray-600">Founder, Craft Designs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
