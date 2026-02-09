import type { ReactNode } from "react";
import type { HTMLStyledProps } from "@styled-system/jsx";
import type { HeaderWidgetVariantProps } from "@styled-system/recipes";

export interface HeaderWidgetPropsType
  extends HeaderWidgetVariantProps,
    HTMLStyledProps<"header"> {
  brand?: ReactNode;

  navigation?: ReactNode;

  actions?: ReactNode;
}
