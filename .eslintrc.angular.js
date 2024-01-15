module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist', 'e2e', '*.d.ts', 'gulpfile.js'],
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
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
      extends: ['plugin:@typescript-eslint/base', 'plugin:@angular-eslint/base'],
      rules: {
        'no-var': 'error',
        yoda: ['warn', 'never', { exceptRange: true }],
        'no-lonely-if': 'warn',
        'prefer-const': 'warn',
        '@typescript-eslint/no-useless-constructor': 'warn',
      },
    },
    {
      files: ['*.html'],
      plugins: ['@html-eslint'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@angular-eslint/template/base'],
      rules: {
        '@html-eslint/no-obsolete-tags': 'warn',
        '@html-eslint/quotes': ['warn', 'double'],
        '@html-eslint/no-multiple-empty-lines': 'warn',
      },
    },
  ],
};
