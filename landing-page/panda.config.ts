import { defineConfig } from "@pandacss/dev";

import { colors, semanticColors } from "./src/themes/colors_theme";
import { fonts, typographyCss } from "./src/themes/typography_theme";
import { spacing } from "./src/themes/spacing_theme";
import { sizes } from "./src/themes/sizes_theme";
import { radii } from "./src/themes/radii_theme";

import { dropdownWidgetRecipe } from "./src/widgets/dropdown_widget/recipe";
import { footerWidgetRecipe } from "./src/widgets/footer_widget/recipe";
import { headerWidgetRecipe } from "./src/widgets/header_widget/recipe";
import { layoutWidgetRecipe } from "./src/widgets/layout_widget/recipe";

export default defineConfig({
  preflight: true,

  jsxFramework: "react",

  include: ["./src/**/*.{ts,tsx,astro}"],

  exclude: [],

  globalCss: {
    ...typographyCss,
  },

  theme: {
    extend: {
      tokens: {
        colors,
        fonts,
        spacing,
        sizes,
        radii,
      },
      semanticTokens: {
        colors: semanticColors,
      },
      slotRecipes: {
        dropdowWidget: dropdownWidgetRecipe,
        footerWidget: footerWidgetRecipe,
        headerWidget: headerWidgetRecipe,
        layoutWidget: layoutWidgetRecipe,
      },
    },
  },

  outdir: "styled-system",
});
