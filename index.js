module.exports = {
    extends: ['airbnb-base'],
    rules: {
        'no-param-reassign': 0,
        'comma-dangle': [2, 'only-multiline'],
        'max-len': [0, 120, 4],
        indent: [2, 4],
        indent: [2, 4, { SwitchCase: 1, VariableDeclarator: 1 }],
    }
};

