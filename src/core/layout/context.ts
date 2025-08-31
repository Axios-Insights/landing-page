import { createContext } from "react";

import type { LayoutContextType } from "./types";

const LayoutContext = createContext<LayoutContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export default LayoutContext;
