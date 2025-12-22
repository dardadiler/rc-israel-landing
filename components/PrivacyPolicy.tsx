import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" dir="rtl">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">מדיניות פרטיות</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="סגור"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="px-6 py-8 space-y-6 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500">עודכן לאחרונה: דצמבר 2024</p>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. כללי</h3>
              <p>
                אזרחות רומנית ישראל ("החברה", "אנחנו") מכבדת את פרטיות המשתמשים באתר שלה ("האתר").
                מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, מאחסנים ומגנים על המידע האישי שלך,
                בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, לרבות תיקון מס' 13 שנכנס לתוקף באוגוסט 2024.
              </p>
              <p className="mt-2">
                <strong>כתובתנו:</strong> תובל 22, רמת גן<br />
                <strong>טלפון:</strong> 03-7322273<br />
                <strong>דוא"ל לפניות בנושא פרטיות:</strong> yoram@rc-israel.co.il
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. המידע שאנו אוספים</h3>
              <p>אנו עשויים לאסוף את סוגי המידע הבאים:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li><strong>פרטים אישיים:</strong> שם מלא, מספר טלפון, כתובת דואר אלקטרוני, כתובת מגורים</li>
                <li><strong>מידע לצורך השירות:</strong> פרטים הנוגעים לבקשות רישום אזרחות רומנית, מסמכים נלווים, היסטוריה משפחתית</li>
                <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, זמני גישה לאתר</li>
                <li><strong>מידע מקובצי Cookies:</strong> העדפות משתמש, מידע אנליטי</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. מטרות השימוש במידע</h3>
              <p>המידע שנאסף משמש אותנו למטרות הבאות:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li>מתן שירותי ייעוץ ורישום אזרחות רומנית</li>
                <li>יצירת קשר עמך לצורך מתן השירות</li>
                <li>שליחת עדכונים רלוונטיים לתהליך שלך (בהסכמתך)</li>
                <li>שיפור השירותים והאתר שלנו</li>
                <li>עמידה בדרישות חוקיות ורגולטוריות</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. שיתוף מידע עם צדדים שלישיים</h3>
              <p>
                אנו לא מוכרים או משכירים את המידע האישי שלך לצדדים שלישיים.
                עם זאת, ייתכן ונשתף מידע במקרים הבאים:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li><strong>רשויות רומניות:</strong> העברת מסמכים ופרטים נדרשים לרשויות ברומניה לצורך ביצוע השירות</li>
                <li><strong>ספקי שירות:</strong> ספקים הפועלים מטעמנו (כגון שירותי תרגום, שליחויות) תחת התחייבות לסודיות</li>
                <li><strong>דרישה חוקית:</strong> כאשר אנו מחויבים לכך על פי דין או צו בית משפט</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. אבטחת המידע</h3>
              <p>
                אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע האישי שלך מפני גישה לא מורשית,
                שימוש לרעה, אובדן או חשיפה. אמצעים אלה כוללים הצפנת נתונים, גישה מוגבלת למורשים בלבד,
                ושימוש בפרוטוקולי אבטחה מקובלים.
              </p>
              <p className="mt-2">
                במקרה של אירוע אבטחת מידע (דליפת מידע), נפעל בהתאם להוראות החוק ונדווח לרשות להגנת הפרטיות
                ולמשתמשים הרלוונטיים כנדרש.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. שמירת המידע</h3>
              <p>
                אנו שומרים את המידע האישי שלך למשך הזמן הנדרש למטרות שלשמן נאסף,
                ובהתאם לדרישות חוקיות. מידע הנוגע לשירותים משפטיים ורישום אזרחות נשמר
                לתקופה של לפחות 7 שנים לאחר סיום השירות, בהתאם לדרישות הדין.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. זכויותיך בנוגע למידע האישי</h3>
              <p>בהתאם לחוק הגנת הפרטיות, עומדות לך הזכויות הבאות:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li><strong>זכות עיון:</strong> הזכות לעיין במידע האישי שלך המוחזק אצלנו</li>
                <li><strong>זכות תיקון:</strong> הזכות לבקש תיקון מידע שגוי או לא מעודכן</li>
                <li><strong>זכות מחיקה:</strong> הזכות לבקש מחיקת המידע שלך (בכפוף למגבלות חוקיות)</li>
                <li><strong>זכות התנגדות:</strong> הזכות להתנגד לעיבוד המידע לצורכי שיווק ישיר</li>
              </ul>
              <p className="mt-2">
                לממוש זכויותיך, ניתן לפנות אלינו בדוא"ל: yoram@rc-israel.co.il או בטלפון: 03-7322273.
                נשיב לפנייתך בהקדם האפשרי ולא יאוחר מ-30 ימים.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. שימוש בקובצי Cookies</h3>
              <p>
                האתר משתמש בקובצי Cookies לשיפור חווית הגלישה. קובצי Cookies הם קבצי טקסט קטנים
                הנשמרים במכשירך ומאפשרים לנו לזהות את העדפותיך ולנתח את השימוש באתר.
              </p>
              <p className="mt-2">
                ניתן לשלוט בהגדרות ה-Cookies דרך הדפדפן שלך. חסימת Cookies עשויה להשפיע על
                חלק מהפונקציות באתר.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9. העברת מידע לחו"ל</h3>
              <p>
                לצורך מתן השירות, מידע עשוי להיות מועבר לרומניה לרשויות המוסמכות שם.
                העברה זו נעשית בהתאם לתקנות הגנת הפרטיות (העברת מידע אל מאגרי מידע שמחוץ לגבולות המדינה)
                ורק במידה הנדרשת לביצוע השירות.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">10. שינויים במדיניות הפרטיות</h3>
              <p>
                אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר
                ובמידת הצורך נודיע עליהם ישירות למשתמשים רשומים. המשך השימוש באתר לאחר עדכון
                המדיניות מהווה הסכמה לשינויים.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">11. יצירת קשר</h3>
              <p>
                לכל שאלה, בקשה או תלונה בנוגע למדיניות פרטיות זו או לטיפול במידע האישי שלך,
                ניתן לפנות אלינו:
              </p>
              <p className="mt-2">
                <strong>אזרחות רומנית ישראל</strong><br />
                תובל 22, רמת גן<br />
                טלפון: 03-7322273<br />
                דוא"ל: yoram@rc-israel.co.il
              </p>
              <p className="mt-2">
                כמו כן, באפשרותך להגיש תלונה לרשות להגנת הפרטיות:
                <a href="https://www.gov.il/he/departments/the_privacy_protection_authority"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-primary hover:underline mr-1">
                  www.gov.il/he/departments/the_privacy_protection_authority
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
