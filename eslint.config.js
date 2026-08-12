import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  { ignores: ['dist', 'assets', 'node_modules', '.vite', 'src/fonts.css'] },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Catches the exact class of bug that shipped here before: a target="_blank"
      // link without rel="noopener", which hands the opened tab a window.opener handle.
      'react/jsx-no-target-blank': ['error', { allowReferrer: false }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  },

  // Build tooling runs in Node, not the browser.
  {
    files: ['scripts/**/*.mjs', 'vite.config.js', 'postcss.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'module'
    }
  }
]
