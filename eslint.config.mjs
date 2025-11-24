import eslint from '@eslint/js'

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    ignores: ['node_modules/**', 'dist/**'],
  },
  eslint.configs.recommended,
]
