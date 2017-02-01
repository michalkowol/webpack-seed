const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

const extractStyle = new ExtractTextPlugin({
    filename: 'main.css',
    disable: !prod
});

module.exports = {
  devtool: prod ? '' : 'source-map',
  entry: prod ? [
    './src/js/index'
  ] : [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules', 'src', 'static'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }, {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: extractStyle.extract({
          loader: [{
              loader: 'css-loader', options: {sourceMap: !prod}
          }, {
              loader: 'resolve-url-loader'
          }],
          fallbackLoader: 'style-loader'
        }),
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: extractStyle.extract({
          loader: [{
              loader: 'css-loader', options: {sourceMap: !prod}
          }, {
              loader: 'resolve-url-loader'
          }, {
              loader: 'sass-loader', options: {sourceMap: true}
          }],
          fallbackLoader: 'style-loader'
        }),
        exclude: /node_modules/
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/i,
        use: [{
          loader: 'file-loader', options: {name: '[path][name].[ext]'}
        }]
      }
    ]
  },
  plugins: prod ? [
    extractStyle,
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCssAssetsPlugin()
  ] : [
    extractStyle,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: port,
    hot: true,
    open: true,
    contentBase: './src',
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
};