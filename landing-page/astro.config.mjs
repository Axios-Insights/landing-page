// @ts-check
import { fileURLToPath } from "node:url";

import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  integrations: [react(), icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "pt", "es"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        "@themes": `${srcDir}/themes`,
        "@widgets": `${srcDir}/widgets`,
        "@i18n": `${srcDir}/i18n`,
        "@utils": `${srcDir}/utils`,
        "@pages": `${srcDir}/pages`,
        "@base": `${srcDir}/base`,
        "@views": `${srcDir}/views`,
        "@recipes": `${srcDir}/recipes`,
        "@styled-system": fileURLToPath(
          new URL("./styled-system", import.meta.url),
        ),
      },
    },
  },
});
