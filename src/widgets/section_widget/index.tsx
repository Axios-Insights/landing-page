import { Stack } from "@mui/material";

import type { SectionWidgetPropsType } from "./types";

export const SectionWidget = ({
  children,
  sx,
  applyHeaderOffset = true,
  ...props
}: SectionWidgetPropsType) => {
  return (
    <Stack
      component="section"
      padding={{
        xs: 4,
        md: 8,
      }}
      paddingTop={applyHeaderOffset ? "var(--header-height)" : undefined}
      transition="padding-top 0.1s ease"
      sx={sx}
      {...props}
    >
      {children}
    </Stack>
  );
};
