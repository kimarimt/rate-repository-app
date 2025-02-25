import babelParser from '@babel/eslint-parser'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactNative from 'eslint-plugin-react-native'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...compat.extends('eslint:recommended', 'plugin:react/recommended'),
  { ignores: ['*.config.js', '.expo'] },
  {
    files: ["src/**/*.{js,jsx}", "App.js"],
    ignores: ['*.config.js', '.expo'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...reactNative.environments['react-native'].globals,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      } 
    },
    plugins: {
      react,
      'react-native': reactNative
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      eqeqeq: 'error',
      'no-unused-vars': 'warn',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-native/no-unused-styles': 'warn',
      'react-native/split-platform-components': 'warn',
      'react-native/no-raw-text': 'warn',
      'react-native/no-single-element-style-arrays': 'warn'
    }
  }
]