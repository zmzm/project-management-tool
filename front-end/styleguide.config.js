const propsParser = require('react-docgen-typescript').parse;
const webpackConfig = require('react-scripts-ts/config/webpack.config.dev.js');
const path = require('path');

const styleguideComponents = {
  Wrapper: path.join(__dirname, '/srs/styled-components/ThemeWrapper.tsx'),
};
const components = 'src/components/**/*.tsx';

module.exports = {
  components,
  propsParser,
  styleguideComponents,
  webpackConfig,
};
