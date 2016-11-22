module.exports = {
  extends: ['maxdome/node', 'maxdome/test'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
