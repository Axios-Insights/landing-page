import { useContext } from "react";

import LayoutContext from "./context";

const useLayoutHook = () => useContext(LayoutContext);

export default useLayoutHook;
