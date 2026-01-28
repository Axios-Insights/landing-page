export const SECTIONS = {
  HERO: "hero",
  ABOUT_US: "about-us",
  RESULTS: "results",
  SOLUTIONS: "solutions",
} as const;

export type Sections = (typeof SECTIONS)[keyof typeof SECTIONS];
