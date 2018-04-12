const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  target: 'web',
  mode: "development",
  entry: [
    './src/drawtest.js',
    './src/sass/drawtest.scss'
  ],
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
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    })
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