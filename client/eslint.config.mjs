import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Extend Next.js presets
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rules with plugins
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      import: require("eslint-plugin-import"),
      "simple-import-sort": require("eslint-plugin-simple-import-sort"),
    },
    rules: {
      // Enforce using aliases instead of relative paths
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../*", "./*"],
        },
      ],

      // Enforce import order with grouping
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Help ESLint resolve aliases
      "import/no-unresolved": "error",
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@components", "./src/components"],
            ["@utils", "./src/utils"],
            ["@hooks", "./src/hooks"],
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];
