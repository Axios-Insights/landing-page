import type { ReactNode } from "react";

import type { BoxProps } from "@mui/material";
import type { MotionValue } from "motion";

export interface ScrollStackWidgetPropsType extends BoxProps {
  speedFactor?: number;
}

export interface ScrollStackItemWidgetPropsType extends BoxProps {
  index: number;
  children: ReactNode;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}
