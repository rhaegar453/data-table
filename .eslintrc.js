module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['**/*.test.tsx'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [0],
    'import/no-unresolved': [0],
    'import/extensions': [0],
  },
};
