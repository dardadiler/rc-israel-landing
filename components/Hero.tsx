import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Purple Trust Banner */}
      <div className="relative z-20 bg-primary py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-8">
            <div className="flex items-center text-xs sm:text-sm text-white">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white ml-1 sm:ml-2" />
              15 שנות ניסיון
            </div>
            <div className="flex items-center text-xs sm:text-sm text-white">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white ml-1 sm:ml-2" />
              1,500+ לקוחות מרוצים
            </div>
            <div className="flex items-center text-xs sm:text-sm text-white">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white ml-1 sm:ml-2" />
              ליווי אישי מלא
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

            <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-right">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="block xl:inline">עדכון מצב אישי ברומניה,</span>{' '}
                  <span className="block text-primary xl:inline">מעולם לא היה קל יותר</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl lg:mx-0">
                  נרשום עבורך נישואין, לידות, גירושין ושינויי שם במשרדי רומניה - בלי שתצטרך לטוס, בלי בירוקרטיה ובלי כאבי ראש.
                </p>

                <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                  <a
                    href="https://quotes.rc-israel.co.il/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-primary hover:bg-blue-800 md:py-4 md:text-lg transition-all shadow-md"
                  >
                    קבל הצעת מחיר תוך דקות
                  </a>
                  <a
                    href="#services"
                    className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg transition-all"
                  >
                    למד עוד על השירותים
                  </a>
                </div>

              </div>
            </main>
          </div>
        </div>

        {/* Romanian-themed Hero Image */}
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=800&q=80"
            alt="בוקרשט, רומניה - בניין הפרלמנט"
          />
          <div className="absolute inset-0 bg-primary opacity-10 lg:hidden"></div>
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;