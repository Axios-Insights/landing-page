import { useMemo, useState, type ReactNode } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "@themes";

import ThemeSystemContext from "./context";

const ThemeSystemProvider = ({ children }: { children: ReactNode }) => {
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
    <ThemeSystemContext.Provider value={value}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeSystemContext.Provider>
  );
};

export default ThemeSystemProvider;
