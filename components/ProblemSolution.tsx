
import React from 'react';
import { AlertCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            למה חשוב לעדכן מצב אישי ברומניה?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            אזרחות רומנית היא נכס, אך היא דורשת תחזוקה. ללא רישום שינויי הסטטוס בחייך, לא ניתן לחדש דרכון רומני.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden lg:flex">
          <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 text-red-500 ml-2" />
              הבעיה: בירוקרטיה מורכבת
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <span className="h-2 w-2 rounded-full bg-red-400 mt-2"></span>
                </span>
                <p className="mr-3">משרדי הממשלה ברומניה עובדים רק בשפה הרומנית.</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <span className="h-2 w-2 rounded-full bg-red-400 mt-2"></span>
                </span>
                <p className="mr-3">ללא עדכון סטטוס, לא ניתן לחדש דרכון או להנפיק דרכונים לילדים.</p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <span className="h-2 w-2 rounded-full bg-red-400 mt-2"></span>
                </span>
                <p className="mr-3">נדרשת היכרות מעמיקה עם החוקים והנהלים המשתנים.</p>
              </li>
            </ul>
          </div>

          <div className="p-8 lg:p-12 lg:w-1/2 bg-blue-50 border-r border-blue-100 flex flex-col justify-center">
             <h3 className="text-2xl font-bold text-primary mb-4">הפתרון שלנו</h3>
             <p className="text-lg text-gray-700 mb-6">
               אנחנו לוקחים את כל כאב הראש עלינו. הצוות שלנו בקיא בחוק הרומני, דובר את השפה, ומקושר ישירות למשרדים הרלוונטיים ברומניה.
             </p>
             <p className="font-bold text-gray-900">
               אתם מספקים את המסמכים - אנחנו דואגים לכל השאר.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;