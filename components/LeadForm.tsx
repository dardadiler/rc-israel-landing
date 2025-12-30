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
const AUTO_SAVE_DELAY = 1500; // 1.5 seconds debounce

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    phone: '',
    email: '',
    timestamp: '',
    source: 'landing-page'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
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

  // Send data to Streak CRM via webhook
  const sendToStreak = useCallback(async (data: LeadData) => {
    if (!STREAK_WEBHOOK_URL) {
      console.log('Streak webhook URL not configured, skipping CRM sync');
      return;
    }

    // Only send if we have at least phone or email
    if (!data.phone && !data.email) {
      return;
    }

    const dataString = JSON.stringify(data);

    // Don't send if data hasn't changed
    if (dataString === lastSavedData.current) {
      return;
    }

    try {
      setIsSaving(true);

      const response = await fetch(STREAK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        lastSavedData.current = dataString;
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
      }
    } catch (err) {
      console.error('Error sending to Streak:', err);
    } finally {
      setIsSaving(false);
    }
  }, []);

  // Auto-save handler with debounce
  const handleAutoSave = useCallback((data: LeadData) => {
    // Clear existing timer
    if (autoSaveTimer.current) {
      clearTimeout(autoSaveTimer.current);
    }

    // Save to localStorage immediately
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    // Debounce the CRM sync
    autoSaveTimer.current = setTimeout(() => {
      sendToStreak(data);
    }, AUTO_SAVE_DELAY);
  }, [sendToStreak]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    handleAutoSave(newData);
    setError(null);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!formData.name.trim()) {
      setError('נא להזין שם');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setError('נא להזין טלפון או אימייל');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Final save to Streak
      await sendToStreak({
        ...formData,
        timestamp: new Date().toISOString()
      });

      setIsSubmitted(true);

      // Clear form and localStorage after successful submission
      localStorage.removeItem(STORAGE_KEY);

    } catch (err) {
      setError('אירעה שגיאה, נסו שוב');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autoSaveTimer.current) {
        clearTimeout(autoSaveTimer.current);
      }
    };
  }, []);

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">תודה רבה!</h3>
        <p className="text-gray-600">קיבלנו את הפרטים שלך ונחזור אליך בהקדם</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          השאירו פרטים ונחזור אליכם
        </h3>
        <p className="text-gray-500 text-sm">
          מלאו את הפרטים ונציג יצור איתכם קשר תוך 24 שעות
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            שם מלא
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="הכנס את שמך"
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-right"
            />
            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            טלפון
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="050-000-0000"
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-right"
              dir="ltr"
            />
            <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            אימייל
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-right"
              dir="ltr"
            />
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              שולח...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              שלח פרטים
            </>
          )}
        </button>

        {/* Auto-save indicator */}
        <div className="text-center text-xs text-gray-400 h-4">
          {isSaving && 'שומר...'}
          {isSaved && (
            <span className="text-green-500 flex items-center justify-center gap-1">
              <CheckCircle className="h-3 w-3" />
              נשמר
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
