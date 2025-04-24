
import React from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Website Builder",
    description: "Create a beautiful website with our award-winning templates.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#"
  },
  {
    title: "Online Stores",
    description: "Sell products and services with powerful ecommerce tools.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#"
  },
  {
    title: "Marketing Tools",
    description: "Grow your audience with integrated email campaigns and SEO tools.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#"
  }
];

const Features = () => {
  return (
    <section className="bg-white" id="products">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">All the tools you need</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Everything to build your online presence, manage your business, and grow your audience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="hover-scale group">
              <div className="h-64 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href={feature.link} className="inline-flex items-center font-medium text-black hover:underline">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
