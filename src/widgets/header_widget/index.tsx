import { useEffect, useMemo, useState } from "react";

import { AppBar, Toolbar, useScrollTrigger, useTheme } from "@mui/material";

import type { HeaderWidgetPropsType } from "./types";

const HeaderWidget = ({ children, sx, ...props }: HeaderWidgetPropsType) => {
  const [headerNode, setHeaderNode] = useState<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    if (!headerNode) return;

    const updateHeight = () => {
      const height = headerNode.offsetHeight;

      setHeaderHeight(height);

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setViewportHeight(window.innerHeight);

      if (headerNode) setHeaderHeight(headerNode.offsetHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);

    handleResize();

    if (headerNode) resizeObserver.observe(headerNode);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      resizeObserver.disconnect();
    };
  }, [headerNode]);

  const threshold = useMemo(() => {
    return viewportHeight > 0 ? viewportHeight - headerHeight : 10;
  }, [viewportHeight, headerHeight]);

  const triggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
  });

  const theme = useTheme();

  return (
    <AppBar
      ref={setHeaderNode}
      position="fixed"
      sx={{
        backgroundColor: triggered ? "rgba(250, 250, 250, .1)" : "transparent",
        backdropFilter: "blur(4px)",
        boxShadow: "none",

        transition: theme.transitions.create(["all"], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.standard,
        }),
        ...sx,
      }}
      {...props}
    >
      <Toolbar
        disableGutters
        sx={{
          padding: "16px 32px",
          minHeight: "auto",
          display: "flex",
          justifyContent: "space-between",
          color: triggered ? "text.primary" : "text.secondary",

          transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderWidget;
