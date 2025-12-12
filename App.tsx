import React from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkshopContent } from './components/WorkshopContent';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-right" dir="rtl">
      <Background />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <WorkshopContent />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;