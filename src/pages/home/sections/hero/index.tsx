import { SectionWidget } from "@widgets";

import { SECTIONS } from "../constants";

const HeroSection = () => {
  return (
    <SectionWidget
      id={SECTIONS.HERO}
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
      applyHeaderOffset
    >
      {SECTIONS.HERO}
    </SectionWidget>
  );
};

export default HeroSection;
