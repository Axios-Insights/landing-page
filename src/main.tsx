import "@i18n";

import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/900.css";

import "./index.css";

import { StrictMode } from "react";

import { WEB } from "@core";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />

    <WEB />
  </StrictMode>
);
