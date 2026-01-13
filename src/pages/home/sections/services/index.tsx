import { SectionWidget } from "@widgets";

import { SECTIONS } from "../constants";

const ServicesSection = () => {
  return (
    <SectionWidget id={SECTIONS.SERVICES} sx={{ height: "100vh" }}>
      {SECTIONS.SERVICES}
    </SectionWidget>
  );
};

export default ServicesSection;
