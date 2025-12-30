import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
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
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-4">
            <img src={logo} alt="אזרחות רומנית ישראל" className="h-10 sm:h-14 w-auto" />
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-gray-900">אזרחות רומנית ישראל</span>
              <a href="tel:03-7322273" className="hidden sm:flex items-center gap-1 text-sm text-gray-600 hover:text-primary">
                03-7322273
                <Phone className="h-3 w-3" />
              </a>
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
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg animate-fade-in-up">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:03-7322273"
              className="flex items-center gap-2 px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-4 w-4" />
              03-7322273
            </a>
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