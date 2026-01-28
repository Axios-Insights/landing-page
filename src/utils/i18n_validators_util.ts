import type { TranslationObject } from "@i18n/types";

const isPlainObject = (value: unknown): value is TranslationObject =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const deepKeys = (obj: TranslationObject, prefix = ""): string[] => {
  return Object.keys(obj).flatMap((key) => {
    const value = obj[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (isPlainObject(value)) {
      return deepKeys(value, fullKey);
    }

    return fullKey;
  });
};

export const validateTranslations = (
  baseLocale: string,
  locales: Record<string, TranslationObject>,
) => {
  const baseKeys = deepKeys(locales[baseLocale]);

  Object.entries(locales).forEach(([locale, dict]) => {
    if (locale === baseLocale) return;

    const langKeys = deepKeys(dict);

    const missing = baseKeys.filter((k) => !langKeys.includes(k));
    if (missing.length > 0) {
      console.warn(
        `[i18n][${locale}] Missing translations compared to '${baseLocale}':`,
        missing,
      );
    }

    const extras = langKeys.filter((k) => !baseKeys.includes(k));
    if (extras.length > 0) {
      console.warn(
        `[i18n][${locale}] Extra translations not in '${baseLocale}':`,
        extras,
      );
    }
  });
};
