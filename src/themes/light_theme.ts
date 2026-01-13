import { createTheme } from "@mui/material";

import colorsTheme from "./colors_theme";
import componentsTheme from "./components_theme";
import typographyTheme from "./typography_theme";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colorsTheme.primary,
      contrastText: colorsTheme.light,
    },
    background: {
      default: colorsTheme.light,
      paper: "green",
    },
    text: {
      primary: colorsTheme.dark,
      secondary: colorsTheme.light,
    },
  },
  components: componentsTheme,
  typography: typographyTheme,
});

export default lightTheme;
