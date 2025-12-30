import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadBanner from './components/LeadBanner';
import ProblemSolution from './components/ProblemSolution';
import PersonalStatusUpdate from './components/PersonalStatusUpdate';
import Services from './components/Services';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LeadBanner />
      <ProblemSolution />
      <PersonalStatusUpdate />
      <Services />
      <Comparison />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <ContactFooter />
      <a
        href="https://wa.me/972548933024"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;