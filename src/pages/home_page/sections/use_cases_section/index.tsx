import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

export const UseCasesSection = () => {
  return (
    <SectionWidget id={SECTIONS.USE_CASES} height="100vh">
      {SECTIONS.USE_CASES}
    </SectionWidget>
  );
};
