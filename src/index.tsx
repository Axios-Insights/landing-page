import "@i18n";

import "@fontsource/source-sans-3/200.css";
import "@fontsource/source-sans-3/300.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/500.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";
import "@fontsource/source-sans-3/800.css";
import "@fontsource/source-sans-3/900.css";

import "./styles.css";

import { StrictMode } from "react";

import { Core } from "@core";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Core />
  </StrictMode>,
);
