const path = require('path');

/**
 * ESLint configuration
 * http://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: [path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'import',
    'promise',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    'import/extensions': [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'linebreak-style': 'off', // Avoid LF/CRLF on Win/Linux/Mac
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off', // For single Styled Component exports
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', 'jsx', '.ts', '.tsx'],
    }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      required: {
        some: ['nesting', 'id'],
      },
    }],
  }
};
