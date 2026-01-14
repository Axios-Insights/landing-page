import { SectionWidget } from "@widgets";

import { SECTIONS } from "../constants";

const UseCasesSection = () => {
  return (
    <SectionWidget id={SECTIONS.USE_CASES} height="100vh">
      {SECTIONS.USE_CASES}
    </SectionWidget>
  );
};

export default UseCasesSection;
