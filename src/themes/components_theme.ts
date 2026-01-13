import type { Components, CssVarsTheme, Theme } from "@mui/material";

const componentsTheme: Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
> = {
  MuiButton: {
    variants: [
      {
        props: { variant: "clear" },
        style: {
          backgroundColor: "transparent",
          padding: 0,
          minWidth: 0,
          background: "none",
          border: "none",
          color: "inherit",
          boxShadow: "none",
          "&:hover": {
            background: "none",
            opacity: 0.75,
          },
          "&:active": {
            boxShadow: "none",
          },
        },
      },
    ],
  },
};

export default componentsTheme;
