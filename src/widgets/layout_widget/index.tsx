import { Stack } from "@mui/material";

import { FooterWidget } from "@widgets/footer_widget";

import type { LayoutWidgetPropsType } from "./types";

export const LayoutWidget = ({
  children,
  activeFooter = true,
  sx,
  ...props
}: LayoutWidgetPropsType) => {
  return (
    <Stack component="main" minHeight="100dvh" width="100%" sx={sx} {...props}>
      {children}

      {activeFooter && <FooterWidget />}
    </Stack>
  );
};
