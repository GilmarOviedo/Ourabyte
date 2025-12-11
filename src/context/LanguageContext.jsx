// src/context/LanguageContext.jsx
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }
  return localStorage.getItem('ourabyte_language') || 'en';
};

const getNestedValue = (dictionary, path) => {
  return path.split('.').reduce((acc, segment) => {
    if (acc === undefined || acc === null) {
      return undefined;
    }
    return acc[segment];
  }, dictionary);
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ourabyte_language', language);
    }
  }, [language]);

  const translate = useCallback(
    (key) => {
      if (!key) return '';
      const dictionary = translations[language] || {};
      const value = getNestedValue(dictionary, key);
      if (value === undefined) {
        console.warn(`Missing translation for key "${key}" in language "${language}"`);
        return key;
      }
      return value;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'en' ? 'es' : 'en')),
      t: translate
    }),
    [language, translate]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
