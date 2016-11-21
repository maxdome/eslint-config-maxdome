module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'no-param-reassign': 0,
    'comma-dangle': [2, 'never'],
    'max-len': [2, 500, 2, { ignoreUrls: true, ignoreComments: false }],
    indent: [2, 2, { SwitchCase: 1, VariableDeclarator: 1 }],
    'consistent-return': 0,
    'no-unused-vars': [2, { args: 'none' }]
  }
};
