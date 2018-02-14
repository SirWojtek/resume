const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRootPlugin = require('html-webpack-react-root-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'index.tsx'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve('src')
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new ReactRootPlugin()]
};
