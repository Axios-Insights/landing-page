import { useEffect, useMemo, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
  Stack,
} from "@mui/material";

import type { HeaderWidgetPropsType } from "./types";

export const HeaderWidget = ({
  brand,
  navigation,
  actions,
  sx,
  ...props
}: HeaderWidgetPropsType) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [headerNode, setHeaderNode] = useState<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!headerNode || typeof window === "undefined") return;

    const measure = () => {
      const vHeight = window.innerHeight;
      const hHeight = headerNode.offsetHeight;

      setViewportHeight(vHeight);
      setHeaderHeight(hHeight);

      document.documentElement.style.setProperty(
        "--header-height",
        `${hHeight}px`,
      );
    };

    const resizeObserver = new ResizeObserver(measure);

    resizeObserver.observe(headerNode);

    window.addEventListener("resize", measure);

    measure();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [headerNode]);

  useEffect(() => {
    if (!isMobile && drawerOpen) setDrawerOpen(false);
  }, [isMobile, drawerOpen]);

  const threshold = useMemo(() => {
    return viewportHeight > 0 ? viewportHeight - headerHeight : 10;
  }, [viewportHeight, headerHeight]);

  const triggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
  });

  const content = useMemo(
    () => (
      <Stack direction={isMobile ? "column" : "row"} spacing={isMobile ? 4 : 8}>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 1.5 : 3}
        >
          {navigation}
        </Stack>

        {actions}
      </Stack>
    ),
    [actions, isMobile, navigation],
  );

  return (
    <>
      <AppBar
        ref={setHeaderNode}
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: triggered ? "text.primary" : "text.secondary",

          transition: theme.transitions.create(["color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,

            backgroundColor: "transparent",
            backdropFilter: "blur(4px)",

            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",

            transition: theme.transitions.create(["backdrop-filter"], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
          },

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
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {brand}

          {!isMobile && content}

          {isMobile && (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          backgroundColor: triggered
            ? "rgba(250, 250, 250, .1)"
            : "transparent",
          backdropFilter: "blur(4px)",
        }}
      >
        <Stack
          padding="16px 32px"
          spacing={4}
          onClick={() => setDrawerOpen(false)}
        >
          <IconButton color="inherit" onClick={() => setDrawerOpen(false)}>
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>

          {content}
        </Stack>
      </Drawer>
    </>
  );
};
