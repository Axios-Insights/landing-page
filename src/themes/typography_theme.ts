import type { Palette, TypographyVariantsOptions } from "@mui/material";

export const typographyTheme: (
  palette: Palette,
) => TypographyVariantsOptions = (palette) => ({
  fontFamily: [
    '"Source Sans 3"',
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    "Arial",
    "sans-serif",
  ].join(","),
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  button: {
    fontWeight: 400,
    textTransform: "none",
  },

  allVariants: {
    color: palette.text.primary,
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
});
