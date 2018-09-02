module.exports = {
  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  serve: {
    devMiddleware: {
      publicPath: '/dist/'
    }
  },
  mode: 'development',
};