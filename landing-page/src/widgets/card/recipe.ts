import { defineSlotRecipe } from "@pandacss/dev";

export const cardWidgetRecipe = defineSlotRecipe({
  className: "spotlight-card-widget",
  slots: ["root"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",

      borderRadius: 0.5,
      overflow: "hidden",
      backgroundColor: "background.light",
    },
  },

  variants: {
    variant: {
      outline: {
        root: {
          borderWidth: 1,
          borderStyle: "solid",

          backgroundColor: "transparent",
          borderColor: "background.dark",
        },
      },
    },
  },
});
