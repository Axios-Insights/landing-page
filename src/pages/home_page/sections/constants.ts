const SECTIONS = {
  HERO: "hero",
  RESULTS: "results",
  SERVICES: "services",
  ABOUT_US: "about-us",
} as const;

type Sections = (typeof SECTIONS)[keyof typeof SECTIONS];

export { SECTIONS, type Sections };
