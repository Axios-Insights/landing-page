type TranslationValue =
  | string
  | number
  | boolean
  | TranslationObject
  | TranslationValue[];

export interface TranslationObject {
  [key: string]: TranslationValue;
}
