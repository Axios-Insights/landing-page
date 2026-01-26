import { Box } from "@mui/material";

import type { LayoutWidgetPropsType } from "./types";

export const LayoutWidget = ({
  children,
  sx,
  ...props
}: LayoutWidgetPropsType) => {
  return (
    <Box
      component="main"
      display="flex"
      flexDirection="column"
      minHeight="100dvh"
      width="100%"
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
};
