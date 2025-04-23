// eslint.config.js
import parserTs from '@typescript-eslint/parser';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default [
  {
    languageOptions: {
      parser: parserTs,
    },
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/semi': ['error', 'always'],
    },
    }
];

