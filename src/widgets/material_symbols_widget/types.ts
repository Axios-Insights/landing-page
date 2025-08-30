import type { IconProps } from "@mui/material";

export interface MaterialSymbolsPropsType extends IconProps {
  name: string;
  variant?: "outlined" | "rounded" | "sharp";
  filled?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  opticalSize?: 20 | 24 | 40 | 48;
}
