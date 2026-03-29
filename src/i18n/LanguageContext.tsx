import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Language, UITranslations } from './types';
import { en } from './translations/en';
import { es } from './translations/es';

const STORAGE_KEY = 'santi-lang';
const translations: Record<Language, UITranslations> = { en, es };

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: UITranslations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'es' ? stored : 'en';
  });

  const setLang = useCallback((l: Language) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
};
