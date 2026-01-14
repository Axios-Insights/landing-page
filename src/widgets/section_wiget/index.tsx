import { Box } from "@mui/material";

import type { SectionWidgetPropsType } from "./types";

const SectionWidget = ({
  children,
  sx,
  applyHeaderOffset = false,
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

export default SectionWidget;
