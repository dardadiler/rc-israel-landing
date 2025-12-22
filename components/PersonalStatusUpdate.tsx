import React from 'react';
import { FileText, CheckCircle, XCircle, Plane, Clock, Users, AlertTriangle, ArrowLeft } from 'lucide-react';

const PersonalStatusUpdate: React.FC = () => {
  return (
    <section id="personal-status" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            מדריך מקיף 2025
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            עדכון מצב אישי ברומניה
          </h2>
          <p className="text-xl text-gray-600">
            המדריך המלא לאזרחים רומנים בישראל
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="h-6 w-6 text-primary ml-2" />
            מהו עדכון מצב אישי ולמה הוא חיוני?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            כאזרחים רומנים, בין אם קיבלתם את האזרחות לאחרונה ובין אם היא עברה במשפחתכם מדורי דורות,
            קיימת חובה אחת שלא ניתן להתעלם ממנה: <strong>עדכון המצב האישי שלכם ברשויות הרומניות.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            כל שינוי משמעותי בחייכם – נישואין, גירושין, לידת ילד, שינוי שם, או פטירה של בן משפחה –
            חייב להירשם במערכת הרישום האזרחי הרומנית.
          </p>
          <div className="bg-amber-50 border-r-4 border-amber-400 p-4 rounded-lg">
            <p className="text-amber-800">
              <strong>למה זה חשוב?</strong> המסמכים הרומניים שלכם (דרכון, תעודת לידה, תעודת נישואין)
              משקפים את המצב הרשום במרשם הרומני. ללא עדכון, נוצר פער שעלול לגרום לבעיות בעת
              חידוש דרכון, העברת אזרחות לילדים, או כל פנייה עתידית לרשויות.
            </p>
          </div>
        </div>

        {/* Current Situation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 text-orange-500 ml-2" />
            המצב הנוכחי: אתגרים בירוקרטיים
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            נכון לשנת 2025, מתמודדים אזרחים רומנים בישראל עם מציאות מורכבת במיוחד.
            הקונסוליות הרומניות בישראל סובלות ממחסור חמור בכוח אדם, מה שהוביל למצב שבו
            תורים לביצוע רישומים אזרחיים אינם זמינים כלל, או שזמני ההמתנה נמשכים חודשים ארוכים.
          </p>
          <p className="text-gray-700 leading-relaxed">
            המצב מחמיר כאשר מדובר בפעולות שמלכתחילה לא ניתן לבצע בישראל, ומחייבות נוכחות פיזית ברומניה.
          </p>
        </div>

        {/* Services Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Services in Israel */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
              ניתן לביצוע בקונסוליה בישראל
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full p-1 ml-2 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-gray-900">רישום לידה</strong>
                  <p className="text-sm text-gray-600">הנפקת תעודת לידה רומנית לילד שנולד בישראל</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full p-1 ml-2 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-gray-900">רישום מספר זהות (CNP)</strong>
                  <p className="text-sm text-gray-600">הנפקת מספר הזהות האישי הרומני</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full p-1 ml-2 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-gray-900">רישום נישואין</strong>
                  <p className="text-sm text-gray-600">עדכון מצב משפחתי לאחר חתונה</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services only in Romania */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Plane className="h-5 w-5 text-primary ml-2" />
              ניתן לביצוע רק ברומניה
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-blue-100 text-primary rounded-full p-1 ml-2 mt-0.5">
                  <Plane className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-gray-900">רישום גירושין</strong>
                  <p className="text-sm text-gray-600">עדכון המרשם לאחר גירושין</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-primary rounded-full p-1 ml-2 mt-0.5">
                  <Plane className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-gray-900">שינוי שם</strong>
                  <p className="text-sm text-gray-600">רישום שינוי שם פרטי או משפחה</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-primary rounded-full p-1 ml-2 mt-0.5">
                  <Plane className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-gray-900">רישום פטירה</strong>
                  <p className="text-sm text-gray-600">עדכון פטירת בן משפחה במערכת</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Why is it complicated */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">למה התהליך כל כך מסובך?</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0">1</span>
              <div>
                <strong className="text-gray-900">כל מקרה ייחודי</strong>
                <p className="text-gray-600">הפרטים של יליד רומניה המקורי, הקשרים המשפחתיים בין הדורות, והשינויים שחלו לאורך השנים – כל אלה משפיעים על דרך הפעולה. לעיתים, אפילו בין אחים באותה משפחה נדרשות פעולות שונות.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0">2</span>
              <div>
                <strong className="text-gray-900">התאמה בין מסמכים</strong>
                <p className="text-gray-600">שמות שתורגמו, תאריכים בפורמטים שונים, ושינויים שחלו לאורך השנים בכמה מדינות – יוצרים סבך בירוקרטי שדורש טיפול מקצועי.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0">3</span>
              <div>
                <strong className="text-gray-900">המערכת הרומנית מורכבת</strong>
                <p className="text-gray-600">רישומים מתבצעים ב-ANC וברשויות מקומיות ברומניה, כאשר כל גוף פועל בקצב משלו ועם דרישות משלו.</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <h3 className="text-2xl font-bold mb-4">הפתרון: ביצוע התהליך ברומניה</h3>
          <p className="mb-6 opacity-90">
            בהינתן המצב הנוכחי בישראל, ההמלצה המקצועית שלנו היא לשקול ביצוע הרישומים ישירות ברומניה,
            במיוחד כאשר מדובר בפעולות שממילא לא ניתנות לביצוע בקונסוליה.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Advantages */}
            <div className="bg-white/10 rounded-xl p-5">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 ml-2" />
                היתרונות
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Clock className="h-4 w-4 ml-2 opacity-80" />
                  <span>מהירות – תור בטווח של חודש עד חודשיים</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 ml-2 opacity-80" />
                  <span>ליווי מקצועי בשטח</span>
                </li>
                <li className="flex items-center">
                  <ArrowLeft className="h-4 w-4 ml-2 opacity-80" />
                  <span>התקדמות ממשית ואקטיבית</span>
                </li>
              </ul>
            </div>

            {/* Disadvantages */}
            <div className="bg-white/10 rounded-xl p-5">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <XCircle className="h-5 w-5 ml-2" />
                החסרונות
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Plane className="h-4 w-4 ml-2 opacity-80" />
                  <span>נסיעה לרומניה (לעיתים יותר מאחת)</span>
                </li>
                <li className="flex items-center">
                  <span className="ml-2 opacity-80">₪</span>
                  <span>עלויות נסיעה – טיסות, לינה</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 ml-2 opacity-80" />
                  <span>זמן – התפנות מהשגרה</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Ground Solution */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">פתרון ביניים</h3>
          <p className="text-gray-700 leading-relaxed">
            במקרים רבים ניתן לשלב בין השניים: לבצע חלק מהפעולות ברומניה כדי להתקדם,
            ולהשלים את היתר בישראל כאשר השירות הקונסולרי יחזור לפעול במלואו.
            גישה זו מאפשרת התקדמות משמעותית מבלי להמתין לזמן בלתי ידוע.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">מה הצעד הבא שלכם?</h3>
          <p className="mb-6 opacity-90">
            כל תיק הוא ייחודי ודורש בחינה פרטנית. לפני שמקבלים החלטה, חשוב להבין את המצב הספציפי שלכם.
          </p>
          <p className="mb-8 text-sm opacity-75">
            אנחנו באזרחות רומנית ישראל מלווים משפחות בתהליכי אזרחות ורישום כבר למעלה מעשור,
            עם צוותים מקצועיים בישראל וברומניה.
          </p>
          <a
            href="https://quotes.rc-israel.co.il/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-secondary hover:bg-green-600 text-white font-bold rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105"
          >
            צרו קשר לבחינת המקרה שלכם
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalStatusUpdate;
