module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier',
    'plugin:tailwindcss/recommended'
  ],

  overrides: [],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: ['react', 'tailwindcss'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-contradicting-classname': 'error'
  },

  settings: {
    react: {
      version: 'detect'
    }
  }
}
