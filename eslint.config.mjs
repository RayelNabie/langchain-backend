// eslint.config.ts
import parserTs from '@typescript-eslint/parser';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      'src/types/**',
    ],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/semi': ['error', 'always'],
    },
  },
];
