module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "airbnb-typescript"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/jsx-one-expression-per-line": ["off"],
    "@typescript-eslint/indent": ["off"],
    "@typescript-eslint/quotes": ["error", "double"],
    "comma-dangle": ["off"],
    "object-curly-newline": ["off"],
  },
};
