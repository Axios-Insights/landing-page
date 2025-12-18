import { type ReactNode } from "react";

import ThemeSystemProvider from "./theme_system";

const CoreProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeSystemProvider>{children}</ThemeSystemProvider>;
};

export default CoreProviders;
