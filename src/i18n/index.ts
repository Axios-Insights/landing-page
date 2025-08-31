import { validateTranslations } from "@utils";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { enLocale, esLocale, ptLocale } from "./locales";

import type { TranslationValue, TranslationObject } from "./types";

const baseLocale = "en";
const locales: Record<string, TranslationObject> = {
  en: enLocale,
  es: esLocale,
  pt: ptLocale,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enLocale },
      es: { translation: esLocale },
      pt: { translation: ptLocale },
    },
    supportedLngs: Object.keys(locales),
    fallbackLng: baseLocale,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    saveMissing: true,
    missingKeyHandler: (language, _, key) => {
      console.warn(
        `[i18n][${language}] Missing key "${key}" (fallback to key)`
      );
    },
    returnNull: false,
    returnEmptyString: false,
  });

validateTranslations(baseLocale, locales);

export default i18n;
export type { TranslationValue, TranslationObject };
export { baseLocale, locales };
