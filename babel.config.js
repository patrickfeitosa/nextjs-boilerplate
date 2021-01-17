/**
 * Babel configuration
 * https://babeljs.io/docs/usage/api/
 */
module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@Components': './src/components',
        '@Containers': './src/containers',
        '@Constants': './src/constants',
        '@Contexts': './src/contexts',
        '@Core': './src/core',
        '@HOC': './src/hoc',
        '@Hooks': './src/hooks',
        '@Icons': './src/icons',
        '@Layouts': './src/layouts',
        '@Pages': './src/pages',
        '@Resources': './src/resources',
        '@Services': './src/services',
        '@Store': './src/store',
        '@Styles': './src/styles',
        '@Types': './src/types',
        '@Utils': './src/utils',
      },
    }],
    ['inline-react-svg', {
      svgo: {
        plugins: [
          {
            removeAttrs: {
              attrs: '(data-name)',
            },
          },
          {
            cleanupIDs: true,
          },
        ],
      },
    }],
    ['styled-components', {
      ssr: true,
    }],
  ],
  env: {
    development: {
      plugins: [
        ['styled-components', {
          displayName: true, // Debug styled only on dev mode
        }],
      ],
    },
    production: {
      plugins: [
        // https://github.com/jamiebuilds/babel-react-optimize
        // https://medium.com/doctolib/improve-react-performance-with-babel-16f1becfaa25
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        'transform-react-remove-prop-types',
        ['styled-components', {
          displayName: false,
        }],
      ],
    },
  },
};
