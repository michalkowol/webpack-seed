const path = require('path');
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: prod ? '' : 'source-map',
  entry: prod ? [
    './src/js/index'
  ] : [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'static'],
    extensions: ['', '.js', '.jsx']
  },
  plugins: prod ? [
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel?cacheDirectory'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: ['style', 'css?sourceMap']
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      exclude: /node_modules/,
      loaders: ['file?name=[path][name].[ext]']
    }]
  }
};
