export const SECTIONS = {
  HERO: "hero",
  RESULTS: "results",
  ABOUT_US: "about-us",
  SOLUTIONS: "solutions",
} as const;

export type Sections = (typeof SECTIONS)[keyof typeof SECTIONS];
