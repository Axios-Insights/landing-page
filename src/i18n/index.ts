import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { validateTranslations } from "@utils/i18n_validators_util";

import { landingRefreshLocales } from "./landing_refresh_locales";
import { enLocale, esLocale, frLocale, itLocale, ptLocale } from "./locales";

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
// Key order is the order shown in the language switcher.
export const locales: Record<string, TranslationObject> = {
  en: mergeTranslations(enLocale, landingRefreshLocales.en),
  es: mergeTranslations(esLocale, landingRefreshLocales.es),
  fr: mergeTranslations(frLocale, landingRefreshLocales.fr),
  it: mergeTranslations(itLocale, landingRefreshLocales.it),
  pt: mergeTranslations(ptLocale, landingRefreshLocales.pt),
};

const languageStorageKey = "axios-insights:language";
const languageDetector = new LanguageDetector();

// Keep <html lang> in sync so screen readers and browser translation
// features know which language the page is rendered in.
i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language;
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: Object.fromEntries(
      Object.entries(locales).map(([language, translation]) => [
        language,
        { translation },
      ]),
    ),
    supportedLngs: Object.keys(locales),
    fallbackLng: baseLocale,
    interpolation: {
      escapeValue: false,
    },
    // A language picked in the switcher wins; otherwise the first browser
    // language we support, in the visitor's order of preference.
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: languageStorageKey,
      // Drop region subtags ("pt-BR" → "pt") so a browser set to
      // "pt-BR, en" resolves to Portuguese instead of the exact match "en".
      convertDetectedLanguage: (language) =>
        language.split(/[-_]/)[0].toLowerCase(),
      // Only explicit choices are stored (see changeLanguage below); caching
      // the automatic guess would freeze it even if the browser changes.
      caches: [],
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

// Switches language and remembers it in this browser as the visitor's choice.
export const changeLanguage = (language: string) => {
  languageDetector.cacheUserLanguage(language, ["localStorage"]);

  return i18n.changeLanguage(language);
};

export { i18n };
