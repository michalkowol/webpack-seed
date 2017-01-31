const path = require('path');
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

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
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?sourceMap', 'resolve-url-loader'],
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?sourceMap', 'resolve-url-loader', 'sass-loader?sourceMap'],
        exclude: /node_modules/
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/i,
        use: ['file-loader?name=[path][name].[ext]']
      }
    ]
  },
  plugins: prod ? [
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: port,
    hot: !prod,
    contentBase: './src',
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
};