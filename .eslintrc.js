module.exports = {
  parserOptions: { parser: '@typescript-eslint/parser', ecmaVersion: 2020, sourceType: 'module' },
  extends: [
    "react-app",
    "react-app/jest"
  ],
  env: { node: true, browser: true },
  rules: {
    "no-unused-vars": 1,
    "semi": 0,
    "indent": [1, 2],
    // 允许默认到处 {}
    "import/no-anonymous-default-export": 0,
  }
}
