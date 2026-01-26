import { Box, useMediaQuery, useTheme } from "@mui/material";

import type { SectionWidgetPropsType } from "./types";

export const SectionWidget = ({
  children,
  sx,
  applyHeaderOffset = true,
  ...props
}: SectionWidgetPropsType) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      padding={isMobile ? 4 : 8}
      paddingTop={applyHeaderOffset ? "var(--header-height)" : undefined}
      transition="padding-top 0.1s ease"
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
};
