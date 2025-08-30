import { createTheme } from "@mui/material";

import typographyTheme from "./typography_theme";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: typographyTheme,
});

export default lightTheme;
