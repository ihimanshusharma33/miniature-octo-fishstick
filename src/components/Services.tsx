import React, { useEffect, useState, useRef } from 'react';
import { Laptop, Shield, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Custom web solutions built with modern technologies.'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Cyber Security',
    description: 'Protect your digital assets with advanced security measures.'
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure for your growing business.'
  }
];

const Services: React.FC = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = entry.target.getAttribute("data-index"); // Get correct card index
          if (entry.isIntersecting && cardIndex !== null) {
            setVisibleIndexes((prev) => [...new Set([...prev, parseInt(cardIndex)])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Comprehensive digital solutions to help your business thrive in the modern world.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index} // ✅ Fix: Set correct index
              className="relative w-full h-80 sm:h-96 perspective"
            >
              <div
                className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${
                  visibleIndexes.includes(index) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Side (Title Side) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl shadow-xl border-4 border-white backface-hidden">
                  <p className="text-lg mt-2">{service.title}</p>
                </div>

                {/* Back Side (Details Side) */}
                <div className="absolute inset-0 bg-white p-6 rounded-2xl shadow-xl border-4 border-gray-200 flex flex-col justify-center text-center rotate-y-180 backface-hidden">
                  <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
