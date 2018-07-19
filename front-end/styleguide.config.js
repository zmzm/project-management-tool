const propsParser = require('react-docgen-typescript').parse;
const webpackConfig = require('react-scripts-ts/config/webpack.config.dev.js');

const components = 'src/components/**/*.{ts,tsx}';


module.exports = {
  components,
  propsParser,
  webpackConfig,
};
