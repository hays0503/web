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
    rules: {
      // Ограничение глубины JSX
      "react/jsx-max-depth": ["warn", { max: 3 }],
      // Ограничение длины функции
      "max-lines-per-function": ["warn", { max: 50, skipComments: true }],
      // Ограничение цикломатической сложности
      "complexity": ["warn", { max: 7 }],
    },
  },
];

export default eslintConfig;
