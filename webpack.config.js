// Common config
const commonConfig = require('./webpack.common.config');
// Config für Dev
const devConfig = require('./webpack.development.config');
//Config für Prod
const prodConfig = require('./webpack.production.config');
// zum mergen der Configs
const { merge } = require('webpack-merge');

module.exports = (env, argv) => {
  return argv.mode === 'development' ?
    merge(commonConfig, devConfig) :
    merge(commonConfig, prodConfig);
}