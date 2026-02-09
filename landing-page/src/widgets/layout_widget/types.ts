import type { HTMLStyledProps } from "@styled-system/jsx";
import type { LayoutWidgetVariantProps } from "@styled-system/recipes";

export interface LayoutWidgetPropsType
  extends LayoutWidgetVariantProps,
    HTMLStyledProps<"div"> {
  activeFooter?: boolean;
}
