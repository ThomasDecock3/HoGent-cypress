module.exports = {
  env: {
    browser: true,

    es2021: true,

    'cypress/globals': true,
  },

  extends: ['standard', 'plugin:cypress/recommended'],

  parserOptions: {
    ecmaVersion: 12,

    sourceType: 'module',
  },

  rules: {
    'cypress/no-assigning-return-values': 'error',

    'cypress/no-unnecessary-waiting': 'error',

    'cypress/assertion-before-screenshot': 'warn',

    'cypress/no-force': 'warn',

    'cypress/no-async-tests': 'error',

    'prettier/prettier': ['error', { "semi": false }],

  },

  plugins: ['cypress'],
};
