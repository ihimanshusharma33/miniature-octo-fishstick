import React, { Suspense } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';

// Lazy load the UserSearch component for better initial load performance
const UserSearch = React.lazy(() => import('./components/UserSearch'));

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
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