import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Ігнорувати папки, які не треба перевіряти
    ignores: ["coverage/**", "node_modules/**"],
  },
  {
    // Застосувати правила до всіх .js файлів
    files: ["**/*.js"],
    rules: {
      // Тут можна додати ваші правила (якщо були в .eslintrc)
      // Наприклад:
      // "no-unused-vars": "warn",
      // "semi": ["error", "always"],
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
]);