export const supportedLangs = ["en", "es", "pt"] as const;

export type Lang = (typeof supportedLangs)[number];

export const defaultLang: Lang = "en";

const translations = {
  en: () => import("./en.json"),
  es: () => import("./es.json"),
  pt: () => import("./pt.json"),
};

export async function getTranslations(lang: Lang) {
  const loadDict = translations[lang] ?? translations[defaultLang];

  try {
    const dict = await loadDict();

    return dict.default;
  } catch (error) {
    console.error(`Error loading translation: ${lang}`, error);

    const fallback = await translations[defaultLang]();

    return fallback.default;
  }
}

export function fallbackDefaultLang(lang?: string | null): Lang {
  const isSupported = (supportedLangs as readonly string[]).includes(
    lang ?? "",
  );

  return isSupported ? (lang as Lang) : defaultLang;
}
