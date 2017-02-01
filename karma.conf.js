module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    // browsers: ['PhantomJS', 'Chrome', 'Firefox'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: ['tests.webpack.js'],
    preprocessors: {'tests.webpack.js': ['webpack', 'sourcemap']},
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
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
            use: ['style-loader', 'css-loader', 'resolve-url-loader'],
            exclude: /node_modules/
          }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
            exclude: /node_modules/
          }, {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/i,
            use: [{
              loader: 'file-loader', options: {name: '[path][name].[ext]'}
            }]
          }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};