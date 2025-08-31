type TranslationValue = string | number | boolean | TranslationObject;

interface TranslationObject {
  [key: string]: TranslationValue;
}

export type { TranslationValue, TranslationObject };
