import { SectionWidget } from "@widgets/section_widget";

import { SECTIONS } from "../constants";

export const SolutionsSection = () => {
  return (
    <SectionWidget id={SECTIONS.SOLUTIONS} height="auto" minHeight="97.5dvh">
      {SECTIONS.SOLUTIONS}
    </SectionWidget>
  );
};
