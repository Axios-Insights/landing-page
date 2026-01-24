import { createTheme } from "@mui/material";

import { colorsTheme } from "./colors_theme";
import { componentsTheme } from "./components_theme";
import { typographyTheme } from "./typography_theme";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colorsTheme.primary,
      contrastText: colorsTheme.light,
    },
    background: {
      default: colorsTheme.dark,
      paper: colorsTheme.dark,
    },
    text: {
      primary: colorsTheme.light,
      secondary: colorsTheme.dark,
    },
  },
  components: componentsTheme,
  typography: typographyTheme,
});
