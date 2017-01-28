const path = require('path');
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: prod ? '' : 'source-map',
  module: {
  },
  plugins: [
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    contentBase: './src'
  }
}