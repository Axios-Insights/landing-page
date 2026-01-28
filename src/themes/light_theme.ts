import { createTheme } from "@mui/material";

import { colorsTheme } from "./colors_theme";
import { componentsTheme } from "./components_theme";
import { typographyTheme } from "./typography_theme";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colorsTheme.primary,
      contrastText: colorsTheme.light,
    },
    background: {
      default: colorsTheme.light,
      paper: colorsTheme.light,
    },
    text: {
      primary: colorsTheme.dark,
      secondary: colorsTheme.light,
    },
    divider: colorsTheme.dark,
  },
  components: componentsTheme,
  typography: typographyTheme,
});
