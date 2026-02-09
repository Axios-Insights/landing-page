import { defineSlotRecipe } from "@pandacss/dev";

export const navWidgetRecipe = defineSlotRecipe({
  className: "nav-widget",
  slots: [
    "root",
    "content",
    "flatContent",
    "menuButton",
    "subcontent",
    "navigation",
    "actions",
  ],
  base: {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: "color 0.3s ease-in-out",

      color: "text.dark",
      backgroundColor: "transparent",

      _before: {
        content: '""',
        position: "absolute",
        inset: 0,
        zIndex: -1,
        backgroundColor: "transparent",
        backdropFilter: "blur(4px)",
        maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 50%, transparent 100%)",
        transition: "backdrop-filter 0.3s ease-in-out",
      },
    },
    content: {
      display: "flex",
      flexDirection: "row",

      width: "100%",
      minHeight: "auto",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBlock: 2,
      paddingInline: 4,
    },
    flatContent: {
      display: "none",
      md: {
        display: "block",
      },
    },
    menuButton: {
      display: "block",

      cursor: "pointer",

      md: {
        display: "none",
      },
    },
    subcontent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      gap: 4,

      md: {
        flexDirection: "row",

        gap: 8,
      },
    },
    navigation: {
      display: "flex",
      flexDirection: "column",

      gap: 1.5,

      md: {
        flexDirection: "row",

        gap: 3,
      },
    },
    actions: {
      display: "flex",
      flexDirection: "column",

      gap: 1.5,

      md: {
        flexDirection: "row",

        gap: 3,
      },
    },
  },
});
