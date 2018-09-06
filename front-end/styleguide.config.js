const propsParser = require('react-docgen-typescript').parse;
const webpackConfig = require('react-scripts-ts/config/webpack.config.dev.js');
const path = require('path');

const styleguideComponents = {
  Wrapper: path.join(__dirname, '/src/components/ThemeWrapper.tsx'),
};
const components = 'src/components/**/[a-i]**.tsx';

module.exports = {
  components,
  propsParser,
  styleguideComponents,
  webpackConfig,
};
