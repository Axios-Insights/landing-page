import { useContext } from "react";

import ThemeSystemContext from "./context";

const useThemeSystemHook = () => useContext(ThemeSystemContext);

export default useThemeSystemHook;
