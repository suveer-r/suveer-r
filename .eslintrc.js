module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  // required to lint *.vue files
  plugins: ["vue", "@typescript-eslint"],

  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
  },
}
