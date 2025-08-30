import type { Palette, TypographyVariantsOptions } from "@mui/material";

const typographyTheme:
  | TypographyVariantsOptions
  | ((palette: Palette) => TypographyVariantsOptions) = {
  fontFamily: [
    "Source Sans Pro",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ].join(","),
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  button: {
    fontWeight: 400,
    textTransform: "none",
  },
};

export default typographyTheme;
