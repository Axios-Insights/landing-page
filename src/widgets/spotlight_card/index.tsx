import { useRef } from "react";

import { Card, useTheme } from "@mui/material";

import type { SpotlightCardWidgetPropsType } from "./types";

export const SpotlightCardWidget = ({
  children,
  spotlightColor,
  sx,
  ...props
}: SpotlightCardWidgetPropsType) => {
  const theme = useTheme();

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--card-mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--card-mouse-y", `${y}px`);
    cardRef.current.style.setProperty(
      "--card-spotlight-color",
      spotlightColor ?? theme.palette.primary.main,
    );
  };

  return (
    <Card
      ref={cardRef}
      variant="outlined"
      onMouseMove={handleMouseMove}
      sx={{
        position: "relative",
        display: "flex",

        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,

          opacity: 0,
          background:
            "radial-gradient(circle at var(--card-mouse-x) var(--card-mouse-y), var(--card-spotlight-color), transparent 75%)",

          transition: theme.transitions.create(["background", "opacity"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
        },

        "&:hover::before": {
          opacity: 0.25,
        },

        "&:focus-within::before": {
          opacity: 0.25,
        },

        "& > *": {
          position: "relative",
          zIndex: 1,
        },

        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
};
