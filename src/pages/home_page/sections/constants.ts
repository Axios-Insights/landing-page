export const SECTIONS = {
  HERO: "hero",
  REAL_PROBLEMS: "real-problems",
  ABOUT_US: "about-us",
  PRODUCT_TODAY: "product-today",
  RESULTS: "results",
  TRUST_PILOT: "trust-pilot",
  GET_IN_TOUCH: "get-in-touch",
} as const;

export type Sections = (typeof SECTIONS)[keyof typeof SECTIONS];
