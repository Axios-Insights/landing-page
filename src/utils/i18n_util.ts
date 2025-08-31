import type { TranslationObject } from "src/i18n";

const deepKeys = (obj: TranslationObject, prefix = ""): string[] => {
  return Object.keys(obj).flatMap((key) => {
    const value = obj[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;
    return typeof value === "object" ? deepKeys(value, fullKey) : fullKey;
  });
};

const validateTranslations = (
  baseLocale: string,
  locales: Record<string, TranslationObject>
) => {
  const baseKeys = deepKeys(locales[baseLocale]);

  Object.entries(locales).forEach(([locale, dict]) => {
    if (locale === baseLocale) return;

    const langKeys = deepKeys(dict);

    const missing = baseKeys.filter((k) => !langKeys.includes(k));
    if (missing.length > 0) {
      console.warn(
        `[i18n][${locale}] Missing translations compared to '${baseLocale}':`,
        missing
      );
    }

    const extras = langKeys.filter((k) => !baseKeys.includes(k));
    if (extras.length > 0) {
      console.warn(
        `[i18n][${locale}] Extra translations not in '${baseLocale}':`,
        extras
      );
    }
  });
};

export default validateTranslations;
