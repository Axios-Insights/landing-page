import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "src/core"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@i18n": path.resolve(__dirname, "src/i18n"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
