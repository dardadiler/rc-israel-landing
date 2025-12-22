import React from 'react';
import { SERVICES } from '../constants';
import { ArrowLeft } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">השירותים שלנו</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            מגוון פתרונות בירוקרטיים לבעלי אזרחות רומנית תחת קורת גג אחת
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.id} className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-primary ring-4 ring-white">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900">
                  <a href="https://quotes.rc-israel.co.il/" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {service.tag}
                </span>
                <span className="text-primary group-hover:text-blue-700 font-medium text-sm flex items-center">
                  קבל הצעה <ArrowLeft className="mr-1 h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;