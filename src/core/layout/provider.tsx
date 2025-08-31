import { useMemo, useState, type ReactNode } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "@themes";

import WebContext from "./context";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme,
    }),
    [isDark]
  );

  return (
    <WebContext.Provider value={value}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </WebContext.Provider>
  );
};

export default LayoutProvider;
