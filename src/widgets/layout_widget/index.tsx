import { Box } from "@mui/material";

import type { LayoutWidgetPropsType } from "./types";

const LayoutWidget = ({ children, sx, ...props }: LayoutWidgetPropsType) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default LayoutWidget;
