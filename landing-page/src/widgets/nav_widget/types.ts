import type { NavWidgetVariantProps } from "@styled-system/recipes";
import type { HTMLStyledProps } from "@styled-system/types";
import type { ReactNode } from "react";

export interface HeaderWidgetPropsType
  extends NavWidgetVariantProps,
    HTMLStyledProps<"nav"> {
  brand?: ReactNode;

  navigation?: ReactNode;

  actions?: ReactNode;
}
