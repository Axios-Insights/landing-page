import type { BoxProps, StackProps } from "@mui/material";

export interface CardSwapWidgetPropsType extends StackProps {
  cardDistance?: number;
  verticalDistance?: number;
  rotateY?: number | string;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  clickToSwap?: boolean;
}

export interface CardSwapItemWidgetPropsType extends BoxProps {
  visualIndex: number;
  total: number;
  cardDistance: number;
  verticalDistance: number;
  rotateY?: number | string;
  onClick: () => void;
}
