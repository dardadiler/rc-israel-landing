import { 
  HeartHandshake, 
  Baby, 
  FileX, 
  CreditCard, 
  Flame, 
  FileCheck,
  FileSignature,
  Coins,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { ServiceItem, FaqItem, PricingItem, StepItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'marriage',
    title: 'רישום נישואין',
    description: 'רישום נישואין שנערכו בישראל או בחו"ל במשרדי רומניה',
    icon: HeartHandshake,
    tag: 'ישראל / רומניה'
  },
  {
    id: 'birth',
    title: 'רישום לידה',
    description: 'רישום לידת ילדים להורים בעלי אזרחות רומנית',
    icon: Baby,
    tag: 'ישראל / רומניה'
  },
  {
    id: 'divorce',
    title: 'רישום גירושין',
    description: 'רישום גירושין שנערכו בישראל במשרדי רומניה',
    icon: FileX,
    tag: 'רומניה בלבד'
  },
  {
    id: 'namechange',
    title: 'שינוי שם',
    description: 'עדכון שינוי שם משפחה או שם פרטי ברשומות הרומניות',
    icon: CreditCard,
    tag: 'רומניה בלבד'
  },
  {
    id: 'death',
    title: 'רישום פטירה',
    description: 'רישום פטירה של אזרח רומני במשרדי רומניה',
    icon: Flame,
    tag: 'רומניה בלבד'
  },
  {
    id: 'certificates',
    title: 'הנפקת תעודות',
    description: 'הנפקת תעודות, אישורים ודרכונים רומניים',
    icon: FileCheck,
    tag: 'ישראל / רומניה'
  }
];

export const STEPS: StepItem[] = [
  {
    id: 1,
    title: 'ממלאים טופס',
    description: 'ענו על מספר שאלות פשוטות על האירועים שצריך לרשום',
    icon: FileSignature
  },
  {
    id: 2,
    title: 'מקבלים הצעת מחיר',
    description: 'תוך דקות תקבלו הצעת מחיר מפורטת ומותאמת אישית',
    icon: Coins
  },
  {
    id: 3,
    title: 'מעבירים מסמכים',
    description: 'שולחים לנו את המסמכים הנדרשים - אנחנו מטפלים בכל השאר',
    icon: FileText
  },
  {
    id: 4,
    title: 'מקבלים תעודות',
    description: 'התעודות הרשומות מגיעות אליכם כמעט עד הבית',
    icon: CheckCircle2
  }
];

export const PRICING: PricingItem[] = [
  { id: '1', service: 'רישום נישואין', price: '₪1,200', includes: 'טיפול מלא + תרגום' },
  { id: '2', service: 'רישום לידה', price: '₪1,200', includes: 'טיפול מלא + תרגום' },
  { id: '3', service: 'רישום גירושין', price: '₪2,200', includes: 'טיפול ברומניה' },
  { id: '4', service: 'שינוי שם', price: '₪1,500', includes: 'טיפול ברומניה' },
];

export const FAQS: FaqItem[] = [
  {
    id: 'q1',
    question: 'כמה זמן לוקח לרשום נישואין ברומניה?',
    answer: 'התהליך אורך בין 4-8 שבועות, תלוי בעומס במשרדים ובסוג המסמך המבוקש.'
  },
  {
    id: 'q2',
    question: 'האם אני צריך להגיע לרומניה בעצמי?',
    answer: 'ברוב המקרים לא! אנחנו עובדים עם ייפוי כוח ומטפלים בכל התהליך עבורכם. נוכחות אישית נדרשת רק בקונסוליה בישראל לשירותים מסוימים.'
  },
  {
    id: 'q3',
    question: 'מה ההבדל בין אישור לתעודה?',
    answer: 'אישור (Certificat) הוא מסמך המאשר עובדה. תעודה (Extras) היא העתק רשמי של הרישום. לרוב המטרות מספיק אישור, שהוא גם זול יותר.'
  },
  {
    id: 'q4',
    question: 'האם אפשר לרשום אירועים שקרו לפני שקיבלתי אזרחות?',
    answer: 'כן! ניתן לרשום אירועים שקרו לפני ואחרי קבלת האזרחות. התהליך מעט שונה אבל אנחנו מטפלים בשניהם.'
  },
  {
    id: 'q5',
    question: 'מה המסמכים שאני צריך להכין?',
    answer: 'תלוי בסוג האירוע. באופן כללי: תעודת הזהות הרומנית, תעודת האירוע הישראלית (נישואין/לידה/גירושין), ותרגום נוטריוני. אנחנו נפרט בדיוק מה נדרש אחרי מילוי הטופס.'
  },
  {
    id: 'q6',
    question: 'כמה עולה תרגום ואפוסטיל?',
    answer: 'תרגום נוטריוני: ₪250 למסמך. אפוסטיל: ₪180 למסמך. העלויות כלולות בהצעת המחיר שתקבלו.'
  },
  {
    id: 'q7',
    question: 'מה קורה אם יש טעות במסמכים הקיימים?',
    answer: 'אנחנו בודקים את כל המסמכים לפני הגשה ומתקנים טעויות במידת הצורך. זה חלק מהשירות.'
  },
  {
    id: 'q8',
    question: 'האם אתם מטפלים גם בהנפקת דרכון רומני?',
    answer: 'כן! אנחנו מלווים את כל התהליך מול הקונסוליה בתל אביב, כולל תיאום תורים והכנת המסמכים.'
  }
];