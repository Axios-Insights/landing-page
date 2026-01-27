import type { CardProps } from "@mui/material";
import type { Property } from "csstype";

export interface SpotlightCardWidgetPropsType extends CardProps {
  spotlightColor?: Property.BackgroundColor;
}
