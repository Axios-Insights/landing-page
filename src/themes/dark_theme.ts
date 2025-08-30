import { createTheme } from "@mui/material";

import typographyTheme from "./typography_theme";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: typographyTheme,
});

export default darkTheme;
