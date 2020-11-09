// Copies individual files or entire directories to the build directory
const CopyPlugin = require('copy-webpack-plugin');
// Webpack plugin that runs typescript type checker on a separate process. (while transpileOnly: true this saves time!)
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// Minifier
const TerserPlugin = require('terser-webpack-plugin');
// 'join'    joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting path. 
//           path.join('/a', '/b') // Outputs '/a/b'
const { join } = require('path');
// Default config
module.exports = {
  mode: 'production',
  output: {
    path: join(__dirname, 'dist')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: join(__dirname, 'src', 'resource', 'html', 'index.html'),
          to: join(__dirname, 'dist'),
          flatten: true
        }
      ]
    })
  ]
};