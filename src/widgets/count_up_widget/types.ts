import type { TypographyProps } from "@mui/material";

export interface CountUpWidgetPropsType extends TypographyProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
  prefix?: string;
  suffix?: string;
}
