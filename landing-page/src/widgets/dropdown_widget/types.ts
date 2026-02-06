import type { ReactNode } from "react";

import type { DropdownVariantProps } from "@styled-system/recipes";
import type { UseFloatingOptions } from "@floating-ui/react";
import type { HTMLStyledProps } from "@styled-system/types";

export interface DropdownWidgetPropsType
  extends DropdownVariantProps,
    HTMLStyledProps<"div"> {
  trigger?: ReactNode;
  triggerStyled?: Omit<HTMLStyledProps<"button">, "ref" | "onClick" | "type">;

  children?: ReactNode;
  childrenStyled?: HTMLStyledProps<"div">;

  floatingOptions?: Partial<UseFloatingOptions>;
}
