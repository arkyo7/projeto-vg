import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LANGUAGES, translations, type Language, type Translation } from "@/data/translations";

const STORAGE_KEY = "vieg-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "fr") setLanguageState(saved);
  }, []);

  useEffect(() => {
    const entry = LANGUAGES.find((l) => l.code === language);
    if (entry) document.documentElement.lang = entry.htmlLang;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage indisponível */
    }
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
