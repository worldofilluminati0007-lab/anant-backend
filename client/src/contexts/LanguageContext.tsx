import React, { createContext, useContext, useState, useEffect } from "react";
import enTranslations from "../translations/en.json";
import hiTranslations from "../translations/hi.json";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Pre-load translations
const translationMap = {
  en: enTranslations,
  hi: hiTranslations,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && ["en", "hi"].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "hi") {
        setLanguageState("hi");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    // Get translations for current language
    const translations = translationMap[language];
    
    // Support nested keys like "common.about"
    const keys = key.split(".");
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
