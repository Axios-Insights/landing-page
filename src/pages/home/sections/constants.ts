const SECTIONS = {
  HERO: "hero",
  SERVICES: "services",
  USE_CASES: "use-cases",
  ABOUT_US: "about-us",
} as const;

type Sections = (typeof SECTIONS)[keyof typeof SECTIONS];

export { SECTIONS, type Sections };
