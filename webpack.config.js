const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRootPlugin = require('html-webpack-react-root-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'index.tsx', 'styles.scss'
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }),
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        })
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve('src')
      },
      {
        test: /\.woff$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]',
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        { path: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500', type: 'css' },
        { path: 'https://fonts.googleapis.com/icon?family=Material+Icons', type: 'css' },
      ],
      append: false,
      publicPath: ''
    }),
    new ReactRootPlugin(),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ]
};
