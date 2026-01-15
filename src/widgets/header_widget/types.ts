import type { ReactNode } from "react";

import type { AppBarProps } from "@mui/material";

export interface HeaderWidgetPropsType extends AppBarProps {
  brand?: ReactNode;
  navigation?: ReactNode;
  actions?: ReactNode;
}
