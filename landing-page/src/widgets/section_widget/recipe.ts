import { defineSlotRecipe } from "@pandacss/dev";

export const sectionWidgetRecipe = defineSlotRecipe({
  className: "section-widget",
  slots: ["root"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",

      padding: 4,

      backgroundColor: "background.light",

      transition: "padding-top 0.1s ease",

      md: {
        padding: 8,
      },
    },
  },
});
