import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { PricingModalProps } from '../types';

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, tier }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black shadow-xl bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold mb-2">{tier.name} Plan</h3>
        <p className="text-gray-600 mb-6">{tier.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">${tier.price}</span>
          <span className="text-gray-600">/{tier.billingPeriod}</span>
        </div>

        <div className="space-y-4 mb-8">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              {feature.toString()}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Now
          </button>
          <button
            onClick={onClose}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;