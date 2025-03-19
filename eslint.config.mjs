import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: ["node_modules"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "off",
      "no-unused-vars": "warn",
    },
  },
];
