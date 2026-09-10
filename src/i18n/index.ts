import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { validateTranslations } from "@utils/i18n_validators_util";

import { landingRefreshLocales } from "./landing_refresh_locales";
import { enLocale, esLocale, ptLocale } from "./locales";

import type { TranslationObject } from "./types";

const isTranslationObject = (value: unknown): value is TranslationObject =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const mergeTranslations = (
  base: TranslationObject,
  extension: TranslationObject,
): TranslationObject => {
  const merged: TranslationObject = { ...base };

  Object.entries(extension).forEach(([key, value]) => {
    const baseValue = merged[key];

    merged[key] =
      isTranslationObject(baseValue) && isTranslationObject(value)
        ? mergeTranslations(baseValue, value)
        : value;
  });

  return merged;
};

export const baseLocale = "en";
export const locales: Record<string, TranslationObject> = {
  en: mergeTranslations(enLocale, landingRefreshLocales.en),
  es: mergeTranslations(esLocale, landingRefreshLocales.es),
  pt: mergeTranslations(ptLocale, landingRefreshLocales.pt),
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: locales.en },
      es: { translation: locales.es },
      pt: { translation: locales.pt },
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
        `[i18n][${language}] Missing key "${key}" (fallback to key)`,
      );
    },
    returnNull: false,
    returnEmptyString: false,
  });

validateTranslations(baseLocale, locales);

export { i18n };
