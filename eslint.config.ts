import js from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  {
    ignores: ['node_modules', 'dist'], // <--- thay thế .eslintignore
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Warn on unused variables
      'no-unused-vars': 'warn',

      // Warn on console statements
      'no-console': 'off',

      // Warn on any use of the `any` type
      '@typescript-eslint/no-explicit-any': 'warn',

      // Warn on non-null assertions
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Turn off 'React' must be in scope when using JSX
      'react/react-in-jsx-scope': 'off',
    },
  },
])
