const { join } = require('path');
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: join(__dirname, 'dev'),
    },
    devServer: {
        contentBase: join(__dirname, 'dev'),
        hot: true,
        host: '0.0.0.0',
        port: 3000,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            generateStatsFile: false
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: join(__dirname, 'src', 'resource', 'html', 'index.html'),
                    to: join(__dirname, 'dev'),
                    flatten: true
                },
                {
                    from: join(__dirname, 'src', 'resource', 'html', 'index.css'),
                    to: join(__dirname, 'dev'),
                    flatten: true
                }
            ]
        })
    ]
}