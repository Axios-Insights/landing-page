import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enLocale from "./en_locale.json";
import esLocale from "./es_locale.json";
import ptLocale from "./pt_locale.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enLocale },
      es: { translation: esLocale },
      pt: { translation: ptLocale },
    },
    supportedLngs: ["en", "es", "pt"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
