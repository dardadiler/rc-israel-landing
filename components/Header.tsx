import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import logo from '../לוגו RC.jpg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'עדכון מצב אישי', href: '#personal-status' },
    { name: 'שירותים', href: '#services' },
    { name: 'איך זה עובד', href: '#how-it-works' },
    { name: 'שאלות נפוצות', href: '#faq' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo and Company Info */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <img src={logo} alt="אזרחות רומנית ישראל" className="h-14 w-auto" />
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold text-gray-900">אזרחות רומנית ישראל</span>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  תובל 22 רמת גן
                </span>
                <a href="tel:03-7322273" className="flex items-center gap-1 hover:text-primary">
                  <Phone className="h-3 w-3" />
                  03-7322273
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 space-x-reverse items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://quotes.rc-israel.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg font-bold shadow-md transition-all transform hover:scale-105"
            >
              קבל הצעת מחיר
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isOpen}
            >
              <span className="sr-only">פתח תפריט</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://quotes.rc-israel.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-primary text-white px-5 py-3 rounded-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              קבל הצעת מחיר
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;