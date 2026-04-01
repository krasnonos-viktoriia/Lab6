const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    // Ігноруємо папки, які не треба перевіряти
    ignores: ["coverage/**", "node_modules/**"],
  },
  {
    // Застосовуємо правила до всіх .js файлів
    files: ["**/*.js"],
    rules: {
      // Тут можна додати ваші правила (якщо вони були в .eslintrc)
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