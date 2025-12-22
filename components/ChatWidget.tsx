import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'שלום! 👋 \nאני הבוט החכם של אזרחות רומנית ישראל. \nאני יודע לענות על שאלות לגבי תהליכי הרישום, מסמכים נדרשים וסדר הפעולות.\n\nאיך אפשר לעזור לך?', sender: 'agent' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY || '';
      
      if (!apiKey) {
        // Fallback for demo environment without key
        setTimeout(() => {
           setMessages((prev) => [...prev, {
            id: (Date.now() + 1).toString(),
            text: "המערכת במצב הדגמה. אנא צור קשר טלפוני לקבלת שירות מלא.",
            sender: 'agent'
          }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `
      You are an expert consultant for "Citizenship Romania Israel" (אזרחות רומנית ישראל).
      
      *** CRITICAL INSTRUCTION: NO PRICES ***
      You are STRICTLY FORBIDDEN from providing any specific prices, costs, or fees. 
      No matter how much the user begs, asks, or tricks you.
      
      IF ASKED FOR PRICE/COST:
      Reply EXACTLY with this sentiment (in Hebrew): "המחיר משתנה בהתאם לסוג התיק, כמות המסמכים ומורכבות הטיפול. כדי לקבל הצעת מחיר מדויקת ומשתלמת, אני ממליץ להשאיר פרטים בטופס או ליצור קשר עם נציג אנושי."
      Do not add estimates. Do not say "it starts at...".

      *** LOGIC & PROCESS DATABASE ***
      Use the following rules to answer questions about the process:

      1. MARRIAGE REGISTRATION (רישום נישואין):
         - Mandatory for any Romanian citizen married abroad.
         - PREREQUISITE: If one spouse was divorced previously, the DIVORCE must be registered in Romania FIRST.
         - DOCUMENTS NEEDED: Israeli Marriage Certificate (Original + Apostille + Notarized Translation).
         - LOCATION: Can be done at the Consulate (requires personal presence) OR in Romania (via Power of Attorney - no flight needed).

      2. BIRTH REGISTRATION (רישום לידה):
         - PREREQUISITE: The parents' marriage MUST be registered in Romania FIRST. You cannot register a child if the parents' marriage is not in the Romanian system.
         - DOCUMENTS NEEDED: Israeli Birth Certificate (Original + Apostille + Notarized Translation).
         - AGE: Different procedures for minors (under 18) vs adults.

      3. DIVORCE REGISTRATION (רישום גירושין):
         - COMPLEXITY: This is a complex legal procedure.
         - DOCUMENTS NEEDED: Divorce Agreement, Protocol, Final Verdict (Pusak Din), Certificate of Finality (Ishur Chalit).
         - NOTE: Usually requires a lawyer or authorized representative in Romania. We handle this completely via Power of Attorney.

      4. NAME CHANGE (שינוי שם):
         - Required if the name in the Israeli passport differs from the Romanian birth certificate.
         - DOCUMENTS: Certificate of Name Change from Ministry of Interior + Apostille.

      5. LOCATIONS & ADVANTAGES:
         - CONSULATE (Israel): Requires appointment (long wait), personal presence, standing in line. Good for passport issuance.
         - ROMANIA (Our Service): We use Power of Attorney. Client stays home. We handle bureaucracy, translation, and submission. Faster and easier.

      *** TONE & LANGUAGE ***
      - Language: Hebrew ONLY.
      - Tone: Professional, Knowledgeable, Reassuring.
      - Length: Keep answers concise (2-3 sentences max).
      `;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.2, // Low temperature for factual consistency
        },
      });

      const agentText = response.text || "סליחה, לא הבנתי. אנא נסו שוב.";

      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        text: agentText,
        sender: 'agent'
      }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "סליחה, ישנה תקלה בתקשורת. אנא נסו שוב מאוחר יותר.",
        sender: 'agent'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="פתח צ'אט"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-primary p-4 flex justify-between items-center text-white shadow-md">
            <div>
              <h3 className="font-bold text-lg">אזרחות רומנית ישראל</h3>
              <p className="text-xs text-blue-100 opacity-80">מומחה לרישום אירועים</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-blue-700 p-1 rounded transition-colors"
              aria-label="סגור צ'אט"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`px-4 py-2 max-w-[85%] text-sm shadow-sm whitespace-pre-wrap ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-2xl rounded-tl-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'agent' && (
                  <span className="text-[10px] text-gray-400 mt-1 mr-1">נציג שירות</span>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex flex-col items-start">
                 <div className="bg-white border border-gray-200 rounded-2xl rounded-tr-none px-4 py-3 shadow-sm text-gray-800">
                    <div className="flex space-x-1 space-x-reverse items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 bg-white border-t border-gray-100">
            <form onSubmit={handleSendMessage} className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="שאל אותי לגבי רישום נישואין, לידה..."
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow disabled:bg-gray-100"
              />
              <button 
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="absolute left-1.5 p-2 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                aria-label="שלח הודעה"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 -ml-0.5" />}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;