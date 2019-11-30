module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
    'interface-name': 'off',
    'ordered-imports': 'off',
    'object-literal-sort-keys': 'off',
    'no-consecutive-blank-lines': 'off',
    'trailing-comma': 'off',
    'member-ordering': 'off',
    'no-string-literal': 'off',
    'comment-format': 'off',
    'variable-name': 'off',
    'import-spacing': 'off',
    'prefer-for-of': 'off',
    'no-empty': 'off',
    'no-bitwise': 'off',
    semicolon: 'off',
    'adjacent-overload-signatures': 'off'
  },
  parserOptions: {
    // parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
