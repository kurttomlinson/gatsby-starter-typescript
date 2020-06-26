module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "react-app",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/indent": ["off"],
    "@typescript-eslint/quotes": ["error", "double"],
    "arrow-body-style": ["off"],
    "comma-dangle": ["off"],
    "object-curly-newline": ["off"],
    "react/jsx-one-expression-per-line": ["off"],
  },
};
