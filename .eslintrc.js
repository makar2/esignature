module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // v.1.0 (2020-12-14)
    'arrow-parens': [2, 'as-needed'],
    'brace-style': [2, 'stroustrup'],
    'class-methods-use-this': 0,
    'func-names': [2, 'always', { generators: 'never' }],
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    'linebreak-style': [2, 'unix'],
    'object-curly-newline': [
      0,
      {
        ObjectExpression: 'always',
        ObjectPattern: { minProperties: 2 },
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
  },
};
