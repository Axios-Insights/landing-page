import type { LayoutWidgetVariantProps } from "@styled-system/recipes";
import type { HTMLStyledProps } from "@styled-system/types";

export interface LayoutWidgetPropsType
  extends LayoutWidgetVariantProps,
    HTMLStyledProps<"div"> {
  activeFooter?: boolean;
}
