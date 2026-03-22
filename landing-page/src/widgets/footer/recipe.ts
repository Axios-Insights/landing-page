import { defineSlotRecipe } from "@pandacss/dev";

export const footerWidgetRecipe = defineSlotRecipe({
  className: "footer-widget",
  slots: ["root", "divider", "linkIcon", "copyrightNotice"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",

      width: "100%",
      height: "auto",

      padding: 4,
      gap: 4,

      color: "text.dark",
      backgroundColor: "background.light",
    },
    divider: {
      width: "100%",

      alignSelf: "center",

      color: "inherit",
      opacity: 0.25,
    },
    linkIcon: {
      width: 4,
      aspectRatio: 1 / 1,

      color: "inherit",
    },
    copyrightNotice: {
      alignSelf: "center",

      color: "inherit",
    },
  },
});
