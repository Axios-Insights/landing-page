import type { ReactNode } from "react";

import type { DropdowWidgetVariantProps } from "@styled-system/recipes";
import type { UseFloatingOptions } from "@floating-ui/react";
import type { HTMLStyledProps } from "@styled-system/types";

export interface DropdownWidgetPropsType
  extends DropdowWidgetVariantProps,
    HTMLStyledProps<"div"> {
  trigger?: ReactNode;
  triggerStyled?: Omit<HTMLStyledProps<"button">, "ref" | "onClick" | "type">;

  children?: ReactNode;
  childrenStyled?: HTMLStyledProps<"div">;

  floatingOptions?: Partial<UseFloatingOptions>;
}
