import { defineSlotRecipe } from "@pandacss/dev";

export const dropdownRecipe = defineSlotRecipe({
  className: "dropdown",
  slots: ["root", "trigger", "content"],
  base: {
    root: {
      display: "inline-block",
      position: "relative",
    },
    trigger: {
      display: "inline-flex",
      cursor: "pointer",
      _focus: { outline: "none" },
    },
    content: {
      zIndex: 999,
      minWidth: "max-content",
      whiteSpace: "nowrap",
      backgroundColor: "background.light",

      rounded: "md",

      padding: [2],

      willChange: "transform, opacity",

      "&[data-placement^=bottom]": {
        transformOrigin: "top center",
      },

      "&[data-placement^=top]": {
        transformOrigin: "bottom center",
      },

      "&[data-placement^=left]": {
        transformOrigin: "right center",
      },

      "&[data-placement^=right]": {
        transformOrigin: "left center",
      },
    },
  },
});
