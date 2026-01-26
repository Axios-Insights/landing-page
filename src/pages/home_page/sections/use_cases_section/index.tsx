import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

export const UseCasesSection = () => {
  return (
    <SectionWidget id={SECTIONS.USE_CASES} height="100dvh">
      {SECTIONS.USE_CASES}
    </SectionWidget>
  );
};
