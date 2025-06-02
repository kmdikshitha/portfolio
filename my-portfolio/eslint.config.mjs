import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
   {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Customize or disable the rule
      "react/no-unescaped-entities": "off",
      // or
      // "react/no-unescaped-entities": ["warn", { forbid: [">", "}"] }],
    },
  }
];

export default eslintConfig;
