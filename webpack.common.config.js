// A webpack plugin to remove/clean your build folder(s) before building
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//
const path = require('path');
const babelLoader = {// this rule handles TypeScript from src via ts-loader and then babel-loader
  test: /\.ts$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        configFile: path.resolve(__dirname, "babel.config.js"),
      }
    }
  ],
};
//
const styleLoader = { // this rule handles CSS prefixing and SCSS -> CSS compilation
  test: /\.(scss)$/,
  use: [
    'to-string-loader',
    {
      loader: 'css-loader',
      options: {
        modules: false,
        esModule: false
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'postcss-preset-env',
              {
                overrideBrowserslist: ['last 2 versions', 'ie 11']
              },
            ],
            [
              'cssnano',
              {
                zindex: false
              }
            ]
          ],
        }
      }
    },
    {
      loader: 'resolve-url-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ]
};
// FileLoader for Fonts, Images and Css
const fileLoader = {
  test: /\.(png|svg|webmanifest|woff|woff2|eot|ttf|css)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "files/[name].[ext]",
      }
    }
  ]
};

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    resolve: {
        symlinks: true,
        extensions: [
            '.js',
            '.ts',
            '.scss'
        ]
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name]-[fullhash].chunk.js',
    },
    module: {
        rules: [
            styleLoader,
            babelLoader,
            fileLoader
        ],
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}