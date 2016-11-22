module.exports = {
  extends: ['maxdome'],
  env: {
    node: true,
    es6: true
  },
  ecmaFeatures: {
    generators: true
  },
  rules: {
    'consistent-return': 0,
    'max-len': [2, 500, 2, { ignoreUrls: true, ignoreComments: false }],
    'no-param-reassign': 0,
    'no-unused-vars': [2, { args: 'none' }]
  }
};
