import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">איך זה עובד?</h2>
          <p className="mt-4 text-xl text-gray-500">תהליך פשוט, שקוף ומהיר ב-4 שלבים</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 right-0 left-0 h-0.5 bg-gray-200" style={{ right: '10%', left: '10%' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white border-4 border-primary z-10 mb-6 shadow-sm">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
                <div className="md:hidden mt-8 mb-4 h-8 w-0.5 bg-gray-200 last:hidden"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://quotes.rc-israel.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-secondary hover:bg-green-800 md:py-4 md:text-lg shadow-lg transition-all"
            >
              בואו נתחיל
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;