import { useEffect, useState } from "react";

import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";

import type { HeaderWidgetPropsType } from "./types";

const HeaderWidget = ({
  children,
  sx,
  scrollThreshold = 10,
  ...props
}: HeaderWidgetPropsType) => {
  const [headerNode, setHeaderNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!headerNode) return;

    const updateHeight = () => {
      const height = headerNode.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    };

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(headerNode);

    updateHeight();

    return () => resizeObserver.disconnect();
  }, [headerNode]);

  const triggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: scrollThreshold,
  });

  return (
    <AppBar
      ref={setHeaderNode}
      elevation={triggered ? 4 : 0}
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        backdropFilter: triggered ? "blur(4px)" : "none",
        transition: "all 0.3s ease-in-out",
        boxShadow: "none",
        ...sx,
      }}
      {...props}
    >
      <Toolbar
        disableGutters
        sx={{
          padding: "32px 32px 0 32px",
          minHeight: "auto",
          display: "flex",
          justifyContent: "space-between",
          color: triggered ? "text.primary" : "text.secondary",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderWidget;
