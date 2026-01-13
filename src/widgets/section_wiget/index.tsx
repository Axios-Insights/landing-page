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
      sx={{
        padding: "32px",
        paddingTop: applyHeaderOffset ? "var(--header-height)" : undefined,
        transition: "padding-top 0.1s ease",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default SectionWidget;
