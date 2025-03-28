import React, { Suspense, useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';

// Lazy load the UserSearch component for better performance
const UserSearch = React.lazy(() => import('./components/UserSearch'));

function App() {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroHeight = heroElement.clientHeight;
        setIsDarkBackground(window.scrollY > heroHeight); // Change navbar when hero is out of view
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Navbar isDarkBackground={isDarkBackground} />
      <div id="hero">
        <Hero />
      </div>
      <Services />
      <Pricing />
      <Suspense fallback={<div className="text-center py-20">Loading users...</div>}>
        <UserSearch />
      </Suspense>
      <ContactForm />
    </div>
  );
}

export default App;
