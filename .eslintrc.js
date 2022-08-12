module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error','unix'],
    'quotes': ['error','single'],
    'semi': ['error','always'],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 0,
    'react/static-property-placement': 0,
    'import/prefer-default-export': 0,
    'complexity': ['error', { 'max': 5 }],
    'no-unexpected-multiline': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'eol-last': ['error', 'always'],
  },
  'ignorePatterns': ['config/*.js'],
};
