import { SectionWidget } from "@widgets";

import { SECTIONS } from "../constants";

const AboutUsSection = () => {
  return (
    <SectionWidget id={SECTIONS.ABOUT_US} sx={{ height: "100vh" }}>
      {SECTIONS.ABOUT_US}
    </SectionWidget>
  );
};

export default AboutUsSection;
