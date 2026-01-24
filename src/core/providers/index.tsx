import { type ReactNode } from "react";

import { ThemeSystemProvider } from "./theme_system_provider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeSystemProvider>{children}</ThemeSystemProvider>;
};
