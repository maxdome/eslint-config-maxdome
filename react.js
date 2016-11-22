module.exports = {
  extends: ['airbnb', 'maxdome'],
  plugins: [
    'react'
  ],
  rules: {
    'arrow-body-style': [1, 'as-needed'],
    'comma-dangle': [2, 'only-multiline'],
    'guard-for-in': 1,
    indent: [2, 4],
    'max-len': [0, 120, 4],
    'no-console': 1,
    'no-unreachable': 1,
    'no-warning-comments': [1],
    'prefer-template': 0,
    'quote-props': [1, 'consistent-as-needed'],

    'react/jsx-indent-props': [1, 4],
    'react/jsx-curly-spacing': [1, 'always'],
    'react/jsx-indent': [2, 4],
    'react/jsx-first-prop-new-line': 0
  },
  parser: 'babel-eslint',
  globals: {
    Maxdome: true
  }
};
