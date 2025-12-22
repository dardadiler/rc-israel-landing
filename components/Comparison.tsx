import React from 'react';
import { Building2, Globe } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">איפה מתבצע הטיפול?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Consulate Column */}
          <div className="bg-white rounded-2xl shadow-lg border-t-4 border-blue-600 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-6">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">קונסוליית רומניה בישראל</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-blue-600 ml-3"></span>
                  <span><strong>מתאים ל:</strong> דרכונים, תעודות לידה ראשונות</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-blue-600 ml-3"></span>
                  <span><strong>דורש:</strong> נוכחות אישית בתל אביב</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-blue-600 ml-3"></span>
                  <span><strong>יתרון:</strong> זול יותר בחלק מהמקרים</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  אנחנו מטפלים: תיאום תור, תרגום, אפוסטיל
                </span>
              </div>
            </div>
          </div>

          {/* Romania Office Column */}
          <div className="bg-white rounded-2xl shadow-lg border-t-4 border-green-600 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">משרדי רומניה (ייפוי כוח)</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-600 ml-3"></span>
                  <span><strong>מתאים ל:</strong> רישום נישואין, גירושין, אישורים</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-600 ml-3"></span>
                  <span><strong>דורש:</strong> ייפוי כוח בלבד <span className="text-green-600 font-bold">(ללא טיסה!)</span></span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-600 ml-3"></span>
                  <span><strong>יתרון:</strong> אין צורך להגיע פיזית</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  אנחנו מטפלים: הכל מא' עד ת'
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
