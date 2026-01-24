import { Box } from "@mui/material";

import type { SectionWidgetPropsType } from "./types";

export const SectionWidget = ({
  children,
  sx,
  applyHeaderOffset = true,
  ...props
}: SectionWidgetPropsType) => {
  return (
    <Box
      component="section"
      padding={8}
      paddingTop={applyHeaderOffset ? "var(--header-height)" : undefined}
      transition="padding-top 0.1s ease"
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
};
