import React, { useState } from 'react';
import { Phone, Mail, Clock, Globe, Facebook, Linkedin, Instagram, MapPin } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const ContactFooter: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden md:flex">
          
          {/* Left: Info */}
          <div className="p-8 md:w-1/2 bg-blue-900">
            <h2 className="text-3xl font-bold mb-6 text-white">מוכנים להתחיל?</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-300 ml-4" />
                <div>
                  <p className="text-sm text-blue-300">טלפון</p>
                  <p className="font-semibold">03-7322273</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-300 ml-4" />
                <div>
                  <p className="text-sm text-blue-300">כתובת</p>
                  <p className="font-semibold">תובל 22, רמת גן</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-300 ml-4" />
                <div>
                  <p className="text-sm text-blue-300">אימייל</p>
                  <p className="font-semibold">yoram@rc-israel.co.il</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-300 ml-4" />
                <div>
                  <p className="text-sm text-blue-300">שעות פעילות</p>
                  <p className="font-semibold">א'-ה' 09:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA / Form Link */}
          <div id="quote" className="p-8 md:w-1/2 bg-white text-gray-900 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-4">קבלו הצעת מחיר מותאמת אישית</h3>
            <p className="text-gray-600 mb-8">
              מלאו את פרטיכם ונתחיל בתהליך הרישום במהירות וביעילות.
            </p>
            <a 
              href="https://quotes.rc-israel.co.il/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-secondary hover:bg-green-800 text-white font-bold rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105"
            >
              לטופס הצעת המחיר
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 space-x-reverse md:order-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <div className="flex items-center justify-center md:justify-start mb-4">
               <Globe className="h-6 w-6 text-blue-500 ml-2" />
               <span className="text-xl font-bold text-white">אזרחות רומנית ישראל</span>
            </div>
            <p className="text-center md:text-right text-base text-gray-400">
              &copy; 2024 כל הזכויות שמורות. נבנה עבור אזרחים רומנים.
            </p>
            <div className="mt-2 text-center md:text-right text-sm text-gray-500 space-x-4 space-x-reverse">
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white">מדיניות פרטיות</button>
              <span>|</span>
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-white">תנאי שימוש</button>
            </div>
          </div>
        </div>
      </div>

      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsOfService isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
};

export default ContactFooter;