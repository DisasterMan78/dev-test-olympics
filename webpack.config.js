const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      extractSass = new ExtractTextPlugin({
        filename: "[name].[contenthash].css",
        disable: process.env.NODE_ENV === "development"
      });

module.exports = {
  target: 'web',
  mode: "development",
  entry: './src/drawtest.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'drawtest.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      "require": "node_modules/require",
    }
  },
  watch: true
};