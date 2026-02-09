export const SECTIONS = {
  HERO: "hero",
  ABOUT_US: "about-us",
  RESULTS: "results",
  GET_IN_TOUCH: "get-in-touch",
} as const;

export type Sections = (typeof SECTIONS)[keyof typeof SECTIONS];
