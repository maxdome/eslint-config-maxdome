module.exports = {
  extends: ['mxd/node', 'mxd/test'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
