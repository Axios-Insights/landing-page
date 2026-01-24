import { createContext } from "react";

import type { ThemeSystemContextType } from "./types";

export const ThemeSystemContext = createContext<ThemeSystemContextType>({
  isDark: false,
  toggleTheme: () => {},
});
