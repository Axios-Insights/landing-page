import { Stack } from "@mui/material";

import type { LayoutWidgetPropsType } from "./types";

export const LayoutWidget = ({
  children,
  sx,
  ...props
}: LayoutWidgetPropsType) => {
  return (
    <Stack component="main" minHeight="100dvh" width="100%" sx={sx} {...props}>
      {children}
    </Stack>
  );
};
