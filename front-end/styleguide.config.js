const propsParser = require('react-docgen-typescript').parse;
const webpackConfig = require('react-scripts-ts/config/webpack.config.dev.js');
const path = require('path');

const styleguideComponents = {
  Wrapper: path.join(__dirname, '/src/utils/themeProvider.tsx'),
};
const components = 'src/components/core/**/**.tsx';
const template = {
  head: {
    links: [
      {
        href: 'https://fonts.googleapis.com/css?family=Material+Icons',
        rel: 'stylesheet'
      }
    ]
  }
};

module.exports = {
  components,
  propsParser,
  styleguideComponents,
  template,
  webpackConfig,
};
