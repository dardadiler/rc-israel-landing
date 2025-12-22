import React from 'react';
import { X } from 'lucide-react';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" dir="rtl">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">תנאי שימוש</h2>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. הקדמה</h3>
              <p>
                ברוכים הבאים לאתר של אזרחות רומנית ישראל ("החברה", "אנחנו").
                תנאי שימוש אלה ("התנאים") מסדירים את השימוש באתר ובשירותים המוצעים בו.
                השימוש באתר מהווה הסכמה לתנאים אלה במלואם.
              </p>
              <p className="mt-2">
                <strong>פרטי החברה:</strong><br />
                אזרחות רומנית ישראל<br />
                תובל 22, רמת גן<br />
                טלפון: 03-7322273<br />
                דוא"ל: yoram@rc-israel.co.il
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. תיאור השירותים</h3>
              <p>
                החברה מספקת שירותי ייעוץ וסיוע בתהליכי השגת אזרחות רומנית, לרבות:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li>רישום נישואין ברומניה</li>
                <li>רישום לידות ברומניה</li>
                <li>רישום גירושין ברומניה</li>
                <li>שינוי שם ברומניה</li>
                <li>הנפקת מסמכים רומניים</li>
                <li>ליווי מול הרשויות הרומניות</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. הגבלת אחריות - חשוב לקרוא</h3>
              <p>
                החברה עושה מאמצים לספק מידע מדויק ועדכני, אולם:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li>המידע באתר מוצג "כמות שהוא" (AS-IS) ללא אחריות מכל סוג</li>
                <li>החברה אינה אחראית לטעויות, השמטות או אי-דיוקים במידע</li>
                <li>החברה אינה אחראית לשינויים בחוקים או בנהלים ברומניה או בישראל</li>
                <li>החברה אינה אחראית להחלטות של הרשויות הרומניות</li>
                <li>תוצאות עבר אינן מבטיחות תוצאות עתידיות</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. אין יחסי עורך דין-לקוח</h3>
              <p>
                השימוש באתר זה, לרבות מילוי טפסים או יצירת קשר עמנו, אינו יוצר יחסי עורך דין-לקוח.
                יחסים אלה נוצרים אך ורק לאחר חתימה על הסכם התקשרות מפורש עם החברה.
              </p>
              <p className="mt-2">
                החברה מספקת שירותי ייעוץ וליווי בירוקרטי, ואינה משרד עורכי דין.
                במקרים הדורשים ייעוץ משפטי, נפנה אותך לגורם מקצועי מתאים.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. התחייבויות המשתמש</h3>
              <p>בשימושך באתר ובשירותינו, אתה מתחייב:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li>לספק מידע מדויק, מלא ועדכני</li>
                <li>לא להעלות מסמכים מזויפים או מידע כוזב</li>
                <li>לשתף פעולה ולהמציא מסמכים נדרשים במועד</li>
                <li>לעדכן אותנו בכל שינוי בפרטיך האישיים</li>
                <li>לא להשתמש באתר למטרות בלתי חוקיות</li>
                <li>לא להפר זכויות קניין רוחני של החברה או של צדדים שלישיים</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. קניין רוחני</h3>
              <p>
                כל הזכויות באתר, לרבות עיצוב, תוכן, לוגו, סימני מסחר, טקסטים, תמונות וקוד,
                הן בבעלות הבלעדית של החברה או בשימוש מורשה על ידה.
              </p>
              <p className="mt-2">
                אין להעתיק, לשכפל, להפיץ, לפרסם או לעשות כל שימוש מסחרי בתכנים
                ללא אישור מראש ובכתב מהחברה.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. תשלומים ומחירים</h3>
              <p>
                המחירים לשירותינו נקבעים בהתאם לסוג השירות, מורכבות התיק וכמות המסמכים הנדרשים.
                הצעת מחיר מפורטת תינתן לאחר בדיקה ראשונית של התיק.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li>המחירים באתר הם להמחשה בלבד ואינם מחייבים</li>
                <li>תנאי תשלום יפורטו בהסכם ההתקשרות</li>
                <li>אגרות רשמיות ועלויות צד שלישי הן על חשבון הלקוח</li>
                <li>מדיניות ביטולים והחזרים תפורט בהסכם ההתקשרות</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. זמני טיפול</h3>
              <p>
                זמני הטיפול המצוינים באתר הם הערכות בלבד ותלויים בגורמים שאינם בשליטתנו,
                כגון זמני תגובה של הרשויות ברומניה, עומסים בקונסוליה, ושלמות המסמכים.
              </p>
              <p className="mt-2">
                החברה אינה אחראית לעיכובים שמקורם ברשויות או בנסיבות שאינן בשליטתה.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9. הגבלת אחריות</h3>
              <p>
                בכפוף להוראות כל דין, החברה לא תישא באחריות לנזק ישיר, עקיף, תוצאתי או מיוחד,
                הנובע מהשימוש באתר או בשירותים, לרבות:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li>דחיית בקשה על ידי הרשויות הרומניות</li>
                <li>עיכובים בטיפול</li>
                <li>שינויים בחוקים או בנהלים</li>
                <li>אובדן מסמכים שלא באחריות החברה</li>
                <li>נזקים הנובעים מהסתמכות על מידע באתר</li>
              </ul>
              <p className="mt-2">
                בכל מקרה, אחריות החברה תהיה מוגבלת לסכום ששולם בפועל עבור השירות הספציפי.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">10. שיפוי</h3>
              <p>
                אתה מתחייב לשפות ולפצות את החברה, מנהליה, עובדיה ונציגיה בגין כל תביעה,
                נזק, הוצאה או הפסד, לרבות שכר טרחת עורכי דין, הנובעים מהפרת תנאי שימוש אלה
                או ממעשה או מחדל שלך.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">11. קישורים לאתרים חיצוניים</h3>
              <p>
                האתר עשוי להכיל קישורים לאתרים חיצוניים. החברה אינה אחראית לתוכן,
                למדיניות הפרטיות או לפרקטיקות של אתרים אלה. השימוש באתרים חיצוניים הוא על אחריותך בלבד.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">12. זמינות האתר</h3>
              <p>
                החברה שואפת לשמור על זמינות האתר, אך אינה מתחייבת לכך.
                האתר עשוי להיות לא זמין מעת לעת לצורכי תחזוקה, עדכונים או מסיבות אחרות.
                החברה לא תישא באחריות לאי-זמינות האתר.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">13. שינויים בתנאים</h3>
              <p>
                החברה רשאית לשנות תנאים אלה בכל עת לפי שיקול דעתה הבלעדי.
                שינויים ייכנסו לתוקף עם פרסומם באתר. המשך השימוש באתר לאחר השינוי
                מהווה הסכמה לתנאים המעודכנים.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">14. דין וסמכות שיפוט</h3>
              <p>
                על תנאים אלה יחולו דיני מדינת ישראל בלבד. סמכות השיפוט הבלעדית בכל סכסוך
                הנוגע לתנאים אלה או לשימוש באתר תהיה נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">15. כללי</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 mr-4">
                <li>אם ייקבע שסעיף כלשהו בתנאים אלה אינו תקף, יתר הסעיפים יישארו בתוקף</li>
                <li>אי-אכיפה של זכות על ידי החברה לא תהווה ויתור על זכות זו</li>
                <li>תנאים אלה מהווים את ההסכם המלא בינך לבין החברה בנוגע לשימוש באתר</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">16. יצירת קשר</h3>
              <p>
                לכל שאלה בנוגע לתנאי שימוש אלה, ניתן לפנות אלינו:
              </p>
              <p className="mt-2">
                <strong>אזרחות רומנית ישראל</strong><br />
                תובל 22, רמת גן<br />
                טלפון: 03-7322273<br />
                דוא"ל: yoram@rc-israel.co.il
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
