import { Typography } from "@mui/material";

import type { LogoWidgetPropsType } from "./types";

export const LogoWidget = ({
  fontSize = 24,
  color = "inherit",
  sx,
  ...props
}: LogoWidgetPropsType) => {
  return (
    <Typography fontSize={fontSize} color={color} sx={sx} {...props}>
      <b>axios</b> insights
    </Typography>
  );
};
