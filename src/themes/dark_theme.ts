import { createTheme } from "@mui/material";

import colorsTheme from "./colors_theme";
import typographyTheme from "./typography_theme";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colorsTheme.primary,
      contrastText: colorsTheme.light,
    },
    background: {
      default: colorsTheme.dark,
      paper: "red",
    },
    text: {
      primary: colorsTheme.light,
      secondary: colorsTheme.dark,
    },
  },
  typography: typographyTheme,
});

export default darkTheme;
