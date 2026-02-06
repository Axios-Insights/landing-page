import type { ReactNode } from "react";
import type { HstackProps } from "@styled-system/jsx";

export interface HeaderWidgetPropsType extends HstackProps {
  brand?: ReactNode;
  navigation?: ReactNode;
  actions?: ReactNode;
}
