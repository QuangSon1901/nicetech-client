
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ["All", "Business", "Online Store", "Portfolio", "Blog", "Memberships"];

const templates = [
  {
    name: "Mercer",
    category: "Business",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    name: "Colima",
    category: "Online Store",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    name: "Waverly",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    name: "Hastings",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    name: "Tepito",
    category: "Online Store",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    name: "Quincy",
    category: "Memberships",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates = activeCategory === "All" 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <section className="bg-gray-50 py-20" id="templates">
      <div className="section-container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Designer templates</h2>
            <p className="text-lg text-gray-600 max-w-lg">
              Start with an award-winning template and customize it to fit your style and needs.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-black hover:underline">
            Browse all templates <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === category 
                  ? 'bg-black text-white' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Templates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">{template.category}</span>
                <h3 className="text-xl font-medium">{template.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="btn-primary">Browse all templates</Button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
