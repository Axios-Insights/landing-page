import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", ".astro", ".output", "node_modules", "styled-system"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },

  {
    files: ["**/*.cjs"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },

  {
    files: ["**/*.{tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
);
