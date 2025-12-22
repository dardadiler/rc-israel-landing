import React from 'react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">תמחור שקוף</h2>
          <p className="mt-4 text-gray-500">המחירים שלנו הוגנים, ידועים מראש וללא הפתעות</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    שירות
                  </th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    מחיר התחלתי
                  </th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    כולל
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {PRICING.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary font-bold">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.includes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-sm text-gray-500">
            * המחיר הסופי תלוי בסוג המסמך, מספר העמודים לתרגום ומיקום הטיפול. מלאו טופס לקבלת הצעה מדויקת.
          </div>
        </div>

        <div className="mt-8 text-center">
            <a href="https://quotes.rc-israel.co.il/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-800 font-semibold underline">
                קבל הצעת מחיר מדויקת עבור המקרה שלך &larr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;