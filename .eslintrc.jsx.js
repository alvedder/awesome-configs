// TODO add jsx rules

module.exports = {
  ignorePatterns: ['node_modules', 'dist', 'build', '*.d.ts'],
  rules: {
    eqeqeq: ['warn', 'smart'],
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: [
          // list of tsconfig.json files
        ],
      },
      extends: ['plugin:@typescript-eslint/base'],
      rules: {
        'no-var': 'error',
        yoda: ['warn', 'never', { exceptRange: true }],
        'no-lonely-if': 'warn',
        'prefer-const': 'warn',
        '@typescript-eslint/no-useless-constructor': 'warn',
      },
    },
  ],
};
