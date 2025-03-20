import React from 'react';
import { Check, X } from 'lucide-react';
import type { PricingTier } from '../types';

interface Feature {
  name: string;
  available: boolean;
}

const pricingTiers: Array<PricingTier & { features: Feature[] }> = [
  {
    name: 'Starter',
    price: 29,
    billingPeriod: 'monthly',
    description: 'Perfect for small businesses and startups looking to establish their digital presence.',
    features: [
      { name: 'Up to 5 projects', available: true },
      { name: 'Email support', available: true },
      { name: '10GB storage', available: true },
      { name: 'Custom domain', available: false },
      { name: 'Team collaboration', available: false },
      { name: 'Advanced security', available: false },
      { name: 'Real-time backups', available: false },
      { name: 'Dedicated account manager', available: false },
      { name: 'On-premise deployment', available: false },
    ],
  },
  {
    name: 'Professional',
    price: 99,
    billingPeriod: 'monthly',
    description: 'Ideal for growing businesses that need advanced features and priority support.',
    features: [
      { name: 'Up to 25 projects', available: true },
      { name: 'Email support', available: true },
      { name: '50GB storage', available: true },
      { name: 'Custom domain', available: true },
      { name: 'Team collaboration', available: true },
      { name: 'Advanced security', available: true },
      { name: 'Real-time backups', available: false },
      { name: 'Dedicated account manager', available: false },
      { name: 'On-premise deployment', available: false },
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 299,
    billingPeriod: 'monthly',
    description: 'For large organizations requiring custom solutions and maximum scalability.',
    features: [
    
      { name: 'Up to 100 projects', available: true },
      { name: 'Email support', available: true },
      { name: '100GB storage', available: true },
      { name: 'Custom domain', available: true },
      { name: 'Team collaboration', available: true },
      { name: 'Advanced security', available: true },
      { name: 'Real-time backups', available: true },
      { name: 'Dedicated account manager', available: true },
      { name: 'On-premise deployment', available: true },
    ]
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => {
            return (
              <div
                key={index}
                className={` cursor-pointer border-2 hover:shadow-lg  hover:border-blue-600 hover:scale-105 transform transition-transform p-8 rounded-xl`}
               
               >
                <h3 className="text-2xl font-bold mb-4 ">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-sm">/{tier.billingPeriod}</span>
                </div>
                <p className={`mb-8 text-gray-600'}`}>
                  {tier.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature: Feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {feature.available ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-600" />}
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;  