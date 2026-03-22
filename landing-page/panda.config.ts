import { defineConfig } from "@pandacss/dev";

import { colors, semanticColors } from "./src/themes/colors";
import { radii } from "./src/themes/radii";
import { sizes } from "./src/themes/sizes";
import { spacing } from "./src/themes/spacing";
import { fonts, typographyCss } from "./src/themes/typography";
import { cardWidgetRecipe } from "./src/widgets/card/recipe";
import { dropdownWidgetRecipe } from "./src/widgets/dropdown/recipe";
import { footerWidgetRecipe } from "./src/widgets/footer/recipe";
import { layoutWidgetRecipe } from "./src/widgets/layout/recipe";
import { navWidgetRecipe } from "./src/widgets/nav/recipe";
import { sectionWidgetRecipe } from "./src/widgets/section/recipe";

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
        navWidget: navWidgetRecipe,
        layoutWidget: layoutWidgetRecipe,
        sectionWidget: sectionWidgetRecipe,
        cardWidget: cardWidgetRecipe,
      },
    },
  },

  outdir: "styled-system",
});
