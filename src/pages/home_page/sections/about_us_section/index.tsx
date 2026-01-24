import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

export const AboutUsSection = () => {
  return (
    <SectionWidget id={SECTIONS.ABOUT_US} height="100vh">
      {SECTIONS.ABOUT_US}
    </SectionWidget>
  );
};
