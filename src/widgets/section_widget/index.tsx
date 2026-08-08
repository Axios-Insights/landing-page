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
      paddingX={{
        xs: 2,
        sm: 3,
        md: 4,
        lg: 6,
      }}
      paddingY={{
        xs: 4,
        md: 8,
      }}
      paddingTop={applyHeaderOffset ? "var(--header-height)" : undefined}
      scrollMarginTop="calc(var(--header-height, 72px) + 24px)"
      transition="padding 0.2s ease"
      sx={sx}
      {...props}
    >
      {children}
    </Stack>
  );
};
