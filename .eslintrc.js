module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true,
    mocha: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
  },
};
