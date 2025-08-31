import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import eslintPluginImport from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    plugins: {
      import: eslintPluginImport,
    },
    files: ["**/*.{js,ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@core/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@routes/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@themes/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@widgets/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@modules/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@i18n/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@utils/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
  },
]);
