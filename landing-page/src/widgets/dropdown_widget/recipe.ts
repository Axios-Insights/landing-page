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
      zIndex: 100,
      minWidth: "max-content",
      whiteSpace: "nowrap",
      padding: 1,

      borderRadius: 0.5,
      backgroundColor: "background.light",

      willChange: "transform, opacity",
    },
  },
});
