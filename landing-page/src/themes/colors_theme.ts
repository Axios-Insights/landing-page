import { defineTokens, defineSemanticTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
  dark: { value: "#151515" },
  primary: { value: "#FF6E00" },
  light: { value: "#FAFAFA" },
});

export const semanticColors = defineSemanticTokens.colors({
  primary: {
    DEFAULT: { value: "{colors.primary}" },
    contrast: { value: "{colors.light}" },
  },
  background: {
    dark: { value: "{colors.dark}" },
    light: { value: "{colors.light}" },
  },
  text: {
    dark: { value: "{colors.dark}" },
    light: { value: "{colors.light}" },
  },
});
