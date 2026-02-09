import { defineSlotRecipe } from "@pandacss/dev";

export const layoutWidgetRecipe = defineSlotRecipe({
  className: "layout-widget",
  slots: ["root"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",

      width: "100%",
      minHeight: "100dvh",

      gap: 0,
    },
  },
});
