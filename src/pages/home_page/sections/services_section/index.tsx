import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

export const ServicesSection = () => {
  return (
    <SectionWidget id={SECTIONS.SERVICES} height="100dvh">
      {SECTIONS.SERVICES}
    </SectionWidget>
  );
};
