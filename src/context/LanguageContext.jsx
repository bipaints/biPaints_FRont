/**
 * LanguageContext.jsx
 *
 * Global English / Hindi language state for the whole website.
 *
 *   const { language, setLanguage, t } = useLanguage();
 *   <h1>{t("home.impact.heading")}</h1>
 *
 * - Translations live in src/locales/en.js and src/locales/hi.js
 * - Keys are dot paths; a key may resolve to a string, array or object
 * - Missing Hindi keys fall back to English (and warn in development)
 * - The selected language is persisted in localStorage and mirrored on
 *   <html lang="..."> (used by index.css for Hindi typography)
 */

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "../locales/en";
import hi from "../locales/hi";

const DICTIONARIES = { en, hi };
const STORAGE_KEY = "bi-language";
const DEFAULT_LANGUAGE = "en";

export const LANGUAGES = [
  { code: "en", label: "English", short: "Eng" },
  { code: "hi", label: "हिंदी", short: "हिंदी" },
];

const resolveKey = (dict, key) =>
  key.split(".").reduce((node, part) => (node == null ? undefined : node[part]), dict);

const readStoredLanguage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return DICTIONARIES[stored] ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* storage unavailable (private mode) — language still works for this visit */
    }
  }, [language]);

  const setLanguage = useCallback((code) => {
    if (DICTIONARIES[code]) setLanguageState(code);
  }, []);

  const t = useCallback(
    (key, vars) => {
      let value = resolveKey(DICTIONARIES[language], key);
      if (value === undefined) {
        value = resolveKey(DICTIONARIES[DEFAULT_LANGUAGE], key);
        if (import.meta.env.DEV) console.warn(`[i18n] Missing "${language}" translation: ${key}`);
      }
      if (value === undefined) return key;
      if (typeof value === "string" && vars) {
        return value.replace(/\{(\w+)\}/g, (match, name) => (vars[name] ?? match));
      }
      return value;
    },
    [language]
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
