const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'index.tsx'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve('dist')
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] }
    ]
  },
};
