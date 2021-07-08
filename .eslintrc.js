module.exports = {
  parserOptions: { parser: '@typescript-eslint/parser', ecmaVersion: 2020, sourceType: 'module' },
  extends: [
    "react-app",
    "react-app/jest"
  ],
  env: { node: true, browser: true },
  rules: {
    "no-unused-vars": 2,
    "semi": 0,
  }
}
