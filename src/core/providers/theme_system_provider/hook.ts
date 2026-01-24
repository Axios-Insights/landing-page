import { useContext } from "react";

import { ThemeSystemContext } from "./context";

export const useThemeSystemHook = () => useContext(ThemeSystemContext);
