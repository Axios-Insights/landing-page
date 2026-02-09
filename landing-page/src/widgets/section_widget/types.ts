import type { SectionWidgetVariantProps } from "@styled-system/recipes";
import type { HTMLStyledProps } from "@styled-system/types";

export interface SectionWidgetPropsType
  extends SectionWidgetVariantProps,
    HTMLStyledProps<"section"> {
  applyHeaderOffset?: boolean;
}
