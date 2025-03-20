import React from 'react';
import { 
  Laptop, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Database, 
  Cloud, 
  Smartphone,
  ChevronRight
} from 'lucide-react';
import type { ServiceCard } from '../types';

const services: ServiceCard[] = [
  {
    icon: <Laptop className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Custom web solutions built with modern technologies.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'SEO Optimization',
      'Performance Tuning'
    ]
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Cyber Security',
    description: 'Protect your digital assets with advanced security measures.',
    features: [
      'Penetration Testing',
      'Security Audits',
      'DDoS Protection',
      'Data Encryption'
    ]
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure for your growing business.',
    features: [
      'Cloud Migration',
      'Auto-scaling',
      'Backup Solutions',
      'Load Balancing'
    ]
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights.',
    features: [
      'Real-time Analytics',
      'Custom Dashboards',
      'Predictive Analysis',
      'Data Visualization'
    ]
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Digital Marketing',
    description: 'Reach your target audience effectively.',
    features: [
      'Social Media Marketing',
      'Content Strategy',
      'Email Campaigns',
      'Analytics & Reporting'
    ]
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile solutions.',
    features: [
      'iOS Development',
      'Android Development',
      'React Native Apps',
      'App Store Optimization'
    ]
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Performance',
    description: 'Lightning-fast solutions optimized for speed.',
    features: [
      'Load Time Optimization',
      'Caching Strategies',
      'Code Optimization',
      'CDN Integration'
    ]
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Consultation',
    description: 'Expert guidance for your digital transformation.',
    features: [
      'Technical Consulting',
      'Project Planning',
      'Architecture Design',
      'Team Training'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Comprehensive digital solutions to help your business thrive in the modern world
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="text-blue-600 mb-6 transform  transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;