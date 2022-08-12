const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { default: merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.common');

/** @type {import('webpack'.Configuration)} */
const devConfig = {
  mode: 'development',
  optimization: {
    minimize: false,
  },
  devServer: {
    port: 3000,
    open: 'chrome',
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist')
    },
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.(css|scss|sass)$/,
      },
    ]
  }
};

module.exports = merge(common, devConfig);