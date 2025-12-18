import { createContext } from "react";

import type { ThemeSystemContextType } from "./types";

const ThemeSystemContext = createContext<ThemeSystemContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export default ThemeSystemContext;
