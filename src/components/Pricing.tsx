
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Personal",
    price: "$16",
    period: "per month",
    description: "Best for personal websites and portfolios",
    features: [
      "Unlimited pages & content",
      "Mobile-optimized website",
      "SSL security",
      "Basic website metrics",
      "24/7 customer support",
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Business",
    price: "$26",
    period: "per month",
    description: "Best for small businesses and stores",
    features: [
      "Everything in Personal",
      "Professional email from Google",
      "Advanced website analytics",
      "Complete eCommerce features",
      "Marketing tools",
      "Premium integrations",
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Commerce",
    price: "$40",
    period: "per month",
    description: "Best for established businesses and brands",
    features: [
      "Everything in Business",
      "Advanced eCommerce features",
      "Subscriptions & recurring payments",
      "Advanced discounting tools",
      "Abandoned cart recovery",
      "Commerce APIs",
    ],
    cta: "Get Started",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you and get started building your website today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-sm p-8 border ${plan.popular ? 'border-black' : 'border-gray-200'} relative hover-scale`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-8 bg-black text-white px-4 py-1 text-sm">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="mr-2 mt-1 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-4 text-center font-medium ${plan.popular ? 'bg-black text-white' : 'bg-white border border-black text-black'} hover:opacity-90 transition-opacity`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
