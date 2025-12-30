import React, { useState, useEffect, useRef, useCallback } from 'react';
import { User, Phone, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';

interface LeadData {
  name: string;
  phone: string;
  email: string;
  timestamp: string;
  source: string;
}

const STREAK_WEBHOOK_URL = import.meta.env.VITE_STREAK_WEBHOOK_URL || '/api/streak-lead';
const STORAGE_KEY = 'rc_lead_data';
const AUTO_SAVE_DELAY = 1500;

const LeadBanner: React.FC = () => {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    phone: '',
    email: '',
    timestamp: '',
    source: 'landing-page-banner'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const autoSaveTimer = useRef<NodeJS.Timeout | null>(null);
  const lastSavedData = useRef<string>('');

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error('Error loading saved lead data:', e);
      }
    }
  }, []);

  // Send data to Streak CRM
  const sendToStreak = useCallback(async (data: LeadData) => {
    if (!STREAK_WEBHOOK_URL) return;
    if (!data.phone && !data.email) return;

    const dataString = JSON.stringify(data);
    if (dataString === lastSavedData.current) return;

    try {
      setIsSaving(true);
      const response = await fetch(STREAK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, timestamp: new Date().toISOString() }),
      });

      if (response.ok) {
        lastSavedData.current = dataString;
      }
    } catch (err) {
      console.error('Error sending to Streak:', err);
    } finally {
      setIsSaving(false);
    }
  }, []);

  // Auto-save with debounce
  const handleAutoSave = useCallback((data: LeadData) => {
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    autoSaveTimer.current = setTimeout(() => sendToStreak(data), AUTO_SAVE_DELAY);
  }, [sendToStreak]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    handleAutoSave(newData);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone.trim() && !formData.email.trim()) {
      setError('נא להזין טלפון או אימייל');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await sendToStreak({ ...formData, timestamp: new Date().toISOString() });
      setIsSubmitted(true);
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      setError('אירעה שגיאה');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    };
  }, []);

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-l from-primary to-blue-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-white">
            <CheckCircle className="h-6 w-6" />
            <span className="text-lg font-medium">תודה! נחזור אליך בהקדם</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-l from-primary to-blue-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">

          {/* Title */}
          <div className="text-white text-center lg:text-right flex-shrink-0">
            <h3 className="text-lg sm:text-xl font-bold">השאירו פרטים ונחזור אליכם</h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Name */}
              <div className="relative flex-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="שם"
                  className="w-full px-4 py-2.5 pr-10 rounded-lg text-gray-900 text-right focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              {/* Phone */}
              <div className="relative flex-1">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="טלפון"
                  className="w-full px-4 py-2.5 pr-10 rounded-lg text-gray-900 text-right focus:ring-2 focus:ring-white/50 focus:outline-none"
                  dir="ltr"
                />
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              {/* Email */}
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="אימייל"
                  className="w-full px-4 py-2.5 pr-10 rounded-lg text-gray-900 text-right focus:ring-2 focus:ring-white/50 focus:outline-none"
                  dir="ltr"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 disabled:opacity-50 flex-shrink-0"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span className="hidden sm:inline">שלח</span>
                  </>
                )}
              </button>
            </div>

            {/* Error & Status */}
            {error && (
              <p className="text-red-200 text-sm text-center mt-2">{error}</p>
            )}
            {isSaving && (
              <p className="text-white/60 text-xs text-center mt-1">שומר...</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default LeadBanner;
