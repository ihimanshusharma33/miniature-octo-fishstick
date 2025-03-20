export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface PricingTier {
  name: string;
  price: number;
  features: object[];
  isPopular?: boolean;
  description: string;
  billingPeriod: 'monthly' | 'yearly';
}

export interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: PricingTier;
}