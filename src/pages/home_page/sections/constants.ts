export const SECTIONS = {
  HERO: "hero",
  RESULTS: "results",
  SERVICES: "services",
  ABOUT_US: "about-us",
} as const;

export type Sections = (typeof SECTIONS)[keyof typeof SECTIONS];
