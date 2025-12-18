import type { Palette, TypographyVariantsOptions } from "@mui/material";

const typographyTheme: (palette: Palette) => TypographyVariantsOptions = (
  palette
) => ({
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
  allVariants: {
    color: palette.text.primary,
    letterSpacing: "-0.05em",
  },
});

export default typographyTheme;
